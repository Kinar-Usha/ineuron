import { Box, Stack, Flex, Text, View, useMediaQuery } from "native-base";
import React from "react";

import { Line } from "react-chartjs-2";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

function Charts() {
    return <VictoryChart theme={VictoryTheme.material} >
        <VictoryLine
            style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc" },
            }}
            data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 },
            ]}
        />
    </VictoryChart>
    // return <Box>
    //     <Text>hiiii</Text>
    // </Box>;
}
export default Charts;
