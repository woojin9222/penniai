"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ChildrenProps } from '@/types/base-props';

export function ThemeProvider({ children, ...props }: ChildrenProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}