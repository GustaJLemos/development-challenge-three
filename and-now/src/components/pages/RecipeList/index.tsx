import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { COLORS } from '../../../global/styles';
import { Recipe } from '../../../types/Recipe';
import { Logo } from '../../atoms/Logo';
import { Card } from '../../molecules/Card';
import { Typography } from '../../molecules/Typography';
import ConfirmSvg from '../../../assets/Confirm.svg';
import { styles } from './styles';

const { width } = Dimensions.get('screen');

type Props = {
  recipes: Recipe[],
  disableModal: () => void;
}

export function RecipeList({recipes, disableModal}: Props) {
  return (
    <View style={styles.container}>
      <Logo />
      <Typography textType='title' textColor={COLORS.black10}>
      Encontramos as receitas{'\n'}
        perfeitas para você!
      </Typography>
      <FlatList
        data={recipes}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: width }}
        // ListEmptyComponent={
        //   <View style={styles.emptyFlatList}>
        //     <Typography textType='small'>
        //       Não encontramos receitas
        //     </Typography>
        //   </View>}
        renderItem={({item}) => {
          return (
            <Card
              title={item.nomeReceita}
              text='Todos os itens foram encontrados! Clique para saber mais.'
              img={<ConfirmSvg />}
            />
          )
        }}
      />
    </View>
  );
}
