import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './style.css';

function ProjectCard(type, category) {
  
  return (
      <>
        <div>
          <Card sx={{ background: '#4E57A4', borderRadius: 1}}>
            <CardMedia
              sx={{ height: 140 }}
              image={type.imageLink}
              title={type.title}
            />
            <CardContent >
            <Typography variant="h4" style={{paddingLeft: '5px', fontFamily:'catshop', color: '#E5EBF7'}}>
                {type.title}
              </Typography>
              <Typography variant="body1" style={{paddingLeft: '5px', fontFamily: 'cabin', color: '#8798ED'}}>
                Author: {type.author}
              </Typography>
              <Typography variant="body1" color="text.secondary" style={{paddingLeft: '5px', fontFamily: 'cabin', color: '#BEB2EE'}}>
                {type.preText}
              </Typography>
              <br/>
              <a href={type.downloadLink} download={type.title} target='_blank' rel="noopener noreferrer" style={{textDecoration: 'none'}}>
              <Button className='cardBtn' href={type.liveLink} size="small" style={{fontFamily:'catshop', background: '#8798ED', border: '#8798ED solid 2px', borderRadius: '3px', color: 'black', paddingLeft: '10px', paddingRight: '10px', boxShadow: '3px 3px #411ECC', marginRight: '20px'}}>Read More</Button>
              </a>
                  {/* <Button className='cardBtn' href={type.liveLink} size="small" style={{fontFamily:'catshop', border: '#2e9d99 solid 2px', borderRadius: '3px', color: 'black', paddingLeft: '10px', paddingRight: '10px', boxShadow: '3px 3px black'}}>Download</Button> */}
            </CardContent>
          </Card>
        </div>
      </>
  )};

export default ProjectCard;