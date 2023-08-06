import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer from "@mui/material/Drawer";


const pages = ['Projects', 'About Us', 'Contact'];

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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        <ListItem disablePadding>
          <ListItemButton>
            <a href="/" style={{textDecoration: 'none', fontFamily: 'Bebas Neue', fontSize: '30px', color: 'black'}}> Home </a>
            </ListItemButton>
          </ListItem>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton>
              <a href={page} style={{textDecoration: 'none', fontFamily: 'Bebas Neue', fontSize: '20px', color: 'black'}}> {page}</a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <AppBar position="static" style={{boxShadow: 'none', backgroundColor: '#565857', borderBottom: '#935d76 solid 4px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'catshop',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WRITERS BLOCK
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'catshop',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WRITERS BLOCK
          </Typography>

          <Box sx={{ flexGrow: 0, display: {xs: 'flex', md: 'none'}}}>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                    size=""
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleDrawer(anchor, true)}
                    color="inherit"
                  >
                    <MenuIcon />
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
            {pages.map((page) => (
              <Button
              className='menuBtn'
              variant="outlined"
              style={{fontFamily:'catshop', backgroundColor: '#8A8D91', background: 'none',  border: '#BCBDC0 solid 1px', color: 'white', marginLeft: '10px', marginRight: '10px', borderRadius: 1}}
                key={page}
                href={page}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;