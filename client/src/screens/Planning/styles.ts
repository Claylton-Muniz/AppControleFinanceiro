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
});
