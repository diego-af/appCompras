import React,{useEffect,useState} from 'react';
import { View ,
    Text,
     TextInput,
     StyleSheet,
     StatusBar,
     Keyboard,
     TouchableWithoutFeedback,
     TouchableOpacity,} from 'react-native';

import {Icon} from 'react-native-elements'

const SignUp = ({navigation}) =>{
    const [name,setName]= useState('')
    useEffect(()=>{
        StatusBar.setBarStyle('ligth-content',true)
    },[])
    return(
        <TouchableWithoutFeedback
        onPress={()=>{
            Keyboard.dismiss()
        }}
        >
         <View style={styles.container}>

            <Text style={styles.welcomeText}> Bem vindo(a) </Text>
                

                <TextInput
                placeholder="Email Address"
                placeHolderTextColor='#333'
                style={styles.input}
                autoCorrect={true}
                autoCompletetype='email'
                keyboadrType='email-address'
                textContenttype='emailAddress'
                />
                <TextInput
                placeholder="Password"
                placeHoldeTextColor="#03045e"
                style={styles.input}
                secureTextEntry={true}
                textContenttype='emailAddress'
                />
                <TextInput
                placeholder="Digite seu Nome"
                placeHolderTextColor='#333'
                style={styles.input}
                autoCorrect={true}
                autoCompletetype='email'
                keyboadrType='email-address'
                textContenttype='emailAddress'
                onChangeText={text=> setName(text)}
                
                />
                <TouchableOpacity style={styles.loginButton} 
                onPress={()=>navigation.navigate('Tasks')}>
                    <Text style={styles.loginButtonText}>Cadastrar</Text>
                </TouchableOpacity>

                <View style={styles.loginWithBar}>

                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name='google' type='font-awesome' size={30} color='#4361ee'/>
                    </TouchableOpacity>
                  
                </View>

                </View>
        </TouchableWithoutFeedback>
    )
}

export default SignUp;


const styles =StyleSheet.create({
    container:{
        flex:1,
        paddingTop:80,
        paddingHorizontal:20
    },
    welcomeText:{
        fontSize:30,
        fontWeight:'900',
        color:'#03045e',
        alignSelf:'center',

    },
    loginText:{
        color:'#03045e',
        fontSize:28,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:10,
    },
    input:{
        width:'100%',
        height:50,
        backgroundColor:'#fff',
        borderRadius:6,
        paddingHorizontal:10,
        fontSize:16,
        color:'#8089eb',
        borderWidth:2,
        borderColor:'#03045e',
        marginTop:20

    },
    fpText:{
        alignSelf:'flex-end',
        color:'#B33771',
        fontSize:15,
        fontWeight:'600',
        marginTop:10,
    },
    loginButton:{
        backgroundColor:'#023e8a',
        paddingVertical:12,
        borderRadius:6,
        marginTop:20,
       
      
    },
    loginButtonText:{
        
        fontSize:20,
        fontWeight:'400',
        color:'#fafafa',
        alignSelf:'center',
        
        
    },
    loginWithBar:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        marginTop:50
    },
    iconButton:{
        backgroundColor:'#fefae0',
        padding:14,
        marginHorizontal:10,
        borderColor:'#0096c7',
        borderWidth:1,
        borderRadius:10

    },
    signUpTextView:{
        marginTop:40,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
    },
    signUpText:{
        color:'#03045e',
        fontSize:20,
        fontWeight:'500'
    }
})