import * as React from 'react';
import DreamTeam from '../components/DreamTeam';
import ImageComponents from '../components/ImageContainer';
import IconComponents from '../components/IconContainer';
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
// import OfferCarousel from '../components/carousel';

function MainPage() {

  function OfferCarousel(props)
{
    var items = [
        {
            name: "What We Offer",
            description: "Narrative design specs & quest design"
        },
        {
            name: "What We Offer",
            description: "Dialogue and bark writing"
        },
        {
          name: "What We Offer",
          description: "Lore and character development"
        },
        {
          name: "What We Offer",
          description: "Cinematic Scripts"
        },
        {
          name: "What We Offer",
          description: "Story Consultation"
        },
        {
          name: "What We Offer",
          description: "Access to a network of passionate creatives"
        },
    ]

    return (
        <Carousel
        sx={{ width: '90%', margin: 'auto'}}
        fullHeightHover={true}    
        navButtonsProps={{         
            style: {
                background: 'none',
                borderRadius: 0,
                opacity: 1,
                
            },
        }} 
        indicatorIconButtonProps={{
          style: {
              color: '#C4CEEA',
              zIndex: 1,
              
          },
      }}
      activeIndicatorIconButtonProps={{
        style: {
            backgroundColor: '#A39B9B' // 2
        }
    }}
        >
            {
                items.map( (item, i) => <Item key={i} item={item}/> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper sx={{backgroundColor:'#4E57A4', display: 'flex', flexDirection: "column", minHeight: '210px', margin: 'auto', marginTop: '30px', padding: '20px', alignItems: 'center'}}>
            <Typography variant="h2" style={{fontFamily:'catshop', color: '#BEB2EE'}}>{props.item.name}</Typography>
      
            <Typography variant='h4' style={{fontFamily:'averia', color: '#BEB2EE', padding: '10px'}}>{props.item.description}</Typography>

            <Button href='/services' className='menuBtn' style={{fontFamily:'cabin',  fontWeight: 900, background: 'none', width: '30%', border: '#E5EBF7 solid 3px', color: '#E5EBF7', borderRadius: '3px', marginTop: '30px', marginBottom: '10px'}}>
                Learn More
            </Button>
        </Paper>
    )
}

  return (
    <>
    <div>
    <Grid container direction="column" sx={{ alignItems: 'stretch', textAlign: 'center'}}>
      <Grid item >
      <ImageComponents/>
      </Grid>

      <Grid item sx={{marginTop: '20px'}}>
        <Box sx={{backgroundColor: '#4E57A4', padding: '10px', borderRadius: '5px'}}>
          <Typography sx={{fontFamily:'averia', fontSize: '25px', color: 'white'}}> Narrative Witchcraft is a game writing powerhouse that collaborates with studios and publishers to craft interactive stories, characters, and lore that keep players spellbound</Typography>
        </Box>     
      </Grid>

      <Grid item>
        <OfferCarousel/>
      </Grid>

      <Grid item>
        <IconComponents/>
      </Grid>

      <Divider  style={{ backgroundColor: 'white', height: '5px', width:'80%', margin: 'auto', marginBottom: '40px'}}/>

      <Grid item>
      <DreamTeam />
      </Grid>

      <Divider style={{ backgroundColor: 'white', height: '5px', width:'80%', margin: 'auto',  marginTop: '20px'}}/>

      <Grid item sx={{padding: '20px'}}>
        <Box sx={{backgroundColor: '#4E57A4', padding: '30px', borderRadius: '5px'}}>
          <Typography sx={{fontFamily:'averia', fontSize: '25px', color: 'white'}}> Helen and Jake are a narrative design team. You may hire either individually or both together. Feel free to reach out to us for any of your game writing needs!  </Typography>
        </Box>     
      </Grid>
    </Grid>
    </div>
    </>
  );
}
export default MainPage;