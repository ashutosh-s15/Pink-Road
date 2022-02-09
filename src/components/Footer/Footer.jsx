import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from './styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <Grid>
                <Box className={classes.container} >
                    <div className={classes.logo}>
                        <span style={{ color: '#F4948C' }}>P</span><span style={{ color: 'white' }}>R</span>
                    </div>
                    <Typography variant='button'>About us</Typography>
                    <Typography variant='button'>Contact</Typography>
                    <Typography variant='button'>Feedback</Typography>
                    <Box className={classes.socials}>
                        <a href="https://www.instagram.com/rendering_chaos/" target='_blank' className={classes.links}><InstagramIcon /></a>
                        <TwitterIcon />
                        <FacebookIcon />
                        <GitHubIcon />
                    </Box>
                </Box>
            </Grid>
        </div>
    );
};

export default Footer;