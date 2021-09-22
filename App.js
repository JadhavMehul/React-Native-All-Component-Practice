import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from './Components/ListItem';

export default function App() {
  const array = [
    {
      id: 1,
      title: "View"
    },
    {
      id: 2,
      title: "Text"
    },
    {
      id: 3,
      title: "Text Input"
    },
    {
      id: 4,
      title: "Image"
    },
    {
      id: 5,
      title: "ScrollView"
    },
    {
      id: 6,
      title: "Button"
    },
    {
      id: 7,
      title: "Switch"
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.listTitle}>
        <Text style={styles.titleText}>Components</Text>
      </View>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={array} 
          renderItem={(arrayData) => (<ListItem title={arrayData.item.title} />)} 
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "2%",
    paddingVertical: "10%"
  },
  listTitle: {
    backgroundColor: "#ccc",
    paddingHorizontal: "2%",
    borderColor: "black",
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
  listItem: {
    borderWidth: 1,
    paddingHorizontal: "2%",
  }
});
