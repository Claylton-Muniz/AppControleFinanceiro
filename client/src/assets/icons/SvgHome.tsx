import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type props = {
  width?: number;
  height?: number;
  color: string;
};

const SvgHome = ({width = 17, height = 19, color}: props) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 18V9.5h5V18 M1 6.95 8.5 1 16 6.95v9.35c0 .45-.176.883-.488 1.202a1.65 1.65 0 0 1-1.179.498H2.667a1.65 1.65 0 0 1-1.179-.498A1.72 1.72 0 0 1 1 16.3z"
    />
  </Svg>
);

export default SvgHome;
