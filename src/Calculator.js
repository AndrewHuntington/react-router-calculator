import React, { Component } from "react";

export default class Calculator extends Component {
  performMath(operator, leftNum, rightNum) {
    leftNum = parseInt(leftNum);
    rightNum = parseInt(rightNum);

    switch (operator) {
      case "add":
        return leftNum + rightNum;
      case "subtract":
        return leftNum - rightNum;
      case "multiply":
        return leftNum * rightNum;
      case "divide":
        return leftNum / rightNum;
      default:
        return "Error!";
    }
  }

  render() {
    const { operator, leftNum, rightNum } = this.props.match.params;
    const result = this.performMath(operator, leftNum, rightNum);
    return (
      <div>
        <h2>{result}</h2>
      </div>
    );
  }
}
