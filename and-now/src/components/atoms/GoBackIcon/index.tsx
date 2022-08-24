import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { COLORS } from '../../../global/styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  iconColor?: string;
}

export function GoBackIcon({iconColor = COLORS.salmon10}: Props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}
    >
      <Ionicons name="ios-chevron-back" size={32} color={iconColor} />
    </TouchableOpacity>
  );
}
