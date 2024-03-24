import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5A3787',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  iconUser: {
    position: 'absolute',
    top: 7,
    left: 15,
  },
  month: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  accountBalanceText: {
    color: '#fff',
    paddingTop: 20,
    alignSelf: 'center',
    fontSize: 16,
  },
  accountBalanceValue: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  rowContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  iconArrowUp: {
    position: 'absolute',
    top: 119,
    left: 23,
  },
  iconArrowDown: {
    position: 'absolute',
    top: 119,
    left: '64%',
  },
  revenueText: {
    color: '#fff',
    marginTop: 25,
    marginHorizontal: 89,
    fontSize: 15,
    fontWeight: 'bold',
  },
  revenueValue: {
    color: '#fff',
    marginHorizontal: 99,
    fontSize: 13,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
});
