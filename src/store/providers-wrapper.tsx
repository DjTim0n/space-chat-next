"use client";

import { AuthStoreProvider } from "@/store/platform/platform-store-provider";
import { ReactNode } from "react";

interface ProvidersWrapperProps {
  children: ReactNode;
}

const ProvidersWrapper = ({ children }: ProvidersWrapperProps) => {
  return <AuthStoreProvider>{children}</AuthStoreProvider>;
};

export default ProvidersWrapper;
