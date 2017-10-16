import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AppComponent from './components/app-component/app-component';
//import NavigationComponent from './components/navigation-component/navigation-component';
import rootReducer from './components/all-reducers';



//========================================================================================
// Create redux store using thunk middleware & Chrome devToolsExtension
// export store, so that phaser components can update status when changing states
//========================================================================================
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
  )
);

//========================================================================================
// Render app
//
//========================================================================================
ReactDOM.render(
  <Provider store={store}>
    <div>
    <AppComponent/>

    </div>
  </Provider>
  , document.querySelector('.container')

);





import GameState from './states/GameState';
import BootState from './states/BootState';
import PreloaderState from './states/PreloaderState';
import MainMenuState from './states/MainMenuState';

const backBtn = document.getElementById("backArrow");
const nextBtn = document.getElementById("nextArrow");
const homeBtn = document.getElementById("homeBtn");

let game;
let ready = false;
let ee = new EventEmitter();
let page;
let artwork;
let config;
let pageList;
var currentPage;
var maxPages;
var copy;
var xPos;
var yPos;
var fill;
var music;
var speech;
var sound;
var wipe;
var wipeMask;
var fullscaleX;
var fullscaleY;
var sample;
var locked;
var direction;

var musicToggle;
var speechToggle;
var SFXToggle;
var musicEnabled = true;
var speechEnabled = true;
var sfxEnabled = true;
var settingsOpen = false;

let isFullScreen = false;



function init(){
        //TODO: fix scaling and resizing
     /* this.game.scale.forceOrientation(true, false);
      this.scale.enterIncorrectOrientation.add(handleIncorrect);
      game.scale.leaveIncorrectOrientation.add(handleCorrect);
      this.game.scale.setResizeCallback(gameResized, this);
      this.game.scale.onOrientationChange.add(gameResized, this);

      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
      game.scale.fullScreenTarget = document.getElementById('gameHolder');
      game.stage.disableVisibilityChange = false;*/

      game.state.add('GameState', GameState);
      game.state.add('BootState', BootState);
      game.state.add('PreloaderState', PreloaderState);
      game.state.add('MainMenuState', MainMenuState);
      game.state.start('BootState');

    }





/*
 * Gets the page list from the config, and creates an array of entries.
 */
function populatePageList() {
  config = game.cache.getJSON('config');
  let pageList = [];

  for (let key in config.pages) {
    if (config.pages.hasOwnProperty(key)) {
      let val = config.pages[key];
      pageList.push(val.asset);
    }
  }

  return pageList;
}


  /*
   * Shows the subtitles for the current page
   */
function getSubs() {
    // Quick test to see if any copy exists!
    try {
      copy = config.pages[currentPage].subs[0].copy;
    }
    catch(err) {
      // no copy for this spread
    }

    // if copy exists, loop through and create as many are needed
    if(copy) {

      for(let i = 0; i < config.pages[currentPage].subs.length; i++) {
        copy = config.pages[currentPage].subs[i].copy;
        xPos = config.pages[currentPage].subs[i].x;
        yPos = config.pages[currentPage].subs[i].y;
        fill = config.pages[currentPage].subs[i].fill;

        let ratio = artwork.scale.x * artwork.parent.scale.x;
        let style = { font: 24 * ratio + "px Varela Round", fill: fill, align: "center" };
        let text = game.add.text(xPos, yPos, copy, style);
        text.smoothed = true;
        text.scale.x /= ratio;
        text.scale.y /= ratio;

        artwork.addChild(text);

        let delay = config.pages[currentPage].subs[i].delay;

        TweenMax.from(text, 0.5, {alpha:0, delay:1 + config.pages[currentPage].subs[i].delay});

        if(config.pages[currentPage].subs[i].kill != undefined) {
          let killDelay = config.pages[currentPage].subs[i].kill;
          TweenMax.to(text, 0.5, {alpha:0, delay:killDelay});
        }
      }
    }
  }

/*
 * Toggles full screen mode using the button in the corner.
 */

function toggleFullScreen () {
  playSound("click");
  if(game.scale.isFullScreen)
  {
    game.scale.stopFullScreen();
  }
  else
  {
    game.scale.startFullScreen(false);
  }
}


/*
 * Show/hide messaging when in portrait mode.
 */
function handleIncorrect () {
  if(!game.device.desktop){
    document.getElementById("turn").style.display="block";
    hideNavigation();
    game.paused = true;
  }
}

function handleCorrect () {
  if(!game.device.desktop){
    // actual logic for resetting
    document.getElementById("turn").style.display="none";
    showNavigation();
    game.paused = false;
    checkNavigation();
  }
}

function gameResized (w, h) {
    //console.log('gameresized');
  let width = window.innerWidth * window.devicePixelRatio,
    height = window.innerHeight * window.devicePixelRatio;

  this.game.scale.setGameSize(width, height);

  if((!game.device.desktop && game.scale.isGamePortrait) || game.device.desktop){
    ee.emitEvent('resized');
  }

  if (page !== undefined) {
    scalePage();
  }

  let state = game.state.states[game.state.current];
  if (state.bg) {
    state.bg.height = game.height;
  }

  if (game.state.current === 'Preloader') {
    state.onResize();
  }
}

/*
 * Handle audio
 */
function playMusic () {
  if(musicEnabled) {
    music = game.add.audio('music', 0.10, true);
    music.play();
  }
}

function stopMusic() {
  if(music !== undefined && music.isPlaying)
    music.stop();
}

function playSpeech(sampleName) {
  sample = sampleName;

  if(speech !== undefined && speech.isPlaying)
    speech.stop();

  if(speechEnabled) {
    window.setTimeout(function () {
      speech = game.add.audio(sample);
      speech.play();
    }, 1000);
  }
}

function stopSpeech () {
  if(speech !== undefined && speech.isPlaying)
    speech.stop();
}

function playSound(sampleName, loop) {
  if(sound !== undefined && sound.isPlaying)
    sound.stop();

  if(sfxEnabled) {
    if(loop === true)
      sound = game.add.audio(sampleName, 0.9, true);
    else
      sound = game.add.audio(sampleName);

    sound.play()
  }
}

function stopSound () {
  if(sound !== undefined && sound.isPlaying)
    sound.stop();
}

/*
 * Clickable button creation helper.
 */
function makeButton (btnX, btnY, btnWidth, btnHeight, callback) {
  let graphic = artwork.addChild(game.add.graphics(0, 0));
  graphic.beginFill(0x00FFFF, 0);
  graphic.drawRect(btnX, btnY, btnWidth, btnHeight);

  let clickable = artwork.addChild(game.make.sprite(0, 0, ''));
  clickable.addChild(graphic);
  clickable.inputEnabled = true;
  clickable.events.onInputDown.add(callback, this);

  clickable.input.useHandCursor = true;
}


/*
 * Settings toggles
 */
function makeToggle (toggleX, toggleY, callback, tag) {
  let off = this.artwork.addChild(game.add.sprite(toggleX, toggleY, 'toggleOff'));

  let on = this.artwork.addChild(game.add.sprite(toggleX, toggleY, 'toggleOn'));
  on.inputEnabled = true;
  on.useHandCursor = true;
  on.events.onInputDown.add(callback, this);

  // set initial state
  if(getPref(tag) === "false") {
    on.alpha = 0;
  }

  return on;
}

function getPref (tag) {
  if(window.localStorage.getItem(tag) === null)
    return "true"; // default settings to 'on'

  return window.localStorage.getItem(tag);
}

function setPref (tag, setting) {
  window.localStorage.setItem(tag, setting);
}


/*
 * Toggle actions
 */
function toggleMusic () {
  if(musicEnabled) {
    musicEnabled = false;
    this.stopMusic();
    musicToggle.alpha = 0;
  }
  else
  {
    musicEnabled = true;
    this.playMusic();
    musicToggle.alpha = 1;
  }

  this.setPref("music", musicEnabled);
}

function toggleSpeech() {
  if(speechEnabled) {
    speechEnabled = false;
    this.stopSpeech();
    speechToggle.alpha = 0;
  }
  else
  {
    speechEnabled = true;
    speechToggle.alpha = 1;
  }

  this.setPref("speech", speechEnabled);
}

function toggleSFX () {
  if(sfxEnabled) {
    sfxEnabled = false;
    SFXToggle.alpha = 0;
  }
  else
  {
    sfxEnabled = true;
    SFXToggle.alpha = 1;
  }

  this.setPref("sfx", sfxEnabled);
}




function loadSettings () {

  if(getPref("music") === "false") {
    musicEnabled = false;
    stopMusic();
  }

  if(getPref("speech") === "false") {
    speechEnabled = false;
  }

  if(getPref("sfx") === "false") {
    sfxEnabled = false;
  }
}


 function randRange(min, max) {
    return Math.random() * (max - min) + min;
  }

