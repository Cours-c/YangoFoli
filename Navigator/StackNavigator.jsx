import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false,}} />
      <Stack.Screen name="Details" component={DetailScreen}  options={{ headerShown: false,}} />
    </Stack.Navigator>
  );
}
export default MyStack;
