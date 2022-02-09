import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, Grid, Typography, useMediaQuery } from "@material-ui/core";

import { getPlacesData, getWeatherData } from './api/index';

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Info from "./components/Info/Info";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import MyList from "./components/MyList/MyList";

const App = () => {

    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [weatherData, setWeatherData] = useState([]);

    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({});

    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const showList = useSelector(state => state.ui.listIsVisible);

    //getting the current location of the user and updating coordinates
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({
                lat: latitude,
                lng: longitude
            });
        });
    }, []);

    useEffect(() => {
        const filteredPlaces = places.filter((place) => Number(place.rating) > rating);
        setFilteredPlaces(filteredPlaces);
    }, [rating])

    useEffect(() => {
        if (bounds.sw && bounds.ne) {
            setIsLoading(true);

            getWeatherData(coordinates.lat, coordinates.lng)
                .then((data) => setWeatherData(data));

            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                    console.log(data);
                    setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                    setFilteredPlaces([]);
                    setRating('');
                    setIsLoading(false);
                })
        }
    }, [type, bounds]);

    const isDesktop = useMediaQuery('(min-width:1020px)');

    return (
        <>
            <CssBaseline />
            {showList && <MyList />}
            <Header setCoordinates={setCoordinates} />
            <Hero />
            {isDesktop && <Features onSelect={setType} />}
            <Info />
            <section id='explore'>
                <Grid container spacing={3} style={{ width: '100%' }} >
                    <Grid item xs={12} md={4} >
                        <List
                            places={filteredPlaces.length ? filteredPlaces : places}
                            childClicked={childClicked}
                            isLoading={isLoading}
                            type={type}
                            setType={setType}
                            rating={rating}
                            setRating={setRating}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <Map
                            setCoordinates={setCoordinates}
                            setBounds={setBounds}
                            coordinates={coordinates}
                            places={filteredPlaces.length ? filteredPlaces : places}
                            setChildClicked={setChildClicked}
                            weatherData={weatherData}
                        />
                    </Grid>
                </Grid>
            </section>
            <Footer />


        </>
    );
};

export default App;