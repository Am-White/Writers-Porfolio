import React from 'react';
import './style.css';
import {Image} from 'react-native';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function ImageComponents() {

  return (
    <div  className='article'>
          <img 
            alt="main" 
            src={'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'} 
            loading='lazy'
            className='picture'
            style={{boxShadow: '2px 2px 10px'}}
            />
            <p 
            className='header'>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod” 
              <br />-AI
            </p>
    </div>
  );
}

export default ImageComponents;