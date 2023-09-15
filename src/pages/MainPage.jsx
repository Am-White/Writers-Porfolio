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
            description: "NARRATIVE DESIGN SPECS & QUEST DESIGN"
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
        sx={{ width: '80%', margin: 'auto'}}
        fullHeightHover={true}    
        navButtonsProps={{         
            style: {
                background: 'none',
                borderRadius: 0,
                opacity: 1,
            }
        }} 
        indicatorIconButtonProps={{
          style: {
              color: '#C4CEEA',
              zIndex: 1,
              marginBottom: '20px',
          }
      }}
      activeIndicatorIconButtonProps={{
        style: {
            backgroundColor: '#A39B9B' // 2
        }
    }}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper style={{backgroundColor:'#4E57A4', height: 'fit-content', padding: '20px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
            <Typography variant="h2" style={{fontFamily:'catshop', color: '#BEB2EE'}}>{props.item.name}</Typography>
      
            <Typography variant='h6' style={{fontFamily:'cabin', color: '#BEB2EE'}}>{props.item.description}</Typography>

            <Button href='/services' className='menuBtn' style={{fontFamily:'cabin', background: 'none',  border: '#E5EBF7 solid 2px', color: '#E5EBF7', borderRadius: '3px', margin: '10px'}}>
                Learn More
            </Button>
        </Paper>
    )
}

  return (
    <>
    <div style={{ backgroundColor: '#35386F'}}>
    <Grid  direction="column" sx={{ alignItems: 'stretch', textAlign: 'center'}}>
      <Grid item >
      <ImageComponents/>
      </Grid>

      <Grid>
        <OfferCarousel/>
      </Grid>

      <Grid item>
        <IconComponents/>
      </Grid>

      <Divider  style={{ backgroundColor: 'white', height: '5px', width:'80%', margin: 'auto', marginBottom: '40px'}}/>

      <Grid item>
      <DreamTeam />
      </Grid>

      <Divider style={{ backgroundColor: 'white', height: '5px', width:'80%', margin: 'auto', marginBottom: '25px', marginTop: '25px'}}/>

      <Grid>
        <Box sx={{backgroundColor: '#4E57A4', marginLeft: '20px', marginRight: '20px', marginTop: '20px', padding: '30px', borderRadius: '5px'}}>
          <Typography sx={{fontFamily:'catshop', fontSize: '25px', color: 'white'}}> Helen and Jake are a narrative design team. You may hire either individually or both together. Feel free to reach out to us for any of your game writing needs!  </Typography>
        </Box>     
      </Grid>
    </Grid>
    </div>
    </>
  );
}
export default MainPage;