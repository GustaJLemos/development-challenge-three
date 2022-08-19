import { FlatList, Image, ScrollView, View } from 'react-native';

import Logo from '../../../assets/Logo.svg';
import { CategoryCard } from '../../../components/organisms/CategoryCard';
import { Card } from '../../../components/molecules/Card';
import { Typography } from '../../../components/molecules/Typography';
import { COLORS } from '../../../global/styles';
import { responsiveSize } from '../../../utils/responsiveSize';
import CarnesOvosSvg from '../../../assets/CarnesOvos.svg'
import FishSvg from '../../../assets/Fish.svg'
import PaoArrozSvg from '../../../assets/PaoArroz.svg'
import CondimentosSvg from '../../../assets/Condimentos.svg'
import LeiteQueijoSvg from '../../../assets/LeiteQueijo.svg'
import GraosSvg from '../../../assets/Graos.svg'
import { styles } from './styles';
import { useState } from 'react';
import { Category } from '../../../types/Category';
import { Button } from '../../../components/molecules/Button';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import { ItemList } from '../../../types/ItemList';
import { CategoryItem } from '../../../components/organisms/CategoryItem';
import { Item } from '../../../types/Item';

const ITENS_LIST: ItemList[] = [
  {
    text: 'Carnes e ovos',
    image: <CarnesOvosSvg />,
    category: 'CarnesOvos',
  },
  {
    text: 'Peixes',
    image: <FishSvg />,
    category: 'Peixes',
  },
  {
    text: 'Carboidratos',
    image: <PaoArrozSvg />,
    category: 'Carboidratos',
  },
  {
    text: 'Condimentoss',
    image: <CondimentosSvg />,
    category: 'Condimentos',
  },
  {
    text: 'Laticínios e derivados',
    image: <LeiteQueijoSvg />,
    category: 'Laticinios',
  },
  {
    text: 'Grãos',
    image: <GraosSvg />,
    category: 'Graos',
  },
]

const ITENS = {
  CarnesOvos: [
    {
      id: 1,
      item: 'Carne boa',
      quantidade: 0,
      img: <CarnesOvosSvg />,
    },
    {
      id: 2,
      item: 'Carne moida',
      quantidade: 0,
      img: <CarnesOvosSvg />,
    },
    {
      id: 3,
      item: 'Ovo',
      quantidade: 0,
      img: <CarnesOvosSvg />,
    },
  ],
  Peixes: [
    {
      item: 'Peixe bom',
      quantidade: 0,
    },
    {
      item: 'Baiacu',
      quantidade: 0,
    },
    {
      item: 'Bagre',
      quantidade: 0,
    },
  ],
  Carboidratos: [
    {
      item: 'Pão',
      quantidade: 0,
    },
    {
      item: 'Arroz',
      quantidade: 0,
    },
    {
      item: 'Macarrão',
      quantidade: 0,
    },
  ],
  Condimentos: [
    {
      item: 'Ketchup',
      quantidade: 0,
    },
    {
      item: 'Maionese',
      quantidade: 0,
    },
    {
      item: 'Mostarda',
      quantidade: 0,
    },
    {
      item: 'Pimenta',
      quantidade: 0,
    },
  ],
  Laticinios: [
    {
      item: 'Leite',
      quantidade: 0,
    },
    {
      item: 'Iogurte',
      quantidade: 0,
    },
    {
      item: 'Queijo',
      quantidade: 0,
    },
  ],
  Graos: [
    {
      item: 'Café',
      quantidade: 0,
    },
    {
      item: 'Trigo',
      quantidade: 0,
    },
    {
      item: 'Milho',
      quantidade: 0,
    },
    {
      item: 'Arroz',
      quantidade: 0,
    },
  ],
}

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('');
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  function handleSelectCategoryAndOpenActionSheet(category: Category) {
    setSelectedCategory(category);
    SheetManager.show('listItensByCategory_sheet') 
  }

  function handleSelectItemById(itemSelected: Item) {
    setSelectedItems([itemSelected]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Card />
      {/* <View style={{backgroundColor: 'red', width: '100%'}}> */}
      <Typography 
        textType='title' 
        textColor={COLORS.black} 
        mt={responsiveSize(2)} 
        style={{alignSelf: 'flex-start'}}
      >
        Escolha seus ingredientes >
      </Typography>
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.categorieItensList}
        contentContainerStyle={styles.categorieItensContent}
      >
        {
          ITENS_LIST.map((item) => {
            return (
              <CategoryCard 
                key={item.text}
                text={item.text} 
                image={item.image}
                selectedCategory={selectedCategory === item.category}
                onPress={() => handleSelectCategoryAndOpenActionSheet(item.category)}
              />
            )
          })
        }
      </ScrollView>
      <View style={{alignItems: 'center', justifyContent: 'center', height: responsiveSize(22)}}>
        <Typography textType='small'>
          Para usar é super fácil!
          basta escolher uma categoria.
          E selecionar os itens que você
          tem a disposição 
        </Typography>
      </View>
      <Button>
        <Typography>
          Buscar receitas
        </Typography>
      </Button>

      <ActionSheet
        id='listItensByCategory_sheet'
        bounceOnOpen={true}
        containerStyle={styles.actionSheetContent}
        onClose={() => setSelectedCategory('')}
      > 
        <Typography 
          textType='title' 
          textColor={COLORS.black} 
          ml={responsiveSize(2)} 
        >
          Selecione os itens
        </Typography>
        <FlatList
          data={ITENS[selectedCategory]}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
            <CategoryItem 
              key={item.id}
              item={item}
              selectItem={(itemSelected) => handleSelectItemById(itemSelected)}
              // selectedItem={selectedItems}
              // checked={item.id === selectedItems[0].id}
            />
            )
          }}
        >
          
        </FlatList>
      </ActionSheet>
      {/* </View> */}
    </View> 
  );
}