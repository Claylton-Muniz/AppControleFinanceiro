import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import Logo from 'assets/logo/logo.jpeg';
import {styles} from './styles';
import * as Animatable from 'react-native-animatable';

import {Input} from 'components/Input';
import {InputDate} from 'components/InputDate';

import axios from 'axios';
import {url} from '../urlBase';
import MessageBox from 'components/MessageBox';

// Mude o ip para o da sua máquina:
axios.defaults.baseURL = url.base;

type RootStackParamList = {
  SignIn: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const SignUp = ({navigation}: Props) => {
  const [message, setMessage] = useState('');
  const [errorBox, setErrorBox] = useState(false);

  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    dob: {day: '', month: '', year: ''},
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
    dob: false,
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

  const validateEmail = (email: any) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

  const validatePass = (pass: any) => {
    const regex = /^(?=.*[A-Z]).{8,}$/;
    return regex.test(pass);
  };

  const handleSignUp = async () => {
    setError({
      name: false,
      email: false,
      password: false,
      dob: false,
    });

    let errorMessage = '';

    if (!validatePass(account.password)) {
      setError(prevState => ({...prevState, password: true}));
      if (account.password.length < 8) {
        errorMessage = 'A senha deve conter 8 ou mais caracteres';
      } else {
        errorMessage = 'Um caractere da senha deve ser maiúsculo';
      }
    }
    if (!validateEmail(account.email)) {
      setError(prevState => ({...prevState, email: true}));
      errorMessage = 'Email inválido. Tente novamente!';
    }
    if (
      account.dob.day.length < 2 ||
      account.dob.month.length < 2 ||
      account.dob.year.length < 4
    ) {
      setError(prevState => ({...prevState, dob: true}));
      errorMessage = 'Data inválida. Tente novamente!';
    }
    if (account.name.length <= 3) {
      setError(prevState => ({...prevState, name: true}));
      errorMessage = 'O nome deve conter 3 ou mais caracteres';
    }

    if (errorMessage === '') {
      setErrorBox(false);

      const res = await axios.post('/api/users', {
        name: account.name,
        dob: account.dob,
        email: account.email,
        password: account.password,
      });

      if (res.data.message) {
        navigation.navigate('SignIn');
      }

      setAccount({
        name: '',
        email: '',
        password: '',
        dob: {day: '', month: '', year: ''},
      });
    } else {
      setErrorBox(true);
      setTimeout(() => {
        setErrorBox(false);
      }, 2000);
    }

    setMessage(errorMessage);
  };

  return (
    <View style={styles.body}>
      <MessageBox isVisible={errorBox}>{message}</MessageBox>
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
            isError={error.name}
          />
          <InputDate
            name="Data de nascimento"
            value={account.dob}
            setValue={handleInputDateChange}
            isError={error.dob}
          />
          <Input
            name="Email"
            value={account.email}
            setValue={handleInputChange}
            isError={error.email}
          />
          <Input
            name="Senha"
            value={account.password}
            setValue={handleInputChange}
            isError={error.password}
            secureTextEntry
          />
        </View>
        <View style={styles.confirm}>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.textButton}>Criar conta</Text>
          </TouchableOpacity>
          <View style={styles.signUp}>
            <Text style={styles.text}>Já possui conta?</Text>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignIn');
                }}>
                <Text style={styles.textLink}>Acessar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUp;
