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
            src={'https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
            loading='lazy'
            width= '100%'
            className='picture'
            style={{boxShadow: '1px 1px 3px'}}
            />

            <Box className='header'>
              <Typography variant='h5' sx={{ fontFamily: 'averia', marginBottom: '10px', fontWeight: 600}}>
              You open the website, looking to hire a talented narrative designer. What do you do first?
              </Typography>
              <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" justifyContent="center">
                <Button 
                  href='/services'
                  className='cardBtn'
                    style={{ fontFamily:'cabin', fontSize: 'smaller', fontWeight: 800, background: '#8798ED', border: '#8798ED solid 2px', color: '#411ECC', boxShadow: '3px 3px #411ECC'}}> 
                   Browse Our Services
                </Button>
                <Button 
                  href='/About helen'
                  className='cardBtn'
                    style={{fontFamily:'cabin', fontSize: 'smaller', fontWeight: 800, background: '#8798ED', border: '#8798ED solid 2px', color: '#411ECC', boxShadow: '3px 3px #411ECC'}}> 
                    Learn about Helen 
                </Button>
                <Button 
                  href='/About Jake'
                  className='cardBtn'
                    style={{fontFamily:'cabin', fontSize: 'smaller', fontWeight: 800, background: '#8798ED', border: '#8798ED solid 2px', color: '#411ECC', boxShadow: '3px 3px #411ECC'}}> 
                    Learn about Jake 
                </Button>
            </Stack>
            </Box>
    </div>
    </>
  );
}

export default ImageComponents;