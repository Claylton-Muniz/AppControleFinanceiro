import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Load from '../screens/Load';
import Login from '../screens/Login';
import Home from '../screens/Home';
import FirstAccess from '../screens/FirstAccess';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Load"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Load" component={Load} />
      <Stack.Screen name="FirstAccess" component={FirstAccess} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
