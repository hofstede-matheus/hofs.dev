import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import screenshot1 from '../../assets/screenshot_1.png'
import screenshot2 from '../../assets/screenshot_2.png'
import screenshot3 from '../../assets/screenshot_3.png'

import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#efefef",
    },
    gridCointainer: {
        paddingTop: 100,
        [theme.breakpoints.down('xs')]: {
            paddingTop: 50,
            height: "initial",
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: "column-reverse",
        },
    },
    screenshotHome: {
        height: 800,
        marginBottom: -5,
        [theme.breakpoints.down('xs')]: {
            height: 500,
        },
    },
    screenshotContainer: {
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
        }
    },
    sectionTitle: {
        fontSize: "48px",
        margin: 10,
        fontWeight: 600,
        lineHeight: "100%",
        letterSpacing: "-1.5px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "40px",
            letterSpacing: "-1px"
        },
    },
    sectionSubtitle: {
        fontSize: "28px",
        margin: 20,
        lineHeight: "100%",
        letterSpacing: "-1.5px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "24px",
            letterSpacing: "-1px"
        },
    },

}));

export default function SectionB() {
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

                    <Grid
                        item
                        lg={6}
                        md={12}
                        className={classes.screenshotContainer}
                    >
                        <img className={classes.screenshotHome} src={screenshot2}/>
                    </Grid>

                    <Grid
                        item
                        lg={6}
                        md={12}
                    >
                        <Typography
                            align="center"
                            component="h2"
                            className={classes.sectionTitle}
                        >
                            Tome decisões melhores com indicadores fundamentalistas
                        </Typography>
                        <Typography
                            align="center"
                            component="h4"
                            className={classes.sectionSubtitle}
                        >
                            Clique no símbolo de dúvida para saber o que significa cada indicador
                        </Typography>
                    </Grid>

                </Grid>

            </div>
        </>
    );
}
