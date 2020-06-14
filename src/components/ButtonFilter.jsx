import React, { Component } from "react";
import '../App.scss';


export default class ButtonFilter extends Component {
  
  
  render(){
    return (
      <button
        type="button"
        className="filters__item is-selected"
        onClick={this.props.handleClickState}
      >
        {this.props.name}
        <i className="fas fa-sort-down" />
      </button>
    );
} }

