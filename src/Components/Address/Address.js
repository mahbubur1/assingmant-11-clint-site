import React from "react";
import "./Address.css";

const Address = () => {
  return (
    <div>
      <div>
        <h1 className="title-product mx-auto">Our Address</h1>
        <div className="row mx-auto address-container">
          <div className="col-md-4 col-12 address ">
            <h2 >Halal Food Arab Emirates</h2>
            <p>
              Sales Head Office, P.O. Box 13754, Dubai, United Arab Emirates{" "}
              <br />
              Call Us: 80042726246 <br /> Whatsapp: +971 52 102 6080
            </p>
          </div>
          <div className="col-md-4 col-12 address ">
            <h2 >Bismillah Fol Vandar </h2>
            <p>
               Est Jatrabari 07 No: Shop  Jatrabari Dhaka
              <br /> Call Us +88 019 2225 7777 <br />
              Whatsapp: 01608299203
            </p>
          </div>
          <div className="col-md-4 col-12 address">
            <h2 >Import & Export Agency London </h2>
            <p>
              4 Corners Distribution L.T.D. Unit 3B Katella Trading Estate 10A
              River Road, Barking, Essex IG11 ODG , Essex United Kingdom England
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
