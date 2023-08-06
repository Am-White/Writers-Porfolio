import React from 'react';
import './style.css';
import { SocialIcon } from 'react-social-icons';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Footer() {
  return (
        <>
          <Grid container className="App-footer" direction="column" spacing={2} style={{backgroundColor: '#565857'}}>
            {/* <Grid item className="footer-grid" xs={12} >
              <SocialIcon bgColor="lightGrey" url="https://www.instagram.com/ameschiz" style={{ marginLeft: '15px', marginRight: '15px'}}/>
              <SocialIcon bgColor="lightGrey" url="https://www.github.com/Am-White" style={{ marginLeft: '15px', marginRight: '15px'}}/>
              <SocialIcon bgColor="lightGrey" url="https://www.linkedin.com/in/amethyst-white/" style={{ marginLeft: '15px', marginRight: '15px'}}/>
            </Grid>   */}
            <Grid item className="footer-link-grid" style={{ letterSpacing: {xs: '1px'}, fontFamily: 'catshop'}}>
              <a href="/" className="footer-links"> Home -</a> 
              <a href="/projects" className="footer-links"> Projects -</a> 
              <a href="/Contact" className="footer-links"> Contact</a> 
              {/* <a href="/" className="footer-links"> Terms -</a> 
              <a href="/" className="footer-links"> Privacy Policy</a>  */}
            </Grid> 
            <Grid item className="footer-grid" xs={12} >
              <Typography variant="subtitle2" style={{ color: 'darkGrey'}}> 2023 © </Typography>
            </Grid>
          </Grid>
        </>
  );
}

export default Footer;
