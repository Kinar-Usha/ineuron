import React from "react";
import {
    AspectRatio,
    Stack,
    Image,
    Box,
    Heading,
    Center,
    Text,
    HStack,
    VStack,
    Flex,
    Button,
    Spacer,
} from "native-base";
import { SafeAreaView } from "react-native-web";

export default function Test() {
    return (
        <HStack safeAreaTop>
            <Flex w="100%" direction="row">
                <Heading
                    m="4"
                    size="md"
                    fontWeight="semibold"
                    color="green.700"
                >
                    Agricult
                </Heading> 
                <Spacer></Spacer>
                <Button w="2"  m="3">HI</Button>
                <Button w="2" m="3">Hi2</Button>
                <Button w="2" m="3">Hi3</Button>
            </Flex>
        </HStack>
    );
}
