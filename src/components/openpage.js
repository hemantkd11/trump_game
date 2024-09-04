import React, { useEffect, useState } from "react";

const OpenPage = () => {
  const [showpage, setUsepage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsepage(false);
    }, 5000);
  });
  return (
    <div className="App_main_page">
      <div className="App_main_container">
        <div className="App_main_wrapper">{setTimeout(() => {}, timeout)}</div>
      </div>
    </div>
  );
};
