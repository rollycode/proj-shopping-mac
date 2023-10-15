import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Slider from "react-slick";
import Heart from "./Heart";
import Cart from "./Cart";
import DetailsTabs from "./DetailsTabs";
import { tabDetails, productImages } from "./../Utils/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Grid container px={{ md: "18px", xs: "18px", lg: "68px" }} mt={{ lg: 10 }}>
      <Grid
        item
        lg={4}
        sm={12}
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <div style={{ position: "sticky", top: "100px", zIndex: 1 }}>
          <DetailsTabs tabDetails={tabDetails} />
        </div>
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
        <Heart isFavourite={isFavourite} setIsFavourite={setIsFavourite} />
        {productImages.map((image, index) => (
          <img src={image.src} alt={image.alt} key={index} width="375px" />
        ))}
      </Grid>
      <Grid
        item
        lg={4}
        xs={12}
        sx={{ minHeight: 540 }}
        display={{ xs: "block", sm: "none", md: "none" }}
      >
        <Box sx={{ minWidth: "475px", minHeight: 540 }}>
          <Heart isFavourite={isFavourite} setIsFavourite={setIsFavourite} />
          <Slider {...settings} style={{ width: "100%" }}>
            {productImages.map((image, index) => (
              <img src={image.src} alt={image.alt} key={index} width="300px" />
            ))}
          </Slider>
        </Box>
      </Grid>
      <Grid item lg={4} sm={12}>
        <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
          <Cart />
        </div>
      </Grid>
      <Grid
        item
        lg={4}
        sm={12}
        sx={{ display: { xs: "block", sm: "none", md: "none" } }}
      >
        <div
          style={{
            position: "sticky",
            top: "100px",
            marginTop: "64px",
            zIndex: 1,
          }}
        >
          <DetailsTabs tabDetails={tabDetails} />
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
