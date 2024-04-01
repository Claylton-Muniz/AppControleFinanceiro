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
  emptyPlanning: {
    alignItems: 'center',
    marginVertical: '64%',
  },
  emptyTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  emptyDescription: {
    color: '#717070',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#5A3787',
    paddingHorizontal: 60,
    paddingVertical: 2,
    borderRadius: 10,
  },
  textButton: {
    color: '#fff',
    fontWeight: '600',
  },
  link: {
    paddingTop: 7,
    color: '#5A3787',
    fontSize: 14,
    fontWeight: '600',
  },
  info: {
    flexDirection: 'row',
  },
  infoLeft: {
    // backgroundColor: 'red',
    width: '50%',
    marginTop: 10,
    marginBottom: 1,
  },
  infoRight: {
    // backgroundColor: 'blue',
    width: '50%',
    marginTop: 10,
    marginBottom: 1,
  },
  iconPadlock: {
    position: 'absolute',
    top: 9,
    left: 29,
  },
  iconFolder: {
    position: 'absolute',
    top: 9,
    right: 170,
  },
  infoTitle: {
    paddingTop: 12,
    flexDirection: 'row',
  },
  textTitle: {
    alignSelf: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  infoValue: {
    flexDirection: 'row',
  },
  textValue: {
    alignSelf: 'center',
    color: '#222222',
    fontWeight: '400',
  },
  line: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    width: '90%',
    marginVertical: 10,
  },
  despesaContainer: {
    flexDirection: 'row',
    marginVertical: 7,
    marginHorizontal: 30,
  },
  leftDespesa: {
    // backgroundColor: 'red',
    width: '50%',
    // marginLeft: 25,
  },
  rightDespesa: {
    // backgroundColor: 'blue',
    width: '50%',
    alignItems: 'flex-end',
  },
  textDespesa: {
    alignContent: 'center',
    marginRight: 0,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  receita: {
    color: 'green',
  },
  despesa: {
    color: 'red',
  },
});
