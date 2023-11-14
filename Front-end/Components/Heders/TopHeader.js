import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TopHeader = () => {
  return (
    <SafeAreaView>
        <View style={styles.topHeader}>
            <TouchableOpacity>
                <MaterialIcons name="legend-toggle" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Indesponable shadow</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="cart-variant" size={28} color="black" />
            </TouchableOpacity>
        </View>
    </SafeAreaView> 
  )
}

export default TopHeader


const styles = StyleSheet.create({
    topHeader: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      padding:20,
      backgroundColor:'white',

    },
  });