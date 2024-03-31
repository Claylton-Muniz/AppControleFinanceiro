import React, {useEffect, useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {url} from '../urlBase';

import {styles} from './styles';
import {date} from '../date';

import Grafico from 'assets/imgs/grafico.png';

import IconUser from 'assets/icons/SvgUser';
import IconArrowUp from 'assets/icons/SvgArrowUp';
import IconArrowDown from 'assets/icons/SvgArrowDown';
import IconArrowSelect from 'assets/icons/SvgArrowSelect';

type Account = {
  saldo: number;
};

const Home = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [saldo, setSaldo] = useState(0);
  const [dateId, setDateId] = useState(new Date().getMonth());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getAccounts = async () => {
      const token = await AsyncStorage.getItem('@jwt_token');
  
      const responses = await axios.get('/api/bank-accounts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      let total = 0;
      responses.data.map((response: {saldo: number}) => {total += response.saldo});
      setSaldo(total);
  
      setAccounts(responses.data);
    };
  
    getAccounts();
  }, []);

  return (
    <View style={styles.body}>
      <Animatable.View animation="slideInDown" style={styles.header}>
        <IconUser style={styles.iconUser} color="#fff" />
        <Text style={styles.month}>{date.months[dateId].name}</Text>
        <TouchableOpacity
          style={styles.iconArrowSelect}
          onPress={() => setVisible(!visible)}>
          <IconArrowSelect color="#fff" />
        </TouchableOpacity>
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
            {date.months.map(month => (
              <TouchableOpacity
                onPress={() => {
                  setDateId(month.month - 1);
                  setVisible(false);
                }}
                key={month.month}>
                <Text style={styles.selectText}>{month.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
        <Text style={styles.accountBalanceText}>Saldo em contas</Text>
        <Text style={styles.accountBalanceValue}>
          R$ {saldo.toFixed(2).replace('.', ',')}
        </Text>
        <IconArrowUp style={styles.iconArrowUp} color="#fff" />
        <IconArrowDown style={styles.iconArrowDown} color="#fff" />
        <View style={styles.rowContainer}>
          <Text style={styles.revenueText}>Receitas</Text>
          <Text style={styles.revenueText}>Despesas</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.revenueValue}>R$ 0,00</Text>
          <Text style={styles.revenueValue}>R$ 0,00</Text>
        </View>
      </Animatable.View>
      <View>
        <Image source={Grafico} style={styles.grafico} />
      </View>
    </View>
  );
};

export default Home;
