import { store } from '../index';
import { setAppStatus } from '../components/app-component/app-actions';
import StorybookParticleFx from './phaser-storybook-particles';

import { setPage, setWipe, scalePage, showPage, transition } from './phaser-storybook-page-scale';

class PageState extends Phaser.State {
    constructor(){
        super();

    }

    init(pageData){
        this.pageData = pageData ? pageData : pageData = {page: 0};

        //console.log('page ', pageData.page);
        console.log('page data', this.pageData);
        this.sparkle = new StorybookParticleFx(this.game) ;
    }

    preload(){

    }

    create(){
        store.dispatch(setAppStatus('ready'));
        let grp = this.game.add.group();

        let ref = 'page' + this.pageData.page;
        let bg = this.game.add.sprite(0, 0, ref);
        bg.width = this.game.width;
        bg.height = this.game.height;
        grp.add(bg);




        this.sparkle.addToGroup(grp);

        let title = this.game.add.text(70,230,this.pageData.title);

        this.sparkle.testEmit();
        this.game.input.onTap.add(this.onTap, this);
    }

    update(){

    }

    render() {
        this.game.debug.text('Page ' + this.pageData.page, 32, 32);
        //this.sparkle.debug(500, 400);
    }

    onTap(pointer, doubleTap){
        console.log('Tap at ', pointer.x, pointer.y);
    }


}

export default PageState;