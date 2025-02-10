import { UiSidebar } from "@/shared/ui/ui-sidebar/ui-sidebar";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  return (
    <UiSidebar isOpen={isOpen} onClose={onClose}>
      content
    </UiSidebar>
  );
};
