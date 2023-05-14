export default function Home() {
  const testAction = async () => {
    "use server"
    console.log("test")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={testAction} className="flex flex-col text-slate-500">
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
