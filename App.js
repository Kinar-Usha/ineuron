import React from "react";
import { NativeBaseProvider, Box, extendTheme, Button } from "native-base";
import Home from "./home";
import Test from "./Test";
import Sell from "./Sell";
import Charts from "./Charts";
// import { } from "@react-navigation"
import { Line } from "react-chartjs-2";

import { VictoryChart, VictoryLine, VictoryTheme } from "victory";


export default function App() {
    return (
        <NativeBaseProvider>
            
            <Sell/>
            
        </NativeBaseProvider>
    );
}
