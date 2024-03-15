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
    marginVertical: 45,
  },
  logo: {
    width: logoSizes.s,
    height: logoSizes.s,
    borderRadius: 100,
    marginTop: 10,
  },
  h1: {
    paddingVertical: 17,
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
  },
  login: {
    paddingTop: 5,
    paddingHorizontal: 25,
  },
  confirm: {
    flex: 1,
    // backgroundColor: 'red',
    marginTop: 25,
    paddingBottom: 15,
  },
  button: {
    backgroundColor: '#5A3787',
    borderRadius: 20,
    marginHorizontal: 25,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
