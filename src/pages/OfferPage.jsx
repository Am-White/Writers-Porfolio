import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import '../components/style.css';


function OfferPage() {

  return (
    <>
        <Box sx={{textAlign: 'center', backgroundColor: '#35386F', padding: '20px', marginBottom: '15px'}}>

<Grid container justifyContent='center' alignItems='center' sx={{flexGrow: 1, margin: 'auto', width: '90%', height: 'fit-content', padding: '10px', backgroundColor: '#4E57A4', borderRadius: '5px'}}>
   <Grid item xs={12}>
   <Typography variant='h2' style={{fontFamily: 'catshop', color: '#E5EBF7', borderBottom: '#BEB2EE solid 3px', padding: '5px', marginBottom: '25px'}}>What We Offer</Typography>
   </Grid>
    <Grid item xs={12}>
      <Box sx={{width: '90%', backgroundColor: 'none', borderRadius: '5px', padding: '10px', margin: 'auto'}}>
        <div  variant='h5' sx={{fontFamily: 'averia',  color: '#BEB2EE'}}> 
        <Divider variant="fullWidth" style={{backgroundColor: '#BEB2EE ', height: '2px'}} /> 

          <br/>
          <Typography variant='h4' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}>
          Structural NARRATIVE DESIGN SPECS & QUEST DESIGN
          </Typography>

          <br/>
          <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/quill-pen.png" alt="quill-pen"/>
          <br/>
          <br/>
          <Typography variant='h4' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}> 
          Dialogue and Bark Writing
          </Typography>
          <Typography variant='h6' style={{ color: 'rgb(190, 178, 238)', fontFamily: 'averia'}}> 
          We put the character in Non-Player Characters. Our scribes will craft dialogue for all your characters that helps them stand out as individuals and connect with your players. Dialogue does not exist simply to deliver information: it can be beautiful and imply a larger world beyond the scope of a screen. Why settle for less than poetry and personality? With a background in television and live production dialogue writing, Helen and Jake can quickly and efficiently craft snappy, memorable lines for characters.
          </Typography>
          <br/>
          <br/>
          <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/quill-pen.png" alt="quill-pen"/>
          <br/>
          <br/>
          <Typography variant='h4' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}>
          Lore and Character Development
          </Typography>
          <Typography variant='h6' style={{ color: 'rgb(190, 178, 238)', fontFamily: 'averia'}}> 
          Story bibles. Wikis. In-world glossaries. Worlds themselves. Helen and Jake will build out worlds with histories spanning centuries. We take an empirical approach to magic and science fiction systems within stories to ground them in reality and guide players towards easy suspension of disbelief. When building characters, Helen and Jake consider not just the story’s setting and how it has shaped the world’s population, but also how the main characters affect each other and clash. Helen and Jake will create authentic but unique characters and worlds for your game.
          </Typography>
          <br/>
          <br/>
          <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/quill-pen.png" alt="quill-pen"/>
          <br/>
          <br/>
          <Typography variant='h4' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}>
          Cinematic Scripts
          </Typography>
          <Typography variant='h6' style={{ color: 'rgb(190, 178, 238)', fontFamily: 'averia'}}> 
          Cutscenes your players won’t want to skip. From text-based adventures to virtual reality, Helen and Jake can write cinematic scripts that your audience will love to watch or play through.
          </Typography>
          <br/>
          <br/>
          <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/quill-pen.png" alt="quill-pen"/>
          <br/>
          <br/>
          <Typography variant='h4' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}>
          Story Consultation
          </Typography>
          <Typography variant='h6' style={{ color: 'rgb(190, 178, 238)', fontFamily: 'averia'}}> 
          Our team will look over your game and offer a comprehensive story development plan.
          </Typography>
          <br/>
          <br/>
          <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/quill-pen.png" alt="quill-pen"/>
          <br/>
          <br/>
          <Typography variant='h4' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}>
          A Network of Passionate Creatives 
          </Typography>
          <Typography variant='h6' style={{ color: 'rgb(190, 178, 238)', fontFamily: 'averia'}}> 
          Do you need an artist? Several artists? Voice actors? Someone to cast the right voice actors? What about a social media guru, or marketing team? While scrolling through this website, did you wish to meet the talented graphic designer and computer programmer who set it up? After working over a decade in the games industry, Helen and Jake are tapped into a network of passionate creatives and would love to introduce you to whoever you need to round out your team.
          </Typography>
          <br/>
          <br/>
          <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/quill-pen.png" alt="quill-pen"/>
          <br/>
          <br/>
          <Typography variant='h4' style={{ color: '#E5EBF7', fontFamily: 'catshop'}}>
          AND MORE! 
          </Typography>
          <br />
          <Button 
          href= '/portfolio'
          className='servicesBtn'
          variant="outlined"
          style={{fontSize: 30,  fontWeight: 900, textDecoration: 'none', fontFamily:'cabin', background: 'none',  border: '#E5EBF7 solid 5px', color: '#E5EBF7', borderRadius: '5px'}}> Explore Our Portfolio 
          </Button>
                  <br/>
          <br/>
          <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/quill-pen.png" alt="quill-pen"/>
          <br/>
          <br/>
        </div>
      </Box>
    </Grid>
</Grid>
</Box>
    </>
  );
}

export default OfferPage;