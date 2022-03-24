import React from "react";
import "./AdSection.css";
import { Link } from "react-router-dom";
import bgImg from "../../assets/images/bg-img.png";

function AdSection() {
  return (
    <>
      <div className="ad-section-wrapper" style={{ background: "#11004D" }}>
        <div className="ad-section-container">
          <img src={bgImg} alt="" className="ad-section-img" />
          <h3 className="ad-section-main-title">The Gary Vee</h3>
          <h3 className="ad-section-sub-title">Audio Experience.</h3>
          <p className="ad-section-text">
            Welcome to The Garyvee Audio Experience, hosted by entrepreneur,
            CEO, investor, vlogger, and public speaker Gary Vaynerchuk.
          </p>
          <Link to="/" className="btn ad-section-cta-solid">
            Play Now
          </Link>
          <Link to="/" className="btn ad-section-cta-outline">
            Add to playlist
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdSection;
