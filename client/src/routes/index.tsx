import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Load from '../screens/Load';
import FirstAccess from '../screens/FirstAccess';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import signUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Load" component={Load} />
      <Stack.Screen name="FirstAccess" component={FirstAccess} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={signUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
