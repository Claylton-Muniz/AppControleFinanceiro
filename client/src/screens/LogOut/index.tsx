import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {styles} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, StackActions} from '@react-navigation/native';

type RootStackParamList = {
  BankAccount: undefined;
  BankCard: undefined;
  CashInCome: undefined;
  SignIn: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const Logout = ({navigation}: Props) => {
  return (
    <View>
      <Animatable.View animation="slideInDown">
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Mais opções</Text>
        </View>
      </Animatable.View>
      <Animatable.View animation="fadeInUp">
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('CashInCome')}>
          <Text>Inserir receita mensal</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('BankAccount')}>
          <Text>Inserir conta bancária</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('BankCard')}>
          <Text>Inserir cartão</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            AsyncStorage.removeItem('@jwt_token');
            navigation.dispatch(StackActions.popToTop());
            navigation.navigate('SignIn');
          }}>
          <Text>Desconectar-se</Text>
        </TouchableOpacity>
        <View style={styles.line} />
      </Animatable.View>
    </View>
  );
};

export default Logout;
