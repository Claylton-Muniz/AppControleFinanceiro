import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type props = {
  width?: number;
  height?: number;
  color: string;
  style?: {};
};

const SvgArrowDown = ({width = 14, height = 16, color, style}: props) => (
  <View style={style}>
    <Svg width={width} height={height} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.026 15 1.004 9.022M7.026 15l5.978-6.022M7.026 15 6.974 1"
      />
    </Svg>
  </View>
);

export default SvgArrowDown;
