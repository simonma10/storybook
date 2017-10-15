let locked = false;
let wipe;

export function showPage() {

  TweenMax.killAll(false, true, true); // kills delays and sounds when moving pages

  playSound("click");

  if(direction === "forward")
  {
    wipe.x = -fullscaleX;
    TweenMax.to(wipe, 0.5, {x:0, onComplete:transition});
  }
  else
  {
    wipe.x = fullscaleX;
    TweenMax.to(wipe, 0.5, {x:0, onComplete:transition});
  }

  //lockNav();
}

export function transition () {
  /*game.state.start(pageList[currentPage]);

  if(currentPage < 19)
    playSpeech("speech"+(currentPage+1));
  else
    speech.stop();

  stopSound();
  checkNavigation();*/
}



/*function lockNav () {
  locked = true;
}
*/
function unlockNav () {
  locked = false;
}


export function setPage (_page, _artwork, game) {
  let page = _page;
  let artwork = _artwork;
  let fullscaleX = 0;
  let fullscaleY = 0;

  if(artwork) {
    fullscaleX = artwork.width;
    fullscaleY = artwork.height;

    artwork.x = 43;
    artwork.y = 11;
    artwork.scale.x = 0.858;
    artwork.scale.y = 0.858;

    if (artwork.mask === null) {
      let mask = artwork.addChild(game.add.graphics(page.x, page.y));
      mask.beginFill(0xffffff);
      mask.drawRect(0, 0, fullscaleX, fullscaleY);
      artwork.mask = mask;
    }
  }
  scalePage(page, game);
}

export function setWipe(artwork, game) {
  wipe = artwork.addChild(game.add.sprite(0, 0, "wipe"));
  let fullscaleX = artwork.width * (1/0.858);
  let fullscaleY = artwork.height;
  let direction = "forward";

  if(direction === "forward")
    TweenMax.to(wipe, 0.5, {x:fullscaleX, onComplete:unlockNav});
  else
    TweenMax.to(wipe, 0.5, {x:-fullscaleX, onComplete:unlockNav});
}

export function scalePage (page, game) {
  if(game.width <= game.height * 2)
  {
    page.width = game.width * 0.95;
    page.scale.y = page.scale.x;
  }
  else
  {
    page.height = game.height * 0.95;
    page.scale.x = page.scale.y;
  }

  page.x = game.width / 2 - page.width / 2;
  page.y = game.height / 2 - page.height / 2;

}
