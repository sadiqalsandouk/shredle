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
      className={`w-[140px] sm:w-[280px] flex flex-col justify-between bg-white rounded-3xl border-2
    ${
      buttons
        ? "border-orange-200 shadow-[0_0_15px_rgba(251,146,60,0.3)] animate-pulse-slow hover:shadow-[0_0_20px_rgba(251,146,60,0.5)]"
        : "border-orange-200 shadow-lg"
    } 
    transition-all duration-300 transform hover:-translate-y-1`}
    >
      <CardHeader className="flex flex-col items-center space-y-0 p-2 sm:p-4">
        <div className="w-full h-24 sm:h-48 relative rounded-2xl overflow-hidden mb-2 sm:mb-4">
          <Image
            src={foodItemImage}
            alt={foodItemName}
            fill
            priority
            loading="eager"
            className="object-cover"
            sizes="(max-width: 140px) 100vw, (max-width: 280px) 100vw"
          />
        </div>
        <h3 className="font-bold text-xs sm:text-xl text-center text-orange-800">
          {foodItemName}
        </h3>
        <h1 className="text-[10px] sm:text-sm text-center text-orange-600/80 italic">
          (100g)
        </h1>
      </CardHeader>
      <CardContent className="text-center flex-1 flex items-center justify-center p-2 sm:p-6">
        {!buttons ? (
          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm font-medium text-orange-600/80">
              Calories
            </p>
            <p className="text-2xl sm:text-4xl font-bold text-orange-800 font-display">
              {foodItemCalories}
            </p>
          </div>
        ) : (
          <div className="space-y-2 sm:space-y-4">
            <div className="relative">
              <div className="h-12 w-12 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center mx-auto animate-bounce-slow shadow-inner">
                <p className="text-3xl sm:text-5xl font-bold text-orange-500">
                  ?
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-center p-2 sm:p-4 gap-2 sm:gap-4">
        {buttons?.map((label, index) => (
          <Button
            key={index}
            onClick={buttonHandlers?.[index]}
            className={`w-24 sm:w-24 py-3 sm:py-2 text-base sm:text-base font-medium transition-all duration-300 shadow-lg ${
              index === 0
                ? "bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 hover:scale-105"
                : "bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 hover:scale-105"
            }`}
          >
            {label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}
