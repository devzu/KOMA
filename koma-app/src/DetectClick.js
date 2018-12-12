import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DetectClick.css'

/**
 * Component that alerts if you click outside of it
 */


export default class OutsideAlerter extends Component {
  constructor(props) {
    super(props);
  

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = {
      newHeight: 90
    };
  }



  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Do something if clicked on outside of element
   */
  handleClickOutside(event) {

    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState(
        {newHeight: 90}
        )
      }
    else{
      this.setState(
        {newHeight: 520}
        )
      };
  }

  render() {

    return <React.Fragment>
    <div id="hej" ref={this.setWrapperRef} style={{height: this.state.newHeight}}>
    <p class="text">Meny</p>{this.props.children}</div>
    </React.Fragment>;
  }
}