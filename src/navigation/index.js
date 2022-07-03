import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import measurementsReducer from '../../redux/reducers/MeasurementsReducer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import MainScreen from '../screens/MainScreen';
import NewMeasurementScreen from '../screens/NewMeasurementScreen';

const store = createStore(measurementsReducer);

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="NewMeasurement" component={NewMeasurementScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
