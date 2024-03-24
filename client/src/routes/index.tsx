import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import StackRoutes from './stack.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#5A3787'} />
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
