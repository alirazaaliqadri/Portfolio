import { Grid, Paper, TextField, Typography } from '@material-ui/core'
import { MailOutlineRounded } from '@material-ui/icons';
import React from 'react'
import "./Components.css";
export default function Contact() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="container-fluid contactContainer" style={{ marginTop: "25vh", marginLeft: "auto", marginRight: "auto", display: "block",  }} >

            <Grid
                container spacing={1}
                direction="row"
                justifyContent="flex-start"
                alignItems="center">
                <Grid item xs={3}>
                    <Paper elevation={3} className="container-fluid contactDiv1">
                        <Grid direction="column"
                            justifyContent="left"
                            alignItems="flex-start">
                            <Grid item xs={12}>
                                <Typography variant="h4" component="h4">Contact Information</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2">
                                    Fill the form to contact me
                                </Typography>
                            </Grid>
                            <br />
                            <br />
                            <MailOutlineRounded size="sm" />alirazaaliqadri@gmail.com
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={7}>

                    <form name="contact" method="post" netlify-data="true" autoComplete="off">
                        <Grid
                            direction="row"
                            container spacing={1}>
                            <Grid item xs>
                                <TextField label="First Name" type="name" color="primary" id="filled-required" />
                            </Grid>
                            <Grid item xs>
                                <TextField label="Last Name" color="primary" type="name" id="filled-required" />
                            </Grid>
                        </Grid>
                        <Grid
                            direction="row"
                            container spacing={1}>
                            <Grid item xs>
                                <TextField type="email" label="Email" id="filled-required" />
                            </Grid>
                            <Grid item xs>
                                <TextField label="Phone" type="tel" id="filled-required" />
                            </Grid>
                            <Grid item xs={12} float="left">
                                <br />
                                <TextField id="outlined-multiline-flexible"
                                    label="Multiline"
                                    multiline
                                    maxRows={4}
                                    style={{ marginLeft: "30px", width: "60vh" }}
                                    value={value}
                                    onChange={handleChange}
                                    variant="outlined" type="text" label="Write your message" />
                            </Grid>
                        </Grid>
                    </form>

                </Grid>
            </Grid>
        </div>
    )
}
