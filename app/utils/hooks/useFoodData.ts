import { useQuery } from "@tanstack/react-query"

async function fetchFoodData() {
  try {
    const response = await fetch("http://localhost:3000/api/food").then((res) =>
      res.json()
    )
    return response
  } catch (error) {
    return error
  }
}

export const useFoodData = () => {
  return useQuery({
    queryKey: ["food-data"],
    queryFn: () => fetchFoodData(),
  })
}
