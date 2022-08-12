import { ActivityIndicator, View } from 'react-native';
import { COLORS } from '../../../global/styles';

import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
        <ActivityIndicator size='large' color={COLORS.blue100}/>
    </View>
  );
}