import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
//import { loadPageData } from './page-actions';

import BootState from '../../states/BootState';
import PreloaderState from '../../states/PreloaderState';
import MainMenuState from '../../states/MainMenuState';
import PageState from '../../states/PageState';

class PageComponent extends Component{
    constructor(props){
        super(props);

        //TODO: calculate optimum game size, based on window dimensions.
        //===============================================================
        // ensure scaling maintains consistent aspect ratio
        //===============================================================
        console.log('window width, height', window.innerWidth, window.innerHeight );
        console.log('devicePixelRatio', window.devicePixelRatio);

       /* this.game = new Phaser.Game(
            window.innerWidth * 0.5 * window.devicePixelRatio,
            window.innerHeight * 0.5 * window.devicePixelRatio,
            Phaser.AUTO
        );*/

       // For dev purposes, fix the dimensions at 800 x 450 (16:9 aspect ratio)
       /*this.game = new Phaser.Game(800, 450, Phaser.AUTO);

        this.game.state.add('BootState', BootState);
        this.game.state.add('PreloaderState', PreloaderState);
        //this.game.state.add('MainMenuState', MainMenuState);
        this.game.state.add('PageState', PageState);
        this.game.state.start('BootState');*/
    }


    render(){

        let pageText = '';

        if(this.props.status === 'ready'){

            let pageData = {
                page: this.props.currentPage,
                data: this.props.bookData[this.props.currentPage]
            };
            //this.game.state.start('PageState', true, false, pageData);

        }
        if (this.props.bookData[this.props.currentPage]){
            console.log(this.props.bookData[this.props.currentPage]);
            let subtitles = this.props.bookData[this.props.currentPage].subs ? this.props.bookData[this.props.currentPage].subs : '';
            if (_.has(subtitles[0], 'copy') ) {
                pageText =  subtitles[0].copy ? subtitles[0].copy : '';
            }
        }


        return(
            <div>
                <iframe src="../../../animations/clouds.html" width="750px" height="420px"></iframe>
                <div className="subtitles">
                    <div className="subtitle_text">
                        {pageText}
                    </div>
                </div>
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
        subs: state.page.subs,
        currentPage: state.app.currentPage,
        bookData: state.app.bookData,
        status: state.app.status
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        //loadPageData
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PageComponent);


