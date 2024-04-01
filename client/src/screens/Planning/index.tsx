import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {NavigationProp} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {url} from '../urlBase';

import {styles} from './styles';

import {date} from '../date';

import IconArrowLeft from 'assets/icons/SvgArrowLeft';
import IconArrowRight from 'assets/icons/SvgArrowRight';
import IconPadlock from 'assets/icons/SvgPadlock';
import IconFolder from 'assets/icons/SvgFolder';

type RootStackParamList = {
  InsPlanning: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

type Despesa = {
  id: string;
  transaction: string;
  valor: number;
  type: string;
};

axios.defaults.baseURL = url.base;

const Planning = ({navigation}: Props) => {
  const [planning, setPlanning] = useState(false);
  const [objetivo, setObjetivo] = useState(0);
  const [gastos, setGasto] = useState(0);
  const [dateId, setDateId] = useState(new Date().getMonth());
  const [despesas, setDespesas] = useState<Despesa[]>([]);

  useEffect(() => {
    console.log('mudou', dateId);

    const getPlanning = async () => {
      const token = await AsyncStorage.getItem('@jwt_token');

      const response = await axios.get('/api/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const resGet = await axios.get(
        `api/planning/${response.data.id}/${dateId + 1}`,
      );

      // console.log(resGet.data);

      if (resGet.data.length) {
        setPlanning(true);
        setObjetivo(resGet.data[0].objetivo);
      } else {
        setPlanning(false);
      }

      const resGetDes = await axios.get(
        `/api/transactions/${response.data.id}/${dateId + 1}/Despesa`,
      );

      setDespesas(resGetDes.data);

      console.log();

      if (resGetDes.data.length) {
        let total = 0;
        resGetDes.data.map((gasto: Despesa) => {
          console.log(gasto);
          total += gasto.valor;
        });
        setGasto(total);
      } else {
        setGasto(0);
      }
    };

    getPlanning();
  }, [dateId, planning]);

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
        {planning ? (
          <>
            <View style={styles.info}>
              <View style={styles.infoLeft}>
                <IconPadlock style={styles.iconPadlock} color="#444444" />
                <Text style={styles.textTitle}>Objetivo</Text>
                <Text style={styles.textValue}>
                  R$ {objetivo.toFixed(2).replace('.', ',')}
                </Text>
              </View>
              <View style={styles.infoRight}>
                <IconFolder style={styles.iconFolder} color="#444444" />
                <Text style={styles.textTitle}>Gastos atuais</Text>
                <Text style={styles.textValue}>
                  R$ {gastos.toFixed(2).replace('.', ',')}
                </Text>
              </View>
            </View>
            <View style={styles.line} />
            {despesas.length ? (
              <>
                {despesas.map(despesa => (
                  <View key={despesa.id}>
                    <View style={styles.despesaContainer}>
                      <View style={styles.leftDespesa}>
                        <Text style={styles.textDespesa}>
                          {despesa.transaction}
                        </Text>
                      </View>
                      <View style={styles.rightDespesa}>
                        <Text style={styles.despesa}>
                          R$ {despesa.valor.toFixed(2).replace('.', ',')}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.line} />
                  </View>
                ))}
              </>
            ) : (
              <View style={styles.emptyPlanning}>
                <Text style={styles.emptyTitle}>Ops!</Text>
                <Text style={styles.emptyDescription}>
                  Você ainda não teve despesas esse mês.
                </Text>
              </View>
            )}
          </>
        ) : (
          <View style={styles.emptyPlanning}>
            <Text style={styles.emptyTitle}>Ops!</Text>
            <Text style={styles.emptyDescription}>
              Nenhum planejamento definido para esse mês.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('InsPlanning')}
              activeOpacity={0.8}>
              <Text style={styles.textButton}>DEFINIR NOVO PLANEJAMENTO</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animatable.View>
    </View>
  );
};

export default Planning;
