import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ProfilePic from './DP.jpg';
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import Home from './Home';
import { Link } from 'react-router-dom';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },

  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#171717 !important"
    },
    backgroundColor: "#171717 !important",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} style={{ marginLeft: "auto", marginRight: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: 'small' }} />;
}

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', backgroundColor: 'whitesmoke' }}>
      <div className={classes.toolbar} />
      <List>
        <ListItem> <Avatar alt="Ali Raza Ali Qadri" src={ProfilePic} style={{ width: '150px', height: '150px', marginTop: '2%' }} /></ListItem>
        <ListItemText><Typography style={{ fontWeight: 'bolder' }}> Ali Raza Ali Qadri</Typography></ListItemText>
      </List>
      <div>
        <Typography component="h5" variant="suptitle2" >
          <MailOutlineTwoToneIcon style={{ fontSize: 'small', marginRight: '2px' }} />
          alirazaaliqadri@gmail.com
        </Typography>
      </div>
      <br />
      <Divider />
      <List>
        <Link to="/" style={{ textDecoration: "None", color: "black" }}>
          <ListItemLink style={{ textDecoration: "None" }}>
            <ListItemText primary={'Home'} fontSize='medium' />
          </ListItemLink>
        </Link>
        <Link to="/About" style={{ textDecoration: "None", color: "black" }}>
          <ListItemLink>
            <ListItemText primary={'About'} fontSize='medium' style={{ textDecoration: "None" }} />
          </ListItemLink>
        </Link>
      </List>
      <br />
      <Divider />
      <br/>
      <Typography variant="h5">Contact</Typography>
      <List>
        <ListItemLink href="https://www.facebook.com/alirazaaliqadri1/">
          <Facebook fontSize='small' />
        </ListItemLink>
        <br />
        <ListItemLink href="https://twitter.com/alirazaali_">
          <Twitter fontSize='small' />
        </ListItemLink>
        <br />
        <ListItemLink href="https://www.instagram.com/alirazaali_/">
          <Instagram fontSize='small' />
        </ListItemLink>
        <br />
        <ListItemLink href="https://github.com/Ali-Raza-Ali">
          <GitHub fontSize='small' />
        </ListItemLink>
        <br />
        <ListItemLink href="https://www.linkedin.com/in/ali-raza-ali-qadri">
          <LinkedIn fontSize='small' />
        </ListItemLink>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            PORTFOLIO
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* <Home/> */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Home /> */}
        {props.children}
        {/* <About /> */}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;