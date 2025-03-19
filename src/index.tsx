import { createRoot } from "react-dom/client";
import { App, getAppRouter } from "@/app";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Error initializing React App");
}

const root = createRoot(container);
const router = getAppRouter();

root.render(<App router={router} />);
