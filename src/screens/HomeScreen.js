import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // const HomeScreen = (props) => {
  //  console.log(props);
  // console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Tap me to go Component Screen"
        //  onPress={() => props.navigation.navigate("Components")}
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Tap me to go List Screen"
        //  onPress={() => props.navigation.navigate("Lists")}
        onPress={() => navigation.navigate("Lists")}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate("Lists")}>
        <Text>Go to List Screen</Text>
      </TouchableOpacity> */}
      <Button
        title="Tap me to go Image Screen"
        //  onPress={() => props.navigation.navigate("Image")}
        onPress={() => navigation.navigate("Image")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
