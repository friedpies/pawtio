import React, { Component } from "react";
import "../styles/Video.scss";
import video from "../assets/pawtio-rev.mp4";

const Video = props => (
  <video id="background-video" loop autoPlay>
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default Video;
