import React, { useEffect, useState } from "react";
import "./Markets.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Credentials } from "../../utils/credentials";

function Markets() {
  const spotify = Credentials();
  const [token, setToken] = useState("");
  const [markets, setMarkets] = useState([]);

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

    let marketsResponse = await axios("https://api.spotify.com/v1/markets ", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + tokenResponse.data.access_token,
      },
    });
    setMarkets(marketsResponse.data.markets);
  }, []);
  return (
    <>
      <h4 className="markets-title">Markets</h4>
      <div className="markets-wrapper">
        {markets.map((market, index) => {
          return (
            <Link to="/" key={index}>
              {market}
            </Link>
          );
        })}

        <Link to="/">ea</Link>
      </div>
    </>
  );
}

export default Markets;
