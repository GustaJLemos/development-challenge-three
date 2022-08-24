import { TouchableOpacity, View, ViewProps } from 'react-native';
import { COLORS } from '../../../global/styles';
import { Typography } from '../Typography';

import { styles } from './styles';

type Props = ViewProps & {
  title: string;
  text: string;
  img: JSX.Element;
  onPress?: () => void;
  backgroundColor?: string;
}

export function Card({title, text, img, onPress, backgroundColor = COLORS.blue10, ...rest}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.container, {backgroundColor: backgroundColor}, rest.style]}
    >
      <View style={styles.text}>
        <Typography textType='subtitle' style={{ alignSelf: 'flex-start'}}>
          {title}
        </Typography>
        <Typography textType='small' style={{ alignSelf: 'flex-start'}}>
          {text}
        </Typography>
      </View>
      <View style={{width: '30%', alignItems: 'center', justifyContent: 'center'}}>
        {img}
      </View>
    </TouchableOpacity>
  );
}
