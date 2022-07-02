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

export default class MyCard extends React.Component{
    render(){
        return (
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
                                        {this.props.title}
                                    </Heading>
                                    <Text fontSize="xs" _light={{
                                        color: "green.700"
                                    }} _dark={{
                                        color: "green.700"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        {this.props.subtitle}
                                    </Text>
                                </Stack>
                                <Text fontWeight="400">
                                    {this.props.desc}
                                </Text>
                                <HStack alignItems="center" space={4} justifyContent="space-between">
                                    <HStack alignItems="center">
                                        <Text color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                        }} fontWeight="400">
                                        </Text>
                                    </HStack>
                                </HStack>
                            </Stack>
                        </Box>
                    </Box>
        );
    }
}