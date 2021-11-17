
import React,{useState,useEffect,useRef} from 'react';
import { StyleSheet, 
  Text,
   View ,
   SafeAreaView,
   Animated,
   TouchableOpacity}
    from 'react-native';
import {useNavigation} from '@react-navigation/native'

const Home = ({navigation})=>{
  const fadeAnim = useRef(new Animated.Value(0)).current
  const [colorized,setColorized]= useState(true)
  const [background,setBackground]= useState()

  

 useEffect(()=>{
  const fadeIn=()=>{
    Animated.timing(fadeAnim,{
      toValue:1,
      duration:3000,
      useNativeDriver:true
    }).start()
   }

   const otherColor=()=>{
        setColorized(true)
        if(colorized){
          setBackground(
            '#0077b6'
          )
          setTimeout(()=>{
            setBackground(
              '#023e8a'
          )},2000)
          
        }
        
       
   }
   fadeIn()
   otherColor()
 },[])
  return (
    <SafeAreaView style={styles.container}>
    
    <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Bem vindo ao seu{'\n'} app de compras</Text>
         </View>
         
        <Animated.Image
          style={[styles.image,{opacity:fadeAnim}]}
          source={require('../assets/Wallpaper.png')}
          resizeMode='contain'
         />

        <TouchableOpacity style={[styles.button,{backgroundColor:background}]}
           onPress={()=> navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Inicio</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  banner:{
      marginTop:50,
      paddingHorizontal:30,
      justifyContent:'center',
      alignItems: 'center'

  },
  bannerText:{
      fontSize:30,
      fontWeight:'bold',
      color:'#023e8a'
  
  },
 
  image:{
    marginTop:70,
    width:'100%',
    height:300
   
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
    backgroundColor:'#0096c7',
    width:'50%',
    height:50,
    marginLeft:100,
    borderRadius:10,
   


  },
  buttonText:{
    fontSize:20,
    color:'white'

  }
 
});
