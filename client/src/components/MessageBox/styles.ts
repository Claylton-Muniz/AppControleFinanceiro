import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  minimize: {
    display: 'none',
  },
  messageBox: {
    backgroundColor: '#E04F5F',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 7,
    marginHorizontal: 12,
    borderRadius: 10,
  },
  textError: {
    color: '#F8F8F8',
    fontSize: 15,
    alignSelf: 'center',
    paddingLeft: 10,
    marginBottom: 2,
  },
});
