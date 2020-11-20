import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Sum from './src/screens/Sum';
import {colorGreen1} from './src/utils/colors';
import Multiply from './src/screens/Multiply';
import FirstNPrime from './src/screens/FirstNPrime';
import FirstNFibonacci from './src/screens/FirstNFibonacci';

const Stack = createStackNavigator();

const defaultOptions = {
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({current: {progress}}) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Sum"
            component={Sum}
            options={() => ({
              title: 'Sum',
              headerTintColor: colorGreen1,
              ...defaultOptions,
            })}
          />
          <Stack.Screen
            name="Multiply"
            component={Multiply}
            options={() => ({
              title: 'Multiply',
              headerTintColor: colorGreen1,
              ...defaultOptions,
            })}
          />
          <Stack.Screen
            name="FirstNPrime"
            component={FirstNPrime}
            options={() => ({
              title: 'Find First N Prime',
              headerTintColor: colorGreen1,
              ...defaultOptions,
            })}
          />
          <Stack.Screen
            name="FirstNFibonacci"
            component={FirstNFibonacci}
            options={() => ({
              title: 'Find First N Fibonacci',
              headerTintColor: colorGreen1,
              ...defaultOptions,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
