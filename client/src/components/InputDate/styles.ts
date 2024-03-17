import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    marginBottom: 2,
    marginLeft: 10,
  },
  inputDate: {
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  inputDay: {
    backgroundColor: '#D9D9D9',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  inputMoth: {
    backgroundColor: '#D9D9D9',
    marginHorizontal: 2,
  },
  inputYear: {
    backgroundColor: '#D9D9D9',
    borderTopRightRadius: 20,
    borderBottomEndRadius: 20,
  },
  inputLabel: {
    // backgroundColor: 'red',
    color: '#000',
    width: 118,
    textAlign: 'center',
  },
  borderError: {
    borderColor: '#E04F5F',
    borderWidth: 2,
  },
  borderActive: {
    borderColor: '#8044e4',
    borderWidth: 2,
  },
});
