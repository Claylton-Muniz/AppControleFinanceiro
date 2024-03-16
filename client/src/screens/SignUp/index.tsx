import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import Logo from 'assets/logo.jpeg';
import {styles} from './styles';
import * as Animatable from 'react-native-animatable';

import {Input} from 'components/Input';
import {InputDate} from 'components/InputDate';

import axios from 'axios';

// Mude o ip para o da sua máquina:
axios.defaults.baseURL = 'http://192.168.0.25:1337';

type RootStackParamList = {
  SignIn: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const SignUp = ({navigation}: Props) => {
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    dob: {day: '', month: '', year: ''},
  });

  const handleInputChange = (key: any, value: any) => {
    setAccount(prevState => ({...prevState, [key]: value}));
    console.log(account);
  };

  const handleInputDateChange = (key: string, value: string) => {
    setAccount(prevState => ({
      ...prevState,
      dob: {
        ...prevState.dob,
        [key]: value,
      },
    }));
    console.log(account);
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post('/api/users', {
        name: account.name,
        dob: account.dob,
        email: account.email,
        password: account.password,
      });

      if (res.data.message) {
        navigation.navigate('SignIn');
      }
    } catch (error) {
      console.log(error);
    }

    setAccount({
      name: '',
      email: '',
      password: '',
      dob: {day: '', month: '', year: ''},
    });
  };

  return (
    <View style={styles.body}>
      <Animatable.View animation="fadeInLeft" style={styles.welcome}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.h1}>Pronto para começar?</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.container}>
        <View style={styles.createAccount}>
          <Input
            name="Nome"
            value={account.name}
            setValue={handleInputChange}
          />
          <InputDate
            name="Data de nascimento"
            value={account.dob}
            setValue={handleInputDateChange}
          />
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
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.textButton}>Criar conta</Text>
          </TouchableOpacity>
          <View style={styles.signUp}>
            <Text style={styles.text}>Já possui conta?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              <Text style={styles.textLink}>Acessar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUp;
