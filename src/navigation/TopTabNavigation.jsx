import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Calificaciones from '../screens/Calificaciones';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Icon from "react-native-vector-icons/Ionicons"

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation =()=> {
  return (
    <Tab.Navigator style={{marginTop: 35}}>
      <Tab.Screen name="Home" component={Home}
options={{
  tabBarLabel: 'Home',
  tabBarIcon: () =>
    <Icon name="home" color={'black'} size={26} />
      }}
      />
      
      <Tab.Screen name="Calificaciones" component={Calificaciones}
      options={{
        tabBarLabel: 'Calificaciones',
        tabBarIcon: () =>
          <Icon name="library" color={'black'} size={26} />
            }}
     /> 
      <Tab.Screen name="Settings" component={Settings} 
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: () =>
          <Icon name="settings" color={'black'} size={26} />
            }}
     />
      
    </Tab.Navigator>
  );
}
export default TopTabNavigation;