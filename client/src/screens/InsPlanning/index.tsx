import React, {useState} from 'react';
import {View, Image, Text, Modal, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {NavigationProp} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import {styles} from './styles';
import Logo from 'assets/logo/logo.jpeg';

import {Input} from 'components/Input';
import Select from 'components/Select';

import {date} from '../date';

type RootStackParamList = {
  TabRoutes: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const InsPlanning = ({navigation}: Props) => {
  const [objetivo, setObjetivo] = useState('');
  const [month, setMonth] = useState({id: 0, name: ''});
  const [visible, setVisible] = useState(false);

  const handleAddPlan = async () => {
    const token = await AsyncStorage.getItem('@jwt_token');

    const response = await axios.get('/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const resPost = await axios.post('/api/planning', {
      idUser: response.data.id,
      objetivo: objetivo,
      month: month.id,
    });

    console.log(resPost.data);
    navigation.navigate('TabRoutes');
  };

  return (
    <View style={styles.body}>
      <Animatable.View animation="fadeInLeft" style={styles.welcome}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.h1}>Planejamento</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.container}>
        <View style={styles.createAccount}>
          <Select
            name="Mês"
            value={month.name}
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
              {date.months.map(m => (
                <TouchableOpacity
                  onPress={() => {
                    setMonth({id: m.month, name: m.name});
                    setVisible(false);
                  }}
                  key={m.month}>
                  <Text style={styles.selectText}>{m.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Modal>
          <Input
            name="Objetivo"
            value={objetivo}
            setValue={setObjetivo}
            object={false}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.confirm}>
          <TouchableOpacity style={styles.button} onPress={handleAddPlan}>
            <Text style={styles.textButton}>Adicionar planejamento</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default InsPlanning;
