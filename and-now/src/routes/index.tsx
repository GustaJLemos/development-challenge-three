import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { StatusBar } from "react-native";
import { AuthContext } from "../contexts/Auth";
import { COLORS } from "../global/styles";
import { Home } from "../screens/Signed/Home";
import { SignIn } from "../screens/SignIn";
import { SignedRoutes } from "./signed.routes";

export const AppRoutes = () => {
  const { isLogged } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={COLORS.blue10}
      />
      {isLogged ? <SignedRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}
