import React, { Component } from "react";
import { connect } from "react-redux";
import { setNum, multiply, reset, divide } from "../actions/calculator";

class Calculator extends Component {
  handleClick = e => {
    const target = e.target.className;

    // if (target === "cell") {
    const numberClicked = e.target.dataset.digit;
    this.props.setNum(numberClicked);
    // }
    // else if (target === "mult") {
    //     console.log('??')
    //   this.props.multiply();
    // }
  };
  handleMult = async () => {
    await this.props.multiply();
    await this.props.setNum(`=${this.props.res}`);
    console.log(this.props);
  };

  handleReset = () => {
    this.props.reset();
  };
  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="calculator" onClick={this.handleClick}>
          <div className="cell" data-digit="1">
            1
          </div>
          <div className="cell" data-digit="2">
            2
          </div>
          <div className="cell" data-digit="3">
            3
          </div>
          <div className="cell" data-digit="4">
            4
          </div>
          <div className="cell" data-digit="5">
            5
          </div>
          <div className="cell" data-digit="6">
            6
          </div>
          <div className="cell" data-digit="7">
            7
          </div>
          <div className="cell" data-digit="8">
            8
          </div>
          <div className="cell" data-digit="9">
            9
          </div>
          <div className="cell" data-digit="0">
            0
          </div>
          <div className="mult" data-digit="*">
            *
          </div>
        </div>
        <div className="formula">{this.props.formula}</div>
        <div className="result" onClick={this.handleMult}>
          Result {this.props.res}
        </div>
        <div className="reset" onClick={this.handleReset}>
          Reset{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ multiply }) => {
  // state destructured for shorthand use
  
  return {
    res: multiply.res,
    formula: multiply.formula
  };
};

export default connect(
  mapStateToProps,
  { setNum, multiply, reset }
)(Calculator);
