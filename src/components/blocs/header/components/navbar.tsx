// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  ModeToggle,
  MovieCategory,
  SerieCategory,
  AvatarDropdown,
  NavItems,
  SearchDrawer,
} from ".";

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
            <NavItems />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <MovieCategory />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <SerieCategory />
          </NavigationMenuItem>
          <NavigationMenuItem></NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList className="w-full gap-2">
          <SearchDrawer />
          <ModeToggle />
          <AvatarDropdown />
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
