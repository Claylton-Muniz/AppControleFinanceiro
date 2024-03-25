import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type props = {
  width?: number;
  height?: number;
  color: string;
  style?: {};
};

const SvgSearch = ({width = 18, height = 18, color, style}: props) => (
  <View style={style}>
    <Svg width={width} height={height} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m17.25 17.25-3.981-3.981m0 0a7.336 7.336 0 0 0 0-10.371 7.334 7.334 0 1 0 0 10.37"
      />
    </Svg>
  </View>
);

export default SvgSearch;
