import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INC_DEC = 15;

const squareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    //color === 'red','green','blue'
    //change === +15,-15
    //     if (color === "red") {
    //       if (red + change > 255 || red + change < 0) {
    //         return;
    //       } else {
    //         setRed(red + change);
    //       }
    //     }
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        // onIncrease={() => {
        //   setRed(red + COLOR_INC_DEC);
        // }}
        onIncrease={() => setColor("red", COLOR_INC_DEC)}
        // onDecrease={() => setRed(red - COLOR_INC_DEC)}
        onDecrease={() => setColor("red", -1 * COLOR_INC_DEC)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INC_DEC)}
        onDecrease={() => setColor("green", -1 * COLOR_INC_DEC)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INC_DEC)}
        onDecrease={() => setColor("blue", -1 * COLOR_INC_DEC)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default squareScreen;
