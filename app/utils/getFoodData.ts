import { supabase } from "./supabase"

export async function getFoodData() {
  try {
    const { data: foodData, error } = await supabase
      .from("shredleFoods")
      .select("id, name, calories, image")

    if (error) {
      console.error("Supabase Error:", error)
      throw new Error(`Failed to fetch food data: ${error.message}`)
    }

    if (!foodData || foodData.length === 0) {
      console.warn("No food data returned from database")
      throw new Error("No food data available")
    }

    return { foodData }
  } catch (err) {
    console.error("getFoodData error:", err)
    throw err
  }
}
