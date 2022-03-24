import React, { useState } from "react";

import classes from "./LeftColumn.module.css";
import logoImg from "../../assets/images/logo-img.png";
import { Link } from "react-router-dom";

import homeIcon from "../../assets/icons/home.svg";
import searchIcon from "../../assets/icons/search.svg";
import albumsIcon from "../../assets/icons/albums.svg";
import artistsIcon from "../../assets/icons/artists.svg";

function LeftColumn() {
  const values = [
    { id: 1, text: "LI-1" },
    { id: 2, text: "LI-2" },
    { id: 3, text: "LI-3" },
    { id: 4, text: "LI-4" },
  ];
  const [activeId, setActiveId] = useState();

  return (
    <>
      <div className={classes.wrapper}>
        <Link to="/" className={classes.brand}>
          <img src={logoImg} alt="" />
          <span>Tunifi</span>
        </Link>

        <ul className={classes.links}>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#11004D"
                  d="M21.884 15.298a29.39 29.39 0 01-.714 4.398C20.965 20.953 19.74 22 18.413 22h-1.634c-.918 0-1.633-.733-1.633-1.675V16.03c0-1.047-.817-1.884-1.838-1.884H10.96c-1.021 0-1.838.837-1.838 1.884v4.294c0 .942-.715 1.675-1.634 1.675h-1.94c-1.327 0-2.45-.942-2.756-2.304-.306-1.36-.572-2.663-.715-4.398-.181-2.2 0-4.293.102-5.654 0-.838.51-1.675 1.225-2.199l7.147-4.921c.409-.315.92-.524 1.43-.524.51 0 1.123.21 1.531.524l7.147 4.921c.715.524 1.225 1.361 1.225 2.199.102 1.361.2 3.455 0 5.654z"
                />
              </svg>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#11004D"
                  fill-rule="evenodd"
                  d="M9.487 1.538c-4.39 0-7.949 3.556-7.949 7.94 0 4.383 3.558 7.938 7.95 7.938 2.19 0 4.172-.884 5.61-2.316a7.906 7.906 0 002.338-5.623c0-4.383-3.558-7.939-7.949-7.939zM0 9.478C0 4.241 4.248 0 9.487 0s9.487 4.242 9.487 9.477a9.436 9.436 0 01-2.266 6.147l3.066 3.062a.77.77 0 01-1.087 1.089l-3.069-3.065a9.458 9.458 0 01-6.13 2.244C4.247 18.954 0 14.712 0 9.477z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Explore</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#030D45"
                  fill-rule="evenodd"
                  d="M12 9.692c-2.196 0-5.201.172-7.048.293a1.21 1.21 0 00-1.133 1.072c-.134 1.204-.28 2.81-.28 4.02 0 1.21.146 2.816.28 4.02a1.21 1.21 0 001.133 1.072c1.847.12 4.852.293 7.048.293 2.196 0 5.201-.172 7.048-.293a1.21 1.21 0 001.133-1.072c.134-1.204.28-2.81.28-4.02 0-1.21-.146-2.816-.28-4.02a1.21 1.21 0 00-1.133-1.072c-1.846-.121-4.852-.293-7.048-.293zM4.85 8.45C6.699 8.33 9.75 8.154 12 8.154c2.251 0 5.302.175 7.15.296a2.748 2.748 0 012.56 2.438c.134 1.21.29 2.889.29 4.189 0 1.3-.156 2.98-.29 4.19a2.748 2.748 0 01-2.56 2.437C17.301 21.825 14.25 22 12 22c-2.251 0-5.302-.175-7.15-.296a2.748 2.748 0 01-2.56-2.438c-.134-1.21-.29-2.889-.29-4.19 0-1.3.156-2.978.29-4.189A2.748 2.748 0 014.85 8.45z"
                  clip-rule="evenodd"
                />
                <path
                  fill="#030D45"
                  fill-rule="evenodd"
                  d="M12 6.615c-1.6 0-3.752.076-5.2.135-.586.024-1.038.435-1.109.954-.06.436-.101.873-.101 1.22a.77.77 0 11-1.539 0c0-.45.053-.966.116-1.427.18-1.32 1.302-2.232 2.57-2.284 1.45-.06 3.628-.136 5.263-.136 1.635 0 3.814.076 5.263.136 1.268.052 2.39.965 2.57 2.284.063.461.116.977.116 1.426a.77.77 0 11-1.539 0 9.59 9.59 0 00-.101-1.219c-.071-.52-.523-.93-1.109-.954-1.448-.06-3.6-.135-5.2-.135z"
                  clip-rule="evenodd"
                />
                <path
                  fill="#030D45"
                  fill-rule="evenodd"
                  d="M12 3.538c-.955 0-2.194.054-3.182.106-.597.032-1.058.474-1.11 1.029-.04.416-.067.833-.067 1.173a.77.77 0 11-1.538 0c0-.41.032-.882.073-1.317.127-1.354 1.243-2.351 2.56-2.421A67.147 67.147 0 0112 2c.998 0 2.271.055 3.264.108 1.317.07 2.433 1.067 2.56 2.42.04.436.073.908.073 1.318a.77.77 0 11-1.538 0c0-.34-.028-.757-.067-1.173-.052-.555-.513-.997-1.11-1.029A65.708 65.708 0 0012 3.538zM9.18 15.077a.77.77 0 01.769-.77h4.102a.77.77 0 010 1.54H9.95a.77.77 0 01-.77-.77z"
                  clip-rule="evenodd"
                />
                <path
                  fill="#030D45"
                  fill-rule="evenodd"
                  d="M12 17.897a.77.77 0 01-.77-.769v-4.102a.77.77 0 011.54 0v4.102a.77.77 0 01-.77.77z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Albums</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#030D45"
                  fill-rule="evenodd"
                  d="M12 5.548a2.315 2.315 0 00-2.308 2.323A2.315 2.315 0 0012 10.193a2.315 2.315 0 002.308-2.322A2.315 2.315 0 0012 5.548zM8.154 7.871C8.154 5.733 9.876 4 12 4s3.846 1.733 3.846 3.87c0 2.139-1.722 3.872-3.846 3.872S8.154 10.009 8.154 7.87zM10.482 14.839a2.85 2.85 0 00-2.841 2.86.411.411 0 00.007.08c.411.23 1.574.673 4.352.673 2.778 0 3.94-.444 4.352-.672v-.007a.406.406 0 00.007-.075 2.85 2.85 0 00-2.842-2.86h-3.034zm-4.38 2.86c0-2.435 1.962-4.409 4.38-4.409h3.036c2.418 0 4.38 1.974 4.38 4.408 0 .435-.147 1.05-.728 1.394-.706.418-2.164.908-5.17.908-3.007 0-4.464-.49-5.17-.908-.581-.344-.727-.96-.727-1.394zM16.642 5.604a.769.769 0 01.943-.545c1.404.382 2.364 1.77 2.364 3.328 0 1.647-1.124 3.155-2.73 3.35a.77.77 0 01-.855-.677.773.773 0 01.672-.861c.703-.085 1.374-.809 1.374-1.812 0-.952-.579-1.657-1.226-1.833a.775.775 0 01-.542-.95zM18.424 13.916a.77.77 0 01.903-.611A3.322 3.322 0 0122 16.57v.42c0 .396-.118.997-.67 1.352-.344.221-.866.45-1.656.61a.774.774 0 01-.305-1.518c.585-.119.916-.268 1.087-.369v-.001a.45.45 0 00.006-.075v-.419c0-.85-.6-1.583-1.43-1.746a.774.774 0 01-.608-.908zM7.358 11.17a.769.769 0 01-.943.545C5.01 11.333 4.05 9.945 4.05 8.387c0-1.647 1.124-3.155 2.729-3.35a.77.77 0 01.856.677c.05.425-.25.81-.672.861-.703.085-1.374.809-1.374 1.812 0 .952.579 1.657 1.226 1.833.41.112.653.537.542.95zM5.576 13.916a.77.77 0 00-.903-.611A3.322 3.322 0 002 16.57v.42c0 .396.118.997.67 1.352.344.221.867.45 1.656.61a.774.774 0 00.305-1.518c-.585-.119-.916-.268-1.087-.369v-.001a.452.452 0 01-.006-.075v-.419c0-.85.6-1.583 1.43-1.746a.774.774 0 00.608-.908z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Artists</span>
            </Link>
          </li>
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
