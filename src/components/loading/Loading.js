import React from "react";
import loadingGif from "../../images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4> Room Data Loading. Please wait ...</h4>
      <img src={loadingGif} alt="Loading Data" />
    </div>
  );
};

export default Loading;
