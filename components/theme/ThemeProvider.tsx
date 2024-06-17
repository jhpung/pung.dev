"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { FC } from "react";

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
