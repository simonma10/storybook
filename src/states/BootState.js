import { setAppStatus } from '../components/app-component/app-actions';
import { store } from '../index';

let firstRunPortrait;

const WebFontConfig = {
    google: {
        families: ['Chelsea Market', 'Varela Round']
    }
};

class BootState extends Phaser.State {
    init(){
        firstRunPortrait = this.game.scale.isGamePortrait;

        //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        //this.stage.disableVisibilityChange = true;

        //  This tells the game to resize the renderer to match the game dimensions (i.e. 100% browser width / height)
        //this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;

        this.game.stage.backgroundColor = "#f0f0c0";

        //TODO: fix page scaling
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //this.scale.pageAlignHorizontally = true;
        //this.scale.pageAlignVertically = true;
    }

    preload() {
        //WebFont loader moved to HTML page
        //this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

        this.load.image('loaderBase', 'static/loaderBase.jpg');
        this.load.image('loaderForeground', 'static/loaderForeground.png');
    }

    create () {
        store.dispatch(setAppStatus('phaser boot'));
        this.state.start('PreloaderState');
    }

}


export default BootState;

