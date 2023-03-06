import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Modificar from '../screens/Modificar';
import Eliminar from '../screens/Eliminar';
import Inventario from '../screens/Inventario';
import Insertar from '../screens/Insertar';
import Icon from "react-native-vector-icons/Ionicons"

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation =()=> {
  return (
    <Tab.Navigator style={{marginTop: 35}}>
      <Tab.Screen name="Inventario" component={Inventario}
options={{
  tabBarLabel: 'Inventario',
  tabBarIcon: () =>
    <Icon name="list-circle" color={'black'} size={26} />
      }}
      />
      
      <Tab.Screen name="Modificar" component={Modificar}
      options={{
        tabBarLabel: 'Modificar',
        tabBarIcon: () =>
          <Icon name="create" color={'black'} size={26} />
            }}
     /> 
      <Tab.Screen name="Insertar" component={Insertar} 
      options={{
        tabBarLabel: 'Insertar',
        tabBarIcon: () =>
          <Icon name="add-circle" color={'black'} size={26} />
            }}
     />

<Tab.Screen name="Eliminar" component={Eliminar}
      options={{
        tabBarLabel: 'Eliminar',
        tabBarIcon: () =>
          <Icon name="trash" color={'black'} size={26} />
            }}
     /> 
      
    </Tab.Navigator>
  );
}
export default TopTabNavigation;