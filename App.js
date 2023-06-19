import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

var colorIndex = 0;
export default function App() {
  //"#6abef0"
  const [bgColor, setbgColor] = useState(changeBgColor);
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
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setbgColor(changeBgColor())}style={{width: 150, height: 50, backgroundColor: bgColor, borderRadius: "20px"}}><Text style={{display: "flex",margin: "auto", fontSize:"30px", fontWeight: "bold", textAlign: "center"}}>Hello</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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
