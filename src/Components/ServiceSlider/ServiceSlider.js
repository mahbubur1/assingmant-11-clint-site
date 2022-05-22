import React from "react";
import "./ServiceSlider.css";
import img from "../../Images/banner2.jpg";
import img4 from "../../Images/banner4.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const ServiceSlider = () => {
  return (
    <div className="services container">
        <h1 className="title mx-auto">The Best Mutton Pizza</h1>
      <div className="serviceSlider row">
        <div data-aos="zoom-in-down" className="col-md-6 col service-slider-text">
        <h1>Features</h1>
        <h5>Minced Beef</h5>
        <h5>Chinese Salad</h5>
        <h5>100% Yummy</h5>
        <h5>100% fresh</h5>
        <h5>Hot Deals</h5>
        <h5>Special Offers</h5>
        </div>
        <div data-aos="zoom-in-down" className="col col-md-6 service-img p-0">
          <img src={img} alt="" />
        </div>
      </div>
      <h1 className="title mx-auto">Best Pasta in the world</h1>
      <div className="serviceSlider d-md-flex ">
        <div data-aos="zoom-in-down" className=" service-img p-0">
          <img className="w-md-50" src={img4} alt="" />
        </div>
        <div data-aos="zoom-in-left" className=" service-slider-text w-md-50">
         <h5>Best pasta made by special craftsmen with shrimp and native salad.Due to the slow cooking, it is not likely to have any kind of raw and due to prolonged cooking, it gives off a nice scent and is very tasty.</h5>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
