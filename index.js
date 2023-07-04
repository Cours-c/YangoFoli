import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from 'expo';
import MyStack from "./Navigator/StackNavigator";
function App(){
    return ( <NavigationContainer>
        <MyStack></MyStack>
    </NavigationContainer>);
}
registerRootComponent(App);