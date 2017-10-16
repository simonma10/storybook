import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import { loadPageData } from './page-actions';

import BootState from '../../states/BootState';
import PreloaderState from '../../states/PreloaderState';
import MainMenuState from '../../states/MainMenuState';
import PageState from '../../states/PageState';

class PageComponent extends Component{
    constructor(props){
        super(props);

        //
        this.game = new Phaser.Game(
            //window.innerWidth/2 * window.devicePixelRatio*2,
            //window.innerHeight/2 * window.devicePixelRatio*2,
            window.innerWidth * 0.5 * window.devicePixelRatio,
            window.innerHeight * 0.5 * window.devicePixelRatio,
            Phaser.AUTO
        );

        this.game.state.add('BootState', BootState);
        this.game.state.add('PreloaderState', PreloaderState);
        //this.game.state.add('MainMenuState', MainMenuState);
        this.game.state.add('PageState', PageState)
        this.game.state.start('BootState');
    }


    render(){
        if(this.props.status === 'ready'){

            let pageData = {
                page: this.props.currentPage,
                title: this.props.title
            };
            //console.log(this.props.title);
            this.game.state.start('PageState', true, false, pageData);
        }

        return(
            <div className="subtitles">
                <div className="subtitle_text">
                    {this.props.subs[0] ? this.props.subs[0].copy : ''}
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


