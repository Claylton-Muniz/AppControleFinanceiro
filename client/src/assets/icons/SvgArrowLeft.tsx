import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type props = {
  width?: number;
  height?: number;
  color: string;
  style?: {};
};

const SvgArrowLeft = ({width = 8, height = 13, color, style}: props) => (
  <View style={style}>
    <Svg width={width} height={height} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.046 1.023 1.023 6 6 11.023"
      />
    </Svg>
  </View>
);

export default SvgArrowLeft;
