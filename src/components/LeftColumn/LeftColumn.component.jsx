import React, { useEffect, useState } from "react";

import classes from "./LeftColumn.module.css";
import logoImg from "../../assets/images/logo-img.png";
import { Link } from "react-router-dom";

import homeIcon from "../../assets/icons/home.svg";
import searchIcon from "../../assets/icons/search.svg";
import albumsIcon from "../../assets/icons/albums.svg";
import artistsIcon from "../../assets/icons/artists.svg";

function LeftColumn() {
  const [activeId, setActiveId] = useState(0);
  let value = 0;

  useEffect(() => {
    console.log(activeId);
  }, [activeId]);

  const values = [
    {
      id: 1,
      text: "Home",
      to: "/",
      icon: homeIcon,
    },
    {
      id: 2,
      text: "Explore",
      to: "/",
      icon: searchIcon,
    },
    {
      id: 3,
      text: "Albums",
      to: "/",
      icon: albumsIcon,
    },
    {
      id: 4,
      text: "Artists",
      to: "/",
      icon: artistsIcon,
    },
  ];

  return (
    <>
      <div className={classes.wrapper}>
        <Link to="/" className={classes.brand}>
          <img src={logoImg} alt="" />
          <span>Tunifi</span>
        </Link>

        <ul className={classes.links}>
          {values.map((value) => {
            console.log(activeId === value.id);
            return (
              <li
                key={value.id}
                onMouseEnter={() => setActiveId(value.id)}
                onMouseLeave={() => setActiveId(0)}
                className={
                  activeId === value.id
                    ? classes.linkItemActive
                    : classes.linkItem
                }
              >
                <Link to="/">
                  <img src={value.icon} alt="" srcset="" />
                  <span>{value.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className={classes.links}>
          <p className={classes.title}>Playlist</p>
          <li>
            <Link to="/">
              <span>create new</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Relaxing</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Rock music</span>
            </Link>
          </li>
        </ul>

        <ul className={classes.links}>
          <p className={classes.title}>General</p>
          <li>
            <Link to="/">
              <span>setting</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>logout</span>
            </Link>
          </li>
        </ul>

        <span className={classes.btnPrimaryOutline}>Twitter</span>
        <span className={classes.btnPrimarySolid}>Github</span>
      </div>
    </>
  );
}

export default LeftColumn;
