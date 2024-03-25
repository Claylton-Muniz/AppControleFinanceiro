import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5A3787',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  titleHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 7,
    paddingLeft: 10,
  },
  search: {
    position: 'absolute',
    top: 7,
    right: 10,
  },
  iconArrowLeft: {
    position: 'absolute',
    top: 43,
    left: 150,
  },
  month: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    paddingVertical: 11,
  },
  iconArrowRight: {
    position: 'absolute',
    top: 43,
    right: 152,
  },
  info: {
    alignItems: 'center',
  },
  iconPadlock: {
    position: 'absolute',
    top: 20,
    left: 24,
  },
  iconFolder: {
    position: 'absolute',
    top: 20,
    right: 170,
  },
  infoTitle: {
    paddingTop: 12,
    flexDirection: 'row',
  },
  textTitle: {
    color: '#000',
    fontWeight: 'bold',
    marginHorizontal: 65,
  },
  infoValue: {
    flexDirection: 'row',
  },
  textValue: {
    color: '#222222',
    fontWeight: '400',
    marginRight: 90,
    marginHorizontal: 80,
  },
  line: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    width: '90%',
    marginVertical: 10,
  },
  emptyTransactions: {
    alignItems: 'center',
    marginVertical: '61%',
  },
  emptyTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  emptyDescription: {
    color: '#717070',
  },
});
