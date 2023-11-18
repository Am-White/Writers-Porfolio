import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import helen from './../images/helen_profile.png';
import '../components/style.css';


function AboutHelen() {

  return (
    <>
        <Box sx={{textAlign: 'center', backgroundColor: '#35386F', padding: '20px', marginBottom: '15px'}}>

          <Grid container justifyContent='center' alignItems='center' sx={{flexGrow: 1, margin: 'auto', width: '90%', height: 'fit-content', padding: '10px', backgroundColor: '#4E57A4', borderRadius: '5px'}}>
             <Grid item xs={12}>
             <Typography variant='h2' style={{fontFamily: 'catshop', color: '#E5EBF7', borderBottom: '#BEB2EE solid 3px', padding: '5px', marginBottom: '25px'}}> Helen Silverstein</Typography>
             </Grid>
              <Grid item xs={12}>
                <Box alt='icon' component='img' sx={{ margin: '20px'}} src={helen} className='aboutUsImg'/>
                <Box sx={{width: '90%', backgroundColor: 'none', borderRadius: '5px', padding: '10px', margin: 'auto'}}>
                  <Typography  variant='h5' sx={{fontFamily: 'cabin',  color: '#BEB2EE'}}> 
                  Helen Silverstein is an award-winning writer, narrative designer, poet, and kitten fosterer (really). Helen is a literary analyst who strives to find deeper themes and connections throughout individual works, giving each project the care and respect she would grant any classic work of literature. Helen is excited to pull the story out of your outlines and flood different aspects of your game with lore.
                  <br/>
                  <br/>

                    <Typography variant='h4' sx={{fontFamily: 'catshop', marginTop: '40px', color: '#E5EBF7'}}>
                      Recent Projects
                    </Typography>
                    <Divider  style={{ backgroundColor: '#BEB2EE', height: '3px', width:'80%', margin: 'auto'}}/>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}>
                    HEAD WRITER – BLACKTOP HOOPS
                    </Typography>
                    <Typography variant='body' style={{ color: '#BEB2EE', fontFamily: 'averia'}}>
                    Blacktop Hoops is a virtual reality basketball game. Helen designed the singleplayer narrative campaign mode, created the backstory and lore for the cast of twelve characters, wrote seven cinematic scripts for VR cutscenes, directed voice actors, and wrote over 3,000 lines of dialogue for characters. Helen collaborated with the creative directors and developers over multiple sessions to tweak and revise until the precise vision of the game was fully realized.  
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}> 
                    HEAD OF STORY - RUSHDOWN REVOLT
                    </Typography>
                    <Typography variant='body' style={{ color: '#BEB2EE', fontFamily: 'averia'}}>
                    Rushdown Revolt is a platform fighting game. Helen created lore for an existing game with a dedicated fanbase, and studied the gameplay and the fandom to ensure that the lore felt like it had been there from the very beginning. She created and maintained the lore bible with backstories for the game’s cast of 12 original characters. She traced back the lineage of the characters and the emotional and historic developments that led to the world, with lore going back centuries. She wrote in-game dialogue and directed voice actors. She designed concepts for physical merchandise, such as key chains, bucket hats, and stickers. She wrote supplemental short stories to generate excitement for new characters and further flesh out backstories. One of Helen’s greatest joys on this project was learning to work across several different disciplines–in her role as Head of Story, she collaborated with the art, media, and programming teams to ensure cohesive storytelling
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}>
                    STORY EDITOR - ARTIFICIAL
                    </Typography>
                    <Typography variant='body' style={{ color: '#BEB2EE', fontFamily: 'averia'}}>
                    Artificial is a primetime-Emmy-award-winning, live interactive scripted television program. Helen wrote on the fourth season, plotted out potential branching storylines and crafted character responses to audience questions in real time, sharpening her skills for quickly writing snappy, authentic dialogue. 
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'cabin'}}>
                    WRITER - DWELLING
                    </Typography>
                    <Typography variant='body' style={{ color: '#BEB2EE', fontFamily: 'cabin'}}>
                    Dwelling is a choice-based interactive story game. Helen adapted her own original dramatic science fiction television pilot into a choose-your-own-adventure script. That script won second place in the international Branches Interactive Screenwriting competition. Part of that competition included pitching original ideas to development companies; as a result of that pitching session, Helen sold the video game option and wrote twelve chapters of the ensuing branching choices mobile game, including dialogue and descriptions. Additionally, she collaborated with the art teams and editorial teams to create visuals and marketing materials for the game. She also communicated frequently with the Chinese localization team to ensure accurate translations for the game.
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'cabin'}}>
                    ...AND MORE! 
                    </Typography>

                  </Typography>
                </Box>
              </Grid>
          </Grid>
        </Box>

    </>
  );
}

export default AboutHelen;