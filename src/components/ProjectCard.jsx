import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import './style.css';

function ProjectCard(type, category) {

  
  return (
      <>
        <Grid item xs={12} md={6} lg={4} >
          <Card sx={{
                background: '#4E57A4', 
                borderRadius: 1,  
                display: "flex",
                flexDirection: "column",
              }}>
            <CardMedia
              component="img"
              height="200"
              image={type.img}
              alt="Cover Art"
            />
            <CardContent style={{ margin: '5px'}}>
            <Typography variant="h4" style={{ fontFamily:'catshop', color: '#E5EBF7'}}>
                {type.title}
              </Typography>
              <Typography variant="h5" style={{ fontFamily:'catshop', color: '#E5EBF7'}}>
                {type.subTitle}
              </Typography>
              <Typography variant="h5" color="text.secondary" style={{ fontFamily: 'averia', color: '#BEB2EE', marginTop: '20px'}}>
                {type.preText}
              </Typography>
              <br/>
              </CardContent>
              <CardContent>
              <CardActions >
              <a href={type.downloadLink} download={type.title} target='_blank' rel="noopener noreferrer" style={{textDecoration: 'none', width: '100%',}}>
              <Button
                className='cardBtn'
                size='medium' 
                sx={{fontSize: '20px', backgroundColor: '#8798ED', fontFamily: 'cabin', letterSpacing: '1px', padding: '5px', color: 'white', width: '100%'}}
                >
                  Read More
              </Button>
              </a>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </>
  )};

export default ProjectCard;