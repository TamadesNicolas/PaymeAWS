import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

Amplify.configure(awsconfig)


export default function App() {
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
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
