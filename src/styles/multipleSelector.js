import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  selectorContainer: {
    marginTop: 60,
    display: 'flex',
  },
  searchBarContainer: {
    marginTop: 5
  },
  selectorTitle: {
    color: '#f86438',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 0,
    alignSelf: 'center'
  },
  searchBar: {
    width: Dimensions.get('window').width * 0.7,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderTopWidth: 0,
    borderBottomColor: "#bebaba",
    height: 50
  },
  searchInput: {
    backgroundColor: '#fff',
  },
  itemsContainer: {
    alignSelf: 'center', 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginLeft: 10,
    marginTop: 30
  }
});