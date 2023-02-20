import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TextInput, BackHandler } from "react-native";
import * as Scale from "./Scale.js";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Divider } from "react-native-paper";
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MenuItem(props) {
  let factor = 0.1;
  if (Dimensions.get('window').width < 600) { factor = 0.15 }

  return (
    <View style={styles.container}>

      <Icon name={props.IconName} size={RFPercentage(4)} color="black" />
      <Text style={styles.titre}>
        {props.ButtonName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
   // flex:1,
    height:'100%',
    flexDirection:'column',
    alignItems:'center',
  //  backgroundColor: "red",
    
    
  },

  image: {
    // width: 152,
    // height: 177
   //alignItems: "center",

  },
  titre: {
    // fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: RFPercentage(2.5),
    textAlign: "left",
   //borderBottomColor: "#f1f1f1",
    borderBottomWidth: 0,
    padding: 10,
    textAlignVertical: 'top'

  },

  price: {
    // fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: RFPercentage(1),
    padding: 10,
    textAlign: "left",
  }
});

export default MenuItem;
