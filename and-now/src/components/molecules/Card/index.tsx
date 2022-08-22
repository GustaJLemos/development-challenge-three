import { View } from 'react-native';
import { COLORS } from '../../../global/styles';
import { Typography } from '../Typography';

import { styles } from './styles';

type Props = {
  title: string;
  text: string;
  img: JSX.Element;
}

export function Card({title, text, img}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Typography textType='subtitle' style={{ alignSelf: 'flex-start'}}>
          {title}
        </Typography>
        <Typography textType='small' style={{ alignSelf: 'flex-start'}}>
          {text}
        </Typography>
      </View>
      <View style={{width: '20%'}}>
        {img}
      </View>
    </View>
  );
}
