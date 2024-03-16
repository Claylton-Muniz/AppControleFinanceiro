import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';

import Logo from 'assets/logo.jpeg';

import {styles} from './styles';
import {Input} from 'components/Input';
import {InputDate} from 'components/InputDate';

const SignUp = () => {
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    dob: {day: 0, moth: 0, year: 0},
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

  return (
    <View style={styles.body}>
      <View style={styles.welcome}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.h1}>Pronto para começar?</Text>
      </View>
      <View style={styles.container}>
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
      </View>
    </View>
  );
};

export default SignUp;
