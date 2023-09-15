import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
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
                <Box alt='icon' component='img' sx={{ margin: '20px'}} src={'https://images.unsplash.com/photo-1687639676496-ebb340ee4def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} className='aboutUsImg'/>
                <Box sx={{width: '90%', backgroundColor: 'none', borderRadius: '5px', padding: '10px', margin: 'auto'}}>
                  <Typography  variant='h5' sx={{fontFamily: 'cabin',  color: '#BEB2EE'}}> 
                  Helen Silverstein is an award-winning writer, narrative designer, poet, and kitten fosterer (really). Helen is a literary analyst who strives to find deeper themes and connections throughout individual works, giving each project the care and respect she would grant any classic work of literature. Helen is excited to pull the story out of your outlines and flood different aspects of your game with lore.
                  <br/>
                  <br/>

                    <Typography variant='h4' sx={{fontFamily: 'catshop', marginTop: '40px', color: '#E5EBF7'}}>
                    PAST PROJECTS:
                    </Typography>
                    <Divider  style={{ backgroundColor: '#BEB2EE', height: '3px', width:'80%', margin: 'auto'}}/>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'cabin'}}>
                    STORY EDITOR - ARTIFICIAL
                    </Typography>
                    Helen wrote on the fourth season of the primetime-Emmy-award-winning show Artificial. In this scripted interactive show, Helen plotted out potential branching storylines and crafted character responses to audience questions in real time, sharpening her skills for quickly writing snappy, authentic dialogue. 
                    <br/>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'cabin'}}> 
                    HEAD OF STORY - RUSHDOWN REVOLT
                    </Typography>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'cabin'}}>
                    HEAD WRITER – BLACKTOP HOOPS
                    </Typography>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'cabin'}}>
                    WRITER - DWELLING
                    </Typography>
                    <br/>
                    <Typography variant='h5' style={{ color: '#E5EBF7', fontFamily: 'cabin'}}>
                    AND MORE! 
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