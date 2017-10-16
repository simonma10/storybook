import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestBookData, receiveBookData, setAppStatus } from './app-actions';
import { genericFetch } from '../../utils/file-loader';
import { RECEIVE_BOOK_DATA } from './app-action-types';

import NavigationComponent from '../navigation-component/navigation-component';
import PageComponent from '../page-component/page-component';


class AppComponent extends Component{
  constructor(props){
    super(props);
    this.getSuccess = this.getSuccess.bind(this);

  }

  componentWillMount(){
    this.props.requestBookData();

    this.props.genericFetch({
      method: 'GET',
      dataUrl: '/static/data/config.json',
      dataAcquiredType: RECEIVE_BOOK_DATA,
      successCallBack: this.getSuccess,
      failCallBack: this.getFail
    });
  }

  getSuccess(payload) {
    //console.log('genericFetch success', payload);
    this.props.setAppStatus('config loaded');
  }

  getFail(error) {
    console.log('genericFetch failure', error);
    this.props.setAppStatus('error');
    //alert('file I/O failure');
  }

  render(){
    return(
      <div>
        <NavigationComponent/>
        <PageComponent/>
      </div>
  );
  }
}

function mapStateToProps(state){
  // whenever application state changes:
  //  - component will auto re-render
  //  - the object in the state function will be assigned as props to the component
  return {
    status: state.app.status
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    genericFetch,
    requestBookData,
    receiveBookData,
    setAppStatus
  }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);


