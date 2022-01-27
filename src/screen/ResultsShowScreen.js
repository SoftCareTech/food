import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    return <View>
        <Text>  Hi show {id}</Text>
    </View>
}


styles = StyleSheet.create({

})

export default ResultsShowScreen