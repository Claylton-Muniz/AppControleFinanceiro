import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {NavigationProp} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {url} from '../urlBase';

import {styles} from './styles';
import Logo from 'assets/logo/logo.jpeg';

import {Input} from 'components/Input';

axios.defaults.baseURL = url.base;

type RootStackParamList = {
  TabRoutes: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const BankAccount = ({navigation}: Props) => {
  const [name, setName] = useState('');
  const [saldo, setSaldo] = useState('');

  const handleTest = async () => {
    const token = await AsyncStorage.getItem('@jwt_token');

    const response = await axios.get('/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const resPost = await axios.post('/api/bank-accounts', {
      idUser: response.data.id,
      name: name,
      saldo: saldo,
    });

    console.log(resPost.data);

    navigation.navigate('TabRoutes');
  };

  return (
    <View style={styles.body}>
      <Animatable.View animation="fadeInLeft" style={styles.welcome}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.h1}>Conta bancária</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.container}>
        <View style={styles.createAccount}>
          <Input name="Nome" value={name} setValue={setName} object={false} />
          <Input
            name="Saldo"
            value={saldo}
            setValue={setSaldo}
            object={false}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.confirm}>
          <TouchableOpacity style={styles.button} onPress={handleTest}>
            <Text style={styles.textButton}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default BankAccount;
