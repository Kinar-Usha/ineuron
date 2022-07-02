import {
    Dimensions,
    Image,
  } from 'react-native'
  import React from 'react';
  var firstImage = require('./assets/home-bg.png');

  
  const BackgroundImage = (props) => {
    const window = Dimensions.get('window')
    const height = props.height || window.height
    const width = window.width
    const resizeMode = props.resizeMode || 'cover' // cover
    return (
      <Image
        style={[props.styles, {height: height - props.headerSize, width: null, resizeMode: resizeMode }]}
        opacity={1}
        source={firstImage}
      >
        {props.children}
      </Image>
    )
  }
  
  export default BackgroundImage