import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

import {styles} from './styles';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Logo from 'assets/logo.jpeg';
import {Input} from 'components/Input/';

// Mude o ip para o da sua máquina:
axios.defaults.baseURL = 'http://192.168.0.25:1337';

type RootStackParamList = {
  Home: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
};

const Login = ({navigation}: Props) => {
  const [account, setAccount] = useState({email: '', password: ''});

  const handleInputChange = (key: any, value: any) => {
    setAccount(prevState => ({...prevState, [key]: value}));
  };

  const handleLogin = async () => {
    // Testa se o user está correto

    try {
      const res = await axios.post('/auth/local', {
        email: account.email,
        password: account.password,
      });

      console.log(res.data.token);

      if (res.data.token) {
        console.log('gerou');
        // setError('');
        // Armazena o token no dispositivo
        AsyncStorage.setItem('@jwt_token', res.data.token);
        console.log(res.data.token);
        navigation.navigate('Home');
      }
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        // setError('email ou senha errado');
      } else {
        console.log(err);
      }
    }

    setAccount({email: '', password: ''});
  };

  return (
    <View style={styles.body}>
      <Animatable.View animation={'fadeInLeft'} style={styles.welcome}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.h1}>Bem-vindo!</Text>
      </Animatable.View>
      <Animatable.View
        delay={600}
        animation={'fadeInUp'}
        style={styles.container}>
        <View style={styles.login}>
          <Input
            name="Email"
            value={account.email}
            setValue={handleInputChange}
          />
          <Input
            name="Senha"
            value={account.password}
            setValue={handleInputChange}
            secureTextEntry
          />
        </View>
        <View style={styles.confirm}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.text}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Login;
