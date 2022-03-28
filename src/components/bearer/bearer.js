import React, { useState, useEffect } from "react";
import axios from "axios";

function Bearer() {
  const [token, setToken] = useState("");

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          btoa(
            "92bbc2cb295d4ae09e01cd1696d1af65" +
              ":" +
              "336ba3d267244d59bce1035caa6af7df"
          ),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);
      console.log(token);
    });
  }, []);

  return (
    <div>
      bearer
      <form action="" method="post">
        <button type="submit">get token</button>
      </form>
    </div>
  );
}

export default Bearer;
