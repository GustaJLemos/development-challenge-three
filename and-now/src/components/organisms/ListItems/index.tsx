import React, { useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import { COLORS } from '../../../global/styles';
import { Item } from '../../../types/Item';
import { responsiveSize } from '../../../utils/responsiveSize';
import { Button } from '../../molecules/Button';
import { Typography } from '../../molecules/Typography';
import { CategoryItem } from '../CategoryItem';

type Props = {
  categoryItem: Item[];
  selectedItens: (itens: Item[]) => void;
}

export function ListItems({categoryItem, selectedItens}: Props) {
  const [itens, setItens] = useState<Item[]>([]);

  function saveSelectedItem(item: Item) {
    setItens([...itens, item])
  }

  function unsaveSelectedItem(item: Item) {
    const newItens = itens.filter(arrayItem => {
      if(arrayItem !== item) {
        return arrayItem;
      }
    })
    setItens(newItens)
  }

  function handleSendItensSelected() {
    selectedItens(itens);
    SheetManager.hideAll();
  }

  return (
    <>
      <Typography
        textType='title'
        textColor={COLORS.black10}
        ml={responsiveSize(2)}
      >
        Selecione os itens
      </Typography>
        <ScrollView
          style={{ height: responsiveSize(24) }}
        >
          {categoryItem.map((item) => {
            return (
              <CategoryItem
                key={item.id}
                item={item}
                itemSelected={(item) => saveSelectedItem(item)}
                itemToDeselect={(item) => unsaveSelectedItem(item)}
              />
              )
          })
          }

        </ScrollView>
      <Button
        style={{ alignSelf: 'center', marginTop: responsiveSize(1) }}
        onPress={() => handleSendItensSelected()}
      >
        <Typography>
          Confirmar
        </Typography>
      </Button>
    </>
  );
}
