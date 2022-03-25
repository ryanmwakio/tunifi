import React, { useEffect, useState } from "react";

import classes from "./LeftColumn.module.css";
import logoImg from "../../assets/images/logo-img.png";
import { Link } from "react-router-dom";

import homeIcon from "../../assets/icons/home.svg";
import searchIcon from "../../assets/icons/search.svg";
import albumsIcon from "../../assets/icons/albums.svg";
import artistsIcon from "../../assets/icons/artists.svg";
import addIcon from "../../assets/icons/add.svg";

function LeftColumn() {
  const [activeId, setActiveId] = useState(0);
  let value = 0;

  useEffect(() => {}, [activeId]);

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
                  <img src={value.icon} alt="" />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>create new</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Relaxing</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Rock music</span>
            </Link>
          </li>
        </ul>

        <ul className={classes.links}>
          <p className={classes.title}>General</p>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>setting</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
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
