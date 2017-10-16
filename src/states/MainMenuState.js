import { setPage, setWipe, scalePage, showPage, transition } from './phaser-storybook-page-scale';

class MainMenuState extends Phaser.State {

  init(){
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }


  create(){
    this.bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg');
    this.spread = this.game.add.sprite(0, 0, "bookbase");
    this.artwork = this.spread.addChild(this.game.make.sprite(0, 0, 'page1-BG'));
    setPage(this.spread, this.artwork, this.game);
    //getSubs();

    this.letters = [];

    this.animateTitles();

    setWipe(this.artwork, this.game);
  }

  animateTitles() {

    this.makeLetter("page1-t1", 583, 200);
    this.makeLetter("page1-t2", 646, 167);
    this.makeLetter("page1-t3", 720, 138);
    this.makeLetter("page1-t4", 785, 130);
    this.makeLetter("page1-t5", 848, 105);
    this.makeLetter("page1-t6", 938, 95);
    this.makeLetter("page1-t7", 1000, 100);
    this.makeLetter("page1-t8", 1060, 110);
    this.makeLetter("page1-t9", 1141, 130);
    this.makeLetter("page1-t10", 1240, 150);
    this.makeLetter("page1-t11", 1300, 190);

  this.animateLetters();

}

  makeLetter(letterRef, xPos, yPos) {
    let letter = this.artwork.addChild(this.game.make.sprite(xPos, yPos, letterRef));
    this.letters.push(letter);
  }

  animateLetters() {
    let i = 1;
    this.letters.forEach(function(entry) {
      TweenMax.from(entry, 1, {y:entry.y-300, ease:Back.easeOut, delay:1+(i/15)})
      i++;
    });

    let sub = this.artwork.addChild(this.game.make.sprite(990, 290, "page1-sub"));
    sub.anchor.set(0.5, 0.5);
    TweenMax.from(sub.scale, 0.5, {x:0, y:0, ease:Back.easeOut, delay:3});
  }

  render () {
    this.game.debug.text('Main Menu', 192, 32);
  }

  resize (width, height) {
    this.bg.width = width;
    this.bg.height = height;
    scalePage();
  }





}


export default MainMenuState;


/*



var letters = [];
var borbs = [];
var currentBorb = 0;
var maxBorbs = 3;
var borbInterval;

var coverRumbles = ["rumble2", "rumble4", "rumble1", "rumble3"];

Book.MainMenu = function (game) {

};

Book.MainMenu.prototype = {

  create: function () {
    this.bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg');

    this.spread = game.add.sprite(0, 0, "bookbase");
    this.artwork = this.spread.addChild(game.make.sprite(0, 0, 'page1-BG'));

    setPage(this.spread, this.artwork);
    //getSubs();

    borbs = [];

    ready = true;

    this.animateTitles();
    this.createButtons();

    setupNavigation();
    hideBack();

    setWipe();
  },

  animateTitles: function() {
    this.borbybase = this.artwork.addChild(game.make.sprite(100, 100, "page1-borbybase"));
    this.borby1 = this.artwork.addChild(game.make.sprite(100, 100, "page1-borby1"));
    this.borby2 = this.artwork.addChild(game.make.sprite(100, 100, "page1-borby2"));
    this.borby3 = this.artwork.addChild(game.make.sprite(100, 100, "page1-borby3"));
    this.borby4 = this.artwork.addChild(game.make.sprite(100, 100, "page1-borby4"));

    borbs.push(this.borby1);
    borbs.push(this.borby2);
    borbs.push(this.borby3);
    borbs.push(this.borby4);

    this.borby2.alpha = 0;
    this.borby3.alpha = 0;
    this.borby4.alpha = 0;

    this.sparks1 = this.artwork.addChild(game.make.sprite(350, 400, "page1-sparks1"));
    this.sparks1.anchor.set(0.5, 0.5);
    this.sparks2 = this.artwork.addChild(game.make.sprite(350, 400, "page1-sparks2"));
    this.sparks2.anchor.set(0.5, 0.5);

    TweenMax.to(this.sparks1.scale, 0.4, {x:1.1, y:1.1, repeat:-1, yoyo:true, ease:Linear.easeNone});
    TweenMax.to(this.sparks2.scale, 0.7, {x:1.1, y:1.1, repeat:-1, yoyo:true, ease:Linear.easeNone});

    this.makeLetter("page1-t1", 583, 200);
    this.makeLetter("page1-t2", 646, 167);
    this.makeLetter("page1-t3", 720, 138);
    this.makeLetter("page1-t4", 785, 130);
    this.makeLetter("page1-t5", 848, 105);
    this.makeLetter("page1-t6", 938, 95);
    this.makeLetter("page1-t7", 1000, 100);
    this.makeLetter("page1-t8", 1060, 110);
    this.makeLetter("page1-t9", 1141, 130);
    this.makeLetter("page1-t10", 1240, 150);
    this.makeLetter("page1-t11", 1300, 190);

    this.animateLetters();

    borbInterval = window.setInterval(this.animateBorby, 4000);
  },

  makeLetter: function(letterRef, xPos, yPos) {
    var letter = this.artwork.addChild(game.make.sprite(xPos, yPos, letterRef));
    letters.push(letter);
  },

  animateLetters: function() {
    var i = 1;
    letters.forEach(function(entry) {
      TweenMax.from(entry, 1, {y:entry.y-300, ease:Back.easeOut, delay:1+(i/15)})
      i++;
    });

    var sub = this.artwork.addChild(game.make.sprite(990, 290, "page1-sub"));
    sub.anchor.set(0.5, 0.5);
    TweenMax.from(sub.scale, 0.5, {x:0, y:0, ease:Back.easeOut, delay:3});
  },

  animateBorby: function() {
    if(currentBorb < maxBorbs) {
      currentBorb++;
    }
    else {
      currentBorb = 0;
    }

    var b = 0;
    borbs.forEach(function(borb) {
      if(b == currentBorb) {
        TweenMax.to(borb, 0.5, {alpha:1})
      }
      else {
        TweenMax.to(borb, 0.5, {alpha:0})
      }
      b++;
    });

    playSound(coverRumbles[currentBorb]);

    /!*
     if(currentBorb == 1)
     playSound("rumble1")
     else if(currentBorb == 3)
     playSound("rumble4")
     *!/
  },

  resize: function (width, height) {
    this.bg.width = width;
    this.bg.height = height;

    scalePage();
  },

  createButtons: function() {
    if(!game.device.iOS)
      makeButton(960, 620, 230, 100, toggleFullScreen);

    makeButton(1200, 620, 200, 100, this.showSettings);
  },

  showSettings: function() {
    playSound("click");
    game.state.start('Settings');
  },

  shutdown: function() {
    clearInterval(borbInterval);
    currentBorb = 0;
    this.borby2.alpha = 1;
    this.borby2.alpha = 0;
    this.borby3.alpha = 0;
    this.borby4.alpha = 0;
  }
};
*/
