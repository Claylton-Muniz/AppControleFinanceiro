import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

import Logo from 'assets/logo.jpeg';
import {Input} from 'components/Input/';

const Login = () => {
  const [account, setAccount] = useState({email: '', password: ''});
  const [errors] = useState({email: '', password: ''});

  useEffect(() => {
    console.log(account);
  }, [account]);

  const handleInputChange = (key: any, value: any) => {
    setAccount(prevState => ({...prevState, [key]: value}));
  };

  return (
    <View style={styles.body}>
      <View style={styles.welcome}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.h1}>Bem vindo!</Text>
      </View>
      <View style={styles.login}>
        <Input
          name="Email"
          value={account.email}
          setValue={handleInputChange}
          errorMessage={errors.email}
        />
        <Input
          name="Senha"
          value={account.password}
          setValue={handleInputChange}
          errorMessage={errors.password}
          secureTextEntry
        />
      </View>
      <View style={styles.confirm}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
