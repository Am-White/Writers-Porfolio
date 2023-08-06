import React from 'react';
import './style.css';
import {Image} from 'react-native';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Light icon by Icons8
// Icons in images folder === Change from links

function IconComponents() {

  return (
            <Box sx={{ flexGrow: 1, border: '#F5D3C8 solid 4px', boxShadow: '1px 1px 5px' }} className='iconContainer'>
              <Typography variant='h2' style={{fontFamily: 'catshop', borderBottom: '#F5D3C8 dashed 2px'}}>
                What We Offer:
              </Typography>
              <Grid container columns={{ sm: 9, md: 12 }} rows={{ xs: 3}} justifyContent='center' direction='row'>
                <Grid item xs={2} sm={3} md={4} className='iconGrid'>
                  <Box alt='icon' component='img' src={'https://img.icons8.com/?size=512&id=DBkjPk4hSDoE&format=png'} className='icons'/>
                  <Typography style={{fontFamily: 'Bebas Neue', fontSize: '18px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </Grid>

                <Grid item xs={2} sm={3} md={4} className='iconGrid'>
                  <Box alt='icon' component='img' src={'https://img.icons8.com/?size=512&id=p8n83xOz6mMu&format=png'} className='icons'/>
                  <Typography style={{fontFamily: 'Bebas Neue', fontSize: '18px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </Grid>

                <Grid item xs={2} sm={3} md={4} className='iconGrid'>
                  <Box alt='icon' component='img' src={'https://img.icons8.com/?size=512&id=ajkz1dk1AfEe&format=png'} className='icons'/>
                  <Typography style={{fontFamily: 'Bebas Neue', fontSize: '18px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
  );
}

export default IconComponents;