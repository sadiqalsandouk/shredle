"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"
import { supabase } from "../../utils/supabase" // Update this path to match your project
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

interface IFoodCardProps {
  food: {
    id: string
    name: string
    calories: number
    protein: number
    image: string
  }
  onFoodDeleted?: () => void
}

export default function FoodCard({ food, onFoodDeleted }: IFoodCardProps) {
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  const extractFileNameFromUrl = (url: string): string | null => {
    // Extract the file name from the Supabase URL
    // Example URL: https://xyz.supabase.co/storage/v1/object/public/food-images/1234567890-filename.jpg
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

      // 1. Delete the image from storage
      const fileName = extractFileNameFromUrl(food.image)

      if (fileName) {
        const { error: storageError } = await supabase.storage
          .from("food-images")
          .remove([fileName])

        if (storageError) {
          console.error("Error deleting image from storage:", storageError)
          // Continue with DB deletion even if image deletion fails
        }
      }

      // 2. Delete the food item from the database
      console.log(food)
      const { error: dbError } = await supabase
        .from("shredleFoods")
        .delete()
        .eq("id", food.id)

      if (dbError) throw dbError

      // 3. Notify the parent component that a food was deleted
      if (onFoodDeleted) {
        onFoodDeleted()
      }

      window.alert(
        JSON.stringify(
          {
            title: "Success!",
            description: `${food.name} has been deleted from your food list.`,
          },
          null,
          2
        )
      )

      window.location.reload()
    } catch (error: unknown) {
      console.error("Error deleting food:", error)
      window.alert(
        JSON.stringify(
          {
            title: "Error",
            description:
              error instanceof Error
                ? error.message
                : "Failed to delete food. Please try again.",
            variant: "destructive",
          },
          null,
          2
        )
      )
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
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

      <div className="h-48 overflow-hidden">
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
