import {StyleSheet} from 'react-native';
import {colorWhite} from '../utils/colors';

const generalStyles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    /* alignItems: 'center', */ justifyContent: 'center',
  },
  resultLeftBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '30%',
  },
  resultRightBg: {
    position: 'absolute',
    top: 0,
    left: '30%',
    height: '100%',
    width: '70%',
  },
  operatorResult: {fontSize: 35, color: colorWhite, alignSelf: 'center'},
  val: {
    backgroundColor: colorWhite,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 30,
    minWidth: 50,
  },
  valSequence: {
    backgroundColor: colorWhite,
    fontWeight: 'bold',
    fontSize: 25,
    minWidth: 40,
    borderRadius: 5,
    textAlign: 'center',
  },
  resultSequence: {
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 25,
    padding: 5,
    borderRadius: 5,
  },
  alignSelfStart: {alignSelf: 'flex-start'},
});

export default generalStyles;
