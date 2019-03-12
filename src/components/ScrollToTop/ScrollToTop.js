import React, { Component } from "react";
import PropTypes from "prop-types";
import "./scrollToTop.scss";


class ScrollToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }


  render() {
    return (
      <div>
      <button className="scroll"
          onClick={() => { this.scrollToTop(); }}>
          <span className=''><img src="/icons/arrow-up.png" alt="" /></span>
        </button>
      </div>
    )
  }
}


export default ScrollToTop;