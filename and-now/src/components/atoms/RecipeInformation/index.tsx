import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../../global/styles';
import { Typography } from '../../molecules/Typography';

type Props = {
  icon: JSX.Element;
  title: string;
  text: string;
}

export function RecipeInformation({icon, text, title}: Props) {
  return (
    <View style={{alignItems: 'center'}}>
      {icon}
      <Typography textType='text' textColor={COLORS.black10}>
        {title}
      </Typography>
      <Typography textType='text' textColor={COLORS.salmon10}>
        {text}
      </Typography>
    </View>
  );
}
