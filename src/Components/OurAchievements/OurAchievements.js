import React from 'react';
import "./styles.scss"
import happy from "../../images/happy.png";
import marketing from "../../images/marketing.png";
import surface from "../../images/surface.png";
import transportation from "../../images/transportation.png";

const OurAchievements = () => {
    return (
        <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mt-5">
          <h2 className="header">Our Achievement</h2>
          <p className="pText">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letter.
          </p>
        </div>

        <div className="col-12 h-100  col-md-6 col-lg-4">
          <div className="box1 m-3 h-75 d-flex p-4 align-items-center">
            <img src={happy} alt="" />
            <div className="boxText">
              <h2 className="number">700+</h2>
              <p className="pText">Happy Clients</p>
            </div>
          </div>
          <div className="box2 m-3 h-75 d-flex p-4 align-items-center">
            <img src={marketing} alt="" />
            <div className="boxText">
              <h2 className="number">140+</h2>
              <p className="pText">Projects Completed</p>
            </div>
          </div>
        </div>
        <div className="col-12 h-100  col-md-6 col-lg-4">
          <div className="box2 m-3 h-75 d-flex p-4 align-items-center">
            <img src={surface} alt="" />
            <div className="boxText">
              <h2 className="number">25+</h2>
              <p className="pText">Crazy Minds</p>
            </div>
          </div>
          <div className="box1 m-3 h-75 d-flex p-4 align-items-center">
            <img src={transportation} alt="" />
            <div className="boxText">
              <h2 className="number">75+</h2>
              <p className="pText">Running Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default OurAchievements;