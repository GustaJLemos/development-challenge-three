import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { COLORS } from '../../../global/styles';
import { Recipe } from '../../../types/Recipe';
import { Logo } from '../../../components/atoms/Logo';
import { Card } from '../../../components/molecules/Card';
import { Typography } from '../../../components/molecules/Typography';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { responsiveSize } from '../../../utils/responsiveSize';
import { GoBackIcon } from '../../../components/atoms/GoBackIcon';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

type RouteParams = {
  recipe: Recipe[];
}

export function RecipeList() {
  const [completeRecipes, setCompleteRecipes] = useState<Recipe[]>([]);
  const [imcompleteRecipes, setImcompleteRecipes] = useState<Recipe[]>([]);
  const navigation = useNavigation();
  const params = useRoute();

  const { recipe } = params.params as RouteParams;


  function separeRecipesByItens() {
    const completeRecipes = recipe.filter((item) => {
      if(!item.itensFaltantes.length) {
        return item
      }
    })

    const imcompleteRecipes = recipe.filter((item) => {
      if(item.itensFaltantes.length > 0) {
        return item
      }
    })

    setCompleteRecipes(completeRecipes);
    setImcompleteRecipes(imcompleteRecipes);
  }

  useEffect(() => {
    separeRecipesByItens();
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginHorizontal: responsiveSize(3), alignItems: 'center', justifyContent: 'space-between' }}>
        <GoBackIcon />
        <Logo />
      </View>
      <Typography textType='title' textColor={COLORS.black10}>
        Receitas perfeitas!
      </Typography>
      <FlatList
        data={completeRecipes}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: width, alignItems: 'center' }}
        centerContent
        ListEmptyComponent={
          <View style={styles.emptyFlatList}>
            <Typography textType='small'>
              Receitas perfeitas não foram encontradas!
            </Typography>
          </View>
        }
        fadingEdgeLength={35}
        ItemSeparatorComponent={() =>
          <View style={{ marginBottom: responsiveSize(1) }}/>
        }
        renderItem={({item}) => {
          return (
            <Card
              key={item.id}
              title={item.nomeReceita}
              text='Todos os itens foram encontrados! Clique para saber mais.'
              img={<Feather name="check" size={50} color={COLORS.white10}/>}
              onPress={() => navigation.navigate('RecipeDetails', {recipeSelected: item, isCompleteRecipe: true})}
            />
          )
        }}
      />

      <Typography textType='title' textColor={COLORS.black10}>
        Receitas quase perfeitas!
      </Typography>
      <FlatList
        data={imcompleteRecipes}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: width, alignItems: 'center' }}
        ListEmptyComponent={
          <View style={styles.emptyFlatList}>
            <Typography textType='small'>
              Receitas quase perfeitas não foram encontradas!
            </Typography>
          </View>
        }
        fadingEdgeLength={35}
        ItemSeparatorComponent={() =>
          <View style={{ marginBottom: responsiveSize(1) }}/>
        }

        renderItem={({item}) => {
          return (
            <Card
              key={item.id}
              title={item.nomeReceita}
              text='Alguns itens faltaram... Clique para saber mais.'
              img={<Feather name="x-circle" size={50} color={COLORS.white10} />}
              backgroundColor={COLORS.salmon10}
              onPress={() => navigation.navigate('RecipeDetails', {recipeSelected: item, isCompleteRecipe: false})}
            />
          )
        }}
      />
    </View>
  );
}
