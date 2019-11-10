import React, { Component } from "react";

export default class InputTime extends Component {
//   onInputChange(e) {
//     this.props.onInputChange(e.target.value);
//   }

  onFormSubmit(e) {
    // e.preventDefault();
    this.props.onFormSubmit();
  }
  render() {
    return (
      <div className="item">
        <form
          action=""
          className="ui form input"
          onSubmit={this.props.onFormSubmit}
        >
          <div className="field">
            <label>Interval</label>
            <input
              type="text"
              name="interval"
              value={this.props.interval}
              placeholder="Enter interval"
              onChange={e => this.props.onInputChange(e.target.value)}
            />
          </div>

          <div className="ui container">
            <button className="ui button" type="submit">
              Submit
            </button>
            
          </div>
        </form>
        <button onClick={this.props.onStopClick} className="ui button danger">STOP</button>
      </div>
    );
  }
}
