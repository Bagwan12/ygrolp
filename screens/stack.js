import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { About } from './About.js';
import { Profile } from './profile.js';
import { Deposit } from './Deposit.js';
import { Withdraw } from './withdraw.js';
import { Loan } from './loan.js'; 
import { Signup } from './signup.js';
import { Signin } from './signin.js';


const Stack = createNativeStackNavigator();

export function StackNavigation(){
    return (
        <Stack.Navigator  initialRouteName='Sign up'>
            
            <Stack.Screen name='About' component={About}/>
            <Stack.Screen name='Deposit' component={Deposit}/>
            <Stack.Screen name='Withdraw' component={Withdraw}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='Loan' component={Loan}/>
            <Stack.Screen name='Sign up' component={Signup}/>
            <Stack.Screen name='Sign-in' component={Signin}/>

        </Stack.Navigator>
    )
}