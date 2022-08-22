import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../global/styles";
import { Home } from "../screens/Signed/Home";
import { SignIn } from "../screens/SignIn";

const Stack = createNativeStackNavigator();

export const SignedRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
        contentStyle: {
          backgroundColor: COLORS.white10
        }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
