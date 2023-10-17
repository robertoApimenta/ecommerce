"use client";

import React from "react";
import {
  Home,
  LayoutDashboardIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  Percent,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { ShoppingCartIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const Header = () => {
  const { status, data } = useSession();

  const handleLogin = async () => {
    await signIn();
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-[1.87rem]">
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

          {status === "authenticated" && (
            <div className="flex items-center justify-center gap-2 p-5">
              <Avatar>
                <AvatarFallback>
                  {data.user?.name?.[0].toUpperCase()}
                </AvatarFallback>
                {data.user?.image && <AvatarImage src={data.user.image} />}
              </Avatar>
              <div>
                <p className="font-medium">{data.user?.name}</p>
                <p className="text-sm opacity-70">Boas compras!</p>
              </div>
            </div>
          )}

          <div className="mt-3 flex flex-col gap-2">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLogin}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} />
                Login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} />
                Logout
              </Button>
            )}

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
