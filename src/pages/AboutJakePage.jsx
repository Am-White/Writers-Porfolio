import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import '../components/style.css';
import jake from './../images/jake_profile.png';


function AboutJake() {

  return (
    <>
        <Box sx={{textAlign: 'center', backgroundColor: '#35386F', padding: '20px', marginBottom: '15px'}}>

          <Grid container justifyContent='center' alignItems='center' sx={{flexGrow: 1, margin: 'auto', width: '90%', height: 'fit-content', padding: '10px', backgroundColor: '#4E57A4', borderRadius: '5px'}}>
             <Grid item xs={12}>
             <Typography variant='h2' style={{fontFamily: 'catshop', color: '#BEB2EE', borderBottom: '#E5EBF7 solid 3px', padding: '5px', marginBottom: '25px'}}> Jake Nelson </Typography>
             </Grid>
              <Grid item xs={12}>
                <Box alt='icon' component='img' sx={{ margin: '20px'}} src={jake} className='aboutUsImg'/>
                <Box sx={{width: '90%', backgroundColor: 'none', borderRadius: '5px', padding: '10px', margin: 'auto'}}>
                  <Typography  variant='h5' sx={{fontFamily: 'averia',  color: '#BEB2EE'}}> 
                  Jake Nelson is a dynamic game writer, narrative designer, and worldbuilder known for his ability to blend diverse ideas into compelling gaming experiences. With a keen eye for detail and an inventive storytelling approach, Jake challenges traditional boundaries to craft narratives that captivate and engage players. As a passionate gamer, Jake is deeply familiar with industry trends and ludonarrative techniques. If you're seeking a fresh perspective and a creative storyteller, Jake brings a unique skill set that promises to unlock your game’s narrative potential.
                  <br/>
                  <br/>
                  Jake received his B.A. in Narrative Studies from the University of Southern California.
                  <br/>
                  <br/>

                    <Typography variant='h4' sx={{fontFamily: 'catshop', marginTop: '40px', color: '#E5EBF7'}}>
                     Recent Projects
                    </Typography>
                    <Divider  style={{ backgroundColor: '#BEB2EE', height: '3px', width:'80%', margin: 'auto'}}/>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}>
                    GAME WRITER - BLACKTOP HOOPS
                    </Typography>
                    <Typography variant='body' style={{marginBottom: '10px', fontFamily: 'averia', listStyle: 'none'}}>
                    <li> - Wrote 3,300+ lines of dialogue and character barks for Blacktop Hoops, the first AAA multiplayer arcade VR basketball game</li>
                    <li> - Crafted scripts for 7 unique cinematics that appear throughout the game's campaign mode, leveraging the unique opportunities and restrictions of VR to propel the story using groundbreaking techniques</li>
                    <li> - Designed the narrative for a story-driven campaign mode that spans 4 diverse locations</li>
                    <li> - Created a character bible for 12 unique bosses, each with their own distinct personality, background, relationships, and motivations</li>
                    <li> - Conducted thorough research of streetball history, culture, slang, and trends using a variety of sources (TikTok, YouTube, academic articles, documentaries, etc.) to write characters and dialogue that are grounded in real world streetball culture</li>
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}> 
                    LORE WRITER & NARRATIVE DESIGNER - RUSHDOWN REVOLT
                    </Typography>
                    <Typography variant='body' style={{marginBottom: '10px', listStyle: 'none', fontFamily: 'averia'}}>
                    <li > - Created the lore and world for Rushdown Revolt, a revolutionary platform fighting game featuring 12 unique combatants to choose from</li>
                    <li > - Led the story direction for an original playable character, The Torment, and collaborated closely with art and development teams throughout production</li>
                    <li > - Created and maintained documentation (including timeline, character bios, world history, etc.) that guided the development of characters, stages, campaign mode, and other assets</li>
                    <li > - Wrote compelling short stories, dialogue, in-game copy, and strings for character skins</li>
                    </Typography>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}>
                    WARNER BROS.
                    </Typography>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}>
                    BAOBAB STUDIOS
                    </Typography>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}>
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

export default AboutJake;