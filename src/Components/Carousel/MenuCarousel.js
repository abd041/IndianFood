import React from "react";

import food_img from "../../Resources/Images/Menu/food_img.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MenuCarousel() {
  const foodItems = [
    {
      img: food_img,
      text: "Rajasthani Veg Thali",
    },
    {
      img: food_img,
      text: "Amritsari Naan",
    },
    {
      img: food_img,
      text: "Rajasthani Veg Thali",
    },
    {
      img: food_img,
      text: "Amritsari Naan",
    },
    {
      img: food_img,
      text: "Rajasthani Veg Thali",
    },
    {
      img: food_img,
      text: "Amritsari Naan",
    },
    {
      img: food_img,
      text: "Rajasthani Veg Thali",
    },
    {
      img: food_img,
      text: "Amritsari Naan",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 100,
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        partialVisbile
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
      >
        {foodItems.map((data, index) => (
          <div
            className="menu_carousel_item d-flex justify-content-center align-items-center"
            key={index}
          >
            <diV>
              <div className="d-flex justify-content-center">
                <img src={data.img} alt="..." />
              </div>
              <div className="manu_carousel_text">
                <h1 className="size_16 line_22 color_dark_black">
                  {data.text}
                </h1>
              </div>
            </diV>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default MenuCarousel;
