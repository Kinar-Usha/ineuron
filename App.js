import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Home from './login';

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}
