import React from 'react';
import generalStyles from '../styles/general.style';
import {View} from 'react-native';

const ResultContainer = ({bgLeftStyle, bgRightStyle, children}) => {
  return (
    <View style={generalStyles.resultContainer}>
      <View style={{...generalStyles.resultLeftBg, ...bgLeftStyle}} />
      <View style={{...generalStyles.resultRightBg, ...bgRightStyle}} />
      {children}
    </View>
  );
};

export default ResultContainer;
