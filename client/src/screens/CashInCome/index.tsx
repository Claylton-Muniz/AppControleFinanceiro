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

const CashInCome = ({navigation}: Props) => {
  const [renda, setRenda] = useState('');
  const [value, setValue] = useState('');

  const handleAddRevenue = async () => {
    const token = await AsyncStorage.getItem('@jwt_token');

    const response = await axios.get('/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const resPost = await axios.post('/api/monthly-revenue', {
      idUser: response.data.id,
      fonte_renda: renda,
      valor: value,
    });

    console.log(resPost.data);

    navigation.navigate('TabRoutes');
  };

  return (
    <View style={styles.body}>
      <Animatable.View animation="fadeInLeft" style={styles.welcome}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.h1}>Receita mensal</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.container}>
        <View style={styles.createAccount}>
          <Input
            name="Fonte renda"
            value={renda}
            setValue={setRenda}
            object={false}
          />
          <Input
            name="Receita"
            value={value}
            setValue={setValue}
            object={false}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.confirm}>
          <TouchableOpacity style={styles.button} onPress={handleAddRevenue}>
            <Text style={styles.textButton}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default CashInCome;
