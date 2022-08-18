import { Image, ScrollView, View } from 'react-native';

import Logo from '../../../assets/Logo.svg';
import { CategoryCard } from '../../../components/CategoryCard';
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

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('');

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Card />
      {/* <View style={{backgroundColor: 'red', width: '100%'}}> */}
      <Typography textType='title' textColor={COLORS.black} mt={responsiveSize(2)} style={{alignSelf: 'flex-start'}}>
        Escolha seus ingredientes >
      </Typography>
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.categorieItensList}
        contentContainerStyle={styles.categorieItensContent}
      >
        <CategoryCard 
          text='Carnes e ovos' 
          image={<CarnesOvosSvg />}
          selectedCategory={selectedCategory === 'CarnesOvos'}
          onPress={() => setSelectedCategory('CarnesOvos')}
        />
        <CategoryCard 
          text='Peixes' 
          image={<FishSvg />}
          selectedCategory={selectedCategory === 'Peixes'}
          onPress={() => setSelectedCategory('Peixes')}
        />
        <CategoryCard 
          text='Carboidratos' 
          image={<PaoArrozSvg />}
          selectedCategory={selectedCategory === 'Carboidratos'}
          onPress={() => setSelectedCategory('Carboidratos')}
        />
        <CategoryCard 
          text='Condimentos' 
          image={<CondimentosSvg />}
          selectedCategory={selectedCategory === 'Condimentos'}
          onPress={() => setSelectedCategory('Condimentos')}
        />
        <CategoryCard 
          text='Laticínios e derivados' 
          image={<LeiteQueijoSvg />}
          selectedCategory={selectedCategory === 'Laticinios'}
          onPress={() => setSelectedCategory('Laticinios')}
        />
        <CategoryCard 
          text='Grãos' 
          image={<GraosSvg />}
          selectedCategory={selectedCategory === 'Graos'}
          onPress={() => setSelectedCategory('Graos')} 
        />
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
      {/* </View> */}
    </View> 
  );
}