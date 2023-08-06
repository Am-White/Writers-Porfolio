import * as React from 'react';
import { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
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
    <div style={{ backgroundColor: '#BCBDC0'}}>
    <Container sx={{minHeight: '85vh'}}>
        <br />
        <Typography variant='h2' style={{fontFamily:'catshop', color: '#734B5E'}}> Our Work </Typography>
        <Typography variant='body1' style={{fontFamily: 'Bebas Neue'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
        <br />
        <Divider style={{backgroundColor: '#734B5E', opacity: '50%',height: '2px'}}/>
        <br />
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} spacing={1} >
            {buttons &&
              buttons.map((type, index) => (
                <>
                <Grid item >
                  <button 
                    key={index} 
                    value={type.value} 
                    onClick={handleCategory} 
                    style={{ border: 'none', textDecoration: 'underline', cursor: 'pointer', background: 'none', fontSize: '25px', fontFamily:'catshop', paddingRight: '20px'}}
                    >
                    {type.name}
                  </button>
                </Grid>
                </>
              ))}
          </Grid>
        </Box>
        <br />
        <Divider style={{backgroundColor: '#734B5E', opacity: '50%',height: '2px'}}/>
        <br />

    <Box sx={{ width: '100%', paddingBottom: '35px'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filtredCategory &&
          filtredCategory.map(type => (
            <>
            <Grid item xs={4} md={3}>
              <ProjectCard key={type.id} {...type}/>
            </Grid>
            </>
          ))}
      </Grid>
    </Box>
  </Container>
  </div>
    </>
)};

export default Projects;