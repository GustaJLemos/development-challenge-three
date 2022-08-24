import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../global/styles";
import { Home } from "../screens/Signed/Home";
import { RecipeDetails } from "../screens/Signed/RecipeDetails";
import { RecipeList } from "../screens/Signed/RecipeList";

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
      <Stack.Screen name="RecipeList" component={RecipeList} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
    </Stack.Navigator>
  )
}
