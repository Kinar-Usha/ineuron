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
    selected
} from "native-base";
import { Platform } from 'react-native';



export default class Footer extends React.Component {
    render() {
        return (
            <Box  bg="green.100" safeAreaTop width="100%" maxW="100%" h={"20%"} maxH={"20%"} alignSelf="center">
                <HStack w={"50%"} h="100%">
                    <Box backgroundColor={"red.100"} w="100%">
                        <Heading size={Platform.OS=='web'?'md':null}>Contact Us</Heading>
                        
                    </Box>
                </HStack>
            </Box>
        );
    }
}