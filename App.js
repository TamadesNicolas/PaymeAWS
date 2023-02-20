import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme, } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { DataStore } from '@aws-amplify/datastore';
import { Transaction } from './src/models';
import { Auth } from "aws-amplify";
import { useState, useEffect } from 'react';
import HomeScreen from "./src/screens/home";
import TestScreen from "./src/screens/test";
Amplify.configure(awsconfig)

const theme = {
  ...DefaultTheme,
  //colors: yourGeneratedLightOrDarkScheme, test branch
  "colors": {
    "primary": "rgb(63, 90, 169)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(219, 225, 255)",
    "onPrimaryContainer": "rgb(0, 23, 76)",
    "secondary": "rgb(89, 94, 114)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(221, 225, 249)",
    "onSecondaryContainer": "rgb(22, 27, 44)",
    "tertiary": "rgb(116, 84, 112)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(255, 214, 247)",
    "onTertiaryContainer": "rgb(43, 18, 42)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(254, 251, 255)",
    "onBackground": "rgb(27, 27, 31)",
    "surface": "rgb(254, 251, 255)",
    "onSurface": "rgb(27, 27, 31)",
    "surfaceVariant": "rgb(226, 225, 236)",
    "onSurfaceVariant": "rgb(69, 70, 79)",
    "outline": "rgb(117, 118, 128)",
    "outlineVariant": "rgb(198, 198, 208)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(48, 48, 52)",
    "inverseOnSurface": "rgb(242, 240, 244)",
    "inversePrimary": "rgb(181, 196, 255)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(244, 243, 251)",
      "level2": "rgb(239, 238, 248)",
      "level3": "rgb(233, 233, 246)",
      "level4": "rgb(231, 232, 245)",
      "level5": "rgb(227, 229, 243)"
    },
    "surfaceDisabled": "rgba(27, 27, 31, 0.12)",
    "onSurfaceDisabled": "rgba(27, 27, 31, 0.38)",
    "backdrop": "rgba(46, 48, 56, 0.4)"
  }
};
const Stack = createNativeStackNavigator();


export default function AppPayeAWS() {

  const sendMoney = async () => {
    console.log("sending to " + text)
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log("from " + (user.attributes.email))
      await DataStore.save(
        new Transaction({
          "amount": 13.45,
          "from": user.attributes.email,
          "to": text
        })
      );
    }
    catch (e) {
      console.error(e)
    }
  }

  const [text, setText] = useState('');
  return (
    <Authenticator.Provider>
      <Authenticator
        components={{
          SignUp: ({ fields, ...props }) => (
            <Authenticator.SignUp
              {...props}
              fields={[
                ...fields,
                {
                  name: "address",
                  label: 'address',
                  type: 'string',
                  placeholder: 'Enter your address',
                },
              ]}
            />
          ),
        }}
      >
                  <PaperProvider theme={theme}>
            <NavigationContainer>
              <Stack.Navigator headerMode="none" initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, title: 'Home' }} />
                <Stack.Screen name="TestScreen" component={TestScreen} options={{ headerShown: false, title: 'TestScreen' }} />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
      </Authenticator>
    </Authenticator.Provider>
  );





}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
