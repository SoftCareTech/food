import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import number from "../api/number";

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        console.log('Hi Api call ' + searchTerm)
        try {
            //const res = await number.get('6788/English')
            //console.log(res.data)
            //console.log(res.data.words)
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                }
            });
            setResults(response.data.businesses);
            console.log('Search okay with ' + searchTerm)
            
        } catch (err) {
            console.log(err)
            setErrorMessage('Error occured searching ' + searchTerm)
            setResults([]);
        }

    }


    /// firt red
    //
    useEffect(() => {
        searchApi('pasta')
    }, [])


    return [searchApi, results, errorMessage]
}
