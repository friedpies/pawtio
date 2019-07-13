import React from "react";
import "../styles/Video.scss";

const Video = props => (
  <video id="background-video" loop autoPlay muted>
    <source src={process.env.REACT_APP_VIDEO_URL} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default Video;
