import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'

const Heder = () => {
    return (
        <SafeAreaView>
            <View style={styles.searchBar}>
                <TextInput style={{ fontSize: 17 }} placeholder='Search the Cloths or dressess' />
                <AntDesign name="search1" size={24} color="#DC143C" />
            </View>
           
        </SafeAreaView>
    )
}

export default Heder

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 6,
        backgroundColor:'#d9d8d4',
    }
})