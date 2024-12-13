import "../styles/index.scss";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/widgets/navbar";
import { UiBox } from "@/shared/ui/ui-box/ui-box";

export const App = () => {
  return (
    <UiBox className="app">
      <Navbar />
      <UiBox className="app-content" as="main">
        <Outlet />
      </UiBox>
    </UiBox>
  );
};
