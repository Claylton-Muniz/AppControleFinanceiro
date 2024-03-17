import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {styles} from './styles';

import Logo from 'assets/logo/logo.jpeg';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  Home: undefined;
  FirstAccess: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const Load = ({navigation}: Props) => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('@jwt_token');
      setTimeout(() => {
        if (token) {
          // console.log('usuário já está logado, token:', token);
          navigation.navigate('Home');
        } else {
          navigation.navigate('FirstAccess');
        }
      }, 1000);
    };

    checkLoginStatus();
  });

  return (
    <View style={styles.body}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

export default Load;
