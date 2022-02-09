import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice.js';

import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import IconButton from '@material-ui/core/IconButton';

import useStyles from './styles.js';


const Header = ({ setCoordinates }) => {
    const classes = useStyles();
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng });
    };

    const dispatch = useDispatch();

    const toggleHandler = (event) => {
        event.preventDefault();
        dispatch(uiActions.toggle());
    };

    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    <div>
                        <span style={{ color: '#F4948C' }}>Pink</span><span>Road</span>
                    </div>
                </Typography>
                <Box display='flex' alignItems='center'>
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </Autocomplete>
                    <span onClick={toggleHandler} >
                        <IconButton aria-label="My List">
                            <ListIcon fontSize='large' style={{ color: '#ffffff' }} />
                        </IconButton>
                    </span>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;