import { View } from 'react-native';
import { COLORS } from '../../../global/styles';
import { Typography } from '../Typography';
import PratoMacarraoSvg from '../../../assets/PratoMacarrao.svg';
import { styles } from './styles';

export function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Typography textType='subtitle' style={{ alignSelf: 'flex-start'}}>
          Bem-vindo(a)
        </Typography>
        <Typography textType='small' style={{ alignSelf: 'flex-start'}}>
          Aqui você vai descobrir receitas{'\n'}
          perfeitas para aquela hora{'\n'}
          que não sabe o que fazer.
        </Typography>
      </View>
      <PratoMacarraoSvg />
    </View>
  );
}