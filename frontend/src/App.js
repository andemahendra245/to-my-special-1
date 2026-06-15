import { useState } from "react";
import "@/App.css";
import Splash from "@/components/Splash";
import MemoryBook from "@/components/MemoryBook";

function App() {
  // phases: 'heart' -> 'splash' -> 'book'
  const [phase, setPhase] = useState("heart");

  return (
    <div className="App" data-testid="app-root">
      {phase !== "book" && (
        <Splash
          phase={phase}
          onStart={() => setPhase("splash")}
          onFinish={() => setPhase("book")}
        />
      )}
      {phase === "book" && <MemoryBook />}
    </div>
  );
}

export default App;
