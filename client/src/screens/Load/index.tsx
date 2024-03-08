import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {styles} from './styles';
import {global} from '../global';

import Logo from 'assets/logo.jpeg';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
};

const Load = ({navigation}: Props) => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('@jwt_token');
      if (token) {
        // console.log('usuário já está logado, token:', token);
        navigation.navigate('Home');
      } else {
        navigation.navigate('Login');
      }
    };

    checkLoginStatus();
  });

  return (
    <View style={[global.body, styles.body]}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

export default Load;
