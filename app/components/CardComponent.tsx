import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

type CardComponentProps = {
  description: string
  content: number
  buttons?: string[]
  buttonHandlers?: ((
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void)[]
  avatarUrl: string
}

export const CardComponent: React.FC<CardComponentProps> = ({
  description,
  content,
  buttons,
  avatarUrl,
  buttonHandlers,
  // restaurantName,
}) => {
  return (
    <Card className="w-[280px] flex flex-col justify-between bg-white">
      <CardHeader className="flex flex-col items-center space-y-3 pt-4">
        {/* Logo */}
        <Avatar className="w-14 h-14">
          <AvatarImage src={avatarUrl} alt="Restaurant Logo" />
          <AvatarFallback>FL</AvatarFallback>
        </Avatar>

        {/* Restaurant Name */}
        <p className="text-sm text-muted-foreground font-medium">
          {/* {restaurantName} */}
        </p>

        {/* Food Item Name */}
        <h3 className="font-bold text-lg text-center">{description}</h3>
      </CardHeader>

      <CardContent className="text-center flex-1 flex items-center justify-center">
        {!buttons ? (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Calories</p>
            <p className="text-3xl font-bold">{content}</p>
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
          <div className="flex gap-2 sm:gap-4">
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
