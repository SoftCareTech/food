import React from "react";
import { withNavigation } from 'react-navigation'
import { TouchableOpacity, View, Text, StyleSheet, FlatList } from 'react-native'
import ResultDetail from "./ResultDetail";


const ResultList = ({ title, results, navigation }) => {
    return <View style={styles.container}>
        {results.length < 1 ? <View style={styles.t} /> : null}
        <Text style={styles.titleStyle}>{title} {results.length} </Text>

        <FlatList horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyEtractor={(result) => result.id}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                    < ResultDetail result={item} />

                </TouchableOpacity>
            }}
        />

    </View>
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10
    },
    t: {
        height: 300,
        width: 1000,
        backgroundColor: 'pink',
        borderWidth: 2
    }


})
export default withNavigation(ResultList)





