// CardComponent.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CardComponentProps = {
  title: string
  description: string
  content: string
  buttons?: string[]
  avatarUrl: string
}

export const CardComponent: React.FC<CardComponentProps> = ({
  title,
  description,
  content,
  buttons,
  avatarUrl,
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="max-w-md mx-auto">
        <CardHeader className="mb-4">
          <Avatar>
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>testfallback</AvatarFallback>
          </Avatar>
          <CardTitle className="text-center">{title}</CardTitle>
          <CardDescription className="mt-2 text-center">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="m-40">
          <p>{content}</p>
        </CardContent>
        {buttons && (
          <CardFooter className="flex justify-center mt-4 space-x-4">
            {buttons.map((label, index) => (
              <Button key={index}>{label}</Button>
            ))}
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
