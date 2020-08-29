import {StyleSheet, Dimensions} from 'react-native';
import { Fonts } from '../utils/fonts';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const ScreenSize= Dimensions.get('window');

const styles  = StyleSheet.create({
    container:{
        width:ScreenSize.width,
        height:ScreenSize.height,
        paddingHorizontal:20,
        paddingVertical:20,
        backgroundColor:'gray',

    },
    headerContainer:{
        width:'100%',
        height:0.1*ScreenSize.height,
    },
    herderText:{
        fontFamily:Fonts.MonteserratBold,
        fontSize:25,
        marginTop:15,
    },
    lottieContainer:{
        flex:1,
        margin:-20,
        alignSelf:'center',
        width:"100%",
        alignItems:'center',
    },
    textContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    readingText:{
        fontFamily:Fonts.OpenSans,

    },
    buttonContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    innerContainer:{
        height:0.9*ScreenSize.height,
        flexDirection:'column',
        justifyContent:'space-around',
    },
    button:{
        width:'95%',
        backgroundColor:'#292929',
        alignItems:"center",
        justifyContent:'center',
        borderRadius:30,
        height:60,
        elevation:10,
        margin:10,
    },
    buttonText:{
        fontFamily:Fonts.Monteserrat,
        fontSize:18,
        color:'white',
        
    },

});

export default styles;