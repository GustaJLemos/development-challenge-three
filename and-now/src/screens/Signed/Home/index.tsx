import { useState } from 'react';

import { Dimensions, FlatList, Modal, ScrollView, View } from 'react-native';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';

import { CategoryCard } from '../../../components/organisms/CategoryCard';
import { Card } from '../../../components/molecules/Card';
import { Typography } from '../../../components/molecules/Typography';
import { Button } from '../../../components/molecules/Button';
import { ListItems } from '../../../components/organisms/ListItems';
import { ItemQuantity } from '../../../components/organisms/ItemQuantity';
import { responsiveSize } from '../../../utils/responsiveSize';

import { COLORS } from '../../../global/styles';
import CarnesOvosSvg from '../../../assets/CarnesOvos.svg'
import FishSvg from '../../../assets/Fish.svg'
import PaoArrozSvg from '../../../assets/PaoArroz.svg'
import CondimentosSvg from '../../../assets/Condimentos.svg'
import LeiteQueijoSvg from '../../../assets/LeiteQueijo.svg'
import GraosSvg from '../../../assets/Graos.svg'
import { styles } from './styles';

import { Category } from '../../../types/Category';
import { ItemList } from '../../../types/ItemList';
import { Item } from '../../../types/Item';
import { recipeService } from '../../../http/services/recipeService';
import { Loading } from '../../../components/atoms/Loading';
import { Logo } from '../../../components/atoms/Logo';
import PratoMacarraoSvg from '../../../assets/PratoMacarrao.svg';
import { useNavigation } from '@react-navigation/native';
import { ErrorMessage } from '../../../components/atoms/ErrorMessage';

const ITENS_CATEGORY_LIST: ItemList[] = [
  {
    id: 1,
    text: 'Carnes e ovos',
    image: <CarnesOvosSvg />,
    category: 'CarnesOvos',
  },
  {
    id: 2,
    text: 'Peixes',
    image: <FishSvg />,
    category: 'Peixes',
  },
  {
    id: 3,
    text: 'Carboidratos',
    image: <PaoArrozSvg />,
    category: 'Carboidratos',
  },
  {
    id: 4,
    text: 'Condimentoss',
    image: <CondimentosSvg />,
    category: 'Condimentos',
  },
  {
    id: 5,
    text: 'Laticínios e derivados',
    image: <LeiteQueijoSvg />,
    category: 'Laticinios',
  },
  {
    id: 6,
    text: 'Grãos',
    image: <GraosSvg />,
    category: 'Graos',
  },
]

const ITENS = {
  CarnesOvos: [
    {
      id: 1,
      itemName: 'Carne boa',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <CarnesOvosSvg />,
    },
    {
      id: 2,
      itemName: 'Carne moida',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <CarnesOvosSvg />,
    },
    {
      id: 3,
      itemName: 'Ovo',
      quantidade: 0,
      tipoQuantidade: 'un',
      img: <CarnesOvosSvg />,
    },
    {
      id: 4,
      itemName: 'Carne de gado',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <CarnesOvosSvg />,
    },
  ],
  Peixes: [
    {
      id: 5,
      itemName: 'Peixe bom',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <FishSvg />
    },
    {
      id: 6,
      itemName: 'Baiacu',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <FishSvg />
    },
    {
      id: 7,
      itemName: 'Bagre',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <FishSvg />
    },
  ],
  Carboidratos: [
    {
      id: 8,
      itemName: 'Pão',
      quantidade: 0,
      tipoQuantidade: 'un',
      img: <PaoArrozSvg />
    },
    {
      id: 9,
      itemName: 'Arroz',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <PaoArrozSvg />
    },
    {
      id: 10,
      itemName: 'Macarrão',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <PaoArrozSvg />
    },
  ],
  Condimentos: [
    {
      id: 11,
      itemName: 'Ketchup',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <CondimentosSvg />
    },
    {
      id: 12,
      itemName: 'Maionese',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <CondimentosSvg />
    },
    {
      id: 13,
      itemName: 'Mostarda',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <CondimentosSvg />
    },
    {
      id: 14,
      itemName: 'Pimenta',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <CondimentosSvg />
    },
    {
      id: 22,
      itemName: 'Açucar',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <CondimentosSvg />
    },
  ],
  Laticinios: [
    {
      id: 15,
      itemName: 'Leite',
      quantidade: 0,
      tipoQuantidade: 'ml',
      img: <LeiteQueijoSvg />
    },
    {
      id: 16,
      itemName: 'Iogurte',
      quantidade: 0,
      tipoQuantidade: 'ml',
      img: <LeiteQueijoSvg />
    },
    {
      id: 17,
      itemName: 'Queijo',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <LeiteQueijoSvg />
    },
  ],
  Graos: [
    {
      id: 18,
      itemName: 'Café',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <GraosSvg />
    },
    {
      id: 19,
      itemName: 'Trigo',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <GraosSvg />
    },
    {
      id: 20,
      itemName: 'Milho',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <GraosSvg />
    },
    {
      id: 21,
      itemName: 'Arroz',
      quantidade: 0,
      tipoQuantidade: 'g',
      img: <GraosSvg />
    },
  ],
}

const {width} = Dimensions.get('screen')

export function Home() {
  //#region Hooks
  const [selectedCategory, setSelectedCategory] = useState<Category>('');
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [selectedQuantityItems, setSelectedQuantityItems] = useState<Item[]>([]);
  const [requestIsLoading, setRequestIsLoading] = useState(false);
  const navigation = useNavigation();
  //#endregion Hooks

  //#region Functions
  function handleSelectCategoryAndOpenActionSheet(category: Category) {
    setSelectedCategory(category);
    SheetManager.show('listItensByCategory_sheet')
  }

  function handleSelectItens(itens: Item[]) {
    const itemsThatNotAlreadyInTheArray = itens.filter((item) => {
      if(selectedItems.indexOf(item) === -1) {
        return item;
      }
    })

    setSelectedItems([...selectedItems, ...itemsThatNotAlreadyInTheArray]);
  }

  function searchAndExcludeItemInArray(item: Item) {
    const newItens = selectedItems.filter((selectedItems) => {
      if(selectedItems !== item) {
        return selectedItems;
      }
    })

    setSelectedItems(newItens);
    setSelectedQuantityItems(newItens);
  }

  function addNewItemToArray(item: Item) {
    const newItens = selectedItems.filter((selectedItems) => {
      if(selectedItems.id !== item.id) {
        return selectedItems;
      }
    })

    setSelectedQuantityItems([...newItens, item]);
  }

  function searchForRecipesWithTheseItems() {
    setRequestIsLoading(true);
    recipeService.searchRecipes(selectedQuantityItems)
    .then(res => {
      setRequestIsLoading(false);
      SheetManager.show('errorMessage_sheet')
      navigation.navigate('RecipeList', { recipe: res })
    })
    .catch(err => {
      setRequestIsLoading(false);
      SheetManager.show('errorMessage_sheet')
    });
  }
  //#endregion Functions

  if(requestIsLoading === true) {
    return (
      <Modal style={{backgroundColor: 'transparent', flex: 1}}>
        <Loading />
      </Modal>
    )
  }

  return (
    <View style={styles.container}>
      <Logo />

      <Card
        title='Bem-vindo(a)'
        text='Aqui você vai descobrir receitas
        perfeitas para aquela hora
        que não sabe o que fazer.'
        img={<PratoMacarraoSvg />}
      />

      <Typography
        textType='title'
        textColor={COLORS.black10}
        mt={responsiveSize(2)}
        style={{alignSelf: 'flex-start'}}
      >
        Escolha seus ingredientes
      </Typography>

      {/* Scroll com as categorias de itens */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.categorieItensList}
        contentContainerStyle={styles.categorieItensContent}
      >
        {
          ITENS_CATEGORY_LIST.map((item) => {
            return (
              <CategoryCard
                key={item.id}
                text={item.text}
                image={item.image}
                selectedCategory={selectedCategory === item.category}
                onPress={() => handleSelectCategoryAndOpenActionSheet(item.category)}
              />
            )
          })
        }
      </ScrollView>

      {/* FlatList com os itens selecionados */}
      <FlatList
        data={selectedItems}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: width }}
        ListEmptyComponent={
          <View style={styles.emptyFlatList}>
            <Typography textType='small'>
              Para usar é super fácil!
              basta escolher uma categoria.
              E selecionar os itens que você

              tem a disposição
            </Typography>
          </View>}
        renderItem={({item}) => {
          return (
            <ItemQuantity
              key={item.id}
              item={item}
              itemWithNewQuantity={(item) => addNewItemToArray(item)}
              ExcludeItem={(item) => searchAndExcludeItemInArray(item)}
            />
          )
        }}
      />

      <Button
        onPress={searchForRecipesWithTheseItems}
        disabled={!selectedItems.length}
        style={{opacity: !selectedItems.length ? 0.8 : 1}}
      >
        <Typography>
          Buscar receitas
        </Typography>
      </Button>

      {/* Action sheet da listagem de produtos de cada categoria */}
      <ActionSheet
        id='listItensByCategory_sheet'
        containerStyle={styles.actionSheetContent}
        onClose={() => setSelectedCategory('')}
        gestureEnabled={false}

      >
        <ListItems
          categoryItem={ITENS[selectedCategory]}
          selectedItens={(itens) => handleSelectItens(itens)}
        />
      </ActionSheet>

      {/* Action sheet da mensagem de erro */}
      <ActionSheet
        id='errorMessage_sheet'
        containerStyle={styles.errorActionSheet}
        gestureEnabled={false}
      >
        <ErrorMessage />
      </ActionSheet>
    </View>
  );
}
