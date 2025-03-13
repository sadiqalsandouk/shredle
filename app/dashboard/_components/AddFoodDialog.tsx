"use client"

import React, { useState, ChangeEvent, FormEvent } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle, Loader2 } from "lucide-react"
import { createClient } from "@/app/supabase/client"
import { toast } from "sonner"

interface FoodFormData {
  name: string
  calories: string | number
  protein: string | number
}

interface AddFoodDialogProps {
  onFoodAdded?: () => Promise<void>
}

const AddFoodDialog: React.FC<AddFoodDialogProps> = ({ onFoodAdded }) => {
  const supabase = createClient()
  const [open, setOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const [formData, setFormData] = useState<FoodFormData>({
    name: "",
    calories: "",
    protein: "",
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === "name" ? value : Number(value) || "",
    })
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const resetForm = (): void => {
    setFormData({
      name: "",
      calories: "",
      protein: "",
    })
    setImageFile(null)
    setImagePreview(null)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.calories ||
      !formData.protein ||
      !imageFile
    ) {
      toast.error("Missing fields", {
        description: "Please fill all required fields and upload an image.",
      })
      return
    }

    setLoading(true)

    try {
      const fileName = `${Date.now()}-${imageFile.name}`
      const { error: imageError } = await supabase.storage
        .from("food-images")
        .upload(fileName, imageFile)

      if (imageError) throw imageError

      const { data: publicUrlData } = supabase.storage
        .from("food-images")
        .getPublicUrl(fileName)

      const imageUrl = publicUrlData.publicUrl

      const id = Math.floor(Math.random() * 10000)
      const { error } = await supabase
        .from("shredleFoods")
        .insert({
          id,
          name: formData.name,
          calories: Number(formData.calories),
          protein: Number(formData.protein),
          image: imageUrl,
        })
        .select()

      if (error) throw error

      toast.success("Success", {
        description: `${formData.name} has been added to your food list.`,
        className: "bg-white text-gray-800",
        descriptionClassName: "text-gray-600",
      })

      if (onFoodAdded) {
        await onFoodAdded()
      }

      setOpen(false)
      resetForm()
    } catch (error: unknown) {
      console.error("Error adding food:", error)

      toast.error("Error", {
        description:
          error instanceof Error
            ? error.message
            : "Failed to add food. Please try again.",
        className: "bg-white text-gray-800",
        descriptionClassName: "text-gray-600",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex items-center mt-20 gap-2">
            <PlusCircle className="w-4 h-4" />
            Add New Food
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Food</DialogTitle>
            <DialogDescription>
              Enter the details of the food you want to add to your database.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 py-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Food Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Grilled Chicken"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="calories">Calories</Label>
                  <Input
                    id="calories"
                    name="calories"
                    type="number"
                    value={formData.calories}
                    onChange={handleInputChange}
                    placeholder="e.g. 165"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="protein">Protein (g)</Label>
                  <Input
                    id="protein"
                    name="protein"
                    type="number"
                    value={formData.protein}
                    onChange={handleInputChange}
                    placeholder="e.g. 31"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Food Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="cursor-pointer"
                  required
                />
                {imagePreview && (
                  <div className="mt-2 relative w-24 h-24 rounded-md overflow-hidden border border-gray-200">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setOpen(false)
                  resetForm()
                }}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Add Food"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddFoodDialog
