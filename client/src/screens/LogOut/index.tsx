import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// import {NavigationProp} from '@react-navigation/native';

import {global} from '../global';
import {styles} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  SignIn: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const Logout = ({navigation}: Props) => {
  const handleLogOut = async () => {
    AsyncStorage.removeItem('@jwt_token');
    navigation.navigate('SignIn');
  };

  return (
    <View style={[global.body, styles.testLogout]}>
      <TouchableOpacity style={styles.test} onPress={handleLogOut}>
        <Text style={styles.testText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
