import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


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
        <Box sx={{ margin: '30px'}}>
          <Grid container justifyContent='center' alignItems='center' sx={{margin: 'auto', width: '90%', height: '500px', backgroundColor: '#565857', boxShadow: '2px 2px 5px'}}>

              <Grid item xs={6}>
                <Box alt='icon' component='img' sx={{/* !!!!!!! */}} src={'https://images.unsplash.com/photo-1687639676496-ebb340ee4def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} className='teamImg'/>
                <Box sx={{width: '40%', position: 'absolute', marginLeft: '20px', marginRight: '10px', left: 0, top: '1150px', backgroundColor: '#8a8d91a0', padding: '30px', border: '#F5D3C8 solid 2px'}}>
                  <Typography variant='h4' sx={{ fontFamily: 'catshop', color: '#F5D3C8'}}> Firstname Lastname</Typography>
                  <br />
                  <Button href='' className='menuBtn' variant="outlined"
                    style={{fontFamily:'catshop', backgroundColor: '#8A8D91', background: 'none',  border: '#BCBDC0 solid 1px', color: 'white', marginLeft: '10px', marginRight: '10px', borderRadius: 1}}>
                    LEARN MORE
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={6}>
              <Box alt='icon' component='img' src={'https://images.unsplash.com/photo-1687639676496-ebb340ee4def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} className='teamImg'/>
                <Box sx={{width: '40%', position: 'absolute', marginRight: '20px', marginLeft: '10px', right: 0, top: '1150px', backgroundColor: '#8a8d91a0', padding: '30px', border: '#F5D3C8 solid 2px'}}>
                  <Typography variant='h4' sx={{ fontFamily: 'catshop', color: '#F5D3C8'}}> Firstname Lastname</Typography>
                  <br />
                  <Button href='' className='menuBtn' variant="outlined"
                    style={{fontFamily:'catshop', backgroundColor: '#8A8D91', background: 'none',  border: '#BCBDC0 solid 1px', color: 'white', marginLeft: '10px', marginRight: '10px', borderRadius: 1}}>
                    LEARN MORE
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>


      ) : (
        <>
        <Box sx={{ margin: '30px'}}>
          <Grid container justifyContent='center' alignItems='center' sx={{margin: 'auto', width: '90%', height: '500px', backgroundColor: '#565857', boxShadow: '2px 2px 5px'}}>
              <Grid item xs={6}>
                <Box alt='icon' component='img' src={'https://images.unsplash.com/photo-1687639676496-ebb340ee4def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} className='teamImgSmall'/>
                <Box sx={{width: '100%', backgroundColor: '#8a8d91a0', padding: '30px', border: '#F5D3C8 solid 2px',}}>
                  <Typography variant='h4' sx={{ fontFamily: 'catshop', color: '#F5D3C8'}}> Firstname Lastname</Typography>
                  <br />
                  <Button href='' className='menuBtn' variant="outlined"
                    style={{fontFamily:'catshop', backgroundColor: '#8A8D91', background: 'none',  border: '#BCBDC0 solid 1px', color: 'white', marginLeft: '10px', marginRight: '10px', borderRadius: 1}}>
                    LEARN MORE
                  </Button>
                </Box>
              </Grid>
          </Grid>
        </Box>
                <Box sx={{ margin: '30px'}}>
                <Grid container justifyContent='center' alignItems='center' sx={{margin: 'auto', width: '90%', height: '500px', backgroundColor: '#565857', boxShadow: '2px 2px 5px'}}>
      
                    <Grid item xs={6}>
                      <Box alt='icon' component='img' sx={{}} src={'https://images.unsplash.com/photo-1687639676496-ebb340ee4def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} className='teamImgSmall'/>
                      <Box sx={{width: '90%',  margin:'auto', backgroundColor: '#8a8d91a0', padding: '30px', border: '#F5D3C8 solid 2px'}}>
                        <Typography variant='h4' sx={{ fontFamily: 'catshop', color: '#F5D3C8'}}> Firstname Lastname</Typography>
                        <br />
                        <Button href='' className='menuBtn' variant="outlined"
                          style={{fontFamily:'catshop', backgroundColor: '#8A8D91', background: 'none',  border: '#BCBDC0 solid 1px', color: 'white', marginLeft: '10px', marginRight: '10px', borderRadius: 1}}>
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
