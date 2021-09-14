import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ButtonBase, Grid, Tooltip, Typography } from '@material-ui/core';

import project1Image from "../Images/DataScience/Project1.png";
import project2Image from "../Images/DataScience/Project2.png";
import project3Image from "../Images/DataScience/Project3.png";
import project4Image from "../Images/DataScience/Project4.png";
import project5Image from "../Images/DataScience/Project5.png";
import project6Image from "../Images/DataScience/Project6.png";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles2 = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    img: {
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        width: "50%",
        transition: "width 1s ease-in-out 0.1s",
        "&:hover": {
            width: "65%",
        }

    },
    "paper": {
        minWidth: "25vh",
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        transition: "width 1s ease-in-out 0.1s",
        "&:hover": {
            backgroundColor: "rgba(228, 226, 224, 0.3)",

        }
    },
}));

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Datascience() {

    const classes = useStyles2();

    return (
        <React.Fragment>
            <br />
            <ThemeProvider theme={theme}>
                <Grid item sm={4}>
                    <a style={{ textDecoration: "None" }} href="https://app.datacamp.com/workspace/w/83fa6a40-f42a-4aca-a679-491817d3c58d">
                        <Tooltip title="Click to explore" aria-label="Project 1" placement="top">
                            <Paper className={classes.paper}>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={`${project1Image}`} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item sm={3} sm container>
                                        <Grid item sm container direction="column" spacing={1}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    The Android App Market on Google Play
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    DataCamp Project
                                                </Typography>
                                                <Typography gutterBottom variant="subtitle2">
                                                    Analysis to find the highest rating app on Google Play Store
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Tooltip>
                    </a>
                </Grid>

                <Grid item sm={4}>
                    <a style={{ textDecoration: "None" }} href="https://github.com/alirazaaliqadri/PIAIC84325_AIC_Assignments/blob/master/Deep%20Learning%20Assignments/Concrete%20Strength%20Assignment.ipynb">
                        <Tooltip title="Click to explore" aria-label="Project 2" placement="top">
                            <Paper className={classes.paper}>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={`${project2Image}`} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item sm={3} sm container>
                                        <Grid item sm container direction="column" spacing={1}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    Concrete Strength
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Kaggle | GitHub Project
                                                </Typography>
                                                <Typography gutterBottom variant="subtitle2">
                                                    Concrete analysis and model training
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Tooltip>
                    </a>
                </Grid>

                <Grid item sm={4}>
                    <a style={{ textDecoration: "None" }} href="https://app.datacamp.com/workspace/w/5be72028-7c3d-4935-9b47-21f49eafa1ee">
                        <Tooltip title="Click to explore" aria-label="Project 3" placement="top">
                            <Paper className={classes.paper}>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={`${project3Image}`} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item sm={3} sm container>
                                        <Grid item sm container direction="column" spacing={1}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    A Visual History of Nobel Prize Winners
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    DataCamp Project
                                                </Typography>
                                                <Typography gutterBottom variant="subtitle2">
                                                    Analysis to find the distribution of prizes and youngest noble prize winner
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Tooltip>
                    </a>
                </Grid>

                <Grid item sm={4}>
                    <a style={{ textDecoration: "None" }} href="https://github.com/alirazaaliqadri/MachineLearning/blob/master/4.%20Credit%20Card%20Fraud%20Detection/Credit%20Card%20Fraud%20Detection.ipynb">
                        <Tooltip title="Click to explore" aria-label="Project 4">
                            <Paper className={classes.paper}>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={`${project4Image}`} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item sm={3} sm container>
                                        <Grid item sm container direction="column" spacing={1}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    Credit Card Fraud Detection
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Kaggle | GitHub Project
                                                </Typography>
                                                <Typography gutterBottom variant="subtitle2">
                                                    Data Analysis to find the credit card fraud detection using kaggle dataset <br />(Imbalance dataset)
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Tooltip>
                    </a>
                </Grid>
                <Grid item sm={4}>
                    <a style={{ textDecoration: "None" }} href="Trust Classification.html">
                        <Tooltip title="Click to explore" aria-label="Project 5">
                            <Paper className={classes.paper}>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={`${project5Image}`} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item sm={3} sm container>
                                        <Grid item sm container direction="column" spacing={1}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    IoT Devices Classification
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Research Based Project (Source code and documentation not included here)
                                                </Typography>
                                                <Typography gutterBottom variant="subtitle2">
                                                    Analysis of IoT devices connection and it's interaction according to the features and trust values.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Tooltip>
                    </a>
                </Grid>
                <Grid item sm={4}>
                    <a style={{ textDecoration: "None" }} href="https://drive.google.com/file/d/1jHsYqwrCvf6G1wp8PEKQxfGImPYLsNF0/view?usp=sharing">
                        <Tooltip title="Click to explore" aria-label="Project 6">
                            <Paper className={classes.paper}>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={`${project6Image}`} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item sm={3} sm container>
                                        <Grid item sm container direction="column" spacing={1}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    Scheduling of IoT Devices Trust Based Values
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Research Based Project (Source code and documentation not included here)
                                                </Typography>
                                                <Typography gutterBottom variant="subtitle2">
                                                    Trust Based Feature Analysis
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Tooltip>
                    </a>
                </Grid>
            </ThemeProvider>
        </React.Fragment>
    );
}