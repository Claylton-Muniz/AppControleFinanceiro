import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Load from '../screens/Load';
import FirstAccess from '../screens/FirstAccess';
import SignIn from '../screens/SignIn';
import signUp from '../screens/SignUp';

import TabRoutes from './tab.routes';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Load"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Load" component={Load} />
      <Stack.Screen name="FirstAccess" component={FirstAccess} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={signUp} />
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
