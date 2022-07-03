import {
    Box,
    Stack,
    Select,
    Flex,
    Text,
    VStack,
    View,
    useMediaQuery,
    CheckIcon, Input,Heading,
Button,
Center
} from "native-base";
import { Platform } from 'react-native';

import React, {useState} from "react";
import { Bar } from "react-chartjs-2";
import { Charts } from "./Charts";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

let bengaluru = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
]

let Mysuru = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 4 },
    { x: 4, y: 4 },
    { x: 5, y: 3 }
]
let Hubli = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 3 },
    { x: 4, y: 4 },
    { x: 5, y: 5 }
]

function Sell() {
    var [place, setPlace] = useState()
    var [price,setPrice]=useState()
    var [data, setData] = useState()
    var [submit,setSubmit] = useState(false)
    const handleChange=(params)=> (event)=>{
        // setPrice(event.target.value)*data[data.length()-1][y];
        setPrice(event.target.value);
    }
    const handleSubmit=()=>{
        setSubmit(true);
        // let x= parseInt(data[data.length() -1 ][y])
        // let y = price * x
        console.log(data[data.length-1].y)

        
    }
    const display=()=>{
        let x= parseInt(data[data.length -1 ].y)
        let y = price * x
        data[data.length-1].y
        
        
    }
    return (
        <Box>
            <Flex
                style={{ flex: 1 }}
                bg=""
                direction={{
                    base: "column",
                    md: "column",
                    lg: "row",
                }}
                // spacing="200px"
                p={{ base: "0", md: "5", lg: "5" }}
                // alignSelf="flex-start"
            >
                <Box m="1" w="" bg="" style={{ flex: 0.5 }} alignItems="center">
                    <Text>Chart</Text>
                    <Select
                        w={[13, 12, 4]}
                        bg="amber.800"
                        selectedValue={place}
                        minWidth="200"
                        accessibilityLabel="Choose Place"
                        placeholder="Choose Place"
                        _selectedItem={{
                            bg: "teal.600",
                            // endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => {
                            setPlace(itemValue)
                            if (itemValue === "my") {
                                setData(Mysuru)
                            }
                            if (itemValue === "be") {
                                setData(bengaluru)
                            }
                            if (itemValue === "hu") {
                                setData (Hubli)
                                console.log(data)
                            }
                            
                        }}
                    >
                        <Select.Item label="Mysuru" value="my" />
                        <Select.Item label="Bengaluru" value="be" />
                        <Select.Item
                            label="Hubli"
                            value="hu"
                        />
                       
                    </Select>
                  
                    <Box h="90%"><VictoryChart theme={VictoryTheme.material} h="50" shouldComponentUpdate="true">
                        <VictoryLine
                            style={{
                                data: { stroke: "#c43a31" },
                                parent: { border: "1px solid #ccc" },
                            }}
                            data={data}
                        />
                    </VictoryChart></Box>
                </Box>
                <Center p={ [20,20,30]} w="" h="" bg="" style={{ flex: 0.5 }}>
                    <Text>Type in your required quantity of crop</Text>
                    <Input mb="15" w="70%" onChange={handleChange("price")}/>
                    
                    <Button onPress={()=>{handleSubmit()}}>Press to see price</Button><br/>
                    
                    {submit ? <Box bg="green.100" py="4" mt="10" px="3" borderRadius="5" rounded="md" maxWidth={Platform.OS == 'android' ? '380' : '600'}> <Text>Total price of your crop = Rs. {price*data[data.length-1].y*1000}</Text></Box>:null}
                                    
                    
                </Center>
            </Flex>
        </Box>
    );
}

export default Sell;
