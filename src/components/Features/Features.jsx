import { Grid } from "@material-ui/core";

import HotelIcon from "@material-ui/icons/Hotel";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import CreateIcon from "@material-ui/icons/Create";
import tower from "./tower.svg";

import "./styles.css";
import useStyle from "./styles";

const Features = props => {
  const classes = useStyle();

  const onAttractionClickHandler = () => {
    props.onSelect("attractions");
    const explore = document.getElementById("explore");
    explore.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onRestaurantClickHandler = () => {
    props.onSelect("restaurants");
    const explore = document.getElementById("explore");
    explore.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onHotelClickHandler = () => {
    props.onSelect("hotels");
    const explore = document.getElementById("explore");
    explore.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Grid container className={classes.body}>
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={tower} alt="icon" width="80px" height="90px" />
              <h3>Attraction</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
                minus ipsa ipsam error veritatis nesciunt inventore eveniet
                repellendus eius obcaecati.
              </p>
              <button onClick={onAttractionClickHandler}>Go</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <RestaurantIcon className={classes.icons} />
              <h3>Restaurant</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
                minus ipsa ipsam error veritatis nesciunt inventore eveniet
                repellendus eius obcaecati.
              </p>
              <button onClick={onRestaurantClickHandler}>Go</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <HotelIcon className={classes.icons} />
              <h3>Hotel</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
                minus ipsa ipsam error veritatis nesciunt inventore eveniet
                repellendus eius obcaecati.
              </p>
              <button onClick={onHotelClickHandler}>Go</button>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Features;
