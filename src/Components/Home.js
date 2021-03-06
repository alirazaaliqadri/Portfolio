import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import '@fontsource/roboto';
import './Components.css'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);
export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="container-fluid home">
            <ThemeProvider theme={theme}>
                <Paper className="homePaper" elevation={3} style={{ textAlign: "initial", padding: "2vh", position: "absolute", top: "20%", opacity: "0.8" }}>
                    <Typography variant="span" component="h2">Hi, I'm Ali.</Typography>
                    <br />
                    <Typography variant="h4" component="h1" style={{ fontWeight: "bolder" }}>I build Machine & Deep Learning Models</Typography>
                    <br />
                    <Typography variant="subtitle1" component="h2">A machine & deep learning enthusiast who loves to learn and explore new stuff.<br />
                        Freelancer at <a style={{ listStyle: 'none' }} href="https://www.upwork.com/o/profiles/users/~01150474853365a540/"><b>UpWork</b></a></Typography>
                    <br />
                    <Button size="medium" color="primary" variant="contained"><a href="https://drive.google.com/file/d/16L9JZI0IfSoffayUUhdf7THAu1jvrO5F/view?usp=sharing" style={{ textDecoration: "None", color: "white" }}>Resume-CV</a></Button>
                </Paper>
                
                <Button onClick={()=>{navigate('/Projects')}} className="homeProjectBtn" color="light" variant="contained" size="small" style={{
                    position: "relative",
                    float: 'right', top: "80vh", marginRight: "10vh",
                }}>View Projects</Button>

            </ThemeProvider>
        </div>
    )
}