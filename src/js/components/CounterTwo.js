import React from "react";
import { connect } from "react-redux";

import { mult, divide, set, reset } from "../actions";

const CounterTwo = ({ res, by, mult, divide, set, reset }) => {
//   console.log(res, by);
  return (
    <div>
      <div className="display">
        <p>{res}</p>
      </div>
      <input
        type="number"
        value={by}
        onChange={e => {set(e.target.value)}}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          mult(by);
        }}
      >
        Mult
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          divide(by);
        }}
      >
        Divide
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  return {
    res: state.mult.res,
    by: state.mult.by
  };
};

export default connect(
  mapStateToProps,
  { mult, divide, set, reset }
)(CounterTwo);
