"use client";

import * as React from "react";
import { ChevronDownIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ModeToggleProps = {
  trigger?: React.ReactNode;
  variant?: "default" | "dropdown";
};

const MODES = ["light", "dark", "system"] as const;

function capitalize<T>(s: string): T {
  return (s[0].toUpperCase() + s.slice(1)) as T;
}

export function ModeToggle({ variant = "default", trigger }: ModeToggleProps) {
  const { theme, setTheme, systemTheme } = useTheme() as {
    theme: (typeof MODES)[number];
    setTheme: (mode: (typeof MODES)[number]) => void;
    systemTheme?: "light" | "dark";
  };

  let triggerElement = (
    <Button variant="outline" size="icon">
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] animate-scale-in-rotate" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] animate-scale-in-rotate" />
      )}
      <span className="sr-only">Switch theme</span>
    </Button>
  );

  if (variant === "dropdown") {
    triggerElement = (
      <DropdownMenuItem className="flex cursor-pointer items-center justify-between">
        <div className="flex flex-nowrap items-center">
          {theme === "light" || (theme === "system" && systemTheme === "light") ? (
            <Sun className="mr-2 h-[1.2rem] w-[1.2rem] animate-scale-in-rotate" />
          ) : (
            <Moon className="mr-2 h-[1.2rem] w-[1.2rem] animate-scale-in-rotate" />
          )}
          <span>{capitalize<typeof theme>(theme ?? "system")}</span>
        </div>
        <ChevronDownIcon className="ml-2 h-4 w-4" />
        <span className="sr-only">Переключатель языка</span>
      </DropdownMenuItem>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger ? trigger : triggerElement}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// sr-only-focusable
