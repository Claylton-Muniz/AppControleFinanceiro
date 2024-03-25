import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type props = {
  width?: number;
  height?: number;
  color: string;
  style?: {};
};

const SvgFolder = ({width = 18, height = 14, color, style}: props) => (
  <View style={style}>
    <Svg width={width} height={height} fill="none">
      <Path
        fill={color}
        d="M15.875 2.625H9.259L7.125.491a1.24 1.24 0 0 0-.884-.366H2.125a1.25 1.25 0 0 0-1.25 1.25v11.298a1.203 1.203 0 0 0 1.202 1.202h13.868a1.18 1.18 0 0 0 1.18-1.18v-8.82a1.25 1.25 0 0 0-1.25-1.25m-13.75-1.25h4.116l1.25 1.25H2.125zm13.75 11.25H2.125v-8.75h13.75z"
      />
    </Svg>
  </View>
);
export default SvgFolder;
