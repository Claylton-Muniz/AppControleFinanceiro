import {StyleSheet} from 'react-native';
import {logoSizes} from '../themes';

export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#202020',
    flex: 1,
  },
  welcome: {
    // backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 35,
  },
  logo: {
    width: logoSizes.login,
    height: logoSizes.login,
    borderRadius: 10,
    marginTop: 50,
  },
  h1: {
    paddingVertical: 30,
    fontSize: 45,
    color: '#fff',
  },
  login: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'green',
    paddingTop: 5,
    marginHorizontal: 15,
  },
});
