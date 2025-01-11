import "../styles/index.scss";
import { Outlet } from "react-router-dom";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { Navbar } from "@/widgets/navbar";
import { Footer } from "@/widgets/footer";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";

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
