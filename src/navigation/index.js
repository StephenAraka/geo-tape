import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import MainScreen from '../screens/MainScreen';
import NewMeasurementScreen from '../screens/NewMeasurementScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        {/* <Stack.Screen name="Main" component={MainScreen} /> */}
        <Stack.Screen name="NewMeasurement" component={NewMeasurementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
