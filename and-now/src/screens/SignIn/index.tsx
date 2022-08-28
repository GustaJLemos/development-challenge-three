import { useContext } from 'react';

import { StatusBar } from 'expo-status-bar';

import { AuthContext } from '../../contexts/Auth';

import { BackgroundWrapper } from '../../components/atoms/BackgroundWrapper';
import { Typography } from '../../components/molecules/Typography';
import { responsiveSize } from '../../utils/responsiveSize';
import { Button } from '../../components/molecules/Button';

import { COLORS } from '../../global/styles';
import LandingBackgroundSvg from '../../assets/LandingBackground.svg';
import { View } from 'react-native';

export function SignIn() {
  const { setIsLogged } = useContext(AuthContext);

  function handleSignIn() {
    setIsLogged(true);
  }

  return (
    <>
      <BackgroundWrapper>
        <LandingBackgroundSvg />
        <Typography
          textType='title'
          mt={responsiveSize(-8)}
          textColor={COLORS.salmon10}
          style={{fontSize: responsiveSize(3)}}
        >
          E agora?
        </Typography>
        <Typography
          mb={responsiveSize(1)}
          style={{fontSize: responsiveSize(2)}}
        >
          O melhor jeito de {'\n'}
          descobrir receitas {'\n'}
          com os ingredientes {'\n'}
          disponíveis!
        </Typography>

        <View style={{alignItems: 'center'}}>
          <Button onPress={handleSignIn}>
            <Typography>
              Vamos começar
            </Typography>
          </Button>
        </View>
      </BackgroundWrapper>
    </>
  );
}
