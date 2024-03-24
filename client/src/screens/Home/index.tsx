import React from 'react';
import {Text, View} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {styles} from './styles';

import IconUser from 'assets/icons/SvgUser';
import IconArrowUp from 'assets/icons/SvgArrowUp';
import IconArrowDown from 'assets/icons/SvgArrowDown';

const Home = () => {
  return (
    <View>
      <Animatable.View animation="slideInDown" style={styles.header}>
        <IconUser style={styles.iconUser} color="#fff" />
        <Text style={styles.month}>Março</Text>
        <Text style={styles.accountBalanceText}>Saldo em contas</Text>
        <Text style={styles.accountBalanceValue}>R$ 1000,00</Text>
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
    </View>
  );
};

export default Home;
