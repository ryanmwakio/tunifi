import React from "react";
import artistImg1 from "../../assets/images/artist-img-1.jpg";
import artistImg2 from "../../assets/images/artist-img-2.jpg";
import artistImg3 from "../../assets/images/artist-img-3.jpg";
import artistImg4 from "../../assets/images/artist-img-4.jpg";
import artistImg5 from "../../assets/images/artist-img-5.jpg";
import artistImg6 from "../../assets/images/artist-img-6.jpg";
import artistImg7 from "../../assets/images/artist-img-7.jpg";
import artistImg8 from "../../assets/images/artist-img-8.jpg";
import "./ArtistsSection.css";
import { Link } from "react-router-dom";

function ArtistsSection() {
  let artists = [
    {
      id: 1,
      name: "artist1",
      img: artistImg1,
    },
    {
      id: 2,
      name: "artist2",
      img: artistImg2,
    },
    {
      id: 3,
      name: "artist3",
      img: artistImg3,
    },
    {
      id: 4,
      name: "artist4",
      img: artistImg4,
    },
    {
      id: 5,
      name: "artist5",
      img: artistImg5,
    },
    {
      id: 6,
      name: "artist6",
      img: artistImg6,
    },
    {
      id: 7,
      name: "artist7",
      img: artistImg7,
    },
    {
      id: 8,
      name: "artist8",
      img: artistImg8,
    },
  ];

  return (
    <>
      <h3 className="artists-section-title">Artist</h3>
      <div className="artists-section-wrapper">
        {artists.map((artist) => {
          return (
            <div key={artist.id} className="artist-section-detail">
              <img src={artist.img} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ArtistsSection;
