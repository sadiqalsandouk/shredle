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
    <Card className="w-[280px] flex flex-col justify-between bg-white">
      <CardHeader className="flex flex-col items-center space-y-0 pt-4">
        <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
          <Image
            src={foodItemImage}
            alt={foodItemName}
            fill
            className="object-cover"
            sizes="(max-width: 280px) 100vw, 280px"
          />
        </div>
        <h3 className="font-bold text-lg text-center">{foodItemName}</h3>
        <h1 className="text-sm text-center">(100g)</h1>
      </CardHeader>

      <CardContent className="text-center flex-1 flex items-center justify-center">
        {!buttons ? (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Calories</p>
            <p className="text-3xl font-bold">{foodItemCalories}</p>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-2">
              <p className="text-4xl font-bold text-muted-foreground">?</p>
            </div>
            <p className="text-sm text-muted-foreground">Higher or Lower?</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-center p-4">
        {buttons ? (
          <div className="flex gap-4">
            {buttons.map((label, index) => (
              <Button
                key={index}
                onClick={buttonHandlers ? buttonHandlers[index] : undefined}
                className="w-20"
                variant={index === 0 ? "default" : "secondary"}
              >
                {label}
              </Button>
            ))}
          </div>
        ) : null}
      </CardFooter>
    </Card>
  )
}
