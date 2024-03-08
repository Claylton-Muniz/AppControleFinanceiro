import {StyleSheet} from 'react-native';
import {logoSizes} from '../themes';

export const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignContent: 'center',
    alignItems: 'center',
    width: logoSizes.login,
    height: logoSizes.login,
    borderRadius: 10,
    marginBottom: 120,
  },
});
