import React from "react";
import {
  Home,
  LayoutDashboardIcon,
  LogInIcon,
  MenuIcon,
  Percent,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { ShoppingCartIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
  return (
    <Card className="flex justify-between  p-[1.87rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>
          <hr></hr>
          <div className="mt-3 flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-start gap-2">
              <LogInIcon size={16} />
              Login
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Home size={16} />
              Inicio
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Percent size={16} />
              Ofertas
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <LayoutDashboardIcon size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <h1 className="flex text-lg font-semibold">
        <span className="text-primary">Store</span>
      </h1>
      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
