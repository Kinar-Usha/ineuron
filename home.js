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
    VStack
} from "native-base";
import { Platform } from 'react-native';
// var firstImage = require('./assets/home-bg.jpg');
// import bg from './bg';

export default class Home extends React.Component {
    render() {
        return (

            // <Box>
            //     <AspectRatio ratio={{
            //     base: 3/4,
            //     md:9/10
            // }} height={{
            //     base: 200,
            //     md: 200
            // }}>
            //     <Image resizeMode="cover" source={{
            //         uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKn80JbibeGbujGOQpWHBT29fT1yTdClvZzIoynxd7s15_RRftdVGf1lSxf4R1pGu-dk&usqp=CAU"
            //     }} alt="" />
            // </AspectRatio>
            // <View style={{position:'absolute', margin:20,size:20}}>
            // <Text fontSize="lg">Name</Text>
            // </View>
            // </Box>
            <Box w={['100%', '100%', '100%']}>
                {/* <Box safeAreaTop /> */}
                <Box position='absolute'>
                <AspectRatio  w="100%" h="100%" ratio={16 / 9}>
                                    <Image source={{uri:"https://img.freepik.com/free-vector/flat-farm-landscape_52683-9443.jpg?size=626&ext=jpg"}} alt=""  />

                </AspectRatio>
                </Box>
                <Center w="100%">
                <HStack   bg="green.100"  px="1" py="3" justifyContent="space-between"  w="100%" >
                    {/* <HStack alignItems="center" marginLeft='2%' > */}
                        <Text color="black" fontSize="20" fontWeight="bold" marginLeft='2%' alignItems='center'>
                            Name
                        </Text>
                    {/* </HStack> */}
                   
                    <HStack space={3}>
                        <Button size="md" variant="solid" backgroundColor="green.500">
                            Login
                        </Button>
                        <Button size="md" variant="solid" backgroundColor="green.500">
                            Register
                        </Button>
                        <Button size="md" paddingX='1%' variant="solid" backgroundColor="green.500">
                            Sell
                        </Button>
                    </HStack>
                </HStack>
                <VStack>
                    <View>
                        <Heading fontSize={Platform.OS == 'web' ? '5xl' : '2xl'} alignItems={Platform.OS == 'web' ? 'flex-start' : 'center'} justifyItems={Platform.OS == 'web' ? 'flex-start' : 'center'} style={{ marginLeft: Platform.OS === 'web' ? '5%' : 0, marginTop: Platform.OS == 'web' ? '10%' : '5%' }}>
                            A platform for the{" "}
                            <Heading fontSize={Platform.OS == 'web' ? '5xl' : '2xl'} alignItems={Platform.OS == 'web' ? 'flex-start' : 'center'} color="emerald.400">Agricultural Ecosystem</Heading>
                        </Heading>
                        <Text pt="3" fontSize={Platform.OS == 'web' ? 'xl' : 'md'} style={{ marginLeft: Platform.OS === 'web' ? '5%' : 0, marginTop: '1%' }}>
                            This is just a random text that i am using to see how things work
                        </Text>
                    </View>
                </VStack>
                <Flex direction={Platform.OS == 'web' ? 'row' : 'column'} marginTop={Platform.OS=='android'?'5%':'10%'} marginLeft={Platform.OS=='android'?'0%':'2%'}>
                    <Box alignItems="center">
                        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                            <Box>
                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image source={{
                                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                    }} alt="image" />
                                </AspectRatio>
                            </Box>
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading size="md" ml="-1">
                                        The Garden City
                                    </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "violet.500"
                                    }} _dark={{
                                        color: "violet.400"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        The Silicon Valley of India.
                                    </Text>
                                </Stack>
                                <Text fontWeight="400">
                                    Bengaluru (also called Bangalore) is the center of India's high-tech
                                    industry. The city is also known for its parks and nightlife.
                                </Text>
                                <HStack alignItems="center" space={4} justifyContent="space-between">
                                    <HStack alignItems="center">
                                        <Text color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                        }} fontWeight="400">
                                            6 mins ago
                                        </Text>
                                    </HStack>
                                </HStack>
                            </Stack>
                        </Box>
                    </Box>
                </Flex>
                </Center>
            </Box>
        );
    }
}