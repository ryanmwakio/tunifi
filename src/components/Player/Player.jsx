import React, { useState, useRef, useEffect } from "react";

import "./Player.css";
import { RWebShare } from "react-web-share";

import {
  FaRegHeart,
  FaHeart,
  FaForward,
  FaStepForward,
  FaStepBackward,
  FaBackward,
  FaPlay,
  FaPause,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import img1 from "../../assets/images/artist-img-play-1.jpg";
import mysong1 from "../../assets/images/Heart Upon My Sleeve.mp3";
import axios from "axios";
import { Credentials } from "../../utils/credentials";

function MusicPlayer({ song, imgSrc, auto }) {
  const spotify = Credentials();

  const [isLove, setLove] = useState(false);
  const [isPlaying, setPlay] = useState(false);
  //   duration state
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);
  const [showShare, setShowShare] = useState(false);
  const [genres, setGenres] = useState([]);
  const [token, setToken] = useState("");

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef(); //  reference to our animation
  let shareUrl = "http://ryanmwakio.netlify.app";

  let playlist = [
    {
      id: 1,
      image: img1,
      song: mysong1,
    },
    {
      id: 2,
      image: img1,
      song: mysong1,
    },
    {
      id: 3,
      image: img1,
      song: mysong1,
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

    let genreResponse = await axios(
      "https://api.spotify.com/v1/browse/categories?locale=sv_US",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      }
    );

    let artistResponse = await axios(
      "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      }
    );
    let recommendationsResponse = await axios(
      "https://api.spotify.com/v1/recommendations/available-genre-seeds",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      }
    );

    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

  document.body.onkeyup = function (e) {
    if (e.keyCode === 32) {
      //your code
      changePlayPause();
      setPlay(!isPlaying);
    }
  };

  const handleToggleShare = () => {
    setShowShare(!showShare);
  };

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    // need to run more than once
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    // progressBar.current.style.setProperty(
    //   "--played-width",
    //   `${(progressBar.current.value / duration) * 100}%`
    // );

    // setCurrenttime(progressBar.current.value);

    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

  const changeSongLove = () => {
    setLove(!isLove);
  };
  return (
    <>
      <div className="musicPlayer">
        <div className="songImage">
          <img src={playlist[0].image} alt="" />
        </div>
        <div className="songAttributes">
          <audio src={playlist[0].song} preload="metadata" ref={audioPlayer} />

          <div className="top">
            <div className="left">
              <a href={mysong1} download className="download" title="download">
                <BsDownload />
              </a>
            </div>

            <div className="middle">
              <div className="back">
                <i title="previous">
                  <FaStepBackward />
                </i>
                <i>
                  <FaBackward title="step back" />
                </i>
              </div>
              <div className="playPause" onClick={changePlayPause}>
                {isPlaying ? (
                  <i>
                    <FaPause />
                  </i>
                ) : (
                  <i>
                    <FaPlay />
                  </i>
                )}
              </div>
              <div className="forward">
                <i>
                  <FaForward title="forward" />
                </i>
                <i>
                  <FaStepForward title="next" />
                </i>
              </div>
            </div>

            <div className="right">
              <i onClick={handleToggleShare}>
                <FaShareAlt />
              </i>
            </div>
          </div>

          <div className="bottom">
            <div className="currentTime">{calculateTime(currentTime)}</div>
            <input
              type="range"
              className="progressBar"
              ref={progressBar}
              defaultValue="0"
              onChange={changeProgress}
              autoPlay={auto}
            />
            <div className="duration">
              {duration && !isNaN(duration) && calculateTime(duration)
                ? duration && !isNaN(duration) && calculateTime(duration)
                : "00:00"}
            </div>
          </div>
        </div>
      </div>
      {showShare && (
        <div className="share">
          <div className="share-wrapper">
            <span className="share-close" onClick={handleToggleShare}>
              close
            </span>
            <RWebShare
              data={{
                text: "Like humans, flamingos make friends for life",
                url: "https://on.natgeo.com/2zHaNup",
                title: "Flamingos",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <button>Share 🔗</button>
            </RWebShare>
          </div>
        </div>
      )}
    </>
  );
}

export default MusicPlayer;
