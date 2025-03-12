import "../styles/index.scss";
import { Outlet } from "react-router-dom";
import { UiBox, UiVStack } from "@/shared/ui";
import { Navbar } from "@/widgets/navbar";
import { Footer } from "@/widgets/footer";

export const App = () => {
  return (
    <UiVStack className="app" align="normal">
      <Navbar />
      <UiBox className="app-content">
        <UiBox className="app-main" as="main">
          <Outlet />
        </UiBox>
        <Footer />
      </UiBox>
    </UiVStack>
  );
};
