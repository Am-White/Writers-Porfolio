import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer from "@mui/material/Drawer";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import headerLogo from './../images/headerLogo.png';


const pages = ['Portfolio', 'Services', 'About Helen', 'About Jake', 'Contact'];

function Header() {
  // MUI Menu Icon drawer 
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250, background: '#E5EBF7', height: '100%' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        <ListItem disablePadding>
          <ListItemButton>
            <a href="/" style={{textDecoration: 'none', fontFamily: 'catshop', fontSize: '30px', color: '#35386F'}}> Home </a>
            </ListItemButton>
          </ListItem>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton href={page}>
              <a href={page} style={{textDecoration: 'none', fontFamily: 'cabin', fontSize: '20px', color: '#35386F'}}> {page}</a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" style={{boxShadow: 'none', backgroundColor: '#35386F', width: '100%'}}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <a href='/'>
          <Box alt='header' component='img' sx={{ margin: '10px'}} src={headerLogo} className='headerLogo'/>
          </a>
          <Box sx={{ flexGrow: 0, display: {xs: 'flex', md: 'none'}, marginLeft: 'auto'}}>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <MenuIcon fontSize="large" style={{color:'#E5EBF7', background: 'none'}}/>
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: {xs: 'none', md: 'flex'}, marginLeft: 'auto'}}>
              <Button
              href= '/portfolio'
              className='menuBtn'
              variant="outlined"
              style={{textDecoration: 'none',  fontWeight: 900, fontFamily:'cabin', background: 'none',  border: '#E5EBF7 solid 3px', color: '#E5EBF7', borderRadius: '3px', marginRight: '5px'}}
              >
                Portfolio
              </Button>
              <Button
              href= '/services'
              className='menuBtn'
              variant="outlined"
              style={{textDecoration: 'none',  fontWeight: 900, fontFamily:'cabin', background: 'none',  border: '#E5EBF7 solid 3px', color: '#E5EBF7', borderRadius: '3px', marginLeft: '5px', marginRight: '5px'}}
              >
                Services
              </Button>


              <Button
              className='menuBtn'
              variant="outlined"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{textDecoration: 'none',  fontWeight: 900, fontFamily:'cabin', background: 'none',  border: '#E5EBF7 solid 3px', color: '#E5EBF7', borderRadius: '3px', marginLeft: '5px', marginRight: '5px'}}
              >
                About Us
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem 
                  onClick={handleClose}
                  >
                    <a href='/About Helen' style={{textDecoration: 'none',  fontWeight: 900, fontFamily:'cabin',color: '#4E57A4'}}>
                  About Helen
                    </a>
                </MenuItem>
                <MenuItem 
                  onClick={handleClose}
                  >
                  <a href='/About Jake' style={{textDecoration: 'none',  fontWeight: 900, fontFamily:'cabin',color: '#4E57A4'}}>
                    About Jake
                  </a>
                </MenuItem>
              </Menu>


              <Button
              href= '/contact'
              className='menuBtn'
              variant="outlined"
              style={{textDecoration: 'none', fontWeight: 900, fontFamily:'cabin', background: 'none',  border: '#E5EBF7 solid 3px', color: '#E5EBF7', borderRadius: '3px', marginLeft: '5px'}}
              >
                Contact
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;