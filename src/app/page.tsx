export default async function Home() {
  const jsonPlaceholder = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  )
  // const testAction = async () => {
  //   "use server"
  //   console.log("test")
  // }
  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //     <form action={testAction} className="flex flex-col text-slate-500">
  //       <input type="text" />
  //       <button type="submit">Submit</button>
  //     </form>
  //   </main>
  // )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-slate-500">Hello World</h1>
      <p className="text-slate-500">
        {JSON.stringify(await jsonPlaceholder.json())}
      </p>
    </main>
  )
}
