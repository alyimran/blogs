import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState , useContext} from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm';

const UpdateScreen = ({ navigation }) => {
    const { state , updateBlogPost } = useContext(Context);
    const id = navigation.getParam('id');
  
    const blogPost = state.find(
      blogPost => blogPost.id === id
    );
  
    return <BlogPostForm 
    initalValues={{title:blogPost.title, content:blogPost.content}}
    onSubmit={(title, content)=>updateBlogPost(id, title, content , ()=>navigation.pop())}
    />;
  };
  
  const styles = StyleSheet.create({});
  
  export default UpdateScreen;