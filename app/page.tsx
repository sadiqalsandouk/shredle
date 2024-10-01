import { CardComponent } from "./components/CardComponent"
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen space-x-80">
      <CardComponent
        avatarUrl="https://github.com/shadcn.png"
        title="Card Title"
        description="Description"
        content="Content"
      />
      <CardComponent
        avatarUrl="https://github.com/shadcn.png"
        title="Card Title"
        description="Description"
        content="Content"
        buttons={["Higher", "Lower"]}
      />
    </div>
  )
}
