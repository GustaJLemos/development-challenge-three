import { ReactNode } from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { COLORS } from '../../../global/styles';

type Props = {
  children: ReactNode;
}

export function BackgroundWrapper({children}: Props) {
  return (
    <LinearGradient 
      style={styles.container}
      colors={[COLORS.blue10, COLORS.blue100]}
    >
      {children}
    </LinearGradient>
  );
}