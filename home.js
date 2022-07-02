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
} from "native-base";
import { Platform } from 'react-native';

import MyCard from "./card";

export default class Home extends React.Component {

    render() {
    // const windowWidth = useWindowDimensions().width;
    // console.log(windowWidth);

        return (
            <Box w={['100%', '100%', '100%']}>
                {/* <Box safeAreaTop /> */}
                <Box position='absolute'>
                <AspectRatio  w="100%" h="100%" ratio={16 / 9}>
                                    <Image source={{uri:"https://img.freepik.com/free-vector/flat-farm-landscape_52683-9443.jpg?size=626&ext=jpg"}} alt=""  />

                </AspectRatio>
                </Box>
                <Center w="100%">
                <HStack   bg="green.100"  px="1" py="3" justifyContent="space-between"  w="100%" >
                        <Text color="black" fontSize="20" fontWeight="bold" marginLeft='2%' alignItems='center'>
                            Name
                        </Text>
                   
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
                    <Flex space={3} justifyItems='space-between' direction={Platform.OS == 'web' ? 'row' : 'column'} marginTop={Platform.OS=='android'?'5%':'10%'} marginLeft={Platform.OS=='android'?'0%':'2%'}>
                        <MyCard uri= "https://www.krishakjagat.org/wp-content/uploads/2017/01/552-800x445.jpg" title="First One" subtitle="Some random sentence" desc="Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife"/>
                        <Text>     </Text>
                        <MyCard uri= "https://img.krishijagran.com/media/67402/rfg.jpg" title="First One" subtitle="Some random sentence" desc="Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife"/>
                        <Text>      </Text>
                        <MyCard uri= "https://files.123freevectors.com/wp-content/uploads/backgroundvectors/wheat-crop-icons-free-vector.jpg" title="First One" subtitle="Some random sentence" desc="Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife"/>
                    </Flex>                
                </Center>
            </Box>
        );
    }
}