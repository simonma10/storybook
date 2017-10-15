import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleEnable, toggleVisible } from './navigation-actions';

class NavigationComponent extends Component{
  constructor(props){
    super(props);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleForwardClick = this.handleForwardClick.bind(this);
  }

  handleHomeClick(){
    console.log('clicked Home');
  }

  handleBackClick(){
    console.log('clicked Back');
  }

  handleForwardClick(){
    console.log('clicked Forward');
  }

  render(){
    return(
      <div>
        Navigation Component

        <img src="static/homeBtn.png" id="homeBtn" onClick={this.handleHomeClick}>{}</img>
        <img src="static/backArrow.png" id="backArrow" onClick={this.handleBackClick}>{}</img>
        <img src="static/nextArrow.png" id="nextArrow" onClick={this.handleForwardClick}>{}</img>
      </div>
  );
  }
}

function mapStateToProps(state){
  // whenever application state changes:
  //  - component will auto re-render
  //  - the object in the state function will be assigned as props to the component
  return {
    back: state.navigation.back,
    forward: state.navigation.forward,
    home: state.navigation.home,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    toggleEnable,
    toggleVisible
  }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);


