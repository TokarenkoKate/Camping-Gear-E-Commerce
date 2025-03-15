import { createRoot } from "react-dom/client";
import { App } from "./app";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Error initializing React App");
}

const root = createRoot(container);

root.render(<App />);
