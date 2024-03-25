import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import Svg, {G, Path, Defs} from 'react-native-svg';

type props = {
  width?: number;
  height?: number;
  color: string;
  focused: boolean;
};

const SvgPlus = ({width = 20, height = 20, color, focused}: props) => (
  <View style={[styles.container, focused ? styles.active : styles.inactive]}>
    <Svg width={width} height={height} fill="none">
      <G filter="url(#tranform_svg__a)">
        <Path
          fill={color}
          d="M14.5 4.5h-3v-3a1.5 1.5 0 1 0-3 0l.053 3H5.5a1.5 1.5 0 0 0 0 3l3.053-.053L8.5 10.5a1.5 1.5 0 0 0 3 0V7.447l3 .053a1.5 1.5 0 0 0 0-3"
        />
      </G>
      <Defs />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 30,
    alignItems: 'center',
    paddingTop: 7,
    borderRadius: 30,
    marginBottom: 30,
  },
  active: {
    backgroundColor: '#52327B',
  },
  inactive: {
    backgroundColor: '#5A3787',
  },
});

export default SvgPlus;
