import {StyleSheet} from 'react-native';
import {logoSizes} from '../themes';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#5A3787',
  },
  logoArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: logoSizes.l,
    height: logoSizes.l,
    borderRadius: 140,
    marginBottom: 120,
  },
  choiceArea: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 8,
    marginHorizontal: 28,
    marginBottom: 20,
    borderRadius: 12,
  },
  textButton: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
