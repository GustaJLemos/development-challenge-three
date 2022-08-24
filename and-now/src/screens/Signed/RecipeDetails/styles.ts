import { StyleSheet } from 'react-native';
import { COLORS } from '../../../global/styles';
import { responsiveSize } from '../../../utils/responsiveSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: '100%',
    height: responsiveSize(15),
    padding: responsiveSize(1),

    justifyContent: 'space-between',

    backgroundColor: COLORS.blue10,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  scrollView: {
    flex: 1,
    paddingTop: responsiveSize(2),
    paddingHorizontal: responsiveSize(1),
  }
});
