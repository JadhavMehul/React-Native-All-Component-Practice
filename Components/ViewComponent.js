import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ViewComponent() {
    return (
        <View>
            <Text>This is a View Component.</Text>
            <View style={styles.view}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        borderWidth: 1,
        borderColor: "black",
        height: "50%",
        width: "90%"
    }
})