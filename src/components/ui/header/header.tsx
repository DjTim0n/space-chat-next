import { cn } from "@/lib/utils";

import React, { ComponentProps } from "react";

type HeaderProps = {
  children: React.ReactNode;
  classNameWrapp?: string;
} & ComponentProps<"header">;

const HeaderWrapp = ({ children, className, classNameWrapp, ...props }: HeaderProps) => {
  return (
    <header
      className={cn("sticky top-0 z-40 w-full border-b border-b-primary-foreground bg-background shadow-md")}
      {...props}
    >
      <div className={cn("container flex h-16 items-center justify-between px-4 md:px-6", className)}>{children}</div>
    </header>
  );
};

const HeaderNav = ({ ...props }: ComponentProps<"nav">) => {
  return (
    <nav {...props}>
      <ul className="mx-5 flex list-none flex-wrap gap-4"></ul>
    </nav>
  );
};

type HeaderMiniContentProps = {
  children: React.ReactNode;
} & ComponentProps<"div">;

const HeaderMiniContent = ({ children, className, ...props }: HeaderMiniContentProps) => {
  return (
    <div className={cn("flex items-center gap-8", className)} {...props}>
      {children}
    </div>
  );
};

type HeaderContentProps = {
  children: React.ReactNode;
} & ComponentProps<"div">;

const HeaderContent = ({ children, className, ...props }: HeaderContentProps) => {
  return (
    <div {...props} className={cn("flex items-center gap-6", className)}>
      {children}
    </div>
  );
};

export { HeaderWrapp, HeaderNav, HeaderMiniContent, HeaderContent };
