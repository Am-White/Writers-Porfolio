import * as React from 'react';
import DreamTeam from '../components/DreamTeam';
import ImageComponents from '../components/ImageContainer';
import IconComponents from '../components/IconContainer';
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

function MainPage() {

  return (
    <>
    <div style={{ backgroundColor: '#BCBDC0'}}>
    <Grid container direction="column" sx={{ maxWidth:'fit-content', alignItems: 'stretch', textAlign: 'center'}}>
      <Grid item >
      <ImageComponents/>
      </Grid>

      <Grid item>
        <IconComponents/>
      </Grid>

      <Divider/>

      <Grid item>
      <DreamTeam />
      </Grid>

      <Divider />

      <Grid>
        <Box sx={{backgroundColor: '#734B5E', margin: '20px', marginBottom: '40px', padding: '30px'}}>
          <Typography sx={{fontFamily:'catshop', fontSize: '25px'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Imperdiet dui accumsan sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Imperdiet dui accumsan sit amet. </Typography>
        </Box>     
      </Grid>
    </Grid>
    </div>
    </>
  );
}
export default MainPage;