import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from '../context/AlumnoContext'

const Inventario  = () => {
  const context = useContext(AuthContext);
  return (
    <View>
      
        <Text style={{textAlign: "center", marginTop: 40}}>
            Inventario
        </Text>
        <Text>Nombre: {context.authState.matricula} </Text>
        <Text>Cantidad: {context.authState.nombre} </Text>
    </View>
  )
}
export default Inventario;
