import React from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Light icon by Icons8
// Icons in images folder === Change from links

function IconComponents() {

  return (
    <>
              <Typography variant='h2' style={{fontFamily: 'catshop', color: '#E5EBF7', padding: '10px', marginTop: '30px'}}>
                What We Do
              </Typography>

              <Grid container columns={{xs: 1, sm: 4, md: 8, lg: 12 }}  justifyContent='center' sx={{width: '100%', margin: 'auto', padding: '10px'}}>
                <Grid item xs={2} sm={3} md={4} className='iconGrid'>
                  <Box sx={{ flexGrow: 1, marginBottom: '5px' }} className='iconContainer'>
                    <Box alt='icon' component='img' src={'https://img.icons8.com/?size=512&id=DBkjPk4hSDoE&format=png'} className='icons'/>
                    <Typography variant='h4' style={{fontFamily: 'catshop', color: '#373737'}}>Brainstorming</Typography>
                    <Typography variant='h6' style={{fontFamily: 'averia', color: '#373737', padding: '3%'}}>
                    Helen and Jake take story seriously, and will prepare the foundations of your world with meticulous care. Have a game already that needs a story? We will play your game, study the fans, and work with the already-existing seeds of lore to create a story so true to the game it seems like it was there from the beginning.
                    </Typography>
                  </Box>
                </Grid>

                    <Grid item xs={2} sm={3} md={4} className='iconGrid'>
                      <Box sx={{ flexGrow: 1, marginBottom: '5px' }} className='iconContainer'>
                        <Box alt='icon' component='img' src={'https://img.icons8.com/?size=512&id=p8n83xOz6mMu&format=png'} className='icons'/>
                        <Typography variant='h4' style={{fontFamily: 'catshop', color: '#373737'}}>Starting to Create</Typography>
                        <Typography variant='h6' style={{fontFamily: 'averia', color: '#373737', padding: '3%'}}>
                        Each department in a game plays an essential part in creating comprehensive lore. Jake and Helen have worked across multiple disciplines and will bring those collaborative skills to your team to ensure that every element of the game serves its story.
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={2} sm={3} md={4} className='iconGrid'>
                      <Box sx={{ flexGrow: 1, marginBottom: '5px'}} className='iconContainer'>
                        <Box alt='icon' component='img' src={'https://img.icons8.com/?size=512&id=ajkz1dk1AfEe&format=png'} className='icons'/>
                        <Typography variant='h4' style={{fontFamily: 'catshop', color: '#373737'}}>Finishing Touches</Typography>
                        <Typography variant='h6' style={{fontFamily: 'averia', color: '#373737', padding: '3%'}}>
                        We will craft deliverables to your liking and work together with you until they’re perfect. We can create a comprehensive story bible tailored to your unique game, so your team can stay on the same page throughout development. We want to make sure you have the tools you need in the long term to bring your game’s story to life.
                        </Typography>
                      </Box>
                    </Grid>
              </Grid>

            </>
  );
}

export default IconComponents;