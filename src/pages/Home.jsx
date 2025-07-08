import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    console.log("In home")
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <ThemeToggle />

    <div className="min-h-screen bg-background text-foreground p-8">
  <h1 className="text-3xl font-bold">Hello</h1>
  <button className="bg-card text-primary p-4 rounded-lg">Test Button</button>
</div>

    </div>
}