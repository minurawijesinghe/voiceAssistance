import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from '../styles/homeStyles';

export default class home extends Component {
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
          <Text style={styles.herderText}>Read Text to recognize your voice ! </Text>
          </View>
    <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
        <Text style={styles.readingText}>Some speech recognition systems require "training" (also called "enrollment") where an individual speaker reads text or isolated vocabulary into the system.</Text>
        </View>
        <View style={styles.lottieContainer}>
            { !this.state.isPressing?(
          <LottieView source={require('../assets/lottieAnimations/rotating.json')} autoPlay loop  speed={3}></LottieView>
            ):(
            <LottieView source={require('../assets/lottieAnimations/recording.json')} autoPlay loop  speed={2}></LottieView>
            )}
        </View>
        <View style={styles.buttonContainer} >
        <TouchableOpacity style={styles.button} onPressIn={()=>{this.onPressIn()}} onPressOut={()=>this.onPressOut()}>
            <Text>press</Text>
        </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    );
  }
}
