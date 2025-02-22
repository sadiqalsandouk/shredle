import { supabase } from "./supabase"

export async function getFoodData() {
  const { data: foodData, error } = await supabase.from("foods").select("*")

  if (error) {
    throw new Error("Failed to fetch food data")
  }
  return { foodData }
}
