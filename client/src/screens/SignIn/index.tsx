import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

import {styles} from './styles';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Logo from 'assets/logo/logo.jpeg';
import {Input} from 'components/Input/';
import MessageBox from 'components/MessageBox/';
import {url} from '../urlBase';

// Mude o ip para o da sua máquina:
axios.defaults.baseURL = url.base;

type RootStackParamList = {
  TabRoutes: undefined;
  SignUp: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const SignIn = ({navigation}: Props) => {
  const [account, setAccount] = useState({email: '', password: ''});
  const [errorInput, setErrorInput] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (key: any, value: any) => {
    setAccount(prevState => ({...prevState, [key]: value}));
  };

  const handleLogin = async () => {
    setError(false);

    // Testa se o user está correto
    try {
      const res = await axios.post('/auth/local', {
        email: account.email,
        password: account.password,
      });

      console.log(res.data.token);

      if (res.data.token) {
        console.log('gerou');
        setErrorInput(false);
        // Armazena o token no dispositivo
        AsyncStorage.setItem('@jwt_token', res.data.token);
        console.log(res.data.token);
        navigation.navigate('TabRoutes');
      }
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        setErrorInput(true);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      } else {
        console.log(err);
      }
    }

    setAccount({email: '', password: ''});
  };

  return (
    <View style={styles.body}>
      <MessageBox isVisible={error}>
        Email ou senha incorretos. Tente novamente
      </MessageBox>
      <Animatable.View animation="fadeInLeft" style={styles.welcome}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.h1}>Bem-vindo!</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.container}>
        <View style={styles.login}>
          <Input
            name="Email"
            value={account.email}
            setValue={handleInputChange}
            isError={errorInput}
          />
          <Input
            name="Senha"
            value={account.password}
            setValue={handleInputChange}
            isError={errorInput}
            secureTextEntry
          />
        </View>
        <View style={styles.confirm}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.textButton}>Acessar</Text>
          </TouchableOpacity>
          <View style={styles.signUp}>
            <Text style={styles.text}>Não possui conta?</Text>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <Text style={styles.textLink}>Cadastrar-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignIn;
