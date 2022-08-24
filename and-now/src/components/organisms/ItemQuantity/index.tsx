import React, { useState } from 'react';
import { TouchableOpacity, View, ViewProps } from 'react-native';
import { COLORS } from '../../../global/styles';
import { Typography } from '../../molecules/Typography';
import { styles } from './styles';
import { Item } from '../../../types/Item';
import { QuantityButton } from '../../molecules/QuantityButton';

type Props = ViewProps & {
  item: Item;
  itemWithNewQuantity: (item: Item) => void;
  ExcludeItem: (item: Item) => void;
}

export function ItemQuantity({item, itemWithNewQuantity, ExcludeItem, ...rest}: Props) {
  const [showOptions, setShowOptions] = useState(false);

  function selectQuantityItem(quantity: number) {
    itemWithNewQuantity({...item, quantidade: quantity})
  }

  function handleToggleVisibilityOfOptions() {
    setShowOptions(!showOptions);
  }

  function handleExcludeItem(item: Item) {
    ExcludeItem(item);
  }

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: COLORS.white100},
        rest.style
      ]}
      activeOpacity={0.8}
      onLongPress={() => handleToggleVisibilityOfOptions()}
    >
      <View style={styles.img}>
        {item.img}
      </View>
      <View style={styles.content}>
        <Typography
          textType='text'
          textColor={COLORS.black10}
        >
          {item.itemName}
        </Typography>

        {
          showOptions ?
          <TouchableOpacity
            style={styles.excludeButton}
            onPress={() => handleExcludeItem(item)}
          >
            <Typography
              textColor={COLORS.red10}
            >
              -
            </Typography>
          </TouchableOpacity>
          :
          <QuantityButton
            newQuantity={(quantity) => selectQuantityItem(quantity)}
            quantityType={item.tipoQuantidade}
          />
        }

      </View>
    </TouchableOpacity>
  );
}
