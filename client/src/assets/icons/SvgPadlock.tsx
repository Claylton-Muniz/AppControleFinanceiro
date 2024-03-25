import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type props = {
  width?: number;
  height?: number;
  color: string;
  style?: {};
};

const SvgPadlock = ({width = 16, height = 18, color, style}: props) => (
  <View style={style}>
    <Svg width={width} height={height} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.938 6.813S2.688 1.188 8 1.188s4.063 5.625 4.063 5.625m-10.625.625h13.125v9.375H1.438z"
      />
    </Svg>
  </View>
);

export default SvgPadlock;
