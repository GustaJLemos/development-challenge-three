import { StyleSheet } from 'react-native';
import { COLORS } from '../../../global/styles';
import { responsiveSize } from '../../../utils/responsiveSize';

export const styles = StyleSheet.create({
  container: {
    width: responsiveSize(33),
    height: responsiveSize(12),
    paddingVertical: responsiveSize(1),
    paddingHorizontal: responsiveSize(2),
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: COLORS.blue10,
    flexDirection: 'row',
  },
  text: {
    flexDirection: 'column',
    alignItems: 'center',
  }
});