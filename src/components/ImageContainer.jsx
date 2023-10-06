import React from 'react';
import './style.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


function ImageComponents() {

  return (
    <>
    <div  className='article'>
          <img 
            alt="main" 
            src={'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'} 
            loading='lazy'
            className='picture'
            style={{boxShadow: '1px 1px 3px'}}
            />

            <Box className='header'>
              <Typography variant='h5' sx={{ fontFamily: 'catshop', marginBottom: '20px'}}>
              You open the website, looking to hire a talented narrative designer. What do you do first?
              </Typography>
              <Stack spacing={2} direction="row" justifyContent="center">
                <Button 
                  href='/services'
                  className='cardBtn'
                    style={{display: 'flex', fontFamily:'cabin', fontWeight: 800, background: '#8798ED', border: '#8798ED solid 2px', color: '#411ECC', boxShadow: '3px 3px #411ECC'}}> 
                   Browse Our Services
                </Button>
                <Button 
                  href='/About helen'
                  className='cardBtn'
                    style={{display: 'flex',fontFamily:'cabin', fontWeight: 800, background: '#8798ED', border: '#8798ED solid 2px', color: '#411ECC', boxShadow: '3px 3px #411ECC'}}> 
                    Learn about Helen 
                </Button>
                <Button 
                  href='/About Jake'
                  className='cardBtn'
                    style={{display: 'flex',fontFamily:'cabin', fontWeight: 800, background: '#8798ED', border: '#8798ED solid 2px', color: '#411ECC', boxShadow: '3px 3px #411ECC'}}> 
                    Learn about Jake 
                </Button>
            </Stack>
            </Box>
    </div>
    </>
  );
}

export default ImageComponents;