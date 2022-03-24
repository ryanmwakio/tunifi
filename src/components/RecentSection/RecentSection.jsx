import React from "react";
import "./RecentSection.css";

import recentImg1 from "../../assets/images/recent-1.jpg";
import recentImg2 from "../../assets/images/recent-2.jpg";
import recentImg3 from "../../assets/images/recent-3.jpg";
import recentImg5 from "../../assets/images/recent-5.jpg";
import recentImg4 from "../../assets/images/recent-4.jpg";
import { Link } from "react-router-dom";

import playIcon from "../../assets/icons/play.svg";

function RecentSection() {
  let recents = [
    {
      id: 1,
      img: recentImg1,
      song: "Divine",
      artist: "Kohinoor",
    },
    {
      id: 2,
      img: recentImg2,
      song: "Aaya na tu",
      artist: "Arjun Kanungo, Momina Mustehsan",
    },
    {
      id: 3,
      img: recentImg3,
      song: "Into your arms",
      artist: "Ava max, Witt Lowry",
    },
    {
      id: 4,
      img: recentImg5,
      song: "Unstoppable",
      artist: "Sia",
    },
    {
      id: 5,
      img: recentImg4,
      song: "Unstoppable",
      artist: "Sia",
    },
  ];
  return (
    <>
      <h3 className="recent-section-title">Recent</h3>
      <div className="recent-section-wrapper">
        {recents.map((recent) => {
          return (
            <div key={recent.id}>
              <div
                className="recent-section-item"
                style={{ backgroundImage: `url(${recent.img})` }}
              >
                <Link to="/" className="play-icon">
                  <img src={playIcon} alt="" />
                </Link>
              </div>
              <h3 className="recent-section-song">{recent.song}</h3>
              <p className="recent-section-artist">{recent.artist}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RecentSection;
