import React, { Component } from "react";
import "../styles/Video.scss";

const Video = props => (
  <video id="background-video" loop autoPlay>
    <source src="https://kjmporfolio.nyc3.digitaloceanspaces.com/pawtio/pawtio-bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default Video;
