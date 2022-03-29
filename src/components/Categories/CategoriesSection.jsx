import React, { useEffect, useState } from "react";
import "./CategoriesSection.css";

import { Link } from "react-router-dom";

import playIcon from "../../assets/icons/play.svg";
import axios from "axios";
import { Credentials } from "../../utils/credentials";

function CategoriesSection() {
  const spotify = Credentials();

  const [token, setToken] = useState("");
  const [categories, setCategories] = useState([]);
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

    let categoriesResponse = await axios(
      "https://api.spotify.com/v1/browse/categories",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      }
    );
    setCategories(categoriesResponse.data.categories.items);
  }, []);
  return (
    <>
      <h3 className="recent-section-title">Categories</h3>
      <div className="recent-section-wrapper">
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <div
                className="category-section-item"
                style={{ backgroundImage: `url(${category.icons[0].url})` }}
              >
                <p className="category-name">{category.name}</p>
              </div>
              {/* <h3 className="recent-section-song">{category.song}</h3>
              <p className="recent-section-artist">{category.artist}</p> */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CategoriesSection;
