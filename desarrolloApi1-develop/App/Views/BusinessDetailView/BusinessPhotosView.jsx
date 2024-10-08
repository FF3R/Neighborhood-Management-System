import { View, Text, Image } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'
import { FlatList } from 'react-native-gesture-handler'

export default function BusinessPhotosView({business}) {
    return (
        <View>
        <Heading text={'Fotos'}/>
        <FlatList 
            data={business.imagenes}
            numColumns={2}
            renderItem={({item})=>(
                <Image source={{uri:item}}
                    style={{width:'100%', heigth:120}}
                />
            )}   
        />
        </View>
    )
}