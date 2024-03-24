import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type props = {
  width?: number;
  height?: number;
  color: string;
  style?: {};
};

const SvgUser = ({width = 42, height = 42, color, style}: props) => (
  <View style={style}>
    <Svg width={width} height={height} fill="none">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M21 .167C9.494.167.167 9.494.167 21S9.494 41.833 21 41.833 41.833 32.506 41.833 21 32.506.167 21 .167m-7.292 15.625a7.293 7.293 0 1 1 14.586 0 7.293 7.293 0 0 1-14.586 0m20.33 15.591A16.64 16.64 0 0 1 21 37.667a16.64 16.64 0 0 1-13.038-6.284C11.34 28.96 15.948 27.25 21 27.25s9.66 1.71 13.037 4.133"
        clipRule="evenodd"
      />
    </Svg>
  </View>
);

export default SvgUser;
