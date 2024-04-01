import React, {useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {url} from '../urlBase';

import {styles} from './styles';
import Logo from 'assets/logo/logo.jpeg';

import {Input} from 'components/Input';
import Select from 'components/Select';

axios.defaults.baseURL = url.base;

const InsTransaction = () => {
  const [dateId] = useState(new Date().getMonth());
  const [transaction, setTransaction] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [visible, setVisible] = useState(false);

  const handleAddTransaction = async () => {
    const token = await AsyncStorage.getItem('@jwt_token');

    const response = await axios.get('/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const resPost = await axios.post('/api/transactions', {
      idUser: response.data.id,
      type: type,
      transaction: transaction,
      valor: value,
      data: dateId + 1,
    });

    console.log(resPost.data);

    setType('');
    setValue('');
    setTransaction('');
  };

  return (
    <View style={styles.body}>
      <Animatable.View animation="fadeInLeft" style={styles.welcome}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.h1}>Inserindo transação</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.container}>
        <View style={styles.createAccount}>
          <Select
            name="Tipo"
            value={type}
            onPress={() => {
              setVisible(!visible);
            }}
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
              <TouchableOpacity
                onPress={() => {
                  setType('Receita');
                  setVisible(false);
                }}>
                <Text style={styles.selectText}>Receita</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setType('Despesa');
                  setVisible(false);
                }}>
                <Text style={styles.selectText}>Despesa</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <Input
            name="Transação"
            value={transaction}
            setValue={setTransaction}
            object={false}
          />
          <Input
            name="Valor"
            value={value}
            setValue={setValue}
            object={false}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.confirm}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleAddTransaction}>
            <Text style={styles.textButton}>Adicionar transação</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default InsTransaction;
