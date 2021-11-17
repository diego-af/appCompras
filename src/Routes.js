import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../src/screens/Home'
import Login from '../src/screens/Login'
import Tasks from '../src/screens/Tasks'
import SignUp from '../src/screens/SignUp'

const Routes = ()=> {

const Stack = createNativeStackNavigator()


 return (
   <Stack.Navigator
   screenOptions={{
     headerShown:true,
     headerTintColor:'#03045e'
   }}
   initialRouteName="Home"
   >
      <Stack.Screen
      name="Home" component={Home}
      options={{
        title:''
      }}
      />
        <Stack.Screen
            name="Login" component={Login}
            options={{
              title:''
            }}

        />
        <Stack.Screen
            name="Tasks" component={Tasks}
            options={{
              title:''
            }}
            />
        <Stack.Screen
            name="SignUp" component={SignUp}
            options={{
              title:''
            }}

        />
      

   </Stack.Navigator>
  );
}

export default Routes;