import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { GoBackIcon } from '../../../components/atoms/GoBackIcon';
import { Typography } from '../../../components/molecules/Typography';
import { COLORS } from '../../../global/styles';
import { Recipe } from '../../../types/Recipe';
import { responsiveSize } from '../../../utils/responsiveSize';
import { MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { RecipeInformation } from '../../../components/atoms/RecipeInformation';

type RouteParams = {
  recipeSelected: Recipe;
  isCompleteRecipe: boolean;
}

export function RecipeDetails() {
  const params = useRoute();

  const { recipeSelected, isCompleteRecipe } = params.params as RouteParams;
  const [missingItens, setMissingItens] = useState<string[]>([]);

  function findWhichItemsAreMissing() {
    const missingItens = recipeSelected.ingredientes.filter((item) => {
      if(recipeSelected.itensFaltantes.indexOf(item) !== -1) {
        return item;
      }
    })

    setMissingItens(missingItens);
  }

  useEffect(() => {
    findWhichItemsAreMissing();
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={isCompleteRecipe ? COLORS.blue10 : COLORS.salmon10}
      />
      <View style={[
        styles.card,
        {backgroundColor: isCompleteRecipe ? COLORS.blue10 : COLORS.salmon10}
      ]}>
        <GoBackIcon
          iconColor={COLORS.white100}
        />
        <Typography textType='title' textColor={COLORS.white100} style={{alignSelf: 'center'}}>
          {recipeSelected.nomeReceita}
        </Typography>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <RecipeInformation
            title='Preparo'
            text={recipeSelected.tempoPreparo}
            icon={<MaterialCommunityIcons name="clock-time-eight-outline" size={48} color={COLORS.salmon10} />}
          />
          <RecipeInformation
            title='Rendimento'
            text={recipeSelected.rendimento}
            icon={<MaterialIcons name="lunch-dining" size={48} color={COLORS.salmon10} />}
          />
          <RecipeInformation
            title='Favoritos'
            text={String(289)}
            icon={<Feather name="heart" size={48} color={COLORS.salmon10} />}
          />
        </View>
        <View style={{marginBottom: responsiveSize(4)}}>
          <Typography
            textType='title'
            textColor={COLORS.black10}
            style={{alignSelf: 'center'}}
            mt={responsiveSize(2)}
          >
            Ingredientes
          </Typography>
          {recipeSelected.ingredientes.map((item, index) => {
            return (
              <Typography
                key={index}
                textType='text'
                textColor={item === missingItens[index] ? COLORS.salmon10 : COLORS.black10}
              >
                - {item}
              </Typography>
            )
          })}

          <Typography textType='title' textColor={COLORS.black10} style={{alignSelf: 'center'}}>
            Modo de preparo
          </Typography>
          {recipeSelected.modoPreparo.map((item, index) => {
            return (
              <Typography
                key={index}
                textType='text'
                textColor={COLORS.black10}
              >
                {item}
              </Typography>
            )
          })}
        </View>
      </ScrollView>
    </View>
  );
}
