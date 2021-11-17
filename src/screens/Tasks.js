import React,{useState,useEffect,useRef} from 'react';
import {View,
     Text, 
     FlatList,
     StyleSheet,
     Keyboard,
     TouchableOpacity,
    TouchableWithoutFeedback,
    Alert,Animated
    } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native'

import {Input,Icon} from 'react-native-elements'






const Tasks = ()=>{
   
   
   const [task, setTask]= useState([]);
   const [text,setText] = useState('')
   const fadeAnim = useRef(new Animated.Value(0)).current

  

   async function addElements(){
        if(text === ''){
            Alert.alert("Preencha o campo");
            return;
        }
       const search = task.filter(task => task == text);    
   
       if(search.length !== 0){
            Alert.alert("Produto ja existente")
            return;
       }
      
        setTask([...task, text])
        
        Keyboard.dismiss()
   }


   async function remove(item){
    setTask(task.filter(task=> task !== item))
   }

   useEffect(()=>{
    const fadeIn=()=>{
        Animated.timing(fadeAnim,{
          toValue:1,
          duration:3000,
          useNativeDriver:true
        }).start()
       }
       fadeIn()

    async function loadData(){
        
        const task = await AsyncStorage.getItem('task')
    
        if(task){
            setTask(JSON.parse(task))
        }
    }

    loadData()
   
},[])

   useEffect(() =>{

    
    
    async function saveData(){
        AsyncStorage.setItem('task',JSON.stringify(task))

        
    }

    saveData()
   },[task])
  
    return(
       
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }}>
            <Animated.View style={[styles.container],{opacity:fadeAnim}}>
                
            <View style={styles.addText}>
                <Input
                    placeholder="Adicione seus produtos"
                    leftIcon={{type:'font-awesome', name:""}}
                    style={styles.input}
                    onChangeText={text => setText(text)}
                    maxLength={20}
                    
                    />
                    
                <TouchableOpacity style={styles.button} onPress={addElements}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                </View>
              
                   <FlatList
                    data={task}
                    keyExtractor={item => item.toString()}
                    renderItem={({item,index})=>{
                        return(
                            <Animated.View style = {styles.itemContainer}>
                                <Text style={styles.itemText}>{index+1} - {item}</Text>
                                
                                <TouchableOpacity onPress={() => remove(item)}>
                                    <Icon name="delete" type="fon-awesome" color="#e63946"/>
                                </TouchableOpacity>
                            </Animated.View>
                        )
                    }}
                   
                   
                    />
              
            </Animated.View>
            
        </TouchableWithoutFeedback>
        
    )
}


export default Tasks

const styles= StyleSheet.create({
    container:{
        flex:1, 
    },
    addText:{
        flexDirection:'row',
        paddingHorizontal:30,
        justifyContent: 'flex-end',
        alignItems:'flex-start',
        
    },
   
    input:{
        width:40,
        borderBottomWidth:1
    
    },
    button:{
        backgroundColor:'#03045e',
        borderRadius:10,
        padding:5,
        height:50
       

    },
    buttonText:{
        fontSize:30,
        color:'#fff',
        fontWeight:'bold',
        
    },
    itemContainer:{
        paddingHorizontal:15,
        paddingVertical:10,
        width:'80%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor:'#457b9d',
        marginLeft:20,
        borderRadius:10,
        marginTop:8,
        flexDirection:'row',


    },
    itemText:{
        fontSize:20,
        color:'white'
    }

})