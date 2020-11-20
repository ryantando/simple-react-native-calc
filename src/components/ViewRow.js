import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  flexRow: {flexDirection: 'row'},
});

const ViewRow = ({children, ...props}) => (
  <View {...props} style={{...styles.flexRow, ...props.style}}>
    {children}
  </View>
);

ViewRow.propTypes = {
  ...View.PropTypes,
};

export default ViewRow;
