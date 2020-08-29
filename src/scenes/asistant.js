import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/assitantStyles';
import LottieView from 'lottie-react-native';


class asistant extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isPressing:false,
    };
  }
  onPressIn=()=>{
    this.setState({
        isPressing:true,
    })
    console.log('pressed In ........')
}
onPressOut=()=>{
    this.setState({
        isPressing:false,
    });
    console.log('pressed out')
}

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.herderText}>Your voice Assistant is here !</Text>
        </View>
        <View style={styles.innerContainer}>
        <View style={styles.lottieContainer}>
            { !this.state.isPressing?(
          <LottieView source={require('../assets/lottieAnimations/bubble.json')} autoPlay loop  speed={1}></LottieView>
            ):(
            <LottieView source={require('../assets/lottieAnimations/voiceBar.json')} autoPlay loop  speed={1}></LottieView>
            )}
        </View>
        <View style={styles.buttonContainer} >
        <TouchableOpacity style={styles.button} onPressIn={()=>{this.onPressIn()}} onPressOut={()=>this.onPressOut()}>
            <Text style={styles.buttonText}>Press and Hold to Speech</Text>
        </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    );
  }
}
export default asistant;
