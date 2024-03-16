import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {NavigationProp} from '@react-navigation/native';

import {styles} from './styles';

import Logo from 'assets/logo.jpeg';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const FirstAccess = ({navigation}: Props) => {
  return (
    <View style={styles.body}>
      <View style={styles.logoArea}>
        <Animatable.Image
          animation="flipInY"
          source={Logo}
          style={styles.logo}
        />
      </View>
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.choiceArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.textButton}>Criar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text style={styles.textButton}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default FirstAccess;
