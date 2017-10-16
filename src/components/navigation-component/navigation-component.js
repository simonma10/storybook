import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleEnable, toggleVisible } from './navigation-actions';
import { updatePage } from '../app-component/app-actions';
import { loadPageData } from '../page-component/page-actions';

class NavigationComponent extends Component{
    constructor(props){
        super(props);
        this.handleHomeClick = this.handleHomeClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleForwardClick = this.handleForwardClick.bind(this);
    }

    handleHomeClick(){
        //console.log('clicked Home');
        this.props.updatePage(0);
        //console.log(this.props.bookData[this.props.currentPage]);
        this.props.loadPageData(this.props.bookData[this.props.currentPage]);
    }

    handleBackClick(){
        //console.log('clicked Back');
        this.props.updatePage(this.props.currentPage - 1);
        //console.log(this.props.bookData[this.props.currentPage]);
        this.props.loadPageData(this.props.bookData[this.props.currentPage]);
    }

    handleForwardClick(){
        //console.log('clicked Forward');
        this.props.updatePage(this.props.currentPage + 1);
        //console.log(this.props.bookData[this.props.currentPage]);
        this.props.loadPageData(this.props.bookData[this.props.currentPage]);
    }

    render(){
        let back, forward, home;
        if (this.props.currentPage < this.props.lastPage){
            back = {display:"inline"};
            forward = {display:"inline"};
            home = {display:"inline"};
        }
        if (this.props.currentPage === 0){
            back = {display:"none"};
            forward = {display:"inline"};
            home = {display:"none"};
        }
        if (this.props.currentPage === this.props.lastPage){
            back = {display:"inline"};
            forward = {display:"none"};
            home = {display:"inline"};
        }

        return(
            <div>
                <img src="static/homeBtn.png" style={home} id="homeBtn" onClick={this.handleHomeClick}>{}</img>
                <img src="static/backArrow.png" style={back} id="backArrow" onClick={this.handleBackClick}>{}</img>
                <img src="static/nextArrow.png" style={forward} id="nextArrow" onClick={this.handleForwardClick}>{}</img>
            </div>
        );
    }
}

function mapStateToProps(state){
    // whenever application state changes:
    //  - component will auto re-render
    //  - the object in the state function will be assigned as props to the component
    return {
        currentPage: state.app.currentPage,
        lastPage: state.app.lastPage,
        back: state.navigation.back,
        forward: state.navigation.forward,
        home: state.navigation.home,
        bookData: state.app.bookData,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        toggleEnable,
        toggleVisible,
        updatePage,
        loadPageData
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationComponent);


