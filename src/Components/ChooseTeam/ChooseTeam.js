import React from 'react';
import "./styles.scss"

const ChooseTeam = () => {
    return (
        <div className="container mt-5">
        <h2 className="teamHeading">Choose Your Detected Team</h2>
        <div class="card-deck mt-5">
          <div class="card cardDiv">
            <div class="card-body text-center cardFigure">
              <h1 class="card-title">$199</h1>
              <p>For Basic</p>
              <p className="underline"></p>
              <br/>
              <p>Home page</p>
              <p>4 Inner page</p>
              <p>Asset file</p>
              <p>Source file</p>
              <p>Free stock photos</p>
              <p>20 days free support</p>
              <p>24/7 support</p>
              <br />
              <input className="teamButton" type="button" value="Order now" />
            </div>
          </div>
          <div class="card cardDiv">
            <div class="card-body text-center cardFigure">
              <h1 class="card-title">$399</h1>
              <p>For Preferred</p>
              <center className="underline"></center>
              <br/>
              <p>Home page</p>
              <p>8 Inner page</p>
              <p>Asset file</p>
              <p>Source file</p>
              <p>Free stock photos</p>
              <p>30 days free support</p>
              <p>24/7 support</p>
              <br />
              <input className="teamButton" type="button" value="Order now" />
            </div>
          </div>
          <div class="card cardDiv">
            <div class="card-body text-center cardFigure">
              <h1 class="card-title">$599</h1>
              <p>For Elite</p>
              <center className="underline"></center>
              <br/>
              <p>Home page</p>
              <p>No Inner page</p>
              <p>Asset file</p>
              <p>Source file</p>
              <p>Free stock photos</p>
              <p>10 days free support</p>
              <p>24/7 support</p>
              <br />
              <input className="teamButton" type="button" value="Order now" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ChooseTeam;