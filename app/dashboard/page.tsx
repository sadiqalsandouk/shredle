"use client"

import { useQuery, useQueryClient } from "@tanstack/react-query"
import FoodCard from "./_components/FoodCard"
import AddFoodDialog from "./_components/AddFoodDialog"
import { createClient } from "../supabase/client"
import { IFoodCardProps } from "../types/types"
import { Loader2 } from "lucide-react"

type Food = IFoodCardProps["food"]

export default function DashboardPage() {
  const supabase = createClient()
  const queryClient = useQueryClient()

  const {
    data: foods = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("shredleFoods")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error
      return data as Food[]
    },
  })

  const handleFoodDeleted = (deletedFoodId: string | number) => {
    queryClient.setQueryData(["foods"], (oldData: Food[] = []) =>
      oldData.filter((food) => food.id !== deletedFoodId)
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    )
  }

  if (error) {
    return <div>Error loading foods</div>
  }

  return (
    <div>
      <div className="absolute top-4 right-6 bg-neutral-100 rounded-full px-4 py-2 text-sm font-bold">
        Total Foods: {foods.length}
      </div>
      <AddFoodDialog
        onFoodAdded={() =>
          queryClient.invalidateQueries({ queryKey: ["foods"] })
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            onFoodDeleted={() => handleFoodDeleted(food.id)}
          />
        ))}
      </div>
    </div>
  )
}
