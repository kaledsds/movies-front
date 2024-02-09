// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle, MovieCategory, SerieCategory, AvatarDropdown } from ".";

/**
 * Renders the Navbar component.
 *
 * @return {JSX.Element} The JSX element representing the Navbar component.
 */
export const Navbar = () => {
  return (
    <>
      <h1 className="text-primary text-3xl font-bold">Chill</h1>
      <NavigationMenu>
        <NavigationMenuList className="w-full gap-2">
          <NavigationMenuItem>
            <MovieCategory />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <SerieCategory />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Favorites
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <AvatarDropdown />
    </>
  );
};
