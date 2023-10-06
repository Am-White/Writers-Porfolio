import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './style.css';

function ProjectCard(type, category) {
  
  return (
      <>
        <div >
          <Card sx={{ background: '#4E57A4', borderRadius: 1}}>
            <CardContent >
            <Typography variant="h4" style={{ fontFamily:'catshop', color: '#E5EBF7'}}>
                {type.title}
              </Typography>
              <Typography variant="h5" style={{ fontFamily:'catshop', color: '#E5EBF7'}}>
                {type.subTitle}
              </Typography>
              <Typography variant="h6" color="text.secondary" style={{ fontFamily: 'cabin', color: '#BEB2EE', marginTop: '20px'}}>
                {type.preText}
              </Typography>
              <br/>
              <a href={type.downloadLink} download={type.title} target='_blank' rel="noopener noreferrer" style={{textDecoration: 'none'}}>
              <Button className='cardBtn' href={type.contactLink} size="small" 
              style={{fontSize: '20px', backgroundColor: '#8798ED',  color: 'white', fontFamily: 'cabin', letterSpacing: '1px', padding: '5px', width: '100%'}}
              >
                {type.buttonText}
              </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </>
  )};

export default ProjectCard;