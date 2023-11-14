import React from 'react'
import TopHeader from './Heders/TopHeader'
import Heder from './Heders/Heder'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryList from './Categories/CategoryList'
import Carousell from './ProductCarousel/Carousell'

const Home = () => {
  return (
    <SafeAreaView>
        <TopHeader/>
        <Heder/>
        <CategoryList />
        <Carousell />
    </SafeAreaView>
  )
}

export default Home