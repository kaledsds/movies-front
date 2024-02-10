import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navigationItems } from "@/config";

export const NavItems = () => {
  return (
    <div className="flex gap-2">
      {navigationItems.map((item) => (
        <NavigationMenuLink
          href={item.link || "/"}
          className={navigationMenuTriggerStyle()}
        >
          {item.label}
        </NavigationMenuLink>
      ))}
    </div>
  );
};
