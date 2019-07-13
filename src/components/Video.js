import React from "react";
import "../styles/Video.scss";

const Video = props => (
  <video id="background-video" loop autoPlay muted>
    <source
      src="https://kjmporfolio.nyc3.digitaloceanspaces.com/pawtio/pawtio_small.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
);

export default Video;
