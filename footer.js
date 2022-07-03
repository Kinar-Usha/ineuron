import React from "react";
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
    Pressable,
    ScrollView,
    selected,
    Link
} from "native-base";
import { Platform } from 'react-native';
import {Entypo} from "@native-base/icons";
{/* <script src="https://kit.fontawesome.com/2c22a819ef.js" crossorigin="anonymous"></script> */}
export default class Footer extends React.Component {
    render() {
        return (
            <Box  bg="green.100" safeAreaTop width="100%" maxW="100%" h={"20%"} maxH={"20%"} alignSelf="center">
                {/* <HStack w={"100%"} h="100%"> */}
                    <Center backgroundColor={"green.150"} w="100%" justifyContent={'center'} justifyItems ="center">
                        <Box>
                        <Heading justifyContent={'center'} alignContent = 'center' size={Platform.OS=='web'?'md':null}>
                            Contact Us
                        </Heading>
                        </Box>
                        <Box>
                        <Heading justifyContent={'center'} alignContent = 'center' size={Platform.OS=='web'?'md':null}>
                        {/* <Icon as={Entypo} name="mail"></Icon> */}
                        {/* <FontAwesomeIcon icon="fa-solid fa-mailbox" /> */}
                             <Link href = "mailto:namma_mandi@gmail.com">namma_mandi@gmail.com</Link>
                             </Heading>
                        </Box>
                        <Box>
                        <Heading justifyContent={'center'} alignContent = 'center' size={Platform.OS=='web'?'md':null}>
                        <Link href = "tel:9900821834">9900821834</Link>
                            
                        </Heading>
                        </Box>
                    </Center>
                {/* </HStack> */}
                {/* <VStack w ={"50%"} h="100%">
                    <Box backgroundColor={"red.300"} w = "100%" >
                        <Heading size={Platform.OS=='web'? 'md':null}>namma_mandi@gmail.com</Heading>
                    </Box>
                </VStack> */}
                
            </Box>
        );
    }
}