import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import helen from './../images/helen_profile.png';
import jake from './../images/jake_profile.png';


function DreamTeam() {
  const [isLayout, setLayout] = useState(window.innerWidth > 900);

  const updateMedia = () => {
    setLayout(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {isLayout ? (
        <Box sx={{  borderRadius: '5px', background: '#4E57A4'}}>

          <Grid container justifyContent='center' alignItems='center' sx={{display: 'flex', margin: 'auto'}}>
             <Grid item xs={12}>
             <Typography variant='h2' style={{fontFamily: 'catshop', color: '#BEB2EE'}}> Who We Are</Typography>
             </Grid>
              <Grid item xs={6}>
                <Box alt='icon' component='img' src={helen} className='teamImg'/>
                <Box sx={{width: '90%', backgroundColor: 'none', padding: '20px', margin: 'auto'}}>
                  <Typography variant='h4' sx={{ fontFamily: 'catshop', color: '#BEB2EE', borderBottom: '#BEB2EE 4px solid'}}>Helen Silverstein</Typography>
                  <br />
                  <Button href='/About Helen' className='menuBtn' variant="outlined"
                          style={{fontFamily:'cabin',  fontWeight: 800, fontSize: '18px', backgroundColor: '#8798ED', border: '#8798ED solid 3px', boxShadow: '3px 3px #411ECC', borderRadius: '3px', color: '#411ECC', marginLeft: '10px', marginRight: '10px'}}>
                    LEARN MORE
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={6}>
              <Box alt='icon' component='img' src={jake} className='teamImg'/>
                <Box sx={{width: '90%', backgroundColor: 'none', padding: '20px', margin: 'auto'}}>
                  <Typography variant='h4' sx={{ fontFamily: 'catshop', color: '#BEB2EE',  borderBottom: '#BEB2EE 4px solid'}}>Jake Nelson</Typography>
                  <br />
                  <Button href='/About Jake' className='menuBtn' variant="outlined"
                          style={{fontFamily:'cabin', fontWeight: 800, fontSize: '18px', backgroundColor: '#8798ED', border: '#8798ED solid 3px', boxShadow: '3px 3px #411ECC', borderRadius: '3px', color: '#411ECC', marginLeft: '10px', marginRight: '10px'}}>
                    LEARN MORE
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>


      ) : (
        <>
        <Box sx={{ borderRadius: '5px', background: '#4E57A4'}}>
          
          <Grid container justifyContent='center' alignItems='center' >
            <Grid item xs={12}>
              <Typography variant='h2' style={{fontFamily: 'catshop', color: '#BEB2EE', marginBottom: '50px'}}> Who We Are </Typography>
            </Grid>
              <Grid item xs={12} >
                <Box alt='icon' component='img' src={helen} className='teamImg'/>
                <Box sx={{width: '90%', borderRadius: '5px', backgroundColor: 'none', padding: '20px', margin: 'auto', marginBottom: '80px'}}>
                  <Typography variant='h4' sx={{ fontFamily: 'averia', color: '#BEB2EE',  borderBottom: '#BEB2EE 4px solid'}}>Helen Silverstein</Typography>
                  <br />
                  <Button href='/About Helen' className='menuBtn' variant="outlined"
                    style={{fontFamily:'cabin', fontSize: '18px', fontWeight: 800, backgroundColor: '#8798ED',  border: '#8798ED solid 3px', boxShadow: '3px 3px #411ECC', borderRadius: '3px',color: '#411ECC'}}>
                    LEARN MORE
                  </Button>
                </Box>
              </Grid>
          </Grid>
                <Grid container justifyContent='center' alignItems='center'>
      
                    <Grid item xs={12}>
                      <Box alt='icon' component='img'src={jake} className='teamImg'/>
                      <Box sx={{width: '90%', borderRadius: '5px', marginBottom: '20px', backgroundColor: 'none', padding: '20px', margin: 'auto'}}>
                        <Typography variant='h4' sx={{ fontFamily: 'averia', color: '#BEB2EE',  borderBottom: '#BEB2EE 4px solid'}}>Jake Nelson</Typography>
                        <br />
                        <Button href='/About Jake' className='menuBtn' variant="outlined"
                          style={{fontFamily:'cabin', fontSize: '18px', fontWeight: 800, backgroundColor: '#8798ED', border: '#8798ED solid 3px', boxShadow: '3px 3px #411ECC', borderRadius: '3px', color: '#411ECC'}}>
                          LEARN MORE
                        </Button>
                      </Box>
                    </Grid>
                </Grid>
              </Box>
            </>
      )
      }
    </>
  );
}

export default DreamTeam;
