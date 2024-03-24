import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type props = {
  width?: number;
  height?: number;
  color: string;
};

const SvgTransactions = ({width = 26, height = 26, color}: props) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M8.667 16.792a.54.54 0 0 1 .541-.542H19.5a.542.542 0 0 1 0 1.083H9.208a.54.54 0 0 1-.541-.541m0 2.166a.54.54 0 0 1 .541-.541h4.334a.542.542 0 1 1 0 1.083H9.208a.54.54 0 0 1-.541-.542 M5.958 19.5a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25 M5.958 9.75a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25 M8.667 7.042a.54.54 0 0 1 .541-.542h11.917a.542.542 0 0 1 0 1.083H9.208a.54.54 0 0 1-.541-.541m0 2.166a.54.54 0 0 1 .541-.541h6.5a.542.542 0 1 1 0 1.083h-6.5a.54.54 0 0 1-.541-.542 M5.958 14.625a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25 M8.667 11.917a.54.54 0 0 1 .541-.542h8.667a.542.542 0 0 1 0 1.083H9.208a.54.54 0 0 1-.541-.541m0 2.166a.54.54 0 0 1 .541-.541h7.584a.542.542 0 1 1 0 1.083H9.208a.54.54 0 0 1-.541-.542"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgTransactions;
