import React, { Component } from "react";
import { Container } from "react-bootstrap";
import LocationFilter from "./LocationFilter";
import YouTube from "react-youtube";
import "../styles/Launch.scss";

class Launch extends Component {
  constructor(props) {
    super(props);
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  render() {
    const playerOptions = {
      height: "390",
      width: "640",
      playerVars: {
        playlist: "{$loadYouTubeVideoID}",
        autoplay: 1, // Auto-play the video on load
        autohide: 1,
        disablekb: 1,
        controls: 0, // Hide pause/play buttons in player
        showinfo: 0, // Hide the video title
        modestbranding: 1, // Hide the Youtube Logo
        loop: 1, // Run the video in a loop
        fs: 0, // Hide the full screen button
        autohide: 0, // Hide video controls when playing
        rel: 0,
        enablejsapi: 1
      }
    };

    return (
      // <Jumbotron id="launch-jumbo" className="loading">

      <Container id="launch-container">
        <YouTube
          videoId={process.env.REACT_APP_VIDEO_ID}
          opts={playerOptions}
          onReady={this._onReady}
        />
        <div id="video-overlay" />
        <h1 className="display-1 m-5" id="main-header">
          pawtio
        </h1>
        <h3 className="mb-5" id="sub-heading">
          search for a dog-friendly place in Austin, TX
        </h3>
        <LocationFilter
          filters={this.props.filters}
          onCheck={this.props.onCheck}
        />
      </Container>
      // </Jumbotron>
    );
  }
}

export default Launch;
