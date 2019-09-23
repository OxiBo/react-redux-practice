import React from "react";
import { connect } from "react-redux";
import { setDate } from "../actions";

const DatePicker = ({ date, setDate }) => {
//   console.log(props);
  return (
    <div>
      <label htmlFor="date-input">Input Date</label>
      <input
        id="date-input"
        type="date"
        value={date}
        onChange={e => {setDate(e.target.value)}}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    date: state.date.date
  };
};

export default connect(
  mapStateToProps,
  { setDate }
)(DatePicker);
