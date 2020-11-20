import React from 'react';
import {View, Text, Dimensions, StyleSheet, FlatList} from 'react-native';
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

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
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
});

const buttonList = [
  {
    text: 'Sum X & Y',
    navigateTo: 'Sum',
    bgLeft: colorGreen1,
    bgRight: colorGreen2,
  },
  {
    text: 'Multiply X & Y',
    navigateTo: 'Multiply',
    bgLeft: colorBlue1,
    bgRight: colorBlue2,
  },
  {
    text: 'First N\nPrime Number',
    navigateTo: 'FirstNPrime',
    bgLeft: colorSoftBlue1,
    bgRight: colorSoftBlue2,
  },
  {
    text: 'First N\nFibonacci Number',
    navigateTo: 'FirstNFibonacci',
    bgLeft: colorGreen3,
    bgRight: colorGreen4,
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
