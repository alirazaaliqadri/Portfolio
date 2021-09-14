import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import MailOutlineTwoTone from '@material-ui/icons/MailOutlineTwoTone';

import React from 'react'
import "./Components.css";
export default function Contact() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="contactMainDiv">
            <br />
            <br />
            <br />
            <Typography variant="h4" component="h4">Contact Me</Typography>

            <div className="container-fluid contactContainer" >
                <Grid
                    container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <Paper elevation={3} className="container contactDiv1">
                            <Grid container spacing={3}>
                                <Grid item item xs={12} sm={12}>
                                    <Typography variant="h4" component="h4">Contact Information</Typography>
                                </Grid>
                                <Grid item item xs={12} sm={12}>
                                    <Typography variant="subtitle2">
                                        Fill the form to contact me
                                    </Typography>
                                </Grid>
                                <Typography variant="body2" component="h4" variant="h2" style={{ fontSize: 'small', fontWeight: "bold" }}>
                                    <MailOutlineTwoTone style={{ fontSize: 'small', marginRight: '2px' }} />
                                    {'alirazaaliqadri@gmail.com'}</Typography>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={8} >
                        <form name="contact" method="post" netlify-data="true" autoComplete="off">
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="First Name" type="name" color="primary" id="filled-required" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Last Name" color="primary" type="name" id="filled-required" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField type="email" label="Email" id="filled-required" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Phone" type="tel" id="filled-required" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField id="outlined-multiline-flexible"
                                        className="messageField"
                                        label="Multiline"
                                        multiline
                                        maxRows={4}
                                        onChange={handleChange}
                                        variant="outlined" type="text" label="Write your message" />
                                </Grid>
                            </Grid>
                            <br />
                            <br />
                            <Button onClick="submit" color="default" variant="contained" name="submit" className="submitBtn" fontSize="small">Submit</Button>
                        </form>

                    </Grid>
                </Grid>
            </div >
        </div>
    )
}
