import { Outlet } from "react-router-dom";
import { useAppInit } from "@/app/model/hooks/use-app-init";
import { UiBox, UiVStack } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Navbar } from "@/widgets/navbar";
import { useRouterScrollRestoration } from "@/app/model/hooks/use-router-scroll-restoration";

export const AppLayout = () => {
  useAppInit();
  const scrollRestorationRef = useRouterScrollRestoration();

  return (
    <UiVStack className="app" align="normal">
      <Navbar />
      <UiVStack
        className="app-content"
        align="normal"
        max
        ref={scrollRestorationRef}
      >
        <UiBox className="app-main" as="main">
          <Outlet />
        </UiBox>
        <Footer />
      </UiVStack>
    </UiVStack>
  );
};
