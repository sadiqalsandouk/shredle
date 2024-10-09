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
    { name: "Chicken Fries", calories: 429, chain: "Burger King" },
    { name: "Cheeseburger", calories: 250, chain: "McDonalds" },
    { name: "Filet-O-Fish®", calories: 380, chain: "McDonalds" },
    { name: "French Fries", calories: 365, chain: "McDonalds" },
    { name: "Chicken McNuggets®", calories: 420, chain: "McDonalds" },
    { name: "Soft Serve Cone", calories: 150, chain: "McDonalds" },
    { name: "Apple Pie", calories: 240, chain: "McDonalds" },
    { name: "Coca-Cola®", calories: 140, chain: "McDonalds" },
    { name: "Iced Coffee", calories: 140, chain: "McDonalds" },
    { name: "Bacon King", calories: 1150, chain: "Burger King" },
    { name: "Chicken Royale", calories: 570, chain: "Burger King" },
    { name: "Veggie Burger", calories: 410, chain: "Burger King" },
    { name: "Onion Rings", calories: 320, chain: "Burger King" },
    { name: "Mozzarella Sticks", calories: 320, chain: "Burger King" },
    { name: "Vanilla Shake", calories: 580, chain: "Burger King" },
    { name: "Pepsi", calories: 150, chain: "Burger King" },
    { name: "Iced Latte", calories: 120, chain: "Burger King" },
  ],
}
