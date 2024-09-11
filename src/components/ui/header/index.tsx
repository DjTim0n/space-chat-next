import React from "react";
import { HeaderContent, HeaderMiniContent, HeaderNav, HeaderWrapp } from "./header";
import { ModeToggle } from "../toggle-theme";
import { HeaderDropdownMenu } from "./header-dropdown-menu";

export const Header = () => {
  return (
    <HeaderWrapp>
      <HeaderMiniContent>
        <></>
      </HeaderMiniContent>
      <HeaderContent className="ml-4 mr-2">
        <HeaderDropdownMenu />
        <ModeToggle variant="default" />
      </HeaderContent>
    </HeaderWrapp>
  );
};
