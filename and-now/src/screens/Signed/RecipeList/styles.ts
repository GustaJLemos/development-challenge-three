import { StyleSheet } from 'react-native';
import { COLORS } from '../../../global/styles';
import { responsiveSize } from '../../../utils/responsiveSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  COLORS.white10,
    alignItems: 'center',

    paddingVertical: responsiveSize(1),
  },
  flatList: {
    width: '100%',
    height: responsiveSize(20),
    marginBottom: responsiveSize(1),

  },
  emptyFlatList: {
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveSize(22)
  },
});
