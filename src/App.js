import Helmet from "react-helmet";
import { React } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.page";
import logoImg from "./assets/images/logo-img.png";
import Error from "./pages/Error/Error.page";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={logoImg} type="image/x-icon" />
        <title>tunifi | music that moves you</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
