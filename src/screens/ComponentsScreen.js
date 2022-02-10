import React from "react";
import { Text, StyleSheet, View } from "react-native"; //import libraries

const ComponentsScreen = () => {
  const name = "Stephen";
  return (
    <View>
      <Text style={styles.textStyles}>Getting started with React-Native</Text>
      <Text style={styles.subheaderStyle}>My name is {name}</Text>
    </View>
  );
  //create component and return JSX
  //return <Text style={{fontSize: 20}}>This is the Component Screen</Text>; //create component and return JSX
};
const styles = StyleSheet.create({
  //create stylesheet to add style to our components.
  textStyles: {
    fontSize: 45,
  },
  subheaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
//Export the component so we can use it else where in our project.
