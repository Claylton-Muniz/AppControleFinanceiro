import {StyleSheet} from 'react-native';
import {logoSizes} from '../themes';

export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#202020',
    flex: 1,
  },
  welcome: {
    alignItems: 'center',
    paddingTop: 35,
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
    paddingTop: 5,
    paddingHorizontal: 15,
  },
  confirm: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  button: {
    backgroundColor: '#8044e4',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
