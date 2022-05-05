import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons'


export default function IndexScreen(props) {
    const {navigation} = props
    const {state , deleteBlogPost} = useContext(Context);
  return (
    <View>
      <FlatList
      data={state}
      keyExtractor={blogpost=> blogpost.title}
      renderItem={({item})=>{
          return (
              <TouchableOpacity onPress={()=>navigation.navigate("ShowScreen" , {id:item.id})}>
          <View style = {{flexDirection:'row' , marginHorizontal:20 , paddingVertical:10 , borderBottomWidth:1}}>
              <Text style = {{flex:1 , fontSize:18}}>{item.title}-{item.id}</Text>
              <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                  <Feather size={20} name='trash'/>
                  </TouchableOpacity>
          </View>
          </TouchableOpacity>)
      }}/>
    </View>
  )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
      };
}

const styles = StyleSheet.create({

});