import React, {useEffect, useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {NavigationProp} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {url} from '../urlBase';

import {styles} from './styles';
import Logo from 'assets/logo/logo.jpeg';

import {Input} from 'components/Input';
import Select from 'components/Select';

axios.defaults.baseURL = url.base;

type Account = {
  id: number;
  name: string;
};

type Select = {
  id: number | null;
  name: string;
};

type RootStackParamList = {
  TabRoutes: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const BankCard = ({navigation}: Props) => {
  const [name, setName] = useState('');
  const [limite, setLimite] = useState('');
  const [select, setSelect] = useState<Select>({id: null, name: ''});
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getAccounts = async () => {
      const token = await AsyncStorage.getItem('@jwt_token');

      const response = await axios.get('/api/bank-accounts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAccounts(response.data);
    };

    getAccounts();
  }, []);

  const handleAddCard = async () => {
    const response = await axios.post('/api/bank-cards', {
      idAccount: select.id,
      tipo: name,
      limite: limite,
    });

    console.log(response.data);

    navigation.navigate('TabRoutes');
  };

  return (
    <View style={styles.body}>
      <Animatable.View animation="fadeInLeft" style={styles.welcome}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.h1}>Cartão</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.container}>
        <View style={styles.createAccount}>
          <Select
            name="Conta"
            value={select.name}
            onPress={() => setVisible(!visible)}
          />
          <Modal
            animationType="fade"
            transparent={true}
            onRequestClose={() => setVisible(false)}
            visible={visible}>
            <TouchableOpacity
              style={styles.selectVisible}
              onPress={() => setVisible(false)}
            />
            <View style={styles.select}>
              {accounts.map(account => (
                <TouchableOpacity
                  onPress={() => {
                    setSelect({id: account.id, name: account.name});
                    setVisible(false);
                  }}
                  key={account.id}>
                  <Text style={styles.selectText}>{account.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Modal>
          <Input name="Cartão" value={name} setValue={setName} object={false} />
          <Input
            name="Limite"
            value={limite}
            setValue={setLimite}
            object={false}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.confirm}>
          <TouchableOpacity style={styles.button} onPress={handleAddCard}>
            <Text style={styles.textButton}>Adicionar cartão</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default BankCard;
