import {StyleSheet, Dimensions} from 'react-native';
import { Fonts } from '../utils/fonts';
const ScreenSize= Dimensions.get('window');

const styles  = StyleSheet.create({
    container:{
        width:ScreenSize.width,
        height:ScreenSize.height,
        paddingHorizontal:20,
        paddingVertical:10,
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
        width:'100%',
        backgroundColor:'blue',
        borderRadius:20,
        height:40,
    },

});

export default styles;