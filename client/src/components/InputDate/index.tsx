import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

type Props = {
  name: string;
  value: {day: string; month: string; year: string};
  setValue: (key: string, value: string) => void;
  isError: boolean;
};

export const InputDate = ({name, value, setValue, isError}: Props) => {
  const [isFocus, setIsFocus] = useState({
    day: false,
    month: false,
    year: false,
  });

  return (
    <>
      <Text style={styles.infoText}>{name}</Text>

      <View style={styles.inputDate}>
        <View
          style={[
            styles.inputDay,
            isFocus.day ? styles.borderActive : null,
            isError ? styles.borderError : null,
          ]}>
          <TextInput
            style={styles.inputLabel}
            placeholder="Dia"
            keyboardType="numeric"
            value={value.day}
            onChangeText={t => setValue('day', t)}
            onFocus={() => setIsFocus(prevState => ({...prevState, day: true}))}
            onBlur={() => setIsFocus(prevState => ({...prevState, day: false}))}
            maxLength={2}
          />
        </View>
        <View
          style={[
            styles.inputMoth,
            isFocus.month ? styles.borderActive : null,
            isError ? styles.borderError : null,
          ]}>
          <TextInput
            style={styles.inputLabel}
            placeholder="Mês"
            keyboardType="numeric"
            value={value.month}
            onChangeText={t => setValue('month', t)}
            onFocus={() =>
              setIsFocus(prevState => ({...prevState, month: true}))
            }
            onBlur={() =>
              setIsFocus(prevState => ({...prevState, month: false}))
            }
            maxLength={2}
          />
        </View>
        <View
          style={[
            styles.inputYear,
            isFocus.year ? styles.borderActive : null,
            isError ? styles.borderError : null,
          ]}>
          <TextInput
            style={styles.inputLabel}
            placeholder="Ano"
            keyboardType="numeric"
            value={value.year}
            onChangeText={t => setValue('year', t)}
            onFocus={() =>
              setIsFocus(prevState => ({...prevState, year: true}))
            }
            onBlur={() =>
              setIsFocus(prevState => ({...prevState, year: false}))
            }
            maxLength={41}
          />
        </View>
      </View>
    </>
  );
};
