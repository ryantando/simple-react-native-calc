/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render, fireEvent} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Sum from '../src/screens/Sum';
import Multiply from '../src/screens/Multiply';
import FirstNPrime from '../src/screens/FirstNPrime';
import FirstNFibonacci from '../src/screens/FirstNFibonacci';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

it('renders App', () => {
  renderer.create(<App />);
});

it('renders Sum', () => {
  renderer.create(<Sum />);
});

it('renders Multiply', () => {
  renderer.create(<Multiply />);
});

it('renders N Prime', () => {
  renderer.create(<FirstNPrime />);
});

it('renders N Fibonacci', () => {
  renderer.create(<FirstNFibonacci />);
});

describe('Testing SUM page', () => {
  test('Value 1 fill', () => {
    const component = render(<Sum />);
    const textInput = component.getByLabelText('val1');
    fireEvent.changeText(textInput, '23');
    expect(textInput.props.value).toBe('23');
  });
  test('Value 2 fill', () => {
    const component = render(<Sum />);
    const textInput = component.getByLabelText('val2');
    fireEvent.changeText(textInput, '25');
    expect(textInput.props.value).toBe('25');
  });
  test('Result value', () => {
    const component = render(<Sum />);
    const textInput1 = component.getByLabelText('val1');
    const textInput2 = component.getByLabelText('val2');
    const result = component.getByLabelText('result');
    fireEvent.changeText(textInput1, '100');
    fireEvent.changeText(textInput2, '200');
    expect(result.props.children).toBe('300');
  });
});

describe('Testing MULTIPLY page', () => {
  test('Value 1 fill', () => {
    const component = render(<Multiply />);
    const textInput = component.getByLabelText('val1');
    fireEvent.changeText(textInput, '23');
    expect(textInput.props.value).toBe('23');
  });
  test('Value 2 fill', () => {
    const component = render(<Multiply />);
    const textInput = component.getByLabelText('val2');
    fireEvent.changeText(textInput, '25');
    expect(textInput.props.value).toBe('25');
  });
  test('Result value', () => {
    const component = render(<Multiply />);
    const textInput1 = component.getByLabelText('val1');
    const textInput2 = component.getByLabelText('val2');
    const result = component.getByLabelText('result');
    fireEvent.changeText(textInput1, '5');
    fireEvent.changeText(textInput2, '2');
    expect(result.props.children).toBe('10');
  });
});

describe('Testing FIRST N Prime page', () => {
  test('Value 1 fill', () => {
    const component = render(<FirstNPrime />);
    const textInput = component.getByLabelText('val1');
    fireEvent.changeText(textInput, '23');
    expect(textInput.props.value).toBe('23');
  });
  test('Result value', () => {
    const component = render(<FirstNPrime />);
    const textInput1 = component.getByLabelText('val1');
    const result = component.getByLabelText('result');
    fireEvent.changeText(textInput1, '4');
    expect(result.props.children).toBe('2,3,5,7');
  });
});

describe('Testing FIRST N Fibonacci page', () => {
  test('Value 1 fill', () => {
    const component = render(<FirstNFibonacci />);
    const textInput = component.getByLabelText('val1');
    fireEvent.changeText(textInput, '23');
    expect(textInput.props.value).toBe('23');
  });
  test('Result value', () => {
    const component = render(<FirstNFibonacci />);
    const textInput1 = component.getByLabelText('val1');
    const result = component.getByLabelText('result');
    fireEvent.changeText(textInput1, '4');
    expect(result.props.children).toBe('0,1,1,2');
  });
});
