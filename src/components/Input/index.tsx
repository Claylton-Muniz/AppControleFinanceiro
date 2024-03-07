import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

type Props = {
  name: string;
  value: string;
  setValue: (key: string, value: string) => void;
  secureTextEntry: boolean;
};

export const Input = ({name, value, setValue, secureTextEntry}: Props) => {
  const [fieldNames] = useState<{[key: string]: string}>({
    email: 'email',
    senha: 'password',
  });

  return (
    <>
      <Text style={styles.infoText}>{name}</Text>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.inputLabel}
          placeholder={name}
          placeholderTextColor="#999"
          value={value}
          onChangeText={t => setValue(fieldNames[name.toLowerCase()], t)}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </>
  );
};
