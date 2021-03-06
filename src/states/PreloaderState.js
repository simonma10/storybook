import { store } from '../index';
import { setAppStatus } from '../components/app-component/app-actions';

class PreloaderState extends Phaser.State {

    preload() {
/*
        this.background = null;
        this.foreground = null;
*/
        this.readout = null;
        this.ready = false;
        this.makePreloader();

        let manifest = this.game.cache.getJSON('manifest');

        for(let image of manifest.images) {
            if(image.hasOwnProperty('key') && image.hasOwnProperty('path')){
                let imageKey = image.key;
                let imagePath = image.path;
                this.load.image(imageKey, imagePath);
            }
        }

        for(let spritesheet of manifest.spritesheets) {
            if(spritesheet.hasOwnProperty('key') &&
                spritesheet.hasOwnProperty('path') &&
                spritesheet.hasOwnProperty('frameWidth') &&
                spritesheet.hasOwnProperty('frameHeight') &&
                spritesheet.hasOwnProperty('frameMax')
            ){
                this.load.spritesheet(
                    spritesheet.key,
                    spritesheet.path,
                    spritesheet.frameWidth,
                    spritesheet.frameHeight,
                    spritesheet.frameMax
                );
            }
        }


    }

    render() {
        this.game.debug.text('Preloader: ' + this.load.progress, 32, 32);
    }

    makePreloader() {
        // Make the preloader
        //this.background = this.add.sprite(10, 10, 'loaderBase');
        //this.foreground = this.background.addChild(this.game.make.sprite(0, 0, 'loaderForeground'));
        //this.onResize();

        // make preloader readout text
        let style = { font: "32pt Chelsea Market", fill: "#000000", align: "right" };
        //this.readout = this.background.addChild(this.game.make.text(320, 100, "Loading book... 0%", style));
        this.readout = this.game.add.text(this.game.width/2,this.game.height/2, "Loading book... 0%", style);
        this.readout.anchor.set(0.5);
    }

/*
  onResize() {
    try {
      if(this.game.device.desktop) {
        // scale the preloader
        this.background.width = this.game.width * 0.8;
        this.background.scale.y = this.background.scale.x;
      }
      else {
        // scale the preloader
        this.background.width = this.game.width * 0.8;
        this.background.scale.y = this.background.scale.x;
      }
      // center the preloader
      this.background.x = this.game.width * 0.5 - this.background.width * 0.5;
      this.background.y = this.game.height * 0.5 - this.background.height * 0.5;
    }
    catch(err) {
      console.log(err);
    }
}
*/

    loadUpdate() {
        if(this.load.progress === 100 || this.load.progress === 0)
          this.readout.text = "";
        else
          this.readout.text = "Loading book... " + this.load.progress + "%";
    }

    /*
    * If we're on mobile, require a 'start' button press.
    * (Gets around audio focus issues)
    * If on desktop, skip to the good stuff right away.
    */
    create () {
        store.dispatch(setAppStatus('preload'));

        if(!this.game.device.desktop){
            this.startBtn = this.background.addChild(this.game.make.sprite(820, 438, 'start'));

            this.startBtn.anchor.set(0.5, 0.5);
            this.startBtn.inputEnabled = true;
            this.startBtn.events.onInputDown.add(this.onStartPressed, this);

            TweenMax.from(this.startBtn.scale, 0.5, {x:0, y:0, ease:Back.easeOut});
        }
        else {
            this.onStartPressed();
        }
    }

    onStartPressed() {
        this.state.start('PageState');
    }
}

export default PreloaderState;

