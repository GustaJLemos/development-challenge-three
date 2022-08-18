import { createContext, ReactNode, useState } from "react";
import { Provider } from "./Provider";

type Props = {
  children: ReactNode;
}

export const AuthContext = createContext<Provider>({} as Provider);

export const AuthProvider = ({children}: Props) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{isLogged, setIsLogged}}>
      {children}
    </AuthContext.Provider>
  )
}