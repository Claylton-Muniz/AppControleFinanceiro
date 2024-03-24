/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Transactions from '../screens/Transactions';
import InsTransaction from '../screens/InsTransaction';
import Planning from '../screens/Planning';
import LogOut from '../screens/LogOut';

import IconHome from 'assets/icons/SvgHome';
import IconTransactions from 'assets/icons/SvgTransactions';
import IconPlus from 'assets/icons/SvgPlus';
import IconPlanning from 'assets/icons/SvgPlanning';
import IconSettings from 'assets/icons/SvgSettings';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#5A3787',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Principal',
          tabBarIcon: ({color}) => <IconHome color={color} />,
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarLabel: 'Transações',
          tabBarIcon: ({color}) => <IconTransactions color={color} />,
        }}
      />
      <Tab.Screen
        name="New"
        component={InsTransaction}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color}) => (
            <IconPlus color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Planning"
        component={Planning}
        options={{
          tabBarLabel: 'Planejamento',
          tabBarIcon: ({color}) => <IconPlanning color={color} />,
        }}
      />
      <Tab.Screen
        name="settings"
        component={LogOut}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({color}) => <IconSettings color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
