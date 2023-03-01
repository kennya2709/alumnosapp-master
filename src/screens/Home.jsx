import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from '../context/AlumnoContext'

const Home  = () => {
  const context = useContext(AuthContext);
  return (
    <View>
        <Text>
            Home
        </Text>
        <Text>Matricula: {context.authState.matricula} </Text>
        <Text>Nombre: {context.authState.nombre} </Text>
        <Text>Tipo: {context.authState.tipo} </Text>
        <Text>Token: {context.authState.token} </Text>
    </View>
  )
}
export default Home;
