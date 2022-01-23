import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";


export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (seaerchTerm) => {
        console.log('Hi Api call')
        try {
            const res = await yelp.get('/search',
                {
                    limit: 50,
                    term: seaerchTerm,
                    location: 'san jose'

                })
            setErrorMessage('')
            setResults(res.data.busineses)
        } catch (err) {
            console.log(err)
            setErrorMessage('Error occured')
        }
    }


    /// firt red
    //
    useEffect(() => {
        searchApi('pasta')
    }, [])


    return [searchApi, results, errorMessage]
}
