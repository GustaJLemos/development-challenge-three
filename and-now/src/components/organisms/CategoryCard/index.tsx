import { TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../global/styles';
import { Typography } from '../../molecules/Typography';

import { styles } from './styles';

type Props = {
  image: JSX.Element;
  text: string;
  selectedCategory: boolean;
  onPress: () => void;
}

export function CategoryCard({ image, text, onPress, selectedCategory }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, {
        backgroundColor: selectedCategory ? COLORS.blue1 : COLORS.white100
      }]}
      onPress={onPress}
      activeOpacity={0.8 }
    >
      <View style={styles.img}>
        {image}
      </View>
      <Typography textType='text' textColor={selectedCategory ? COLORS.white100 : COLORS.black10}>
        {text}
      </Typography>
    </TouchableOpacity>
  );
}
