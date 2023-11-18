import React from 'react';
import './style.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Footer() {
  return (
        <>
          <Grid container className="App-footer" direction="column" spacing={2} style={{backgroundColor: '#35386F', paddingTop: '10px', paddingBottom: '10px'}}>
            {/* <Grid item className="footer-grid" xs={12} >
              <SocialIcon bgColor="lightGrey" url="https://www.instagram.com/ameschiz" style={{ marginLeft: '15px', marginRight: '15px'}}/>
              <SocialIcon bgColor="lightGrey" url="https://www.github.com/Am-White" style={{ marginLeft: '15px', marginRight: '15px'}}/>
              <SocialIcon bgColor="lightGrey" url="https://www.linkedin.com/in/amethyst-white/" style={{ marginLeft: '15px', marginRight: '15px'}}/>
            </Grid>   */}
            <Grid item className="footer-link-grid" style={{ letterSpacing: {xs: '1px'}, fontFamily: 'catshop', color: '#C4CEEA'}}>
              <a href="/" className="footer-links"> Home -</a> 
              <a href="/portfolio" className="footer-links"> Portfolio -</a> 
              <a href="/Contact" className="footer-links"> Contact</a> 
              {/* <a href="/" className="footer-links"> Terms -</a> 
              <a href="/" className="footer-links"> Privacy Policy</a>  */}
            </Grid> 
            <Grid item className="footer-grid" xs={12} >
              <Typography variant="subtitle2" style={{ color: '#C4CEEA'}}> 2023 © </Typography>
            </Grid>
          </Grid>
        </>
  );
}

export default Footer;
