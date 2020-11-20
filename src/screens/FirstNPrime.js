import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, TextInput} from 'react-native';
import {colorGreen1, colorGreen2} from '../utils/colors';
import generalStyles from '../styles/general.style';
import ResultContainer from '../components/ResultContainer';
import {onlyAllowNumber, generatePrime} from '../utils/function';
import ViewRow from '../components/ViewRow';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  bgLeft: {backgroundColor: colorGreen1},
  bgRight: {backgroundColor: colorGreen2},
});

function FirstNPrime() {
  const [val1, setVal1] = useState('0');

  return (
    <ResultContainer bgLeftStyle={styles.bgLeft} bgRightStyle={styles.bgRight}>
      <View style={generalStyles.resultContainer}>
        <View style={{...generalStyles.resultLeftBg, ...styles.bgLeft}} />
        <View style={{...generalStyles.resultRightBg, ...styles.bgRight}} />
        <View style={{marginHorizontal: width * 0.2}}>
          <ViewRow>
            <Text style={generalStyles.operatorResult}>Find </Text>
            <TextInput
              accessibilityLabel="val1"
              keyboardType="numeric"
              value={`${val1}`}
              onChangeText={(e) => setVal1(onlyAllowNumber(e))}
              style={{...generalStyles.valSequence, color: colorGreen1}}
            />
          </ViewRow>
          <View style={generalStyles.alignSelfStart}>
            <Text style={generalStyles.operatorResult}>Prime Number </Text>
          </View>
          <Text style={generalStyles.operatorResult}>=</Text>
          <Text
            accessibilityLabel="result"
            style={{
              ...generalStyles.resultSequence,
              color: colorGreen1,
            }}>{`${generatePrime(val1)}`}</Text>
        </View>
      </View>
    </ResultContainer>
  );
}

export default FirstNPrime;
