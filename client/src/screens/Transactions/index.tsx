import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

const Transactions = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Transações</Text>
      </View>
    </View>
  );
};

export default Transactions;
