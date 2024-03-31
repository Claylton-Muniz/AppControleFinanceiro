import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {styles} from './styles';

import {date} from '../date';

import IconArrowLeft from 'assets/icons/SvgArrowLeft';
import IconArrowRight from 'assets/icons/SvgArrowRight';

const Planning = () => {
  const [dateId, setDateId] = useState(new Date().getMonth());

  return (
    <View>
      <Animatable.View animation="slideInDown">
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Planejamento</Text>
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
      </Animatable.View>
      <Animatable.View animation="fadeInUp">
        {true && (
          <View style={styles.emptyPlanning}>
            <Text style={styles.emptyTitle}>Ops!</Text>
            <Text style={styles.emptyDescription}>
              Nenhum planejamento definido para esse mês.
            </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.textButton}>COPIAR DO MÊS ANTERIOR</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>DEFINIR NOVO PLANEJAMENTO</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animatable.View>
    </View>
  );
};

export default Planning;
