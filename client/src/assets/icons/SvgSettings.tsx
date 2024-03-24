import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type props = {
  width?: number;
  height?: number;
  color: string;
};

const SvgSettings = ({width = 17, height = 4, color}: props) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill={color}
      d="M6.881 2c0 .396.095.782.273 1.111s.43.585.726.737c.296.151.622.19.936.114.314-.078.602-.268.829-.548s.38-.636.443-1.024a2.44 2.44 0 0 0-.092-1.155 1.97 1.97 0 0 0-.597-.898A1.4 1.4 0 0 0 8.5 0c-.43 0-.841.21-1.145.586C7.052.96 6.881 1.47 6.881 2m8.5-2c.32 0 .633.117.9.337.266.22.473.532.596.898.122.365.154.767.092 1.155a2.2 2.2 0 0 1-.443 1.024c-.227.28-.515.47-.83.548-.313.077-.639.037-.935-.114a1.75 1.75 0 0 1-.726-.737A2.35 2.35 0 0 1 13.762 2c0-.53.17-1.04.474-1.414C14.54.21 14.952 0 15.381 0M1.619 0c.32 0 .633.117.9.337.266.22.473.532.596.898.122.365.154.767.092 1.155a2.2 2.2 0 0 1-.443 1.024c-.227.28-.515.47-.83.548-.313.077-.639.037-.935-.114a1.75 1.75 0 0 1-.726-.737A2.35 2.35 0 0 1 0 2C0 1.47.17.96.474.586.778.21 1.19 0 1.62 0"
    />
  </Svg>
);
export default SvgSettings;
