import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type props = {
  width?: number;
  height?: number;
  color: string;
  style?: {};
};

const SvgArrowRight = ({width = 8, height = 13, color, style}: props) => (
  <View style={style}>
    <Svg width={width} height={height} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1.057 11.028 6.03 6 1 1.029"
      />
    </Svg>
  </View>
);
export default SvgArrowRight;
