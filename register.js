import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import {
    Image, Box, Center, Text, View, AspectRatio, HStack, IconButton,
    MaterialIcons,
    Icon,
    Heading,
    Button,
    Spacer,
    Flex,
    Divider,
    Stack,
    VStack,
    ScrollView,
    FormControl,
    Input,
    Link
} from "native-base";

import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
const lo=require('./assets/try.json');


class Login extends React.Component{
    
    render(){
        const firebaseConfig = {

            apiKey: "AIzaSyCmSda-tvgU6eMts_f3Vz72JtzZAap4v8w",
          
            authDomain: "ineuron-f41ba.firebaseapp.com",
          
            projectId: "ineuron-f41ba",
          
            storageBucket: "ineuron-f41ba.appspot.com",
          
            messagingSenderId: "695549490979",
          
            appId: "1:695549490979:web:7f12656527a21168673e96",
          
            measurementId: "G-WR68MTPN9G"
          
          };
          const app = initializeApp(firebaseConfig);
          const auth = getAuth(app);
          const styles = StyleSheet.create({
            animation: {
              width: "100%",
              height: "100%",
            }});
        return(

<ScrollView>
                <Box w={['100%', '100%', '100%']} safeAreaTop /> 
                {/* <Box safeAreaTop /> */}
                <Center w="100%">
                <HStack   bg="green.100"  px="1" py="3" justifyContent="space-between"  w="100%" >
                        <Text color="black" fontSize="20" fontWeight="bold" marginLeft='2%' alignItems='center'>
                            Name
                        </Text>
                   
                    <HStack space={1} marginRight={"2%"}>
                        <Button size="md" variant="solid" backgroundColor="green.500" >
                            Login
                        </Button>
                    </HStack>
                </HStack>
                </Center>
                <Center w="100%">
                <View>
      {/* <LottieView
      resizeMode="cover"
        source={require("./assets/68076-field.json")}
        style={{width: "100%",
        height: "100%"}}
        
      /> */}
    </View>
    <View >
<LottieView
style={{
width: "20%",
height: "30%",
}}
source={{uri:"https://assets7.lottiefiles.com/packages/lf20_lcpntsv7.json"}}
loop={true}
speed={1}
/>

</View>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              {/* Forget Password? */}
            </Link>
          </FormControl>
          <Button mt="2" backgroundColor="green.600" onPress={(email,password)=>{
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
          }}>
            Sign up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              {/* I'm a new user.{" "} */}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              {/* Sign Up */}
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
    
                </ScrollView>



            
        );
        
    }
}

export default Login;