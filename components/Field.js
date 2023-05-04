import React from 'react';
import {TextInput} from 'react-native';
import {darkBlue} from './Constants';

const Field = props => {
  return (
    <TextInput 
      {...props}  
      style={{borderRadius: 100, color: darkBlue, paddingHorizontal: 10, width: '78%',backgroundColor:'rgb(220,220, 220)', marginVertical: 20,}}
      placeholderTextColor={darkBlue}></TextInput>
  );
}; 

export default Field;