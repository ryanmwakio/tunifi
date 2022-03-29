import React, { useEffect, useState } from "react";
import "./RecentSection.css";

import recentImg1 from "../../assets/images/recent-1.jpg";
import recentImg2 from "../../assets/images/recent-2.jpg";
import recentImg3 from "../../assets/images/recent-3.jpg";
import recentImg5 from "../../assets/images/recent-5.jpg";
import recentImg4 from "../../assets/images/recent-4.jpg";
import { Link } from "react-router-dom";

import playIcon from "../../assets/icons/play.svg";
import axios from "axios";
import { Credentials } from "../../utils/credentials";

function RecentSection() {
  const spotify = Credentials();

  const [token, setToken] = useState("");
  const [recents, setRecents] = useState([]);
  // let recents = [
  //   {
  //     id: 1,
  //     img: recentImg1,
  //     song: "Divine",
  //     artist: "Kohinoor",
  //   },
  // ];

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

    let newReleasesResponse = await axios(
      `https://api.spotify.com/v1/browse/new-releases`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      }
    );
    setRecents(newReleasesResponse.data.albums.items);
  }, []);
  return (
    <>
      <h3 className="recent-section-title">New Releases</h3>
      <div className="recent-section-wrapper">
        {recents.map((recent) => {
          return (
            <div key={recent.id}>
              <div
                className="recent-section-item"
                style={{ backgroundImage: `url(${recent.images[1].url})` }}
              >
                <p className="album-name">{recent.name}</p>
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
