import { createEffect, createSignal } from "solid-js";
import "./App.css";
import Popup, { name } from "./components/Popup";

function App() {
  const [count, setCount] = createSignal(0);
  createEffect(() => {
    if (name().action == "alert") {
      alert(name().name);
      s;
    }
  });
  return (
    <>
      <h1>Popup Example</h1>
      <Popup></Popup>
    </>
  );
}

export default App;
