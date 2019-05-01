import React, { Component } from 'react'


export default class intro extends Component {
  render() {
    return (
      <div className="intro">
        <video className="intro__bg-video" src="./video-intro.mp4" autoPlay loop></video>
        <div className="intro__bg-layer"></div>
        <div className="intro__txt pr-9">
        </div>
      </div>
    )
  }
}
