import { registerRootComponent } from 'expo';
import HomeScreen from './screens/HomeScreen';
function App(){
    return <HomeScreen/>;
}
registerRootComponent(App);