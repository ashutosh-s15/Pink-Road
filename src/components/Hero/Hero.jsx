import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import { Button, Typography, Grid, Box, useMediaQuery } from "@material-ui/core";
import useStyles from './styles';
import svg from './hero.svg';

const Hero = () => {
    const classes = useStyles();

    const onClickHandler = () => {
        const explore = document.getElementById('explore');
        explore.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const dispatch = useDispatch();
    const openListHandler = () => {
        dispatch(uiActions.toggle());
    };

    const isDesktop = useMediaQuery('(min-width:600px)');

    return (
        <Fragment>
            <Grid container className={classes.root}>
                <Box className={classes.action}>
                    <Box display='flex' maxWidth='700px' >
                        <Typography variant='h1' className={classes.quote}>
                            {isDesktop ? `It's a Big World Out There, Let's Explore` : `Let's Explore`}
                        </Typography>
                    </Box>
                    <Button size='large' variant="contained" color='secondary' onClick={onClickHandler} >Search</Button>
                    <Button size='large' variant="outlined" onClick={openListHandler} >My List</Button>
                </Box>
                <Box>
                    <img src={svg} alt='svg' height={isDesktop ? '500' : '300'} />
                </Box>
            </Grid>
        </Fragment>
    );
};

export default Hero;