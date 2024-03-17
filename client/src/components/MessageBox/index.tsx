import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {styles} from './styles';
import Error from 'assets/icons/error.png';

type Props = {
  isVisible: boolean;
  children: string;
};

const MessageBox = ({isVisible, children}: Props) => {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    if (!isVisible) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 1000);
      clearTimeout(timeout);
    } else {
      setVisible(isVisible);
    }
  }, [isVisible]);

  return (
    <>
      {visible && (
        <Animatable.View
          animation={isVisible ? 'fadeInLeft' : 'fadeOutRight'}
          style={styles.container}>
          <View style={styles.messageBox}>
            <Image source={Error} />
            <Text style={styles.textError}>{children}</Text>
          </View>
        </Animatable.View>
      )}
    </>
  );
};

export default MessageBox;
