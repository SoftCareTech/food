import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from "../components/SearchBar";
const SearchScreen = () => {
    return <View style={styles.backgroud}>
        <SearchBar />
        <Text> Search Scren</Text>
    </View>
}
const styles = StyleSheet.create({
    backgroud: {

    }

})
export default SearchScreen








