import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  indicatorItem: {
    borderColor: "#f75627",
    borderWidth: 2,
    borderRadius: 40,
    height: 40,
    paddingHorizontal: 40,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  selectedIndicator: {
    backgroundColor: '#f75627'
  },
  indicatorItemText: {
    color: '#f75627'
  },
  selectedIndicatorText: {
    color: '#fff'
  },
  submitButton: {
    backgroundColor: '#f75627',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20
  }
});