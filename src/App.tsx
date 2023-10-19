import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  function handleCountUpdate() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <main className="container mx-auto p-8">
        <p className="text-3xl">
          This is a simple Vite React Typescript starterpack
        </p>
        <Button onClick={handleCountUpdate}>Inc Count: {count}</Button>
      </main>
    </>
  );
}

export default App;
