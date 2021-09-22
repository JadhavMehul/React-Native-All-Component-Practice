import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ListItem(props) {
    return (
        <View style={styles.listItem}>
            <Text style={{fontSize: 22}}>{props.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    listItem: {
      borderWidth: 1,
      paddingHorizontal: "2%",
    }
});