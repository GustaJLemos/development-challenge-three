import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../../global/styles';
import { responsiveSize } from '../../../utils/responsiveSize';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveSize(2),
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  categorieItensList: {
    width: width,
    maxHeight: responsiveSize(16),
    marginLeft: responsiveSize(2),
  },
  categorieItensContent: {
    paddingRight: responsiveSize(2),

  },
  actionSheetContent: {
    width: width,
    height: height / 2,
    paddingVertical: responsiveSize(2),

    backgroundColor: COLORS.white100,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  errorActionSheet: {
    width: width,
    height: responsiveSize(20),
    paddingVertical: responsiveSize(2),
    paddingHorizontal: responsiveSize(1),
    alignItems: 'center',

    backgroundColor: COLORS.white100,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  flatList: {
    width: width,
    height: responsiveSize(20),
    marginBottom: responsiveSize(1)
  },
  emptyFlatList: {
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveSize(22)
  },
});
