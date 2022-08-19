import React from 'react';
import { FlatList, View } from 'react-native';
import { COLORS } from '../../../global/styles';
import { Item } from '../../../types/Item';
import { responsiveSize } from '../../../utils/responsiveSize';
import { Button } from '../../molecules/Button';
import { Typography } from '../../molecules/Typography';
import { CategoryItem } from '../CategoryItem';

type Props = {
  categoryItem: Item[];
}

export function ListItems({categoryItem}: Props) {
  return (
    <>
      <Typography 
        textType='title' 
        textColor={COLORS.black} 
        ml={responsiveSize(2)} 
      >
        Selecione os itens
      </Typography>
      <FlatList
        data={categoryItem}
        keyExtractor={(item) => String(item.id)}
        style={{ maxHeight: responsiveSize(24) }}

        // contentContainerStyle={{backgroundColor: 'yellow', maxHeight: responsiveSize(40)}}
        ItemSeparatorComponent={() => {
          return (
            <View style={{marginBottom: responsiveSize(0.1)}} />
          )
        }}
        renderItem={({item}) => {
          return (
          <CategoryItem 
            key={item.id}
            item={item}
            // selectItem={(itemSelected) => handleSelectItemById(itemSelected)}
            // selectedItem={selectedItems}
            // checked={item.id === selectedItems[0].id}
          />
          )
        }}
      />
      <Button style={{ alignSelf: 'center', marginTop: responsiveSize(1) }}>
        <Typography>
          Buscar receitas
        </Typography>
      </Button>
    </>
  );
}