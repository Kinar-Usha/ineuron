import React from "react";
import { useWindowDimensions } from "react-native";
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
} from "native-base";
import { Platform } from 'react-native';
import Footer from './footer';

import MyCard from "./card";

export default class Home extends React.Component {

    render() {
        // const windowWidth = useWindowDimensions().width;
        // console.log(windowWidth);

        return (
            <ScrollView>
                <Box w={['100%', '100%', '100%']} safeAreaTop>
                    {/* <Box safeAreaTop /> */}
                    <Box position='absolute'>
                        {/* <AspectRatio  w="100%" h="100%" ratio={16 / 9}>
                                    <Image source={{uri:"https://img.freepik.com/free-vector/flat-farm-landscape_52683-9443.jpg?size=626&ext=jpg"}} alt=""  />

                </AspectRatio> */}
                    </Box>
                    <Center w="100%">
                        <HStack bg="green.100" px="1" py="3" justifyContent="space-between" w="100%" >
                            <Text color="emerald.500" fontSize="20" fontWeight="bold" marginLeft='2%' alignItems='center'>
                                Nam Mandi
                            </Text>

                            <HStack space={3}>
                                <Button size="md"  variant="solid" backgroundColor="green.500">
                                    Login
                                </Button>
                                <Button size="md"  variant="solid" backgroundColor="green.500">
                                    Register
                                </Button>
                                {/* <Button size="md" paddingX='1%' variant="solid" backgroundColor="green.500">
                            Sell
                        </Button> */}
                            </HStack>
                        </HStack>
                        <VStack>
                            <View>
                                <Center>
                                <Heading pt={Platform.OS=='android'?'15':null} fontSize={Platform.OS == 'web' ? '5xl' : '2xl'} alignItems={Platform.OS == 'web' ? 'flex-start' : 'center'} justifyItems={Platform.OS == 'web' ? 'flex-start' : 'center'} style={{ marginLeft: Platform.OS === 'web' ? '13%' :"0%", marginTop: Platform.OS == 'web' ? '10%' : '5%' }}>
                                    A platform for the{" "}
                                    <Heading fontSize={Platform.OS == 'web' ? '5xl' : '2xl'} alignItems={Platform.OS == 'web' ? 'center' : 'center'} color="emerald.400">Agricultural Ecosystem</Heading>
                                </Heading>
                                </Center>
                                <Center>
                                    <Box bg="green.100" py="4" mt="10" px="3" borderRadius="5" rounded="md" maxWidth={Platform.OS=='android'?'380':'600'}>
                                        <Flex direction={Platform.OS=='android'?"column-reverse":'row'} justifyContent="space-between">
                                            <Box justifyContent="space-between">
                                                <VStack space="2">

                                                    <Text noOfLines={6} pt="3" fontSize={Platform.OS == 'web' ? 'xl' : 'md'} style={{ marginLeft: Platform.OS === 'web' ? '0%' : 0, marginTop: '1%', marginRight: Platform.OS === 'web' ? '5%' : 0 }} maxW="600">
                                                        To provide competitive price to the seller of agricultural produce, to make arrangements for correct weighing.
                                                        And to pay the price to the producer on the same day.
                                                        To make agricultural inputs available in the market yard for increasing agricultural production.
                                                    </Text>


                                                </VStack>
                                            </Box>
                                            <Image mx={Platform.OS=='android'?"120":null} source={{
                                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhW-jb2PvbjBDIqebhFVjGoQE3WREGiZyYfA&usqp=CAU'
                                            }} alt="Happy farmer" height="100" rounded="full" width="100" />
                                        </Flex>
                                    </Box>
                                </Center>
                            </View>
                        </VStack>
                        <Flex space={3} justifyItems='space-between' direction={Platform.OS == 'web' ? 'row' : 'column'} marginTop={Platform.OS == 'android' ? '5%' : '5%'} marginLeft={Platform.OS == 'android' ? '0%' : '0%'}>
                            <MyCard uri="https://www.krishakjagat.org/wp-content/uploads/2017/01/552-800x445.jpg" title="Wheat" subtitle="Price = Rs. 5000" desc="Bangalore, Hyderabad, Chennai" />
                            <Text>     </Text>
                            <MyCard uri="https://img.krishijagran.com/media/67402/rfg.jpg" title="Paddy" subtitle="Price = Rs. 4000" desc="Bengaluru, Chennai ,Hyderabad" />
                            <Text>      </Text>
                            <MyCard uri="https://files.123freevectors.com/wp-content/uploads/backgroundvectors/wheat-crop-icons-free-vector.jpg" title="Jowar" subtitle="Price = Rs. 6000" desc="Bengaluru, Hyderabad, Chennai " />
                        </Flex>
                        <Text mt={"50"}>
                                                   
                        </Text>
                    </Center>
                    < Footer />
                </Box>
            </ScrollView>
        );
    }
}