import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [result, setResult] = useState('')
    return <View style={styles.backgroud}>
        <SearchBar term={term}
            onTermSubmit={() => console.log("Submit")}
            onTermChange={(newTerm) => setTerm(newTerm)} />

        <Text> Search Screen   </Text>
        <Text>  {term}</Text>
    </View>
}
const styles = StyleSheet.create({
    backgroud: {

    }

})
export default SearchScreen








