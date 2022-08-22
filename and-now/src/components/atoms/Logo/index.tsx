import React from 'react';
import { View } from 'react-native';
import LogoSvg from '../../../assets/Logo.svg';

import { styles } from './styles';

export function Logo() {
  return (
    <View style={styles.container}>
        <LogoSvg />
    </View>
  );
}
