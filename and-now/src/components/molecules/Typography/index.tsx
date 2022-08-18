import { ReactNode } from 'react';
import { Text, TextProps, View } from 'react-native';
import { COLORS } from '../../../global/styles';
import { Margin } from '../../../types/Margin';
import { responsiveSize } from '../../../utils/responsiveSize';

import { styles } from './styles';

type Props = TextProps & Margin & {
  children: ReactNode;
  textType?: 'title' | 'subtitle' | 'text' | 'small';
  textColor?: string;
}

const TYPOGRAPHY_TYPES = {
  title: {
    fontSize: responsiveSize(2),
    fontFamily: 'Poppins_700Bold',
  },
  subtitle: {
    fontSize: responsiveSize(1.8),
    fontFamily: 'Poppins_600SemiBold',
  },
  text: {
    fontSize: responsiveSize(1.4),
    fontFamily: 'Poppins_400Regular',
  },
  small: {
    fontSize: responsiveSize(1.2),
    fontFamily: 'Poppins_400Regular',
    color: COLORS.grey10,
  },
};

export function Typography({ children, textType = 'text', textColor = COLORS.white100, mt, mr, mb, ml, ...rest }: Props) {
  function calculateTextStyle() {
    return TYPOGRAPHY_TYPES[textType];
  }

  return (
    <Text style={[
      styles.container, 
      {color: textColor, marginTop: mt, marginRight: mr, marginBottom: mb, marginLeft: ml},
      calculateTextStyle(), 
      rest.style]}>
      {children}
    </Text> 
  );
}