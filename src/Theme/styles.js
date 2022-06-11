import {StyleSheet, Dimensions} from 'react-native';

const {WIDTH, HEIGHT} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: WIDTH,
    alignItems: 'center'
  },

  TouchableBtn1: {
    // width: '80%',
    padding: 10,
    backgroundColor: '#00c663',
    paddingHorizontal: 30,
    borderRadius: 6,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  TouchableText1: {
    color: 'white',
    textAlign: 'center',
  },

  TouchableText2: {
    color: '#777777',
    textAlign: 'center',
  },

  TouchableBtn2: {
    // width: '80%',
    padding: 10,
    backgroundColor: '#044AA0',
    paddingHorizontal: 30,
    borderRadius: 6,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  TouchableText2: {
    color: 'white',
  },

  input1: {
    backgroundColor: 'white',
    width: '80%',
    marginHorizontal: 30,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
    marginVertical: 5,
  },
});
