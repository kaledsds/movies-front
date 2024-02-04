import { navigationItems } from "@/config";

export const NavItems = () => {
  return (
    <div>
      {navigationItems.map((item) => (
        <div>{item.label}</div>
      ))}
    </div>
  );
};
