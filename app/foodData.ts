export type FoodItem = {
  name: string
  calories: number
  chain: string
}

export type FoodData = {
  foodItems: FoodItem[]
}

export const foodData: FoodData = {
  foodItems: [
    { name: "Quarter Pounder® with Cheese", calories: 300, chain: "McDonalds" },
    { name: "Big Mac®", calories: 550, chain: "McDonalds" },
    { name: "Whopper®", calories: 657, chain: "Burger King" },
  ],
}
