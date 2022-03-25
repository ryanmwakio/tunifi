import React from "react";
import "./Playlist.css";

import playlistImg1 from "../../assets/images/playlist-img-1.jpg";
import playlistImg2 from "../../assets/images/playlist-img-2.jpg";
import playlistImg3 from "../../assets/images/playlist-img-3.jpg";
import playlistImg4 from "../../assets/images/playlist-img-4.jpg";
import { Link } from "react-router-dom";

function Playlist() {
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
  return (
    <div className="playlist-section">
      <h3 className="playlist-section-title">Your playlist</h3>

      <ul className="playlist-links">
        {songs.map((song) => {
          return (
            <li key={song.id}>
              <Link to="/" className="playlist-item">
                <img src={song.img} alt="" />
                <div>
                  <h3 className="playlist-song">{song.song}</h3>
                  <p className="playlist-artist">{song.artist}</p>
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
