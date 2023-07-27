import { createEffect, createSignal } from "solid-js";
import "./App.css";
import Popup, { action, name, setAction, setName } from "./components/Popup";

function App() {
  const [count, setCount] = createSignal(0);
  createEffect(() => {
    if (action() == "alert") {
      alert("Hello, " + name());
      setName("");
      setAction("");
    }
  });
  return (
    <>
      <h1>Popup Example</h1>
      <Popup></Popup>
      {"Hello, " + name()}
    </>
  );
}

export default App;
