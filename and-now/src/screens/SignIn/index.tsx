import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { BackgroundWrapper } from '../../components/atoms/BackgroundWrapper';
import { COLORS } from '../../global/styles';
import LandingBackgroundSvg from '../../assets/LandingBackground.svg';
import { styles } from './styles';
import { Typography } from '../../components/molecules/Typography';
import { responsiveSize } from '../../utils/responsiveSize';
import { Button } from '../../components/molecules/Button';

export function SignIn() {
  return (
    <>
      <StatusBar 
        backgroundColor={COLORS.blue10}
        translucent
        hidden={true}
      />
      <BackgroundWrapper>
        <LandingBackgroundSvg />
        <Typography textType='title' style={{marginTop: responsiveSize(-8)}} textColor={COLORS.salmon10}>
          E agora?
        </Typography>  
        <Typography style={{fontSize: responsiveSize(2), marginBottom: responsiveSize(1)}}>
          O melhor jeito de {'\n'}
          descobrir receitas {'\n'}
          com os ingredientes {'\n'}
          disponíveis!
        </Typography>
        <Button>
          <Typography>
            Vamos começar
          </Typography>
        </Button>
      </BackgroundWrapper>
    </>
  );
}