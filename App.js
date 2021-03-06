import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import UpdateScreen from './src/screens/UpdateScreen';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator(
{
  Index:IndexScreen,
  ShowScreen:ShowScreen,
  CreateScreen:CreateScreen,
  UpdateScreen:UpdateScreen
},
{
  initialRouteName:"Index",
  defaultNavigationOptions:{
    title:"Blogs"
  }
});
const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
    <App/> 
    </Provider>
    );
};
