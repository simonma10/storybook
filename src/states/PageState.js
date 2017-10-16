import { store } from '../index';
import { setAppStatus } from '../components/app-component/app-actions';

import { setPage, setWipe, scalePage, showPage, transition } from './phaser-storybook-page-scale';

class PageState extends Phaser.State {
    constructor(){
        super();

    }

    init(pageData){
        this.pageData = pageData ? pageData : pageData = {page: 0};

        //console.log('page ', pageData.page);
        //console.log('title ', pageData.title);
    }
//TODO: load up animations and text!!
    create(){
        store.dispatch(setAppStatus('ready'));
        this.bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg');
        this.spread = this.game.add.sprite(0, 0, "bookbase");
        this.artwork = this.spread.addChild(this.game.make.sprite(0, 0, 'page1-BG'));
        setPage(this.spread, this.artwork, this.game);
        setWipe(this.artwork, this.game);

        let title = this.game.add.text(70,230,this.pageData.title);
    }

    render() {
        this.game.debug.text('Page ' + this.pageData.page, 192, 32);
    }
}

export default PageState;