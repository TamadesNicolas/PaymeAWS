import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Amplify } from 'aws-amplify'
import awsconfig from '../aws-exports'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { DataStore } from '@aws-amplify/datastore';
import { Transaction } from '../../src/models';
import { Auth } from "aws-amplify";
import { useState, useEffect } from 'react';


Amplify.configure(awsconfig)




export default function App() {

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
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Button title='send' onPress={() => sendMoney()} />
          <StatusBar style="auto" />
          <TextInput
            style={{ height: 40 }}
            placeholder="Destination email"
            onChangeText={newMail => setText(newMail)}
            defaultValue={text}
          />
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