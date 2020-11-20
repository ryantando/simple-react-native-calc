import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {colorGreen1} from '../utils/colors';

const defaultStyles = StyleSheet.create({
  white: {backgroundColor: '#fff'},
  primary: {backgroundColor: colorGreen1},
  radius: {borderRadius: 17},
  iconContainerDefault: {paddingRight: 5},

  nativeContainerDefault: {overflow: 'hidden', borderRadius: 15},
  nativeViewDefault: {alignItems: 'center', justifyContent: 'center'},
});

const nativeStyles = StyleSheet.create({
  small: {height: 35, paddingHorizontal: 10},
  medium: {height: 40, paddingHorizontal: 10},
  large: {height: 50, paddingHorizontal: 10},
  auto: {height: 'auto', width: 'auto', paddingHorizontal: 10},
});

const ButtonNativeFeedBack = (props) => {
  const {
    containerStyle = null,
    buttonStyle = null,
    size = 'medium',
    children,
    onPress = () => null,
  } = props;
  return (
    <View style={[defaultStyles.nativeContainerDefault, containerStyle]}>
      <TouchableNativeFeedback onPress={onPress}>
        <View
          style={[
            defaultStyles.nativeViewDefault,
            nativeStyles[size],
            buttonStyle,
          ]}>
          {children}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ButtonNativeFeedBack;

/* ButtonNativeFeedBackProps.PropTypes = {
  containerStyle: ;
  buttonStyle?: ViewStyle;
  size?: 'small' | 'medium' | 'large' | 'auto';
  background?:
    | 'bgWhite'
    | 'bgPrimary'
    | 'bgGrey'
    | 'bgMidGrey'
    | 'bgTransparent'
    | 'bgPrimary2'
    | 'bgBox';
  onPress?: any;
} */
