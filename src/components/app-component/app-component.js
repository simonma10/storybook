import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadPageData } from './page-actions';

class PageComponent extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    loadPageData(this.props.pageData);
  }

  render(){
    return(
      <div>
        Page Component

      </div>
  );
  }
}

function mapStateToProps(state){
  // whenever application state changes:
  //  - component will auto re-render
  //  - the object in the state function will be assigned as props to the component
  return {
    title: state.page.title,
    asset: state.page.asset,
    subs: state.page.subs
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    loadPageData
  }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(PageComponent);


