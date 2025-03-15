import { Outlet } from "react-router-dom";
import { UiBox, UiVStack } from "@/shared/ui";
import { Navbar } from "@/widgets/navbar";
import { Footer } from "@/widgets/footer";
import { useAppInit } from "@/app/model/hooks/use-app-init";

export const AppLayout = () => {
  useAppInit();

  return (
    <UiVStack className="app" align="normal">
      <Navbar />
      <UiVStack className="app-content" align="normal" max>
        <UiBox className="app-main" as="main">
          <Outlet />
        </UiBox>
        <Footer />
      </UiVStack>
    </UiVStack>
  );
};
