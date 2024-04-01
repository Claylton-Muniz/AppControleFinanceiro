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
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 10,
  },
  select: {
    position: 'absolute',
    top: 201,
    left: 40,
    borderRadius: 7,
    backgroundColor: '#C0C0C0',
  },
  selectVisible: {
    flex: 1,
  },
  selectText: {
    fontWeight: '600',
    fontSize: 15,
    paddingVertical: 5,
    paddingLeft: 12,
    paddingRight: 262,
  },
});
