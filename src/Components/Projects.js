import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar, createTheme, Grid, ThemeProvider, Tooltip, Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import ArrowBackIosTwoToneIcon from '@material-ui/icons/ArrowBackIosTwoTone';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Datascience from './ProjectsComponents/Datascience';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const theme = createTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
    },
};
export default function Projects() {
    
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <ThemeProvider theme={theme}>
            <div className="container-fluid" style={{ backgroundColor: "rgba(228, 226, 224, 0.822) !important;" }}>
                <Typography variant="h2" component="h4">My Projects</Typography>
                <Link to="/">
                    <Tooltip title="Back to Home" aria-label="Home">
                        <ArrowBackIosTwoToneIcon variant="outlined" color="primary" style={{ position: "absolute", float: 'left', left: "10px", top: "4vh" }} />
                    </Tooltip>
                </Link>
                <br />
                <br />
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="projects tabs"
                    >
                        <Tab label="Data Science" {...a11yProps(0)} />
                        <Tab label="Machine/Deep Learning" {...a11yProps(1)} />
                        <Tab label="Website" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Grid container spacing={1}>
                            <Grid container item xs={12} spacing={3}>
                                <Datascience />
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                    </TabPanel>
                </SwipeableViews>
            </div>
        </ThemeProvider>
    );
}