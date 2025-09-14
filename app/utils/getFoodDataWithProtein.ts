import { createClient } from "../supabase/server"

export async function getFoodDataWithProtein() {
  try {
    const supabase = await createClient()
    const { data: foodData, error } = await supabase
      .from("shredleFoods")
      .select("id, name, calories, protein, image")

    if (error) {
      console.error("Supabase Error:", error)
      throw new Error(`Failed to fetch food data: ${error.message}`)
    }

    if (!foodData || foodData.length === 0) {
      console.warn("No food data returned from database")
      throw new Error("No food data available")
    }

    // Filter out foods without protein data for protein mode
    const proteinFoodData = foodData.filter(food => food.protein != null && food.protein > 0)

    if (proteinFoodData.length === 0) {
      console.warn("No foods with protein data found")
      throw new Error("No protein food data available")
    }

    return { foodData: proteinFoodData }
  } catch (err) {
    console.error("getFoodDataWithProtein error:", err)
    throw err
  }
}
