import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../global/styles';
import { Typography } from '../../molecules/Typography';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { Item } from '../../../types/Item';
import { responsiveSize } from '../../../utils/responsiveSize';

type Props = {
  item: Item;
  selectItem: (itemSelected: Item) => void;
  // selectedItem: number;
  // checked: boolean;
}

export function CategoryItem({item, selectItem}: Props) {
  const [selectedItem, setSelectedItem] = useState();

  const checked = true;

  return (
    <TouchableOpacity 
      style={[styles.container, {backgroundColor: checked ? COLORS.blue1 : COLORS.white100}]}
      activeOpacity={0.8}
      onPress={() => selectItem(item)}
    >
      <View style={styles.img}>
        {item.img}
      </View>
      <View style={styles.content}>
        <Typography 
          textType='text' 
          textColor={checked ? COLORS.white100: COLORS.black} 
        >
          {item.item}
        </Typography>
        {
          checked && 
          <AntDesign name="checkcircle" size={24} color={COLORS.blue10} style={{marginRight: responsiveSize(2)}}/>
        }
      </View>
    </TouchableOpacity>
  );
}