import { store } from '../index';
import { setAppStatus } from '../components/app-component/app-actions';

import { setPage, setWipe, scalePage, showPage, transition } from './phaser-storybook-page-scale';

class PageState extends Phaser.State {
    constructor(){
        super();
    }

    init(pageData){
        this.pageData = pageData ? pageData : pageData = {page: 0};

        console.log('page ', pageData.page);
        console.log('title ', pageData.title);
    }
//TODO: load up animations and text!!
    create(){
        store.dispatch(setAppStatus('ready'));
        let ref = 'page' + this.pageData.page;
        let bg = this.game.add.sprite(0, 0, ref);
        bg.width = this.game.width;
        bg.height = this.game.height;

        let title = this.game.add.text(70,230,this.pageData.title);
    }

    render() {
        this.game.debug.text('Page ' + this.pageData.page, 32, 32);
    }
}

export default PageState;