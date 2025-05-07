import { View, Text } from 'react-native';
import React from 'react';
import { GoogleInputProps } from '@/types/type';
import Map from './Map';

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  return (
    <View
      className={`relative z-50 flex flex-row items-center justify-center rounded-xl ${containerStyle} mb-5`}>
      <Text>Search</Text>
      <Map />
    </View>
  );
};

export default GoogleTextInput;
