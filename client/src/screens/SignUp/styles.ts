import {StyleSheet} from 'react-native';
import {logoSizes} from '../themes';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#5A3787',
  },
  welcome: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  logo: {
    width: logoSizes.s,
    height: logoSizes.s,
    borderRadius: 100,
    marginTop: 4,
  },
  h1: {
    paddingVertical: 17,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
  },
  createAccount: {
    paddingTop: 15,
    paddingHorizontal: 25,
  },
});
