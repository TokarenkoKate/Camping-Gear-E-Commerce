import { Outlet } from "react-router-dom";
import { Navbar } from "@/widgets/navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
