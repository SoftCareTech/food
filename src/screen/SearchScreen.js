import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from "../components/SearchBar";
import useResult from "../hook/useResult";


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResult()
    return <View style={styles.backgroud}>
        <SearchBar term={term}
            onTermSubmit={() => { searchApi(term) }}
            onTermChange={(newTerm) => setTerm(newTerm)} />

        {errorMessage ? <Text>  {errorMessage}   </Text> : null}
        <Text> We have found    {results.length}</Text>
    </View>
}
const styles = StyleSheet.create({
    backgroud: {

    }

})
export default SearchScreen








