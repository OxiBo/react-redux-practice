import React, { Component } from 'react'

export default class DisplayTimer extends Component {
    render() {
        let { timer: { minutes, seconds}} = this.props
        // console.log(minutes, seconds)
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return (
            <div className="ui message compact teal">
                {
                    `${minutes} : ${seconds}`} 
            </div>
        )
    }
}
