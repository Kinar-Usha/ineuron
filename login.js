import React from "react";
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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

import { Platform, StyleSheet } from "react-native";


class Login extends React.Component {

    render() {
        // const firebaseConfig = {

        //     apiKey: "AIzaSyCmSda-tvgU6eMts_f3Vz72JtzZAap4v8w",

        //     authDomain: "ineuron-f41ba.firebaseapp.com",

        //     projectId: "ineuron-f41ba",

        //     storageBucket: "ineuron-f41ba.appspot.com",

        //     messagingSenderId: "695549490979",

        //     appId: "1:695549490979:web:7f12656527a21168673e96",

        //     measurementId: "G-WR68MTPN9G"

        // };
        // const app = initializeApp(firebaseConfig);
        // const auth = getAuth(app);
        const styles = StyleSheet.create({
            animation: {
                width: "100%",
                height: "100%",
            }
        });
        return (

            <ScrollView>
                <Box safeAreaTop />
                {/* <Box safeAreaTop /> */}
                <Center w="100%">
                    <HStack bg="green.100" px="1" py="3" justifyContent="space-between" w="100%" >
                        <Text color="black" fontSize="20" fontWeight="bold" marginLeft='2%' alignItems='center'>
                            Name
                        </Text>


                    </HStack>
                </Center>
                <Box w="100%" maxW={"100%"} h="200%">
                    <VStack direction={'column'} width="100%">
                        <Box w="100%" h="100%">
                            <Image
                                source={{
                                    uri: "https://img.freepik.com/free-vector/organic-flat-farming-profession-illustration_23-2148897363.jpg?w=2000"
                                }}
                                alt="Alternate Text"
                                // size="xl"
                                w={"100%"}
                                h={"100%"}
                                rounded="lg"
                            />

                        </Box>
                        <Box position="absolute" margin={"2%"}>
                            <HStack>
                                <Heading>
                                    You are
                                </Heading>
                                <Heading color={"green.600"}> One Step</Heading>
                            </HStack>
                            <Heading>
                                closer to selling/buying agri products
                            </Heading>
                        </Box>
                        <Center>
                            <Box safeArea p="2" py="8" backgroundColor={""} w="40%" alignContent={"center"}>
                                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                                    color: "warmGray.50"
                                }}>
                                    Welcome
                                </Heading>
                                <Heading mt="1" _dark={{
                                    color: "warmGray.200"
                                }} color="coolGray.600" fontWeight="medium" size="xs">
                                    Sign in to continue!
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
                                    <Button mt="2" backgroundColor="green.600" onPress={(email, password) => {
                                        // signInWithEmailAndPassword(auth, email, password)
                                        // .then((userCredential) => {
                                        //   // Signed in 
                                        //   const user = userCredential.user;
                                        //   // ...
                                        // })
                                        // .catch((error) => {
                                        //   const errorCode = error.code;
                                        //   const errorMessage = error.message;
                                        // });
                                    }}>
                                        Sign up
                                    </Button>
                                    <HStack justifyContent={'flex-end'}>
                                        <Text>Don't have an account ?  </Text>
                                        <Text>
                                            <a href="./register">Sign Up</a>
                                        </Text>
                                    </HStack>
                                </VStack>
                            </Box>

                        </Center>

                    </VStack>

                </Box>

            </ScrollView>




        );

    }
}

export default Login;