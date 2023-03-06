import React from "react";
import 'react-native-gesture-handler';
import { styles } from "./src/theme/theme";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import StackNavigator from "./src/navigation/StackNavigation";
import TopTabNavigation from "./src/navigation/TopTabNavigation";
import AuthContextProvider from "./src/context/AuthContext";



const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <AppState>
            <StackNavigator />
          </AppState>
        </SafeAreaView>
      </NavigationContainer>
    </AuthContextProvider>
  )
}
export default App; 