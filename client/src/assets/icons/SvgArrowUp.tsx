import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type props = {
  width?: number;
  height?: number;
  color: string;
  style?: {};
};

const SvgArrowUp = ({width = 14, height = 16, color, style}: props) => (
  <View style={style}>
    <Svg width={width} height={height} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m7 1 6 6M7 1 1 7m6-6v14"
      />
    </Svg>
  </View>
);

export default SvgArrowUp;
