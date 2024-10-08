"use client"
import { FoodItem } from "../foodData"
import { useFoodData } from "../utils/hooks/useFoodData"
import { CardComponent } from "./CardComponent"

export default function Game() {
  const { data } = useFoodData()
  const foodItems: FoodItem[] | undefined = data?.foodData?.foodItems

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen">
      {foodItems ? (
        <>
          <CardComponent
            avatarUrl="https://github.com/shadcn.png"
            description={foodItems[0].chain}
            content={foodItems[0].name}
          />
          <CardComponent
            avatarUrl="https://github.com/shadcn.png"
            description={foodItems[2].chain}
            content={foodItems[2].name}
            buttons={["Higher", "Lower"]}
          />
        </>
      ) : null}
    </div>
  )
}
