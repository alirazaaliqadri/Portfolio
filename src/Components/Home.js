import { Button, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import img from "./Images/Wallpaper.jpg";
import '@fontsource/roboto';
// import PDFViewer from 'pdf-viewer-reactjs'
import './Components.css'
export default function Home() {

    return (
        <div className="container-fluid home">
            <Paper className="homePaper" elevation={3} style={{ textAlign: "initial", padding: "2vh", position: "absolute", top: "20%", opacity: "0.8" }}>
                <Typography variant="span" component="h2">Hi, I'm Ali.</Typography>
                <br />
                <Typography variant="h4" component="h1" style={{ fontWeight: "bolder" }}>I build Machine & Deep Learning Models</Typography>
                <br />
                <Typography variant="subtitle1" component="h2">A machine & deep learning enthusiast who loves to learn and explore new stuff.<br />
                    Freelancer at <a style={{ listStyle: 'none' }} href="https://www.upwork.com/o/profiles/users/~01150474853365a540/"><b>UpWork</b></a></Typography>
                <br />
                <Button size="medium" color="primary" variant="contained" href="./Resume-CV/Ali Raza Ali ML CV.pdf" download>Resume/CV</Button>
            </Paper>

            <Link to="/Project">
                <Button className="homeProjectBtn" color="light" variant="contained" size="small" style={{
                    position:"relative",
                    float:'right', top:"80vh", marginRight:"10vh",
                }}>View Projects</Button>
            </Link>
            {/* <Typography variant="subtitle1" component="h2" style={{position:"absolute", right:"30vh",bottom:"10vh"}}>Learn More About Me...</Typography> */}
        </div>
    )
}