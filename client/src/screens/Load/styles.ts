import {StyleSheet} from 'react-native';
import {logoSizes} from '../themes';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#5A3787',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: logoSizes.m,
    height: logoSizes.m,
    borderRadius: 10,
    marginBottom: 120,
  },
});
