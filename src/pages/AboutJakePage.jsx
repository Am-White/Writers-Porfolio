import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../components/style.css';


function AboutJake() {
  const [isLayout, setLayout] = useState(window.innerWidth > 1100);

  const updateMedia = () => {
    setLayout(window.innerWidth > 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
        <Box sx={{textAlign: 'center', backgroundColor: '#35386F', padding: '20px', marginBottom: '15px'}}>

          <Grid container justifyContent='center' alignItems='center' sx={{flexGrow: 1, margin: 'auto', width: '90%', height: 'fit-content', padding: '10px', backgroundColor: '#4E57A4', borderRadius: '5px'}}>
             <Grid item xs={12}>
             <Typography variant='h2' style={{fontFamily: 'catshop', color: '#BEB2EE', borderBottom: '#E5EBF7 solid 3px', padding: '5px', marginBottom: '25px'}}> Jake Lastname </Typography>
             </Grid>
              <Grid item xs={12}>
                <Box alt='icon' component='img' sx={{ margin: '20px'}} src={'https://images.unsplash.com/photo-1687639676496-ebb340ee4def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} className='aboutUsImg'/>
                <Box sx={{width: '90%', backgroundColor: 'none', borderRadius: '5px', padding: '10px', margin: 'auto'}}>
                  <Typography  variant='h6' sx={{fontFamily: 'cabin',  color: 'white'}}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Imperdiet dui accumsan sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Imperdiet dui accumsan sit amet. </Typography>
                </Box>
              </Grid>
          </Grid>
        </Box>

    </>
  );
}

export default AboutJake;