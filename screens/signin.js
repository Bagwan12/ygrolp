import { View,Text,StyleSheet,ScrollView, TouchableOpacity } from "react-native";
import { SafeArea } from './utils/safeArea';
import { Theme } from "./theme.js";
import { Button, TextInput } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Signin ( {navigation}) {
    return (
    <SafeArea>
       
            <ScrollView>
                <Text style={styles.brand}>Thrift</Text>
                <Text style={styles.intro}>Sign in and Be part of our Grand society</Text>

                <View style={styles.alreadyHaveAccount}>
                    <Text style={styles.infoTitle}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Sign-in')}>
                        <FontAwesomeIcon icon={faCircleArrowRight}
                        color={Theme.colors.purple700}
                        size={Theme.sizes[5]}/>
                    </TouchableOpacity>
                </View>
                <View>
                <Text>Sign-in</Text>
                     <TextInput 
                    placeholder="email address"
                    mode="outlined"
                    outlineColor={Theme.colors.purple300}
                    activeOutlineColor={Theme.colors.purple500}
                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[1]}}
                    keyboardType='email-address'/>
                    <TextInput 
                    placeholder="confirm password"
                    mode="outlined"
                    outlineColor={Theme.colors.purple300}
                    activeOutlineColor={Theme.colors.purple500}
                    style={{fontSize:24,color:'#3C4048',marginBottom:Theme.sizes[3]}}
                    secureTextEntry={true}/>
                     <Button
                    mode="contained"
                    color={Theme.colors.purple700}
                    contentStyle={{paddingVertical:Theme.sizes[3]}}>Create Acccount</Button>
                </View>
            </ScrollView>
        </SafeArea>
  
  )}


  const styles = StyleSheet.create({
    brand:{
        fontSize:Theme.fonts.fontSizePoint.h3,
        fontFamily:'Righteous_400Regular',
        color:Theme.colors.purple700,
        marginBottom:Theme.sizes[3]
    },
    intro:{
        fontSize:Theme.fonts.fontSizePoint.title
    },
    alreadyHaveAccount:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:1,
        borderColor:Theme.colors.purple300,
        borderRadius:6,
        paddingVertical:Theme.sizes[2],
        marginTop:Theme.sizes[2],
        marginBottom:Theme.sizes[3]
    },
    infoTitle:{
        fontSize:Theme.fonts.fontSizePoint.h5
    },
    form:{
        marginTop:Theme.sizes[2]
    }
})