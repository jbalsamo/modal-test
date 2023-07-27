import { createEffect, createSignal } from "solid-js";
import "./App.css";
import Popup, { action, name, setAction, setName } from "./components/Popup";

function App() {
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
    </>
  );
}

export default App;
