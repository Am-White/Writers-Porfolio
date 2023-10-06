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
    <Container sx={{minHeight: '85vh', minWidth: '80%'}}>
        <br />
        <Typography variant='h2' style={{fontFamily:'catshop', color: '#BEB2EE'}}> Our Work </Typography>
        <Typography variant='h6' style={{fontFamily: 'cabin', color: '#E5EBF7 '}}> Explore the categories below to look through our work and collaborations</Typography>
        {/* <br />
        <Divider style={{backgroundColor: '#E4D4BC', opacity: '50%', height: '2px'}}/> */}
        <br />
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} spacing={1} >
            {buttons &&
              buttons.map((type, index) => (
                <>
                <Grid item >
                  <Button 
                    key={index} 
                    value={type.value} 
                    onClick={handleCategory}
                    className= 'categoryBtn'
                    style={{fontSize: '18px', fontFamily: 'cabin', color: 'white', border: 'white solid 2px', boxShadow: 'none', borderRadius: '3px'}}
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
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filtredCategory &&
          filtredCategory.map(type => (
            <>
            <Grid item xs={12} md={6} lg={3}>
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