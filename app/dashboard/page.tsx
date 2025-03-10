import FoodCard from "./_components/FoodCard"
import AddFoodDialog from "./_components/AddFoodDialog"
import { createClient } from "../supabase/server"

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: foods, error } = await supabase
    .from("shredleFoods")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) return <div>{error.message}</div>

  return (
    <div>
      <AddFoodDialog />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  )
}
