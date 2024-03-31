import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

import IconArrowSelect from 'assets/icons/SvgArrowSelect';

type props = {
  name: string;
  value: string;
  onPress: () => void;
};

const Select = ({name, value, onPress}: props) => {
  return (
    <>
      <Text style={styles.infoText}>{name}</Text>
      <TouchableOpacity
        style={styles.inputArea}
        activeOpacity={0.8}
        onPress={onPress}>
        <Text style={styles.inputLabel}>
          {value !== '' ? value : 'Selecione sua conta'}
        </Text>
        <IconArrowSelect style={styles.icon} color="#575757" />
      </TouchableOpacity>
    </>
  );
};

export default Select;
