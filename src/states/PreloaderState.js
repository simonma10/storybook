
class PreloadState extends Phaser.State {


  preload() {
    this.background = null;
    //this.borby = null;
    this.foreground = null;
    this.readout = null;

    this.ready = false;
    this.makePreloader();

    //
    // CONFIGURATION
    //
    this.load.json('config', 'config.json');

    /**
     * GENERAL ASSETS
     */
    this.load.image('bg', 'static/tile-dark-red.png');
    this.load.image('bookbase', 'static/bookbase.png');

    this.load.image('toggleOn', 'static/toggleOn.png');
    this.load.image('toggleOff', 'static/toggleOff.png');
    this.load.image('wipe', 'static/wipe.jpg');


  }


  render () {
    this.game.debug.text('Preloader', 192, 32);
  }

  /**
   * Creates the actual preloader, and animates some bugs on it too.
   */
  makePreloader() {
  // Make the preloader
  this.background = this.add.sprite(10, 10, 'loaderBase');
  //this.borby = this.background.addChild(this.game.make.sprite(20, 230, 'loaderBorby'));
  this.foreground = this.background.addChild(this.game.make.sprite(0, 0, 'loaderForeground'));
  this.onResize();

  // make preloader readout text
  let style = { font: "32pt Chelsea Market", fill: "#ffffff", align: "right" };
  this.readout = this.background.addChild(game.make.text(320, 100, "Loading book... 0%", style));

  //TweenMax.to(this.borby, 5, {x:this.borby.x + 200});

  // add some sneaky bugs! (height: 43)
 /* this.monster = game.add.sprite(100, 43, 'loaderMonster');
  this.monster.scale.y = -1;
  TweenMax.from(this.monster, 0.3, {alpha:0, y:0, delay:2 + (Math.random() * 5), repeat:-1, yoyo:true, repeatDelay:1 + (Math.random() * 3)});

  if(game.device.desktop){
    this.monster2 = game.add.sprite(this.background.x + this.background.width + 43, this.background.y + 100, 'loaderMonster');
    this.monster2.angle = 90;
    TweenMax.from(this.monster2, 0.3, {alpha:0, x:this.monster2.x - 43, delay:1 + (Math.random() * 5), repeat:-1, yoyo:true, repeatDelay:1 + (Math.random() * 3)});
  }*/
  }

  onResize() {
  try {
    if(game.device.desktop) {
      // scale the preloader
      this.background.width = game.width * 0.5;
      this.background.scale.y = this.background.scale.x;
    }
    else {
      // scale the preloader
      this.background.width = game.width * 0.8;
      this.background.scale.y = this.background.scale.x;
    }
    // center the preloader
    this.background.x = game.width * 0.5 - this.background.width * 0.5;
    this.background.y = game.height * 0.5 - this.background.height * 0.5;

  }
  catch(err) {
    console.log(err);
  }
}

  loadUpdate() {
  if(this.load.progress === 100)
    this.readout.text = "";
  else
    this.readout.text = "Loading book... " + this.load.progress + "%";
}

  /**
   * If we're on mobile, require a 'start' button press.
   * (Gets around audio focus issues)
   * If on desktop, skip to the good stuff right away.
   */
  create () {
  if(!game.device.desktop){
    /*this.startBtn = this.background.addChild(game.make.sprite(820, 438, 'start'));

    this.startBtn.anchor.set(0.5, 0.5);
    this.startBtn.inputEnabled = true;
    this.startBtn.events.onInputDown.add(this.onStartPressed, this);

    TweenMax.from(this.startBtn.scale, 0.5, {x:0, y:0, ease:Back.easeOut});*/
  }
  else {
    this.onStartPressed();
  }
  }

  onStartPressed() {
  this.state.start('MainMenu');
  //playSpeech("speech1");
  //playMusic();
  }


}


export default BootState;


/*


Book.Preloader = function (game) {

  this.background = null;
  this.borby = null;
  this.foreground = null;
  this.readout = null;

  this.ready = false;
};

Book.Preloader.prototype = {

  preload: function () {

    this.makePreloader();


    this.load.json('config', 'config.json');


    this.load.image('bg', 'assets/tile-dark-red.png');
    this.load.image('bookbase', 'assets/bookbase.png');
    game.load.audio('music', ['assets/audio/music.mp3']);
    this.load.image('toggleOn', 'assets/toggleOn.png');
    this.load.image('toggleOff', 'assets/toggleOff.png');
    this.load.image('wipe', 'assets/wipe.jpg');
    this.load.image('start', 'assets/start.png');


    game.load.audio('speech1', ['assets/audio/speech/1.mp3']);
    game.load.audio('speech2', ['assets/audio/speech/2.mp3']);
    game.load.audio('speech3', ['assets/audio/speech/3.mp3']);
    game.load.audio('speech4', ['assets/audio/speech/4.mp3']);
    game.load.audio('speech5', ['assets/audio/speech/5.mp3']);
    game.load.audio('speech6', ['assets/audio/speech/6.mp3']);
    game.load.audio('speech7', ['assets/audio/speech/7.mp3']);
    game.load.audio('speech8', ['assets/audio/speech/8.mp3']);
    game.load.audio('speech9', ['assets/audio/speech/9.mp3']);
    game.load.audio('speech10', ['assets/audio/speech/10.mp3']);
    game.load.audio('speech11', ['assets/audio/speech/11.mp3']);
    game.load.audio('speech12', ['assets/audio/speech/12.mp3']);
    game.load.audio('speech13', ['assets/audio/speech/13.mp3']);
    game.load.audio('speech14', ['assets/audio/speech/14.mp3']);
    game.load.audio('speech15', ['assets/audio/speech/15.mp3']);
    game.load.audio('speech16', ['assets/audio/speech/16.mp3']);
    game.load.audio('speech17', ['assets/audio/speech/17.mp3']);
    game.load.audio('speech18', ['assets/audio/speech/18.mp3']);
    game.load.audio('speech19', ['assets/audio/speech/19.mp3']);


    game.load.audio('bounce', ['assets/audio/sfx/bounce.mp3']);
    game.load.audio('laughter', ['assets/audio/sfx/laughter.mp3']);
    game.load.audio('click', ['assets/audio/sfx/click.mp3']);
    game.load.audio('alarm', ['assets/audio/sfx/alarm-clock.mp3']);
    game.load.audio('explosion', ['assets/audio/sfx/explosion.mp3']);
    game.load.audio('falling1', ['assets/audio/sfx/falling1.mp3']);
    game.load.audio('falling2', ['assets/audio/sfx/falling2.mp3']);
    game.load.audio('fizzing', ['assets/audio/sfx/fizzing.mp3']);
    game.load.audio('flag', ['assets/audio/sfx/flag.mp3']);
    game.load.audio('floss', ['assets/audio/sfx/floss.mp3']);
    game.load.audio('footsteps', ['assets/audio/sfx/footsteps.mp3']);
    game.load.audio('gun', ['assets/audio/sfx/gun.mp3']);
    game.load.audio('inflate', ['assets/audio/sfx/inflate.mp3']);
    game.load.audio('juggling', ['assets/audio/sfx/juggling.mp3']);
    game.load.audio('light', ['assets/audio/sfx/light.mp3']);
    game.load.audio('pop', ['assets/audio/sfx/pop.mp3']);
    game.load.audio('sardines', ['assets/audio/sfx/sardines.mp3']);
    game.load.audio('short-rumble', ['assets/audio/sfx/short-rumble.mp3']);
    game.load.audio('sneeze', ['assets/audio/sfx/sneeze.mp3']);
    game.load.audio('splats', ['assets/audio/sfx/splats.mp3']);
    game.load.audio('splatter', ['assets/audio/sfx/splatter.mp3']);
    game.load.audio('splosh', ['assets/audio/sfx/splosh.mp3']);
    game.load.audio('squelch', ['assets/audio/sfx/squelch.mp3']);
    game.load.audio('sugarmonster1', ['assets/audio/sfx/sugarmonster1.mp3']);
    game.load.audio('sugarmonster2', ['assets/audio/sfx/sugarmonster2.mp3']);
    game.load.audio('sugarmonster3', ['assets/audio/sfx/sugarmonster3.mp3']);
    game.load.audio('sugarmonster4', ['assets/audio/sfx/sugarmonster4.mp3']);
    game.load.audio('train', ['assets/audio/sfx/train.mp3']);
    game.load.audio('water', ['assets/audio/sfx/water.mp3']);
    game.load.audio('watering', ['assets/audio/sfx/watering.mp3']);
    game.load.audio('waves', ['assets/audio/sfx/waves.mp3']);
    game.load.audio('whoosh', ['assets/audio/sfx/whoosh.mp3']);
    game.load.audio('rumble1', ['assets/audio/sfx/rumble1.mp3']);
    game.load.audio('rumble2', ['assets/audio/sfx/rumble2.mp3']);
    game.load.audio('rumble3', ['assets/audio/sfx/rumble3.mp3']);
    game.load.audio('rumble4', ['assets/audio/sfx/rumble4.mp3']);
    game.load.audio('bashus', ['assets/audio/sfx/bashus.mp3']);
    game.load.audio('chompus', ['assets/audio/sfx/chompus.mp3']);
    game.load.audio('happus', ['assets/audio/sfx/happus.mp3']);
    game.load.audio('lickus', ['assets/audio/sfx/lickus.mp3']);
    game.load.audio('poohus', ['assets/audio/sfx/poohus.mp3']);
    game.load.audio('poohus-eat', ['assets/audio/sfx/poohus-eat.mp3']);
    game.load.audio('poohus-fart', ['assets/audio/sfx/poohus-fart.mp3']);

    game.sound.boot();


    // SETTINGS
    this.load.image('settings', 'assets/pages/settings.jpg');

    // MAIN MENU
    if(game.device.iOS)
      this.load.image('page1-BG', 'assets/pages/MainMenu/bg_ios.jpg');
    else
      this.load.image('page1-BG', 'assets/pages/MainMenu/bg.jpg');

    // letters
    for(var i = 1; i <= 11; i++) {
      this.load.image('page1-t'+i, 'assets/pages/MainMenu/t' + i + '.png');
    }
    this.load.image('page1-sub', 'assets/pages/MainMenu/rumble.png');
    this.load.image('page1-borbybase', 'assets/pages/MainMenu/borbybase.png');
    this.load.image('page1-borby1', 'assets/pages/MainMenu/borby1.png');
    this.load.image('page1-borby2', 'assets/pages/MainMenu/borby2.png');
    this.load.image('page1-borby3', 'assets/pages/MainMenu/borby3.png');
    this.load.image('page1-borby4', 'assets/pages/MainMenu/borby4.png');
    this.load.image('page1-sparks1', 'assets/pages/MainMenu/sparks1.png');
    this.load.image('page1-sparks2', 'assets/pages/MainMenu/sparks2.png');

    // PAGE 2 - CLASSROOM
    this.load.image('page2-BG', 'assets/pages/Page2Classroom/bg.jpg');
    this.load.image('page2-teacher', 'assets/pages/Page2Classroom/teacher.png');
    this.load.image('page2-mainkid', 'assets/pages/Page2Classroom/mainkid.png');
    this.load.image('page2-kid1', 'assets/pages/Page2Classroom/kid1.png');
    this.load.image('page2-kid2', 'assets/pages/Page2Classroom/kid2.png');
    this.load.image('page2-kid3', 'assets/pages/Page2Classroom/kid3.png');
    this.load.image('page2-kid4', 'assets/pages/Page2Classroom/kid4.png');
    this.load.image('page2-kid5', 'assets/pages/Page2Classroom/kid5.png');
    this.load.image('page2-eyes3', 'assets/pages/Page2Classroom/eyes3.png');
    this.load.image('page2-eyes4', 'assets/pages/Page2Classroom/eyes4.png');
    this.load.image('page2-eyes5', 'assets/pages/Page2Classroom/eyes5.png');
    this.load.image('page2-hand', 'assets/pages/Page2Classroom/hand.png');
    this.load.image('page2-cheeks', 'assets/pages/Page2Classroom/cheeks.png');
    this.load.image('page2-rumble1', 'assets/pages/Page2Classroom/rumble1.png');
    this.load.image('page2-rumble2', 'assets/pages/Page2Classroom/rumble2.png');
    this.load.image('page2-rumble3', 'assets/pages/Page2Classroom/rumble3.png');
    this.load.image('page2-eyesleft', 'assets/pages/Page2Classroom/eyesleft.png');
    this.load.image('page2-eyesright', 'assets/pages/Page2Classroom/eyesright.png');
    this.load.image('page2-message', 'assets/pages/Page2Classroom/message.png');

    // PAGE 3 - TUMMY
    this.load.image('page3-BG', 'assets/pages/Page3Tummy/bg.jpg');
    this.load.image('page3-mushrooms', 'assets/pages/Page3Tummy/mushrooms.png');
    this.load.image('page3-borby', 'assets/pages/Page3Tummy/borby.png');
    this.load.image('page3-shadow', 'assets/pages/Page3Tummy/borbyshadow.png');
    this.load.image('page3-plants', 'assets/pages/Page3Tummy/plants.png');
    this.load.image('page3-sparkle', 'assets/pages/Page3Tummy/sparkle.png');
    this.load.image('page3-eyes', 'assets/pages/Page3Tummy/eyes.png');

    // PAGE 4 - FOOD
    this.load.image('page4-BG', 'assets/pages/Page4Food/bg.jpg');
    this.load.image('page4-borby-waiting', 'assets/pages/Page4Food/waitingBorby.png');
    this.load.image('page4-borby-happy', 'assets/pages/Page4Food/happyBorby.png');
    this.load.image('page4-fish', 'assets/pages/Page4Food/fish.png');
    this.load.image('page4-bacon', 'assets/pages/Page4Food/food/bacon.png');
    this.load.image('page4-bread1', 'assets/pages/Page4Food/food/bread.png');
    this.load.image('page4-bread2', 'assets/pages/Page4Food/food/bread2.png');
    this.load.image('page4-bread3', 'assets/pages/Page4Food/food/bread3.png');
    this.load.image('page4-carrot', 'assets/pages/Page4Food/food/carrot.png');
    this.load.image('page4-cheese', 'assets/pages/Page4Food/food/cheese.png');
    this.load.image('page4-egg', 'assets/pages/Page4Food/food/egg.png');
    this.load.image('page4-meat', 'assets/pages/Page4Food/food/meat.png');
    this.load.image('page4-pea', 'assets/pages/Page4Food/food/pea.png');

    // PAGE 5 - MESS
    this.load.image('page5-BG', 'assets/pages/Page5Mess/bg.jpg');
    this.load.image('page5-dive', 'assets/pages/Page5Mess/dive.png');
    this.load.image('page5-milk', 'assets/pages/Page5Mess/milk.png');
    this.load.image('page5-sneeze1', 'assets/pages/Page5Mess/sneeze1.png');
    this.load.image('page5-sneeze2', 'assets/pages/Page5Mess/sneeze2.png');
    this.load.image('page5-splash', 'assets/pages/Page5Mess/splash.png');
    this.load.image('page5-end', 'assets/pages/Page5Mess/end.png');
    this.load.image('page5-text1', 'assets/pages/Page5Mess/text1.png');
    this.load.image('page5-text2', 'assets/pages/Page5Mess/text2.png');
    this.load.image('page5-message', 'assets/pages/Page5Mess/message.png');

    // PAGE 6 - BEANS
    this.load.image('page6-BG', 'assets/pages/Page6Beans/bg.jpg');
    this.load.image('page6-floss', 'assets/pages/Page6Beans/floss.png');
    this.load.image('page6-armleft', 'assets/pages/Page6Beans/armleft.png');
    this.load.image('page6-armright', 'assets/pages/Page6Beans/armright.png');
    this.load.image('page6-beans', 'assets/pages/Page6Beans/beans.png');
    this.load.image('page6-bean', 'assets/pages/Page6Beans/bean.png');
    this.load.image('page6-sardines', 'assets/pages/Page6Beans/sardines.png');
    this.load.image('page6-sardine1', 'assets/pages/Page6Beans/sardine1.png');
    this.load.image('page6-sardine2', 'assets/pages/Page6Beans/sardine2.png');

    // PAGE 7 - TRAIN/MILK
    this.load.image('page7-BG', 'assets/pages/Page7Train/bg.jpg');
    this.load.image('page7-handle', 'assets/pages/Page7Train/handle.png');
    this.load.image('page7-milk', 'assets/pages/Page7Train/milk.png');
    this.load.image('page7-nozzle', 'assets/pages/Page7Train/nozzle.png');
    this.load.image('page7-drip', 'assets/pages/Page7Train/drip.png');
    this.load.image('page7-drip-small', 'assets/pages/Page7Train/drip-small.png');
    this.load.image('page7-pump', 'assets/pages/Page7Train/pump.png');
    this.load.image('page7-help', 'assets/pages/Page7Train/help.png');
    this.load.image('page7-foreground', 'assets/pages/Page7Train/foreground.png');
    this.load.image('page7-armleft', 'assets/pages/Page7Train/armleft.png');
    this.load.image('page7-armright', 'assets/pages/Page7Train/armright.png');
    this.load.image('page7-cover', 'assets/pages/Page7Train/cover.png');
    this.load.image('page7-train', 'assets/pages/Page7Train/train.png');
    this.load.image('page7-eye', 'assets/pages/Page7Train/eye.png');

    // PAGE 8 - PASTA GUN
    this.load.image('page8-BG', 'assets/pages/Page8Gun/bg.jpg');
    this.load.image('page8-borby', 'assets/pages/Page8Gun/borby.png');
    this.load.image('page8-borby-open', 'assets/pages/Page8Gun/borbyOpen.png');
    this.load.image('page8-gun', 'assets/pages/Page8Gun/gun.png');
    this.load.image('page8-splat-base', 'assets/pages/Page8Gun/splat-base.png');
    this.load.image('page8-splat1', 'assets/pages/Page8Gun/splat1.png');
    this.load.image('page8-splat2', 'assets/pages/Page8Gun/splat2.png');
    this.load.image('page8-splat3', 'assets/pages/Page8Gun/splat3.png');
    this.load.image('page8-splat4', 'assets/pages/Page8Gun/splat4.png');
    this.load.image('page8-splat5', 'assets/pages/Page8Gun/splat5.png');
    this.load.image('page8-splat6', 'assets/pages/Page8Gun/splat6.png');
    this.load.image('page8-splat7', 'assets/pages/Page8Gun/splat7.png');
    this.load.image('page8-bean', 'assets/pages/Page8Gun/bean-projectile.png');
    this.load.image('page8-message', 'assets/pages/Page8Gun/message.png');

    // PAGE 9 - PORRIDGE BOATS
    this.load.image('page9-BG', 'assets/pages/Page9Boats/bg.jpg');
    this.load.image('page9-boat', 'assets/pages/Page9Boats/boat.png');
    this.load.image('page9-spray1', 'assets/pages/Page9Boats/spray1.png');
    this.load.image('page9-spray2', 'assets/pages/Page9Boats/spray2.png');
    this.load.image('page9-spray3', 'assets/pages/Page9Boats/spray3.png');

    // PAGE 10 - FIG BOMB/POO
    this.load.image('page10-BG', 'assets/pages/Page10Poo/bg.jpg');
    this.load.image('page10-borby', 'assets/pages/Page10Poo/borby.png');
    this.load.image('page10-clock', 'assets/pages/Page10Poo/clock.png');
    this.load.image('page10-hand', 'assets/pages/Page10Poo/hand.png');
    this.load.image('page10-bigpoo1', 'assets/pages/Page10Poo/bigpoo1.png');
    this.load.image('page10-bigpoo2', 'assets/pages/Page10Poo/bigpoo2.png');
    this.load.image('page10-bigpoo3', 'assets/pages/Page10Poo/bigpoo3.png');
    this.load.image('page10-boom', 'assets/pages/Page10Poo/boom.png');
    this.load.image('page10-cleared', 'assets/pages/Page10Poo/cleared.jpg');
    this.load.image('page10-cloud', 'assets/pages/Page10Poo/cloud.png');
    this.load.image('page10-poo1', 'assets/pages/Page10Poo/poo1.png');
    this.load.image('page10-poo2', 'assets/pages/Page10Poo/poo2.png');
    this.load.image('page10-rays', 'assets/pages/Page10Poo/rays.png');
    this.load.image('page10-eye', 'assets/pages/Page10Poo/eye.png');
    this.load.image('page10-borby2', 'assets/pages/Page10Poo/borby2.png');

    // PAGE 11 - GARDEN
    this.load.image('page11-BG', 'assets/pages/Page11Garden/bg.jpg');
    this.load.image('page11-flower1', 'assets/pages/Page11Garden/flower1.png');
    this.load.image('page11-flower2', 'assets/pages/Page11Garden/flower2.png');
    this.load.image('page11-flower3', 'assets/pages/Page11Garden/flower3.png');
    this.load.image('page11-foreground-left', 'assets/pages/Page11Garden/foreground-left.png');
    this.load.image('page11-foreground-right', 'assets/pages/Page11Garden/foreground-right.png');
    this.load.image('page11-frond1', 'assets/pages/Page11Garden/frond1.png');
    this.load.image('page11-frond2', 'assets/pages/Page11Garden/frond2.png');
    this.load.image('page11-frond3', 'assets/pages/Page11Garden/frond3.png');
    this.load.image('page11-borby', 'assets/pages/Page11Garden/borby.png');
    this.load.image('page11-message', 'assets/pages/Page11Garden/messagewater.png');
    this.load.image('page11-message2', 'assets/pages/Page11Garden/messagebutterflies.png');
    this.load.image('page11-butterfly-blue', 'assets/pages/Page11Garden/butterfly-blue.png');
    this.load.image('page11-butterfly-green', 'assets/pages/Page11Garden/butterfly-green.png');
    this.load.image('page11-butterfly-pink', 'assets/pages/Page11Garden/butterfly-pink.png');
    this.load.image('page11-butterfly-popup', 'assets/pages/Page11Garden/butterfly-popup.png');

    // PAGE 12 - BUGS
    this.load.image('page12-BG', 'assets/pages/Page12Bugs/bg.jpg');
    this.load.image('page12-happus', 'assets/pages/Page12Bugs/happus_body.png');
    this.load.image('page12-happus-clap1', 'assets/pages/Page12Bugs/happus_clap1.png');
    this.load.image('page12-happus-clap2', 'assets/pages/Page12Bugs/happus_clap2.png');
    this.load.image('page12-chompus-left', 'assets/pages/Page12Bugs/chompus_left.png');
    this.load.image('page12-chompus-right', 'assets/pages/Page12Bugs/chompus_right.png');
    this.load.image('page12-bashus-left', 'assets/pages/Page12Bugs/bashus_left.png');
    this.load.image('page12-bashus-right', 'assets/pages/Page12Bugs/bashus_right.png');
    this.load.image('page12-lickus-left', 'assets/pages/Page12Bugs/lickus_left.png');
    this.load.image('page12-lickus-right', 'assets/pages/Page12Bugs/lickus_right.png');
    this.load.image('page12-chewus-eat', 'assets/pages/Page12Bugs/chewus_eat.png');
    this.load.image('page12-chewus-poo', 'assets/pages/Page12Bugs/chewus_poo.png');
    this.load.image('page12-spotlight', 'assets/pages/Page12Bugs/spotlight.png');
    this.load.image('page12-borby', 'assets/pages/Page12Bugs/borby.png');
    this.load.image('page12-sign-back', 'assets/pages/Page12Bugs/sign-back.png');
    this.load.image('page12-sign-next', 'assets/pages/Page12Bugs/sign-next.png');
    this.load.image('page12-sign1', 'assets/pages/Page12Bugs/sign1_happus.png');
    this.load.image('page12-sign2', 'assets/pages/Page12Bugs/sign2_chompus.png');
    this.load.image('page12-sign3', 'assets/pages/Page12Bugs/sign3_bashus.png');
    this.load.image('page12-sign4', 'assets/pages/Page12Bugs/sign4_lickus.png');
    this.load.image('page12-sign5', 'assets/pages/Page12Bugs/sign5_chewus.png');

    // PAGE 13 - JUICE
    this.load.image('page13-BG', 'assets/pages/Page14Juice/bg.jpg');
    this.load.image('page13-bubble', 'assets/pages/Page14Juice/bubble.png');
    this.load.image('page13-flowbubble', 'assets/pages/Page14Juice/flowbubble.png');
    this.load.image('page13-monster', 'assets/pages/Page14Juice/monster.png');
    this.load.image('page13-corner', 'assets/pages/Page14Juice/cornermonster.png');
    this.load.image('page13-side', 'assets/pages/Page14Juice/side.png');
    this.load.image('page13-waterfall', 'assets/pages/Page14Juice/waterfall.png');
    this.load.image('page13-water', 'assets/pages/Page14Juice/water.png');
    this.load.image('page13-swimmer', 'assets/pages/Page14Juice/swimmer.png');
    this.load.image('page13-message', 'assets/pages/Page14Juice/message.png');
    this.load.image('page13-popup', 'assets/pages/Page14Juice/popup.png');

    // PAGE 14 - NEWS
    this.load.image('page14-BG', 'assets/pages/Page15News/bg.jpg');
    this.load.image('page14-berry1', 'assets/pages/Page15News/berry1.png');
    this.load.image('page14-berry2', 'assets/pages/Page15News/berry2.png');
    this.load.image('page14-borbyleft', 'assets/pages/Page15News/borbyleft.png');
    this.load.image('page14-borbyright', 'assets/pages/Page15News/borbyright.png');
    this.load.image('page14-monster1', 'assets/pages/Page15News/monster1.png');
    this.load.image('page14-monster2', 'assets/pages/Page15News/monster2.png');
    this.load.image('page14-monstermessage', 'assets/pages/Page15News/monstermessage.png');
    this.load.image('page14-monsterpopup', 'assets/pages/Page15News/monsterpopup.png');

    // PAGE 15 - STICKY
    this.load.image('page15-BG', 'assets/pages/Page13Sticky/bg.jpg');
    this.load.image('page15-foreground', 'assets/pages/Page13Sticky/foreground.png');
    this.load.image('page15-borby', 'assets/pages/Page13Sticky/borby.png');
    this.load.image('page15-leftarm', 'assets/pages/Page13Sticky/leftarm.png');
    this.load.image('page15-rightarm', 'assets/pages/Page13Sticky/rightarm.png');
    this.load.image('page15-fastone', 'assets/pages/Page13Sticky/fastone.png');
    this.load.image('page15-message', 'assets/pages/Page13Sticky/message.png');
    this.load.image('page15-popup', 'assets/pages/Page13Sticky/fastpop.png');

    // PAGE 16 - FRUIT
    this.load.image('page16-BG', 'assets/pages/Page16Fruit/bg.jpg');
    this.load.image('page16-flag', 'assets/pages/Page16Fruit/flag.png');

    // PAGE 17 - TUMMY RUMBLES
    this.load.image('page17-BG', 'assets/pages/Page17Rumbles/bg.jpg');
    this.load.image('page17-borby', 'assets/pages/Page17Rumbles/borby.png');
    this.load.image('page17-borbyover', 'assets/pages/Page17Rumbles/borbyover.png');
    this.load.image('page17-face1', 'assets/pages/Page17Rumbles/face1.png');
    this.load.image('page17-face2', 'assets/pages/Page17Rumbles/face2.png');
    this.load.image('page17-face3', 'assets/pages/Page17Rumbles/face3.png');
    this.load.image('page17-face4', 'assets/pages/Page17Rumbles/face4.png');
    this.load.image('page17-leavesleft', 'assets/pages/Page17Rumbles/leavesleft.png');
    this.load.image('page17-leavesright', 'assets/pages/Page17Rumbles/leavesright.png');

    // PAGE 18 - BIOME
    this.load.image('page18-BG', 'assets/pages/Page18Biome/bg.jpg');
    this.load.image('page18-bug1', 'assets/pages/Page18Biome/bug1.png');
    this.load.image('page18-bug2', 'assets/pages/Page18Biome/bug2.png');
    this.load.image('page18-bug3', 'assets/pages/Page18Biome/bug3.png');
    this.load.image('page18-bug4', 'assets/pages/Page18Biome/bug4.png');
    this.load.image('page18-bug5', 'assets/pages/Page18Biome/bug5.png');
    this.load.image('page18-shadow', 'assets/pages/Page18Biome/shadow.png');
    this.load.image('page18-train', 'assets/pages/Page18Biome/train.png');

    // PAGE 19 - HEALTHY GRUB
    this.load.image('page19-BG', 'assets/pages/Page19Healthy/bg.jpg');
    this.load.image('page19-foreground', 'assets/pages/Page19Healthy/foreground.png');
    this.load.image('page19-healthy1', 'assets/pages/Page19Healthy/healthy1.png');
    this.load.image('page19-healthy2', 'assets/pages/Page19Healthy/healthy2.png');
    this.load.image('page19-healthy3', 'assets/pages/Page19Healthy/healthy3.png');
    this.load.image('page19-healthy4', 'assets/pages/Page19Healthy/healthy4.png');
    this.load.image('page19-healthy5', 'assets/pages/Page19Healthy/healthy5.png');
    this.load.image('page19-healthy6', 'assets/pages/Page19Healthy/healthy6.png');
    this.load.image('page19-healthy7', 'assets/pages/Page19Healthy/healthy7.png');
    this.load.image('page19-bug1', 'assets/pages/Page19Healthy/bug1.png');
    this.load.image('page19-bug2', 'assets/pages/Page19Healthy/bug2.png');
    this.load.image('page19-bug3', 'assets/pages/Page19Healthy/bug3.png');
    this.load.image('page19-chewus', 'assets/pages/Page19Healthy/chewus.png');

    // PAGE 20 - THE END
    this.load.image('page20-BG', 'assets/pages/Page20End/bg.jpg');
    this.load.image('page20-overlay', 'assets/pages/Page20End/overlay.png');
  },


  makePreloader: function() {
    // Make the preloader
    this.background = this.add.sprite(10, 10, 'loaderBase');
    this.borby = this.background.addChild(game.make.sprite(20, 230, 'loaderBorby'));
    this.foreground = this.background.addChild(game.make.sprite(0, 0, 'loaderForeground'));
    this.onResize();

    // make preloader readout text
    var style = { font: "32pt Chelsea Market", fill: "#ffffff", align: "right" };
    readout = this.background.addChild(game.make.text(320, 100, "Loading book... 0%", style));

    TweenMax.to(this.borby, 5, {x:this.borby.x + 200});

    // add some sneaky bugs! (height: 43)
    this.monster = game.add.sprite(100, 43, 'loaderMonster');
    this.monster.scale.y = -1;
    TweenMax.from(this.monster, 0.3, {alpha:0, y:0, delay:2 + (Math.random() * 5), repeat:-1, yoyo:true, repeatDelay:1 + (Math.random() * 3)});

    if(game.device.desktop){
      this.monster2 = game.add.sprite(this.background.x + this.background.width + 43, this.background.y + 100, 'loaderMonster');
      this.monster2.angle = 90;
      TweenMax.from(this.monster2, 0.3, {alpha:0, x:this.monster2.x - 43, delay:1 + (Math.random() * 5), repeat:-1, yoyo:true, repeatDelay:1 + (Math.random() * 3)});
    }
  },

  onResize: function() {
    try {
      if(game.device.desktop) {
        // scale the preloader
        this.background.width = game.width * 0.5;
        this.background.scale.y = this.background.scale.x;
      }
      else {
        // scale the preloader
        this.background.width = game.width * 0.8;
        this.background.scale.y = this.background.scale.x;
      }
      // center the preloader
      this.background.x = game.width * 0.5 - this.background.width * 0.5;
      this.background.y = game.height * 0.5 - this.background.height * 0.5;

    }
    catch(err) {
      console.log(err);
    }
  },

  loadUpdate: function() {
    if(this.load.progress === 100)
      readout.text = "";
    else
      readout.text = "Loading book... " + this.load.progress + "%";
  },


  create: function () {
    if(!game.device.desktop){
      this.startBtn = this.background.addChild(game.make.sprite(820, 438, 'start'));

      this.startBtn.anchor.set(0.5, 0.5);
      this.startBtn.inputEnabled = true;
      this.startBtn.events.onInputDown.add(this.onStartPressed, this);

      TweenMax.from(this.startBtn.scale, 0.5, {x:0, y:0, ease:Back.easeOut});
    }
    else {
      this.onStartPressed();
    }
  },

  onStartPressed: function() {
    this.state.start('MainMenu');
    playSpeech("speech1");
    playMusic();
  }
};

*/