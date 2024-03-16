import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

type Props = {
  name: string;
  value: string;
  setValue: (key: string, value: string) => void;
};

export const InputDate = ({name, value, setValue}: Props) => {
  const [isFocus, setIsFocus] = useState({
    day: false,
    moth: false,
    year: false,
  });

  return (
    <>
      <Text style={styles.infoText}>{name}</Text>

      <View style={styles.inputDate}>
        <View
          style={[styles.inputDay, isFocus.day ? styles.borderActive : null]}>
          <TextInput
            style={styles.inputLabel}
            placeholder="Dia"
            keyboardType="numeric"
            value={value}
            onChangeText={t => setValue('day', t)}
            onFocus={() => setIsFocus(prevState => ({...prevState, day: true}))}
            onBlur={() => setIsFocus(prevState => ({...prevState, day: false}))}
            maxLength={2}
          />
        </View>
        <View
          style={[styles.inputMoth, isFocus.moth ? styles.borderActive : null]}>
          <TextInput
            style={styles.inputLabel}
            placeholder="Mês"
            keyboardType="numeric"
            value={value}
            onChangeText={t => setValue('moth', t)}
            onFocus={() =>
              setIsFocus(prevState => ({...prevState, moth: true}))
            }
            onBlur={() =>
              setIsFocus(prevState => ({...prevState, moth: false}))
            }
            maxLength={2}
          />
        </View>
        <View
          style={[styles.inputYear, isFocus.year ? styles.borderActive : null]}>
          <TextInput
            style={styles.inputLabel}
            placeholder="Ano"
            keyboardType="numeric"
            value={value}
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
