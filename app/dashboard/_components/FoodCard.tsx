"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"
import { createClient } from "@/app/supabase/client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { IFoodCardProps } from "@/app/types/types"

export default function FoodCard({ food, onFoodDeleted }: IFoodCardProps) {
  const supabase = createClient()
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  const extractFileNameFromUrl = (url: string): string | null => {
    try {
      const urlParts = url.split("/")
      return urlParts[urlParts.length - 1]
    } catch (error) {
      console.error("Error extracting file name from URL:", error)
      return null
    }
  }

  const handleDelete = async (): Promise<void> => {
    try {
      setIsDeleting(true)

      const fileName = extractFileNameFromUrl(food.image)

      if (fileName) {
        const { error: storageError } = await supabase.storage
          .from("food-images")
          .remove([fileName])

        if (storageError) {
          console.error("Error deleting image from storage:", storageError)
        }
      }

      const { error: dbError } = await supabase
        .from("shredleFoods")
        .delete()
        .eq("id", food.id)

      if (dbError) throw dbError

      toast.success("Food deleted successfully", {
        description: `${food.name} has been deleted from your food list.`,
      })

      if (onFoodDeleted) {
        onFoodDeleted()
      }
    } catch (error: unknown) {
      console.error("Error deleting food:", error)
      toast.error("Failed to delete food", {
        description:
          error instanceof Error ? error.message : "Please try again.",
      })
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="size-48 flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
      <div className="absolute top-2 right-2 z-10">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="destructive"
              size="icon"
              className="h-8 w-8 rounded-full opacity-80 hover:opacity-100"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete {food.name} from your food list.
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                disabled={isDeleting}
                className="bg-red-600 hover:bg-red-700"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {food.name}
        </h3>
        <p className="text-sm text-gray-600">
          Calories: <span className="font-medium">{food.calories}</span>
        </p>
        <p className="text-sm text-gray-600">
          Protein: <span className="font-medium">{food.protein}g</span>
        </p>
      </div>
    </div>
  )
}
