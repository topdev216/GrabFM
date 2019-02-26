import { StyleSheet } from 'react-native'

const GLOBAL_MARGIN = 10;

export const styles = StyleSheet.create({
  itemContainer : {
    marginLeft: GLOBAL_MARGIN,
    marginRight: GLOBAL_MARGIN,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 90,
    shadowOffset:{  width: 3,  height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowRadius: 7,
    marginTop: 20,
    borderBottomWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemLabel: {
    color: '#f86438',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 0
  },
  itemInput: {
    marginTop: 5,
    height: 19,
    color: '#444',
    fontSize: 18,
    fontWeight: '500'
  },
  signInBut: {
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f86438',
    borderRadius: 15,
    marginTop: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 15
  }
});