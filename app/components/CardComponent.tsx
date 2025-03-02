import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
type CardComponentProps = {
  foodItemName: string
  foodItemCalories: number
  foodItemImage: string
  buttons?: string[]
  buttonHandlers?: ((
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void)[]
}

export const CardComponent: React.FC<CardComponentProps> = ({
  foodItemName,
  foodItemCalories,
  foodItemImage,
  buttons,
  buttonHandlers,
}) => {
  return (
    <Card
      className={`w-[280px] flex flex-col justify-between bg-white rounded-3xl border-2 
        ${
          buttons
            ? "border-orange-200 shadow-[0_0_15px_rgba(251,146,60,0.3)] animate-pulse-slow hover:shadow-[0_0_20px_rgba(251,146,60,0.5)]"
            : "border-orange-200 shadow-lg"
        } 
        transition-all duration-300 transform hover:-translate-y-1`}
    >
      {" "}
      <CardHeader className="flex flex-col items-center space-y-0 pt-4">
        <div className="w-full h-48 relative rounded-2xl overflow-hidden mb-4 transform -rotate-2 hover:rotate-0 transition-all duration-300 shadow-lg">
          <Image
            src={foodItemImage}
            alt={foodItemName}
            fill
            priority
            loading="eager"
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 280px) 100vw, 280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <h3 className="font-bold text-xl text-center text-orange-800 font-display">
          {foodItemName}
        </h3>
        <h1 className="text-sm text-center text-orange-600/80 italic">
          (100g)
        </h1>
      </CardHeader>
      <CardContent className="text-center flex-1 flex items-center justify-center p-6">
        {!buttons ? (
          <div className="space-y-2">
            <p className="text-sm font-medium text-orange-600/80">Calories</p>
            <p className="text-4xl font-bold text-orange-800 font-display">
              {foodItemCalories}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center mx-auto animate-bounce-slow shadow-inner">
                <p className="text-5xl font-bold text-orange-500">?</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center p-4 gap-4">
        {buttons?.map((label, index) => (
          <Button
            key={index}
            onClick={buttonHandlers?.[index]}
            className={`
          w-24 text-lg font-medium transition-all duration-300 shadow-lg
          ${
            index === 0
              ? "bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 hover:scale-105"
              : "bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 hover:scale-105"
          }
        `}
          >
            {label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}
