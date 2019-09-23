import React from "react";
import { connect } from "react-redux";
import { add } from "../actions";
//console.log(add);
const CounterOne = ({ sum, addedNum, dispatch }) => {
  // console.log(sum, addedNum);
  return (
    <div>
    <div className='display'> <p>{sum}</p></div>
     
      <button className="btn btn-primary" onClick={() => dispatch(add())}>
        Add 1
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { sum: state.add.sum, addedNum: state.add.addedNum };
};
export default connect(mapStateToProps)(CounterOne);
