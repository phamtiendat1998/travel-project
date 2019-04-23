import React, { Component } from 'react'
import './_navTop.scss'
export default class Navtop extends Component {
  render() {
    return (
      <div id="navtop">
        <div className="logo">
          <p><i className="fas fa-globe"></i></p>
        </div>
        <div className="search-bar">
          <div className="search-bar--icon ml-4 mr-2"><span className="icon"><i className="fas fa-search"></i></span></div>
          <input className="" type="text" name="" placeholder="Search Flight, Promotion and Travel tips...." />
        </div>
        <div className="nav-item border-left country">
          <span className="icon"><i className="far fa-flag"></i></span>
        </div>
        <div className="nav-item border-left login">
          <span className="icon mr-2"><i className="fas fa-user"></i></span>
          <p>Login</p>
        </div>
        <div className="nav-item border-left  help">
          <p>Help/Suport</p>
        </div>
      </div>
    )
  }
}
