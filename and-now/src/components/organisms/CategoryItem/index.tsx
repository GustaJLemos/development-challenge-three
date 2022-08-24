import React, { useState } from 'react';
import { TouchableOpacity, View, ViewProps } from 'react-native';
import { COLORS } from '../../../global/styles';
import { Typography } from '../../molecules/Typography';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { Item } from '../../../types/Item';
import { responsiveSize } from '../../../utils/responsiveSize';

type Props = ViewProps & {
  item: Item;
  itemSelected?: (item: Item) => void;
  itemToDeselect?: (item: Item) => void;
}

export function CategoryItem({item, itemSelected, itemToDeselect, ...rest}: Props) {
  const [selectedItem, setSelectedItem] = useState<Item>();
  const [checked, setCheck] = useState<boolean>();

  function selectItem(item: Item) {
    setSelectedItem(item);
    itemSelected(item);
  }

  function deselectItem(item: Item) {
    setSelectedItem(null);
    itemToDeselect(item);
  }

  function handleSelectItem(item: Item) {
    selectedItem === item ? deselectItem(item) : selectItem(item)
    selectedItem === item ? setCheck(false) : setCheck(true);
  }

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: checked ? COLORS.blue1 : COLORS.white100}, rest.style]}
      activeOpacity={0.8}
      onPress={() => handleSelectItem(item)}
    >
      <View style={styles.img}>
        {item.img}
      </View>
      <View style={styles.content}>
        <Typography
          textType='text'
          textColor={checked ? COLORS.white100: COLORS.black10}
        >
          {item.itemName}
        </Typography>
        {
          checked &&
          <AntDesign name="checkcircle" size={24} color={COLORS.blue10} style={{marginRight: responsiveSize(2)}}/>
        }
      </View>
    </TouchableOpacity>
  );
}
