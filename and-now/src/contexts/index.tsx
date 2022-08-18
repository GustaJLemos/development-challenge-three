import React, { ReactElement, ReactNode } from "react"
import { AuthProvider } from "./Auth"

type Props = {
  children: ReactElement;
}

export const ContextsProvider = ({children}: Props) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}