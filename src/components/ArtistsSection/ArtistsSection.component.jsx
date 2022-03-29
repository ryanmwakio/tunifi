import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { Credentials } from "../../utils/credentials";

function ArtistsSection() {
  const spotify = Credentials();
  const [token, setToken] = useState("");
  const [artists, setArtists] = useState([]);

  let artists2 = [
    {
      id: 1,
      name: "Drake",
      images: [{ url: artistImg1 }],
    },
    {
      id: 2,
      name: "Rihanna",
      images: [{ url: artistImg2 }],
    },
    {
      id: 3,
      name: "Travis Scott",
      images: [{ url: artistImg3 }],
    },
    {
      id: 4,
      name: "Nicki Minaj",
      images: [{ url: artistImg4 }],
    },
    {
      id: 5,
      name: "J cole",
      images: [{ url: artistImg5 }],
    },
    {
      id: 6,
      name: "Logic",
      images: [{ url: artistImg6 }],
    },
    {
      id: 7,
      name: "Kehlani",
      images: [{ url: artistImg7 }],
    },
    {
      id: 8,
      name: "Adele",
      images: [{ url: artistImg8 }],
    },
  ];

  useEffect(async () => {
    let tokenResponse = await axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    });
    setToken(tokenResponse.data.access_token.items);

    let artistsResponse = await axios(
      "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      }
    );
    setArtists([...artistsResponse.data.artists, ...artists2]);
  }, []);

  return (
    <>
      <h3 className="artists-section-title">Artist</h3>
      <div className="artists-section-wrapper">
        {artists.map((artist) => {
          return (
            <div key={artist.id} className="artist-section-detail">
              <img src={artist.images[0].url} alt="" title={artist.name} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ArtistsSection;
