export type FoodItem = {
  name: string
  calories: number
}

export type FoodData = {
  foodItems: FoodItem[]
}

export const foodData: FoodData = {
  foodItems: [
    { name: "Roasted Potato (100g)", calories: 150 },
    { name: "Steamed White Rice (100g)", calories: 130 },
    { name: "Grilled Chicken Breast (100g)", calories: 165 },
    { name: "Broccoli (Steamed, 100g)", calories: 55 },
    { name: "Avocado (100g)", calories: 160 },
    { name: "Banana (100g)", calories: 89 },
    { name: "Dark Chocolate (100g)", calories: 546 },
    { name: "Peanut Butter (100g)", calories: 588 },
    { name: "Salmon (Baked, 100g)", calories: 208 },
    { name: "Egg (Boiled, 100g)", calories: 155 },
    { name: "Apple (100g)", calories: 52 },
    { name: "Whole Wheat Bread (100g)", calories: 247 },
    { name: "Cheddar Cheese (100g)", calories: 403 },
    { name: "Almonds (Raw, 100g)", calories: 579 },
    { name: "Greek Yogurt (Plain, 100g)", calories: 59 },
    { name: "Butter (100g)", calories: 717 },
    { name: "Spaghetti (Cooked, 100g)", calories: 158 },
    { name: "Pizza Slice (Cheese, 100g)", calories: 266 },
    { name: "Beef Steak (Grilled, 100g)", calories: 271 },
    { name: "Carrot (Raw, 100g)", calories: 41 },
    { name: "Strawberries (100g)", calories: 32 },
    { name: "Sweet Potato (Baked, 100g)", calories: 90 },
    { name: "Fried Egg (100g)", calories: 196 },
    { name: "Milk (Whole, 100g)", calories: 61 },
    { name: "Ice Cream (Vanilla, 100g)", calories: 207 },
  ],
}
