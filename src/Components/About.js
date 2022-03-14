import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import WorkOutlineRoundedIcon from '@material-ui/icons/WorkOutlineRounded';
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import { createTheme, Grid, ThemeProvider, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackIosTwoTone from '@material-ui/icons/ArrowBackIosTwoTone';

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

const useStyles = makeStyles((theme) => ({
    paper: {
        padding:2,
        paddingInline: 4,
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));
export default function About() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className="container-fluid" style={{ backgroundColor: "rgba(228, 226, 224, 0.822) !important;" }}>
                <Link to="/">
                    <Tooltip title="Back to Home" aria-label="Home">
                        <ArrowBackIosTwoTone variant="outlined" color="primary" style={{ position: "absolute", float: 'left', left: "10px", top: "4vh" }} />
                    </Tooltip>
                </Link>
                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center">
                    <Grid item xs>
                        <Typography variant="h2" component="h2">My Timeline</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'grid', placeItems: 'center' }}>
                        <Timeline align="alternate">
                            {/* 1st Item  */}
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        2021
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary">
                                        <WorkOutlineRoundedIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>

                                <TimelineContent>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" component="h1">
                                            UpWork
                                        </Typography>
                                        <Typography>Started Freelancing to explore real world projects</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            {/* 2nd item item */}
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        2020
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="secondary" variant="outlined">
                                        <LaptopMacIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" component="h1">
                                            Machine Learning & Data Science
                                        </Typography>
                                        <Typography>Because it&apos;s awesome!</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            {/*Thir Item*/}
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        2018 - Late
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary">
                                        <LocalLibraryRoundedIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" component="h1">
                                            University
                                        </Typography>
                                        <Typography>Enrolled in CS Undergradute from Sir Syed University of Engineering & Technology</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            {/* 4th item */}
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        2016 - 2018
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="secondary" variant="outlined">
                                        <LocalLibraryRoundedIcon />
                                    </TimelineDot>
                                    {/* <TimelineConnector /> */}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" component="h1">
                                            College
                                        </Typography>
                                        <Typography>In this time period I was doing Pre-Engineering from Govt. Degree Johar No.1 College</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>

                    <Grid item xs>
                        <Typography variant="h2" component="h2">Certifications</Typography>
                    </Grid>
                    <br />
                    <Grid item xs>
                        <Timeline align="alternate">
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" variant="outlined" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Tooltip title="Click to view">
                                        <a style={{ textDecoration: "None", color: "black" }} href="https://www.credly.com/badges/5744ee7f-4b53-44ce-9f77-ceedcbf53f73?source=linked_in_profile">
                                            MTA: Introduction to Programming Using Python - Certified 2021
                                        </a>
                                    </Tooltip>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="secondary" variant="outlined" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Tooltip title="Click to view">
                                        <a style={{ textDecoration: "None", color: "black" }} href="https://www.datacamp.com/statement-of-accomplishment/course/333a7c2232ddc02668c2c89d48650afde320e960?share=true">
                                            Introduction to Data Science in Python
                                        </a>
                                    </Tooltip>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" variant="outlined" />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Tooltip title="Click to view">
                                        <a href="https://www.datacamp.com/statement-of-accomplishment/course/ecf1b6ca4fd7a759e7a3e95ef15a5ae191b7e957" style={{ textDecoration: "None", color: "black" }} >Intermediate Data Visualization with
                                            Seaborn
                                        </a>
                                    </Tooltip>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    )
}
