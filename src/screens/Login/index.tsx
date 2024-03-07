import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

import Logo from 'assets/logo.jpeg';
import {Input} from 'components/Input/';

const Login = () => {
  const [account, setAccount] = useState({email: '', password: ''});

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
        />
        <Input
          name="Senha"
          value={account.password}
          setValue={handleInputChange}
          secureTextEntry
        />
        <Text style={{color: 'white'}}>
          [email: {account.email}, password: {account.password}]
        </Text>
      </View>
    </View>
  );
};

export default Login;
