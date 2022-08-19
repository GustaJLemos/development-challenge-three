import { StyleSheet } from 'react-native';
import { COLORS } from '../../../global/styles';
import { responsiveSize } from '../../../utils/responsiveSize';

export const styles = StyleSheet.create({
  container: {
    width: responsiveSize(15),
    height: responsiveSize(15),
    padding: responsiveSize(1),
    marginLeft: responsiveSize(1),
    borderRadius: 24,

    justifyContent: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  img: {
    alignItems: 'flex-end',
    width: '100%',
    height: '60%',
  }
});