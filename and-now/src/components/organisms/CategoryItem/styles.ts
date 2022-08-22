import { Dimensions, StyleSheet } from 'react-native';
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
  }
});
