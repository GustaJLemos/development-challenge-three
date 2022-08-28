import { StyleSheet } from 'react-native';
import { COLORS } from '../../../global/styles';
import { responsiveSize } from '../../../utils/responsiveSize';

export const styles = StyleSheet.create({
  container: {
    width: responsiveSize(32),
    height: responsiveSize(13),
    paddingVertical: responsiveSize(0.5),
    paddingHorizontal: responsiveSize(2),
    borderRadius: 24,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  text: {
    width: '80%',

    flexDirection: 'column',
    alignItems: 'center',
  }
});
