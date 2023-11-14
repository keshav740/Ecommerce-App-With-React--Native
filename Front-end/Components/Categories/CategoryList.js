import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CategoryList = ({selectCategory}) => {

    const [active, setActive] = useState(1)
    const categoryList = [
        {
            id:1,
            name:'Jug'
        },
        {
            id:2,
            name:'Mug'
        },
        {
            id:3,
            name:'Mirror'
        },
        {
            id:4,
            name:'Glass'
        },
        {
            id:5,
            name:'Buckets'
        },
        {
            id:6,
            name:'Table'
        },
        {
            id:7,
            name:'Pots'
        },
        {
            id:8,
            name:'Plates'
        },
    ]

    const onCategoryClick=(id)=>{
        setActive(id)
    }
  return (
    <SafeAreaView>
      <View style={{marginTop: 10}}>
        <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
                <TouchableOpacity 
                // onPress={()=>{onCategoryClick(item.id);
                // selectCategory(item.name)}}
                >
                    <Text style={
                        item.id==active?styles.selectText :styles.unselectText}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
    </SafeAreaView>
  )
}






const styles = StyleSheet.create({
    unselectText:{
            marginRight:15,
            fontSize:20, 
            fontWeight:'800',
            color:'gray'
        },
        selectText:{
            marginRight:15,
            fontSize:20, 
            fontWeight:'900',
            color:'#c40c71'
        }
    
})

export default CategoryList




