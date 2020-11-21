import React from 'react';
import {View, Text, Dimensions, StyleSheet, FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  colorGreen1,
  colorGreen2,
  colorWhite,
  colorBlue1,
  colorBlue2,
  colorSoftBlue1,
  colorSoftBlue2,
  colorGreen3,
  colorGreen4,
} from '../utils/colors';
import ButtonNativeFeedBack from '../components/Buttons';
import PlusIcon from '../svg/PlusIcon';
import CancelIcon from '../svg/CancelIcon';
import ClockIcon from '../svg/ClockIcon';
import ZeroIcon from '../svg/ZeroIcon';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  buttonContainer: {
    marginTop: height * 0.04,
  },
  buttonStyle: {
    borderRadius: 15,
    height: height * 0.12,
    width: width - 50,
  },
  buttonContainerContent: {
    height: height * 0.12,
    width: width - 50,
    borderRadius: 15,
    backgroundColor: colorGreen1,
  },
  buttonRight: {
    height: '100%',
    width: '70%',
    backgroundColor: colorGreen2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  text: {fontSize: 25, color: colorWhite, textAlign: 'center'},
  icon: {position: 'absolute', left: width * 0.07, top: height * 0.03},
});

const buttonList = [
  {
    text: 'Sum X & Y',
    navigateTo: 'Sum',
    bgLeft: colorGreen1,
    bgRight: colorGreen2,
    icon: <PlusIcon />,
  },
  {
    text: 'Multiply X & Y',
    navigateTo: 'Multiply',
    bgLeft: colorBlue1,
    bgRight: colorBlue2,
    icon: <CancelIcon />,
  },
  {
    text: 'First N\nPrime Number',
    navigateTo: 'FirstNPrime',
    bgLeft: colorSoftBlue1,
    bgRight: colorSoftBlue2,
    icon: <ClockIcon />,
  },
  {
    text: 'First N\nFibonacci Number',
    navigateTo: 'FirstNFibonacci',
    bgLeft: colorGreen3,
    bgRight: colorGreen4,
    icon: <ZeroIcon />,
  },
];

function Home(props) {
  const navigateTo = (test) => () => {
    props.navigation.navigate(test);
  };

  return (
    <FlatList
      data={buttonList}
      keyExtractor={(item) => item.navigateTo}
      contentContainerStyle={styles.container}
      renderItem={({item}) => (
        <ButtonNativeFeedBack
          onPress={navigateTo(item.navigateTo)}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonStyle}>
          <View
            style={{
              ...styles.buttonContainerContent,
              backgroundColor: item.bgLeft,
            }}>
            <View style={styles.icon}>
              <Animatable.View
                animation="swing"
                easing="ease-out"
                iterationCount="infinite">
                {item.icon}
              </Animatable.View>
            </View>
            <View
              style={{
                ...styles.buttonRight,
                backgroundColor: item.bgRight,
              }}>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </View>
        </ButtonNativeFeedBack>
      )}
    />
  );
}

export default Home;
