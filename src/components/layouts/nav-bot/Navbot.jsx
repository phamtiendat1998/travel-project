import React, { Component } from 'react'
import './_navBot.scss'
export default class Navbot extends Component {
  render() {
    return (
      <div id="navbot">
        <div className="button-fly border-right ">
          <span className="icon mr-2"><i className="fas fa-plane-departure"></i></span>
          <p>Fly</p>
        </div>
        <div className="button-right">
          <div className="button-right--item checkin border-left">
            <span className="icon"><i class="fas fa-calendar-check"></i></span>
            <p>Check in</p>
          </div>
          <div className="button-right--item checkin border-left">
            <span className="icon"><i class="fas fa-calendar-check"></i></span>
            <p>Check in</p>
          </div>
          <div className="button-right--item checkin border-left">
            <span className="icon"><i class="fas fa-calendar-check"></i></span>
            <p>Check in</p>
          </div>
        </div>
      </div>
    )
  }
}
