import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function BusinessListItem({business}) {
  const navigation= useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>(navigation.push('business-detail',
      {
        business:business
      }))}>
      <Image source={{uri:'https://negozona.com/assets/default_image-61da761b77c76c61f32651429a7c614afb85655f9fbbc45a5a71d698a1c0a283.webp'}}
      style={styles.image}/>
      <View style={styles.subContainer}>
        <Text style={{fontFamily:'outfit-regular', color:Colors.GRAY, fontSize:15}}>{business.nombre}</Text>
        <Text style={{fontFamily:'outfit-bold', fontSize:17}}>{business.telefono || "-"}</Text>
        <Text style={{fontFamily:'outfit-regular', color:Colors.GRAY, fontSize:16}}>
        <Ionicons name="location-sharp" size={18} color={Colors.PRIMARY} style={{marginRight:20}} />{business.sitio.calle || "-"}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginBottom:15,
        display:'flex',
        flexDirection:'row',
        gap:10
    },
    subContainer:{
        display:'flex',
        gap:8
    },
    image:{
        width:100,
        height:100,
        borderRadius:15
    }
})