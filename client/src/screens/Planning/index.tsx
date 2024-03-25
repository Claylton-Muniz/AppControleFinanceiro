import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {styles} from './styles';

import IconArrowLeft from 'assets/icons/SvgArrowLeft';
import IconArrowRight from 'assets/icons/SvgArrowRight';

const Planning = () => {
  return (
    <View>
      <Animatable.View animation="slideInDown">
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Planejamento</Text>
          <IconArrowLeft style={styles.iconArrowLeft} color="#fff" />
          <Text style={styles.month}>Março</Text>
          <IconArrowRight style={styles.iconArrowRight} color="#fff" />
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
