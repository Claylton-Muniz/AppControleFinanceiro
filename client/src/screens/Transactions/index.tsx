import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {url} from '../urlBase';

import {styles} from './styles';

import {date} from '../date';

import IconSearch from 'assets/icons/SvgSearch';
import IconArrowLeft from 'assets/icons/SvgArrowLeft';
import IconArrowRight from 'assets/icons/SvgArrowRight';
import IconPadlock from 'assets/icons/SvgPadlock';
import IconFolder from 'assets/icons/SvgFolder';

type Transaction = {
  id: string;
  transaction: string;
  valor: number;
  type: string;
};

type Revenue = {
  valor: number;
};

axios.defaults.baseURL = url.base;

const Transactions = () => {
  const [dateId, setDateId] = useState(new Date().getMonth());
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [salMen, setSalMen] = useState(0);
  const [balMen, setBalMen] = useState(0);

  useEffect(() => {
    const getTransactions = async () => {
      const token = await AsyncStorage.getItem('@jwt_token');

      const response = await axios.get('/api/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const resGetTransactions = await axios.get(
        `/api/transactions/${response.data.id}/${dateId + 1}/`,
      );

      if (resGetTransactions.data.length) {
        let total = 0;
        resGetTransactions.data.map((saldo: Transaction) => {
          console.log(saldo);
          if (saldo.type === 'Receita') {
            total += saldo.valor;
          } else {
            total -= saldo.valor;
          }
        });
        setBalMen(total);
      } else {
        setBalMen(0);
      }

      setTransactions(resGetTransactions.data);
      console.log(resGetTransactions.data);

      let idUser = response.data.id;
      const resGetRev = await axios.get(
        `/api/monthly-revenue?idUser=${idUser}`,
      );

      console.log(resGetRev.data);

      if (resGetRev.data.length) {
        let total = 0;
        resGetRev.data.map((saldo: Revenue) => {
          console.log(saldo);
          total += saldo.valor;
        });
        setSalMen(total);
      } else {
        setSalMen(0);
      }
    };

    getTransactions();
  }, [dateId]);

  return (
    <ScrollView>
      <Animatable.View animation="slideInDown">
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Transações</Text>
          <TouchableOpacity style={styles.search}>
            <IconSearch color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconArrowLeft}
            onPress={() => setDateId(dateId === 0 ? 11 : dateId - 1)}>
            <IconArrowLeft color="#fff" />
          </TouchableOpacity>
          <Text style={styles.month}>{date.months[dateId].name}</Text>
          <TouchableOpacity
            style={styles.iconArrowRight}
            onPress={() => setDateId((dateId + 1) % 12)}>
            <IconArrowRight color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <View style={styles.infoLeft}>
            <IconPadlock style={styles.iconPadlock} color="#444444" />
            <Text style={styles.textTitle}>Saldo mensal</Text>
            <Text style={styles.textValue}>
              R$ {salMen.toFixed(2).replace('.', ',')}
            </Text>
          </View>
          <View style={styles.infoRight}>
            <IconFolder style={styles.iconFolder} color="#444444" />
            <Text style={styles.textTitle}>Balanço mensal</Text>
            {balMen < 0 ? (
              <Text style={styles.textValue}>
                - R$ {(balMen * -1).toFixed(2).replace('.', ',')}
              </Text>
            ) : (
              <Text style={styles.textValue}>
                R$ {balMen.toFixed(2).replace('.', ',')}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.line} />
      </Animatable.View>
      <Animatable.View animation="fadeInUp">
        {transactions.length ? (
          <>
            {transactions.map(transaction => (
              <View key={transaction.id}>
                <View style={styles.transaction}>
                  <View style={styles.leftTransaction}>
                    <Text style={styles.textTransaction}>
                      {transaction.transaction}
                    </Text>
                  </View>
                  <View style={styles.rightTransaction}>
                    <Text
                      style={
                        transaction.type === 'Receita'
                          ? styles.receita
                          : styles.despesa
                      }>
                      R$ {transaction.valor.toFixed(2).replace('.', ',')}
                    </Text>
                  </View>
                </View>
                <View style={styles.line} />
              </View>
            ))}
          </>
        ) : (
          <View style={styles.emptyTransactions}>
            <Text style={styles.emptyTitle}>Ops! Você não possui </Text>
            <Text style={styles.emptyTitle}>transações registradas.</Text>
            <Text style={styles.emptyDescription}>
              para criar um novo item, clique
            </Text>
            <Text style={styles.emptyDescription}>no botão (+)</Text>
          </View>
        )}
      </Animatable.View>
    </ScrollView>
  );
};

export default Transactions;
