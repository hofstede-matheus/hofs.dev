import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import screenshotHome from '../../assets/screenshot_home.png'
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "../../index.css"


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#efefef",
        flexGrow: 1,
    },
    gridCointainer: {
        padding: "100px 100px 0px 100px",
        [theme.breakpoints.down('sm')]: {
            height: "initial",
            padding: 10,
        },
    },
    screenshotHome: {
        height: 800,
        marginBottom: -5,
        [theme.breakpoints.down('sm')]: {
            height: 500,
            marginBottom: -15,
        },
    },
    h1: {
        fontSize: "72px",
        margin: 30,
        fontWeight: 600,
        lineHeight: "100%",
        letterSpacing: "-3px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "40px",
            letterSpacing: "-1px"
        },
    },
    h3: {
        fontSize: "32px",
        margin: 30,
        lineHeight: "130%",
        fontWeight: 400,
        [theme.breakpoints.down('sm')]: {
            fontSize: "24px",
            letterSpacing: "-1px"
        },
    },
}));

export default function Intro() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={classes.gridCointainer}
                >

                    <Grid item xs={12}>
                        <Typography
                            align="center"
                            component="h1"
                            className={classes.h1}
                        >
                            Dados de empresas na palma da sua mão
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                            align="center"
                            component="h3"
                            className={classes.h3}
                        >
                            Uma ferramenta minimalista para obter informações de empresas brasileiras e tomar decisões melhores em seus investimentos.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <img className={classes.screenshotHome} src={screenshotHome}/>
                    </Grid>

                </Grid>

            </div>
        </>
    );
}
