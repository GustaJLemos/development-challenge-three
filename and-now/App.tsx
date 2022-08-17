import React from 'react';
import { StatusBar, Text } from 'react-native';
import { BackgroundWrapper } from './src/components/atoms/BackgroundWrapper';
import { COLORS } from './src/global/styles';
import { SignIn } from './src/screens/SignIn';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Loading } from './src/components/atoms/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { ContextsProvider } from './src/contexts';
import { AppRoutes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold});

  if(!fontsLoaded){
    return <Loading />
  }

  return (
    <ContextsProvider>
      <AppRoutes />
    </ContextsProvider>
  );
}
