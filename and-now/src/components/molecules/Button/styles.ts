import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../../utils/responsiveSize';

export const styles = StyleSheet.create({
  container: {
    width: responsiveSize(32),
    height: responsiveSize(6),
    borderRadius: 24,

    alignItems: 'center',
    justifyContent: 'center',
  }
});