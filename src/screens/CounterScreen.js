import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [currentCounter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // currentCounter++;
          setCounter(currentCounter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // currentCounter--;
          setCounter(currentCounter - 1);
        }}
      />
      <Text>Current Count: {currentCounter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
