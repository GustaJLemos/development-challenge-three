import React from 'react';
import { View } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import { COLORS } from '../../../global/styles';
import { Button } from '../../molecules/Button';
import { Typography } from '../../molecules/Typography';

import { styles } from './styles';

export function ErrorMessage() {
  return (
    <View style={styles.container}>
        <Typography
          textType='subtitle'
          textColor={COLORS.black10}
        >
          Ooops... tivemos um problema!
        </Typography>
        <Typography
          textType='text'
          textColor={COLORS.black10}
        >
          Não foi possível pesquisar seus itens.{'\n'}
          Por favor tente novamente mais tarde!
        </Typography>
        <Button onPress={() => SheetManager.hideAll()}>
          <Typography>
            Ok!
          </Typography>
        </Button>
    </View>
  );
}
