"use client";
import { Button } from "../button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../dropdown-menu";
import { ModeToggle } from "../toggle-theme";
import { useEffect } from "react";
import { useAuthStore } from "@/store/platform/platform-store-provider";

export const HeaderDropdownMenu = () => {
  const { isAuth } = useAuthStore((state) => state);
  useEffect(() => {
    console.log(isAuth);
  }, [isAuth]);
  return (
    <>
      {isAuth ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="cursor-pointer rounded-full">
              A
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <ModeToggle variant="dropdown" />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <></>
      )}
    </>
  );
};
