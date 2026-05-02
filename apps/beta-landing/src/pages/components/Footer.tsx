import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import google_play_badge from "../../assets/google-play-badge.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#efefef",
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Typography
                            align="center"
                            variant="h5"
                            component="h5"
                            color="textPrimary"
                            style={{margin: 30}}
                        >
                            Baixe agora!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.hofstedematheus.beta">
                            <img
                                height="80"
                                src={google_play_badge}
                            />
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            align="left"
                            variant="caption"
                            component="p"
                            color="textPrimary"
                            style={{margin: 10}}
                        >
                            2020 Matheus Hofstede
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

