import "../styles/index.scss";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/widgets/navbar";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};
