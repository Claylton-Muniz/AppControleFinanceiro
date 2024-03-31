import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {styles} from './styles';

import {date} from '../date';

import IconSearch from 'assets/icons/SvgSearch';
import IconArrowLeft from 'assets/icons/SvgArrowLeft';
import IconArrowRight from 'assets/icons/SvgArrowRight';
import IconPadlock from '../../assets/icons/SvgPadlock';
import IconFolder from '../../assets/icons/SvgFolder';

const Transactions = () => {
  const [dateId, setDateId] = useState(new Date().getMonth());

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
          <IconPadlock style={styles.iconPadlock} color="#444444" />
          <View style={styles.infoTitle}>
            <Text style={styles.textTitle}>Saldo atual</Text>
            <Text style={styles.textTitle}>Balanço mensal</Text>
          </View>
          <IconFolder style={styles.iconFolder} color="#444444" />
          <View style={styles.infoValue}>
            <Text style={styles.textValue}>R$ 0,00</Text>
            <Text style={styles.textValue}>R$ 0,00</Text>
          </View>
          <View style={styles.line} />
        </View>
      </Animatable.View>
      <Animatable.View animation="fadeInUp">
        {true && (
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
