import { Button } from "@/components/ui/button";
import {
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { categoryItems } from "@/config";
import { Link } from "react-router-dom";

export const MovieCategory = () => {
  return (
    <>
      <NavigationMenuTrigger>Movies</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid grid-cols-2 w-[300px] p-4">
          {categoryItems.map((item) => (
            <Link className="w-full" to={item.link || "/"}>
              <Button className="w-full" variant="ghost">
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </NavigationMenuContent>
    </>
  );
};
