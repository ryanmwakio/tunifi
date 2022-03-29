import React, { useEffect, useState } from "react";
import "./Playlist.css";

import playlistImg1 from "../../assets/images/playlist-img-1.jpg";
import playlistImg2 from "../../assets/images/playlist-img-2.jpg";
import playlistImg3 from "../../assets/images/playlist-img-3.jpg";
import playlistImg4 from "../../assets/images/playlist-img-4.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { Credentials } from "../../utils/credentials";

function Playlist() {
  const spotify = Credentials();

  const [token, setToken] = useState("");
  const [playlists, setPlaylists] = useState([]);

  let songs = [
    {
      id: 1,
      song: "The Lover",
      artist: "Dua Lipa",
      img: playlistImg1,
    },
    {
      id: 2,
      song: "It ain’t me",
      artist: "Kygo and Selena",
      img: playlistImg2,
    },
    {
      id: 3,
      song: "Capital Letters",
      artist: "Hailee Steinfeld",
      img: playlistImg3,
    },
    {
      id: 4,
      song: "Closer",
      artist: "Chainsmoker and Halsey",
      img: playlistImg4,
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

    let audioFeaturesResponse = await axios(
      "https://api.spotify.com/v1/browse/featured-playlists",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      }
    );
    setPlaylists(audioFeaturesResponse.data.playlists.items);
  }, []);
  return (
    <div className="playlist-section">
      <h3 className="playlist-section-title">Featured playlist</h3>

      <ul className="playlist-links">
        {playlists.map((playlist) => {
          return (
            <li key={playlist.id}>
              <Link to="/" className="playlist-item">
                <img src={playlist.images[0].url} alt="" />
                <div>
                  <h3 className="playlist-song">{playlist.name}</h3>
                  <p className="playlist-artist">
                    {playlist.owner.display_name}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Playlist;
