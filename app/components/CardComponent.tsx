import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
type CardComponentProps = {
  foodItemName: string
  foodItemCalories: number
  foodItemImage: string
  buttons?: string[]
  buttonHandlers?: ((
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void)[]
  disabled?: boolean
}

export const CardComponent: React.FC<CardComponentProps> = ({
  foodItemName,
  foodItemCalories,
  foodItemImage,
  buttons,
  buttonHandlers,
  disabled,
}) => {
  return (
    <Card
      className={`w-[140px] sm:w-[280px] flex flex-col justify-between bg-white dark:bg-gray-800 rounded-3xl border-2 dark:border-gray-700
      }`}
    >
      <CardHeader className="flex flex-col items-center space-y-0 p-2 sm:p-4">
        <div className="w-full h-24 sm:h-48 relative rounded-2xl overflow-hidden mb-2 sm:mb-4">
          <img
            src={foodItemImage}
            alt={foodItemName}
            className="object-cover"
          />
        </div>
        <h3 className="font-bold text-xs sm:text-xl text-center text-orange-800 dark:text-orange-300">
          {foodItemName}
        </h3>
        <h1 className="text-[10px] sm:text-sm text-center text-orange-600/80 dark:text-orange-400/80 italic">
          (100g)
        </h1>
      </CardHeader>
      <CardContent className="text-center flex-1 flex items-center justify-center p-2 sm:p-6">
        {!buttons ? (
          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm font-medium text-orange-600/80 dark:text-orange-400/80">
              Calories
            </p>
            <p className="text-2xl sm:text-4xl font-bold text-orange-800 dark:text-orange-300 font-display">
              {foodItemCalories}
            </p>
          </div>
        ) : (
          <div className="space-y-2 sm:space-y-4">
            <div className="relative">
              <div className="h-12 w-12 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/60 dark:to-orange-800/60 flex items-center justify-center mx-auto animate-bounce-slow shadow-inner">
                <p className="text-3xl sm:text-5xl font-bold text-orange-500 dark:text-orange-300">
                  ?
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-2 sm:p-4">
        {buttons && buttonHandlers && (
          <div className="w-full flex flex-col gap-1 sm:gap-2">
            {buttons.map((button, index) => (
              <Button
                key={button}
                variant="default"
                className={`w-full text-[10px] sm:text-sm py-1 sm:py-2 ${
                  button === "Higher"
                    ? "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white"
                    : "bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white"
                }`}
                onClick={buttonHandlers[index]}
                disabled={disabled}
              >
                {button}
              </Button>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
