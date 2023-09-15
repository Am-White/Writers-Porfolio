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
              <Typography variant='h2' style={{fontFamily: 'catshop', color: '#E5EBF7', padding: '10px', marginTop: '40px' }}>
                What We Do
              </Typography>

              <Grid container columns={{xs: 1, sm: 4, md: 8, lg: 12 }}  justifyContent='center' sx={{width: '80%', margin: 'auto'}}>
                <Grid xs={2} sm={3} md={4} className='iconGrid'>
                  <Box sx={{ flexGrow: 1, marginBottom: '5px' }} className='iconContainer'>
                    <Box alt='icon' component='img' src={'https://img.icons8.com/?size=512&id=DBkjPk4hSDoE&format=png'} className='icons'/>
                    <Typography variant='h4' style={{fontFamily: 'catshop', color: '#373737'}}>Brainstorming</Typography>
                    <Typography variant='h6' style={{fontFamily: 'cabin', color: '#373737'}}>
                    Helen and Jake take story seriously, and will prepare the foundations of your world with meticulous care. Want a world that hints at some obscure 4th century war? We will read everything ever written about it and find primary sources if available for character inspiration. Have a game already that needs a story? We will play your game, study the fans, and work with the already-existing seeds of lore to create a story so true to the game it seems like it was there from the beginning.
                    </Typography>
                  </Box>
                </Grid>

                    <Grid xs={2} sm={3} md={4} className='iconGrid'>
                      <Box sx={{ flexGrow: 1, marginBottom: '5px' }} className='iconContainer'>
                        <Box alt='icon' component='img' src={'https://img.icons8.com/?size=512&id=p8n83xOz6mMu&format=png'} className='icons'/>
                        <Typography variant='h4' style={{fontFamily: 'catshop', color: '#373737'}}>Starting to Create</Typography>
                        <Typography variant='h6' style={{fontFamily: 'cabin', color: '#373737'}}>
                        Art, programming, combat, marketing, animation, casting, development: every department in a game is an essential component to creating comprehensive lore. Jake and Helen have experience working across multiple disciplines and will bring those collaborative skills to your team to ensure that every element of the game serves its story and play.
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid xs={2} sm={3} md={4} className='iconGrid'>
                      <Box sx={{ flexGrow: 1, marginBottom: '5px'}} className='iconContainer'>
                        <Box alt='icon' component='img' src={'https://img.icons8.com/?size=512&id=ajkz1dk1AfEe&format=png'} className='icons'/>
                        <Typography variant='h4' style={{fontFamily: 'catshop', color: '#373737'}}>Finishing Touches</Typography>
                        <Typography variant='h6' style={{fontFamily: 'cabin', color: '#373737'}}>
                        We will create a story to your liking and work together until it’s perfect. Have a random idea after seeing it all play out? We’ll listen and implement your input. We will create a bible so that, years from now, if the game becomes bigger you can continue to add and develop the lore. We are here for a long time and a good time, and want to make sure you have the tools you need in the long term.
                        </Typography>
                      </Box>
                    </Grid>
              </Grid>

            </>
  );
}

export default IconComponents;