import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

type Props = {
  name: string;
  value: string;
  setValue: (key: string, value: string) => void;
  isError: boolean;
  secureTextEntry: boolean;
};

export const Input = ({
  name,
  value,
  setValue,
  isError,
  secureTextEntry,
}: Props) => {
  const [fieldNames] = useState<{[key: string]: string}>({
    nome: 'name',
    email: 'email',
    senha: 'password',
  });

  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <Text style={styles.infoText}>{name}</Text>
      <View
        style={[
          styles.inputArea,
          isFocus ? styles.borderActive : null,
          isError ? styles.borderError : null,
        ]}>
        <TextInput
          style={styles.inputLabel}
          placeholder={name}
          placeholderTextColor="#575757"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChangeText={t => setValue(fieldNames[name.toLowerCase()], t)}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </>
  );
};
