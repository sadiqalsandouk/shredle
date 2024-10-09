import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
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
}) => {
  return (
    <Card className="max-w-md mx-40">
      <CardHeader className="flex flex-col items-center justify-center">
        <Avatar className="w-32 h-32 mb-4">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>testfallback</AvatarFallback>
        </Avatar>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center mb-4">
        <p>{content}</p>
      </CardContent>
      {buttons && (
        <CardFooter className="flex justify-center mt-4 space-x-4">
          {buttons.map((label, index) => (
            <Button
              onClick={buttonHandlers ? buttonHandlers[index] : undefined}
              key={index}
            >
              {label}
            </Button>
          ))}
        </CardFooter>
      )}
    </Card>
  )
}
