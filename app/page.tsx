import { CardComponent } from "./components/CardComponent"
export default function Home() {
  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen">
      <CardComponent
        avatarUrl="https://github.com/shadcn.png"
        description="McDonalds"
        content="Quarter Pounder® with Cheese"
      />
      <CardComponent
        avatarUrl="https://github.com/shadcn.png"
        description="Burger King"
        content="Double Quarter Pound King Sandwich"
        buttons={["Higher", "Lower"]}
      />
    </div>
  )
}
