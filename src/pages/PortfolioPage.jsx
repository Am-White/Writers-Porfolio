import * as React from 'react';
import { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ProjectCard from '../components/ProjectCard';
import { buttons } from '../assets/Data';
import { getCategory, filterCategory } from "../assets/services";


function Projects(props) {
  const [filtredCategory, setFiltredCategory] = useState(null);
  useEffect(() => {
    setFiltredCategory(getCategory());
  }, []);

  function handleCategory(e) {
    let typeCategory = e.target.value;
    typeCategory !== "all"
      ? setFiltredCategory(filterCategory(typeCategory))
      : setFiltredCategory(getCategory());
  }

  return (
    <>
    <div style={{ backgroundColor: '#35386F', width: '100%'}}>
    <Container sx={{ minWidth: '80%'}}>
        <br />
        <Typography variant='h2' style={{fontFamily:'catshop', color: '#BEB2EE'}}> Our Work </Typography>
        <Typography variant='h5' style={{fontFamily: 'averia', color: '#E5EBF7 '}}> Take a glimpse into some of the worlds we’ve helped create. Full script samples can be found at the bottom of the page.</Typography>
        {/* <br />
        <Divider style={{backgroundColor: '#E4D4BC', opacity: '50%', height: '2px'}}/> */}
        <br />
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} spacing={1} >
            {buttons &&
              buttons.map((type, index) => (
                <>
                <Grid item sx={{margin:'5px'}}>
                  <Button 
                    key={index} 
                    value={type.value} 
                    onClick={handleCategory}
                    className= 'categoryBtn'
                    style={{fontSize: '18px', fontFamily: 'cabin', color: 'white', border: 'white solid 2px', boxShadow: 'none', borderRadius: '3px', paddingLeft: '10px', paddingRight: '10px', width: '100%'}}
                    size='small'
                
                    >
                    {type.name}
                  </Button>
                </Grid>
                </>
              ))}
          </Grid>
        </Box>
        <br />
        <Divider style={{backgroundColor: '#E4D4BC', opacity: '50%',height: '2px'}}/>
        <br />
        <Divider style={{backgroundColor: '#E4D4BC', opacity: '50%',height: '2px'}}/>
        <br />

    <Box sx={{ width: '100%', paddingBottom: '35px', margin: 0}}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        {filtredCategory &&
          filtredCategory.map(type => (
            <>
              <ProjectCard key={type.id} {...type}/>
            </>
          ))}
      </Grid>
      <Box sx={{height: 'fit-content', padding: '20px', marginTop: '20px', marginBottom: '20px', backgroundColor: '#4E57A4', borderRadius: 1 }}>
        <Typography variant='h3' sx={{fontFamily: 'catshop', color: '#E5EBF7'}}>
        Full Script Samples
        </Typography>

        <Typography variant='h6' sx={{fontFamily: 'cabin', color: '#E5EBF7'}}>
        All of the following are available upon request. Some may require signing an NDA.
        </Typography>
        <br />
        <Divider style={{backgroundColor: '#E5EBF7', opacity: '50%',height: '2px'}}/>
        <br />
        <Divider style={{backgroundColor: '#E5EBF7', opacity: '50%',height: '2px'}}/>
        <br />
        <Typography variant='h5' sx={{color: '#BEB2EE', listStyle:"none", fontFamily: 'averia'}}>
          <li>
          - Interactive Media Script Sample - Available upon Request
          </li>
          <li>
          - Comedy Pilot Sample
          </li>
          <li>
          - Dramatic Pilot Sample
          </li>
          <li>
          - Science Fiction Pilot Sample
          </li>
          <li>
          - VR Cinematic Script Sample
          </li>
          <li>
          - Full Quest Outline Specs Sample
          </li>
        </Typography>
        <div style={{textAlign: 'center', marginTop: '25px', marginBottom: '10px'}}>
          <Button 
            href= '/contact'
            className='servicesBtn'
            variant="outlined"
            style={{fontSize: 30, fontWeight: 900, textDecoration: 'none', fontFamily:'cabin', background: 'none',  border: '#E5EBF7 solid 5px', color: '#E5EBF7', borderRadius: '5px', width: '100%'}}> Contact Us 
          </Button>
        </div>
      </Box>
    </Box>
  </Container>
  </div>
    </>
)};

export default Projects;