import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from "../components/SearchBar";
import useResult from "../hook/useResult";
import ResultList from "../components/ResultList";


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResult()

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return <>
        <SearchBar term={term}
            onTermSubmit={() => { searchApi(term) }}
            onTermChange={(newTerm) => setTerm(newTerm)} />
        {errorMessage ? <Text>  {errorMessage}   </Text> : null}
        <ScrollView >
            <ResultList
                title={'Cost effective'}
                results={filterResultByPrice('$')}
            />
            <ResultList
                title='Bit Pricier'
                results={filterResultByPrice('$$')} />
            <ResultList
                title='Big Spender'
                results={filterResultByPrice('$$$$')} />
        </ScrollView>

        <Text> We have found***    {results.length}  {Date()}</Text>
    </>
}
const styles = StyleSheet.create({


})
export default SearchScreen








