"use client"

import { useEffect, useState } from "react"
import FoodCard from "./_components/FoodCard"
import AddFoodDialog from "./_components/AddFoodDialog"
import { createClient } from "../supabase/client"
import { IFoodCardProps } from "../types/types"

type Food = IFoodCardProps["food"]

export default function DashboardPage() {
  const [foods, setFoods] = useState<Food[]>([])
  const supabase = createClient()

  const fetchFoods = async () => {
    const { data, error } = await supabase
      .from("shredleFoods")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching foods:", error)
      return
    }

    if (data) {
      setFoods(data)
    }
  }

  // Add this function to handle food deletion
  const handleFoodDeleted = (deletedFoodId: string | number) => {
    setFoods((prevFoods) =>
      prevFoods.filter((food) => food.id !== deletedFoodId)
    )
  }

  useEffect(() => {
    fetchFoods()
  }, [])

  return (
    <div>
      <AddFoodDialog onFoodAdded={fetchFoods} />

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
