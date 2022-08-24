import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../global/styles';
import { responsiveSize } from '../../../utils/responsiveSize';
import { Typography } from '../Typography';

import { styles } from './styles';

type Props = {
  newQuantity: (quantity: number) => void;
  quantityType: string;

}

export function QuantityButton({newQuantity, quantityType}: Props) {
  const [value, setValue] = useState(0);

  function handleAddTheValue() {
    setValue(value + 50);
    newQuantity(value);
  }

  function handleDecreaseTheValue() {
    if((value - 50) < 0 ) {
      setValue(0);
      newQuantity(0);
      return;
    }
    setValue(value - 50);
    newQuantity(value);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleDecreaseTheValue}
      >
        <Typography style={{ color: COLORS.black10, lineHeight: responsiveSize(2.5) }}>
          -
        </Typography>
      </TouchableOpacity>

      <View
        style={{marginHorizontal: responsiveSize(0.5)}}
      >
        <Typography style={{ color: COLORS.black10 }}>
          {`${value}${quantityType}`}
        </Typography>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddTheValue}
      >
        <Typography style={{ color: COLORS.black10, lineHeight: responsiveSize(2.5) }}>
          +
        </Typography>
      </TouchableOpacity>
    </View>
  );
}
