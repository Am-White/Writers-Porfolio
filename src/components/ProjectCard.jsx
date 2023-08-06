import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './style.css';

function ProjectCard(type, category) {
  
  return (
      <>
        <div>
          <Card sx={{ maxWidth: 300, background: 'rgb(250,250,250, .6)', borderRadius: 1}}>
            {/* <CardMedia
              sx={{ height: 140 }}
              image={type.imageLink}
              title={type.title}
            /> */}
            <CardContent >
            <Typography variant="h4" style={{fontFamily:'catshop'}}>
                {type.title}
              </Typography>
              <Typography variant="body1" style={{paddingLeft: '5px', fontFamily: 'Bebas Neue'}}>
                Author: {type.author}
              </Typography>
              <Typography variant="body1" color="text.secondary" style={{paddingLeft: '5px', fontFamily: 'Bebas Neue'}}>
                {type.preText}
              </Typography>
              <br/>
              <Button className='cardBtn' href={type.liveLink} size="small" style={{fontFamily:'catshop', background: 'none',  border: '#BCBDC0 solid 1px', color: 'black', paddingLeft: '10px', paddingRight: '10px', borderRadius: 0}}>Read More</Button>
            </CardContent>
          </Card>

        </div>
      </>
  )};

export default ProjectCard;