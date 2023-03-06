import React, { useState, useContext } from 'react'
import LoginImage from "../images/login.jpg";
import { Image, Text , TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { colores, styles } from '../theme/theme';
import {AuthContext} from "../context/AlumnoContext"; 
import { useNavigation } from "../navigation/StackNavigation";

const navigation = useNavigation();
const {signIn} = useContext(AuthContext);

const initialState ={
    matricula:'',
    password:'',
}
const Login = () => {
    const [datos, setDatos] = useState(initialState);
    const {matricula, password}= datos;
    const LOGIN_IMAGE = Image.resolveAssetSource (LoginImage).uri;
    const context = useContext(AuthContext);
    const handleChange = (nom, valor) => {
        setDatos({...datos, [nom]:valor});
      }
    const handleSubmit = async ()=>{ 
      await signIn(datos);
     //console.log(datos);
    }
  return (
    <View style ={styles.login_container}>
    <Image
      source={{uri: LOGIN_IMAGE}}
      style={styles.login_image}
      />
      <Text style={styles.login_texto}>Introduce tu matricula y contraseña </Text>
      <TextInput
      placeholder ='Matricula'
      placeholderTextColor ={colores.ocho}
      textAlign ='center'
      style={styles.login_input}
      value={matricula}
      onChangeText={valor => handleChange('matricula', valor)}
      />
       <TextInput
      placeholder ='Contraseña'
      placeholderTextColor ={colores.ocho}
      textAlign ='center'
      style={styles.login_input}
      secureTextEntry={true}
      value={password}
      onChangeText={valor => handleChange('password', valor)}
      />
      <TouchableOpacity
        style={{
        flex:1}}
        onPress={handleSubmit}
        
      >
        <View style={styles.login_boton}>
            <Text style={styles.login_boton_texto}>Ingresar</Text>
        </View>
      </TouchableOpacity>
<Text>
  {context.authState.nombre }
</Text>

    </View>
  );
}

export default Login;
