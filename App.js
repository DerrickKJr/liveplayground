import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing, FlatList, SafeAreaView} from 'react-native';

var colorIndex = 0;
export default function App() {
  //const [bgColor, setbgColor] = useState(changeBgColor);
  var spinValue = new Animated.Value(0);
  var navMenuXVal = new Animated.Value(0);
  var navMenuX = new Animated.Value(0);

  // First set up animation 
  var navBarState = false;
  function navBarAnim(){
    console.log(navBarState);
    if(navBarState){
      Animated.timing( spinValue,{
        toValue: 0,
        duration: 500,
        easing: Easing.linear, // Easing is an additional import from react-native
        useNativeDriver: true  // To make use of native driver for performance
      }).start()
      Animated.timing( navMenuXVal, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start()
    } else{
      Animated.timing( spinValue,{
        toValue: 1,
        duration: 500,
        easing: Easing.bounce, // Easing is an additional import from react-native
        useNativeDriver: true  // To make use of native driver for performance
      }).start()
      Animated.timing( navMenuXVal, {
        toValue: 1,
        duration: 500,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start()
    }
    navBarState = !navBarState;
  }

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '20deg']
  })
  const spin1 = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-20deg']
  })
  navMenuX = navMenuXVal.interpolate({
    inputRange: [0, 1],
    outputRange: ['-340px', '0px']
  })
  /*
  function changeBgColor(){
    var color = "#6abef0";
    switch (colorIndex++) {
      case 0:
        color = "#ec3535";
        break;
      case 1:
        color = "#6abef0";
        break;
      case 2:
        color = "#23d172";
        colorIndex = 0;
        break;
      default:
        break;
    }
    return color;
  }*/

  const navBarData = [
    {
      title: 'Hello',
    },
    {
      timing: 'World',
    }
  ]
  const navBarItem = ({title}) => (
    <View>
      <Text>{title}</Text>
    </View>
  )
  return (
    <SafeAreaView style={styles.container}>
      <View style={{display: "flex", position: "absolute", backgroundColor: "#36689e", width: "100%", height: "7%", top: "0px"}}></View>
      <TouchableOpacity onPress={() => console.log("")/*() => setbgColor(changeBgColor())*/}style={{width: 150, height: 50, backgroundColor: "red", borderRadius: "20px"}}><Text style={{margin: "auto", fontSize:"30px", fontWeight: "bold", textAlign: "center"}}>Hello</Text></TouchableOpacity>
      <TouchableOpacity style={{display: "flex", position: "absolute", width: "100%", height: "100%", left: "-5px"}} onPress={navBarAnim}>
        <Animated.View style={{display: "flex", position: "absolute", backgroundColor: "#000000", width: "5%", height: ".5%", top: "0px", left: "0px", margin: "20px", transform: [{rotate: spin,}]}}></Animated.View>
        <Animated.View style={{display: "flex", position: "absolute", backgroundColor: "#000000", width: "5%", height: ".5%", top: "10px", left: "0px", margin: "20px", transform: [{rotate: spin,}]}}></Animated.View>
        <Animated.View style={{display: "flex", position: "absolute", backgroundColor: "#000000", width: "5%", height: ".5%", top: "20px", left: "0px", margin: "20px", transform: [{rotate: spin,}]}}></Animated.View>
      
        <Animated.View style={{display: "flex", position: "absolute", backgroundColor: "#000000", width: "5%", height: ".5%", top: "0px", left: "20px", margin: "20px", transform: [{rotate: spin1,}]}}></Animated.View>
        <Animated.View style={{display: "flex", position: "absolute", backgroundColor: "#000000", width: "5%", height: ".5%", top: "10px", left: "20px", margin: "20px", transform: [{rotate: spin1,}]}}></Animated.View>
        <Animated.View style={{display: "flex", position: "absolute", backgroundColor: "#000000", width: "5%", height: ".5%", top: "20px", left: "20px", margin: "20px", transform: [{rotate: spin1,}]}}></Animated.View>
      </TouchableOpacity>
      <Animated.View style={{display: "flex", position: "absolute", backgroundColor: "#fff", left: navMenuX, top: "63px", width: "80%", height: "100%"/*"-340px"*/}}>
      
      </Animated.View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },  
});
