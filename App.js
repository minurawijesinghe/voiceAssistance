import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Fonts} from './src/utils/fonts';
import LottieView from 'lottie-react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import Assistant from './src/scenes/asistant';


const ScreenSize = Dimensions.get('window');


import HomeScreen from './src/scenes/home';

const Stack = createStackNavigator();

const slides = [
  {
    key: 1,
    title1: 'VOICE IDENTIFICATION',
    title2:'',
    text: 'Read what shows in the screen! \n app will get your voice',
    image: require('./src/assets/lottieAnimations/voice.json'),
    backgroundColor: 'black',
    fontColour:'white',
    subFontColour:'gray'
  },
  {
    key: 2,
    title1: 'HERE IS YOUR VOICE',
    title2: 'ASSISTANT',
    text: 'Simply, talk with the app! you will get reply on your own voice',
    image: require('./src/assets/lottieAnimations/hexogon.json'),
    backgroundColor: 'gray',
    fontColour:'white'
  },
];

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
    };
  }

  _renderItem = ({ item }) => {
    return (
      <View style={{ 
        width:ScreenSize.width,
        paddingHorizontal:15,
        alignItems:'center',
        height:'100%',
        backgroundColor:item.backgroundColor}}>
        <Text style={{fontFamily:Fonts.MonteserratBold, fontSize:20,
        color:item.fontColour, marginTop:20, alignContent:'center', alignItems:'center', alignSelf:'center'}}>{item.title1}</Text>
        <Text style={{fontFamily:Fonts.MonteserratBold, fontSize:20,
        color:item.fontColour, marginTop:20, alignContent:'center', alignItems:'center', alignSelf:'center'}}>{item.title2}</Text>
        <View style={{width:ScreenSize.width, height:ScreenSize.height*0.6}}>
       <LottieView source={item.image} autoPlay loop></LottieView>
       </View>
        <Text style={{fontFamily:Fonts.OpenSansBold, color:item.subFontColour, alignSelf:'center', fontSize:18}}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if(this.state.showRealApp){
      return (
        <NavigationContainer>
           <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} 
           options={{
            headerTitle: '',
            headerTransparent: true
          }}/>
          <Stack.Screen name="Assistant" component={Assistant}
           options={{
            headerTitle: '',
            headerTransparent: true
          }}/>
        </Stack.Navigator>
        </NavigationContainer>
  
      );
    }else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
    
  }
}

const styles = StyleSheet.create({
  slide:{
    width:ScreenSize.width,
    height:'100%',
    backgroundColor:'yellow'
  },
});

export default App;
