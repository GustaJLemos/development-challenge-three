import { ReactNode } from 'react';
import { Text, TextProps, View } from 'react-native';
import { COLORS } from '../../../global/styles';
import { responsiveSize } from '../../../utils/responsiveSize';

import { styles } from './styles';

type Props = TextProps & {
  children: ReactNode;
  textType?: 'title' | 'subtitle' | 'text' | 'small';
  textColor?: string;
}

const TYPOGRAPHY_TYPES = {
  title: {
    fontSize: responsiveSize(2.4),
    fontFamily: 'Poppins_700Bold',
  },
  subtitle: {
    fontSize: responsiveSize(2),
    fontFamily: 'Poppins_600SemiBold',
  },
  text: {
    fontSize: responsiveSize(1.6),
    fontFamily: 'Poppins_400Regular',
  },
  small: {
    fontSize: responsiveSize(1.2),
    fontFamily: 'Poppins_400Regular',
  },
};

export function Typography({ children, textType = 'text', textColor = COLORS.white, ...rest }: Props) {
  function calculateTextStyle() {
    return TYPOGRAPHY_TYPES[textType];
  }

  return (
    <Text style={[styles.container, calculateTextStyle(), {color: textColor}, rest.style]}>
      {children}
    </Text> 
  );
}