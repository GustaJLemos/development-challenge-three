import { StyleSheet } from 'react-native';
import { COLORS } from '../../../global/styles';
import { responsiveSize } from '../../../utils/responsiveSize';

export const styles = StyleSheet.create({
  container: {
    height: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: responsiveSize(2),
  },
  button: {
    width: responsiveSize(2.5),
    height: responsiveSize(2.5),
    backgroundColor: COLORS.grey1,
    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
