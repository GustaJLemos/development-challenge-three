import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../../global/styles';
import { responsiveSize } from '../../../utils/responsiveSize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: responsiveSize(0.5),
    // height: responsiveSize(7),
    paddingHorizontal: responsiveSize(2),
    marginBottom: responsiveSize(0.5),

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  img: {
    width: '20%',

    // mudar isso aq, por enquanto só está escondendo o item pra fora
    overflow: 'hidden',
  },
  content: {
    width: '80%',
    justifyContent: 'space-between',

    flexDirection: 'row',
    marginLeft: responsiveSize(2)
  },
  excludeButton: {
    width: responsiveSize(2.5),
    height: responsiveSize(2.5),
    marginRight: responsiveSize(2),
    backgroundColor: 'transparent',
    borderRadius: 50,

    borderColor: COLORS.red10,
    borderWidth: 2,

    alignItems: 'center',
    justifyContent: 'center',
  }
});
