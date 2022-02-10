import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native"; //import libraries
import { YellowBox } from "react-native-web";

const ListScreen = () => {
  const friends = [
    { name: "Divyansh", age: 24 },
    { name: "Prachi", age: 22 },
    { name: "Shyam", age: 24 },
    { name: "Meera", age: 24 },
    { name: "Sunny", age: 22 },
    { name: "Anmol", age: 23 },
    { name: "Kamil", age: 22 },
    { name: "Sehrin", age: 24 },
    { name: "Vishesh", age: 23 },
    { name: "Madhav", age: 25 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name} //key
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
  // element ==={item: { name: 'Friend #1' }, index: 0 }
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
    fontWeight: "bold",
    fontSize: 20,
    borderWidth: 5,
    borderColor: "thistle",
    borderRadius: 20,
    alignItems: "center",
    paddingLeft: 20,
    paddingTop: 5,
  },
});

export default ListScreen;
