/* eslint-disable radix */
import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, TextInput} from 'react-native';
import {colorGreen1, colorGreen2} from '../utils/colors';
import generalStyles from '../styles/general.style';
import ResultContainer from '../components/ResultContainer';
import {onlyAllowNumber} from '../utils/function';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  bgLeft: {backgroundColor: colorGreen1},
  bgRight: {backgroundColor: colorGreen2},
});

function Multiply() {
  const [val1, setVal1] = useState('0');
  const [val2, setVal2] = useState('0');

  return (
    <ResultContainer bgLeftStyle={styles.bgLeft} bgRightStyle={styles.bgRight}>
      <View style={generalStyles.resultContainer}>
        <View style={{...generalStyles.resultLeftBg, ...styles.bgLeft}} />
        <View style={{...generalStyles.resultRightBg, ...styles.bgRight}} />
        <View style={{marginHorizontal: width * 0.2}}>
          <TextInput
            accessibilityLabel="val1"
            keyboardType="numeric"
            value={`${val1}`}
            onChangeText={(e) => setVal1(onlyAllowNumber(e))}
            style={{...generalStyles.val, color: colorGreen1}}
          />
          <Text style={generalStyles.operatorResult}>x</Text>
          <TextInput
            accessibilityLabel="val2"
            keyboardType="numeric"
            value={`${val2}`}
            onChangeText={(e) => setVal2(onlyAllowNumber(e))}
            style={{...generalStyles.val, color: colorGreen1}}
          />
          <Text style={generalStyles.operatorResult}>=</Text>
          <Text
            accessibilityLabel="result"
            style={generalStyles.operatorResult}>{`${
            parseInt(val1) * parseInt(val2)
          }`}</Text>
        </View>
      </View>
    </ResultContainer>
  );
}

export default Multiply;
