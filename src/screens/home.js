
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from "react-native-paper";
import { RFPercentage} from "react-native-responsive-fontsize";
import { Auth } from "aws-amplify";


export default ProfileIconsView = () => {
  //const [UserAttributes, setUserAttributes] = useState([]);


  //  Auth.currentAuthenticatedUser()
   // .then((user) => console.log(user))
  //  .catch((err) => console.log(err));

      

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }}
          />
          <Text style={styles.textName}>Nico</Text>
        </View>
      </View>

      <View style={styles.bodyContent}>
        
            <View style={styles.bodySolde}>
              <Text style={styles.textSolde}>Current Solde: 56.00 Banana</Text>
            </View>
            <View style={styles.bodyButtons}>
            <View style={styles.bodyButtonsTop}>
              <Button
                  labelStyle={styles.buttontext}
                  contentStyle={styles.buttonLocalMoney}
                  mode="elevated"
                  onPress={async () => {
                    try {
                    console.log("pressed")
                    }
                    catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  Send Banana
                </Button>
                <Button
                  labelStyle={styles.buttontext}
                  contentStyle={styles.buttonLocalMoney}
                  mode="elevated"
                  onPress={async () => {
                    try {
                    console.log("pressed")
                    }
                    catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  Receive Banana
                </Button>
            </View>
            <View style={styles.bodyButtonsBottom}>
              <Button
                  labelStyle={styles.buttontext}
                  contentStyle={styles.buttonExchange}
                  mode="elevated"
                  onPress={async () => {
                    try {
                    console.log("pressed")
                    }
                    catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  Buy Banana
                </Button>
                <Button
                  labelStyle={styles.buttontext}
                  contentStyle={styles.buttonExchange}
                  mode="elevated"
                  onPress={async () => {
                    try {
                    console.log("pressed")
                    }
                    catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  Sell Banana
                </Button>
            </View>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  header: {
    backgroundColor: 'rgb(63, 90, 169)',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  buttontext: {
    lineHeight: RFPercentage(3),
    color: "black",
    fontSize: RFPercentage(3),
    textAlign: "center",

  },
  buttonLocalMoney: {
    height: '100%',
    backgroundColor: "#f4f4f4",
    flexDirection: "row",
  },
  buttonExchange: {
    height: '100%',
    backgroundColor: "#f4f4f4",
    flexDirection: "row",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  textName: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  textSolde: {
    fontSize: 42,
    //color: '#FFFFFF',
    fontWeight: '600',
  },

bodyContent: {
    flex: 1,
   // backgroundColor:'pink',
    flexDirection: 'column',
    //alignItems: 'center',
    //padding: 30,
  },
  bodySolde: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
   // backgroundColor:'lightblue',
    //padding: 30,
  },
  bodyButtons: {
    flex: 2,
    alignItems: 'stretch',
    flexDirection:'column',
    //justifyContent:'space-around',
    //backgroundColor:'yellow',
    //padding: 30,
  },
  bodyButtonsTop: {
    flex: 2,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'space-around',
   // backgroundColor:'orange',
    marginVertical:'2%',
    //padding: 30,
  },
  bodyButtonsBottom: {
    flex: 1,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-around',
   // backgroundColor:'purple',
    marginVertical:'2%',
  },

})
