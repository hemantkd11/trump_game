import React, { useEffect, useState } from "react";
import LogoPage from "./logo.page";
import PlayerDetails from "./playersDetail";

const OpenPage = () => {
  const [showpage, setUsepage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsepage(false);
      return () => clearTimeout(timer);
    }, 5000);
  }, []);
  return (
    <div className="App_main_page">
      <div className="App_main_container">
        <div className="App_main_wrapper">
          {showpage ? <LogoPage /> : <PlayerDetails />}
        </div>
      </div>
    </div>
  );
};

export default OpenPage;
