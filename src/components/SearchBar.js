import React from "react";
import { TextInput, View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return <View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.iconStyle} />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
            onChangeText={onTermChange}
            // onEndEditing={() =>    onTermSubmit()  }
            onSubmitEditing={onTermSubmit}
            placeholder="Search"
            style={styles.inputStyle} />
    </View>
}
const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE'
        , height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row'

    }
    , inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        alignSelf: "center",
        fontSize: 35
    }
})
export default SearchBar





