
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { Button } from "react-native-paper";
import { RFPercentage} from "react-native-responsive-fontsize";
import PressableButton from "../components/PressableButton";
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
            <TouchableHighlight style={styles.TouchableButton}                   
                    underlayColor={'#bfbfbf'}
                    onPress={async () => {
                    try {
                    console.log("pressed")
                    }
                    catch (err) {
                      console.error(err);
                    }
                  }}>
                <PressableButton IconName={'call-made'} ButtonName={'Send Banana'}/>
              </TouchableHighlight>
              <TouchableHighlight style={styles.TouchableButton}                   
                    underlayColor={'#bfbfbf'}
                    onPress={async () => {
                    try {
                    console.log("pressed")
                    }
                    catch (err) {
                      console.error(err);
                    }
                  }}>
                <PressableButton IconName={'call-received'} ButtonName={'Receive Banana'}/>
              </TouchableHighlight>
            </View>
            <View style={styles.bodyButtonsBottom}>
            <TouchableHighlight style={styles.TouchableButton}                   
                    underlayColor={'#bfbfbf'}
                    onPress={async () => {
                    try {
                    console.log("pressed")
                    }
                    catch (err) {
                      console.error(err);
                    }
                  }}>
                <PressableButton IconName={'vertical-align-bottom'} ButtonName={'Buy Banana'}/>
              </TouchableHighlight>
              <TouchableHighlight style={styles.TouchableButton}                   
                    underlayColor={'#bfbfbf'}
                    onPress={async () => {
                    try {
                    console.log("pressed")
                    }
                    catch (err) {
                      console.error(err);
                    }
                  }}>
                <PressableButton IconName={'vertical-align-top'} ButtonName={'Sell Banana'}/>
              </TouchableHighlight>
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
    lineHeight: RFPercentage(2),
    color: "black",
    fontSize: RFPercentage(2),
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
    fontSize: RFPercentage(2),
    color: '#FFFFFF',
    fontWeight: '600',
  },
  textSolde: {
    fontSize: RFPercentage(3.5),
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
   // backgroundColor:'yellow',
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
    justifyContent:'space-around',
   // backgroundColor:'orange',
    marginVertical:'2%',
  },
  bodyButtonsTest: {
    flex: 1,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'orange',
    marginVertical:'2%',
    //padding: 30,
  },
  TouchableButton: {
    flex:1,
    backgroundColor: "#f4f4f4",
    margin: "5%",
    //Add border + shadow
    borderRadius: 21,
    borderWidth: 0,
    borderColor: "#gray",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 9,
    shadowOpacity: 1,
    shadowRadius: 0,
  },
})
