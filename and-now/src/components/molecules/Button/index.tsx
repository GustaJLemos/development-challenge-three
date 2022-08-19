import { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { COLORS } from '../../../global/styles';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  children: ReactNode;
  buttonColor?: string;
}

export function Button({children, buttonColor = COLORS.salmon10, ...rest}: Props) {
  return (
    <TouchableOpacity 
      activeOpacity={0.9}
      {...rest}
      style={[styles.container, {backgroundColor: buttonColor}, rest.style]} 
    >
      {children}
    </TouchableOpacity>
  );
}