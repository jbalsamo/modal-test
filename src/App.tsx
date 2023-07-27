import { Button } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";
import "./App.css";
import Popup, { action, name, setAction, setName } from "./components/Popup";

function App() {
  createEffect(() => {
    if (action() == "alert") {
      alert("Hello, " + name());
    }
  });
  return (
    <>
      <h1>Popup Example</h1>
      <Popup></Popup>
      <Button variant="danger" onClick={() => alert("Hello, " + name())}>
        View Results`
      </Button>
    </>
  );
}

export default App;
