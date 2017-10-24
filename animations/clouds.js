(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.1,1,1).p("ADRE9Ipxh2IAAoDINBAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CCCC").s().p("AmgDHIAAoDINBAAIjQJ5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.7,-32.6,85.5,65.4);


(lib.littleCloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABvGeQg3gGg5geIghgSIgagTIAAgBIgBAAIAAAAIgBAAIgCgCIgHgFIgogiIgQgOIgOgJQgOgHgLABQgLABgNAJQgJAHgRATQguA3g2AaQgxAZg0AAQgNAAgMgCQgMgBgMgDIglgLIgcgOIAAAAIAAAAIgBAAIgBgBIgDgCIgXgNQgNgJgIgGIgFgEIgPgNIg3gmIgygpQgwgsglguQglgtgagvIgWgsQgKgXgFgRQgLgpAFgeQAFggAWgRQAZgSApABQArAABBAVQAmANATgKQAPgIABgVQADg5A3gsIAcgSQANgIASgHIAIgEIARgKQAOgHALgDIAKgDIALgBIAQgBIAWADIACABIADABIATAHIARAKQAJAFAGAGQANAMAGAOQAFANAIAHQAHAHAKAAQAWgBANgjQASgvAfgeQApgqA/gNIAPgCQAHgBAHABIANACIAMAEQALAEAMAJIAMAKIABABIAAAAIABABIAFAFIARATIAVAkIAOAiIAHAOQAEAGAEAEQAJAJALgBQALgCAHgKQADgEAEgJQAEgKABgIQAEgWAJgUQAEgJAHgMQAIgLAHgIQARgTAXgMQANgGAMgEQAPgEAOgBQAIgBALACQAKABAMAEQAaAKATAPQAWATAMAZQAMAdgEAiQgDAZASAJQARAIASgMIAAAAIABAAIgBgBIABAAIACgBIADgCIAugXQAXgIAagBQAsgBAiAYQAgAWAOAkQANAkgLAhQgHASAKALQAJAKAYADQA7AFAUADQAmAGAXALQAaANARAXQASAZALApQAHAegLAdQgKAbgXAXQgWAWgbANQgbAMgWgBQgggBgJAHQgLAKgBAkQAAApgYAdQgYAdgrALQgtAMg4gIIhPgUIgBAAIgCAAIgCgBIgIgDIghgOQgQgIgKgCQgNgBgIACQgGACgEACIgKAHQgLAJgLANQglAsgxARQgiAMgmAAQgQAAgRgCg");
	this.shape.setTransform(89.2,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.littleCloud, new cjs.Rectangle(-0.6,-30.5,179.8,83.3), null);


(lib.bigCloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACdIzIg/gLIgBAAIgBAAIgCgBIgBAAIhBgPQglgLgcgMIgJgDIg2gbQg4geg1gsQgYgVgWgWIgzg8IgDgDIgDgEIgagcIgKgJIgJgIQgLgJgJgEQgJgFgLgEIgXgGQgUgEggAAIg+gEIgDAAIgBgBIgCAAIgZgFIgDgBIgDAAIgUgDIgCgBIgCgBIgCAAIgugGQg8gKgwgYQgrgVgjghQgLgLgTgWIgbgkIgKgKIgBAAIAAAAIgCgEIAAgBIAAAAIgBgBIgGgDIgmgjIgZgjIgBgCIgCgCIgYguIgIgKIgCgBIgIgHIgCgCIgCgBIgEgDIgDgFIgBgBIgBAAIgJACIgBAAIgBABIAAAAIACgCIhhAVIg5AHIhTABIgDgBIgCAAIgPgDIgNgEIgCgBIgBAAIgOgHIgNgJIgFgGIgLgNIgBgCIgBgBIgGgOIAAgBIgBgFIAAgBIAAgBIgBgCIAAgKQAAgFACgFIABgCIACgFIADgEIAFgFIAIgGIADgBIACAAIAEgBIAIAAQAFAAAJACIACAAIACABIARAHIADABIAAgBIAAgCIAAgJIgBgDIAAAAIAAgDIAAAAIAAgCIADgHIAKgQQAPgWATgXIAYgcIABgBIAAAAIABAAIAAgBIACgCIAHgHIAdgWQAYgRAbgLIAsgOIAtgIIAEgBIAXgDIAEgBIASgDIAbgHIAGgEIACAAIADgDQAFgEACgDQAFgJgCgJQgDgOAEgOQADgIAEgGQADgGAHgIIADgDIADgDIAZgSIAagNIBKgUIAEgBIABAAIABAAIAAAAIACAAIABAAIAMgDIADAAIAAAAIBsgDIAnAEIAuAKIAsARQAqASAkAcQAhAZAWAaIAQAYQAHALACAKQADAJAEAIIAEAIIAFAIQALAPAPAJQAHAEAJADIASAEQATABASgJQAWgKAZgEQANgCASAAIAkACIAXAFIABAAIABAAIgBgBIAFABIAOADIADABIANAAIACABIACAAIAtAKIAmANQAhAMASAUQALAKAGAKIADAGIAIAOIABADQAIASAHAhIAJA1IADALQACAGAFAGIAEAEIAEADIAFACIAFABIAFAAIAFgCQAEgCAFgFIAHgNIABgCIAAgBIABAAIAAgBIgCAAIAAAAIACgEIAEgKQAHgUASgUIADgCIABgCIAZgZIANgIIAcgQIAdgLIAEgBIASgFIA4gJIAOAAIADAAIAJABIAaAEIAOAFIADACIAFACIACABIABABIAHAEIgEABIABAAIABAAIADABIAKADIACABIABAAIAAAAIAAABIAFAGIABAAIAAABIAAAAIAUAUIANARIADAHIAGAOQAGARACAQQAAAMAHAIIADAEIAEACIAEACIAEABIAJABIAGgCIAJgEIAFgEIADgEIAKgPIACgCIABgDIACgDIACgCIABgBIAAgCIACgCIACgDIAkgcIATgMQAMgIAYgNQAjgRAjgKQATgFAOgCIAEgBIACAAIACAAIAWgCQA9gDAhAZQAiAYgGAnQgEAWATADQALACAMgDQAPgCASgHIAWgHIAAAAIABAAIAWgIIAhgIQAUgFARgCQAQgDATgBIAEAAIAvAAIABAAIADAAIAHABIADAAIAMACIACAAIACAAIADABIAiAIQAZAJASANIANAKIALAMIAGAIQAFAIAEAKIAAACIADAHIACAKIABAUIgDAWQgDAPgJANIgVAVIgOAMIgCABIgBABIg3ApIgHADIAAABIgEACIgBABIgBAAIAAABIgCABIAAABIgBAAIgLADIABAAIgEACIgEABIgDACIgHACQgMAEgMACQgPACgHADIgCABIgCABIgGAFIgBABIAAABIgBAAIgBAIIgCAFIgBADIAAABIABAAIAAACQgBALAHATIAEATQABALgBAJQgDAUgLAUQgKATgUAUIgVAUIgWAQIgBABIgDABIgHAFIAAAAIgBABIgCABIgEADIgvAaQgmATgkAOIhLAaIgCABIgCABIgvAOIg6AMQgkAHgoABIgQABIhNAIIgIACIgBABIgBAAIAAAAIgXAIIgBAAIAAAAIgBABIgCABIgEACIgHAEIgBABIAAAAIgDABIgBAAIgWAMIgCACIgGAEIgLAHQglAZgrAQQgpAQguAIIgXAEIhQAFg");
	this.shape.setTransform(130.2,35.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bigCloud, new cjs.Rectangle(-6.4,-21.1,273.3,113.4), null);


// stage content:
(lib.clouds = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// bigCloud
	this.instance = new lib.bigCloud();
	this.instance.parent = this;
	this.instance.setTransform(774.7,39.1,1,1,0,0,0,134.3,26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:130.2,regY:35.6,x:758.8,y:47.8},0).wait(1).to({x:747,y:47.7},0).wait(1).to({x:735.1,y:47.6},0).wait(1).to({x:723.3,y:47.5},0).wait(1).to({x:711.5,y:47.3},0).wait(1).to({x:699.7,y:47.2},0).wait(1).to({x:687.9,y:47.1},0).wait(1).to({x:676,y:47},0).wait(1).to({x:664.2,y:46.8},0).wait(1).to({x:652.4,y:46.7},0).wait(1).to({x:640.6,y:46.6},0).wait(1).to({x:628.7,y:46.5},0).wait(1).to({x:616.9,y:46.4},0).wait(1).to({x:605.1,y:46.2},0).wait(1).to({x:593.3,y:46.1},0).wait(1).to({x:581.5,y:46},0).wait(1).to({x:569.6,y:45.9},0).wait(1).to({x:557.8,y:45.7},0).wait(1).to({x:546,y:45.6},0).wait(1).to({x:534.2,y:45.5},0).wait(1).to({x:522.4,y:45.4},0).wait(1).to({x:510.5,y:45.2},0).wait(1).to({x:498.7,y:45.1},0).wait(1).to({x:486.9,y:45},0).wait(1).to({x:475.1,y:44.9},0).wait(1).to({x:463.3,y:44.8},0).wait(1).to({x:451.4,y:44.6},0).wait(1).to({x:439.6,y:44.5},0).wait(1).to({x:427.8,y:44.4},0).wait(1).to({x:416,y:44.3},0).wait(1).to({x:404.2,y:44.1},0).wait(1).to({x:392.3,y:44},0).wait(1).to({x:380.5,y:43.9},0).wait(1).to({x:368.7,y:43.8},0).wait(1).to({x:356.9,y:43.6},0).wait(1).to({x:345,y:43.5},0).wait(1).to({x:333.2,y:43.4},0).wait(1).to({x:321.4,y:43.3},0).wait(1).to({x:309.6,y:43.2},0).wait(1).to({x:297.8,y:43},0).wait(1).to({x:285.9,y:42.9},0).wait(1).to({x:274.1,y:42.8},0).wait(1).to({x:262.3,y:42.7},0).wait(1).to({x:250.5,y:42.5},0).wait(1).to({x:238.7,y:42.4},0).wait(1).to({x:226.8,y:42.3},0).wait(1).to({x:215,y:42.2},0).wait(1).to({x:203.2,y:42},0).wait(1).to({x:191.4,y:41.9},0).wait(1).to({x:179.5,y:41.8},0).wait(1).to({x:167.7,y:41.7},0).wait(1).to({x:155.9,y:41.6},0).wait(1).to({x:144.1,y:41.4},0).wait(1).to({x:132.3,y:41.3},0).wait(1).to({x:120.5,y:41.2},0).wait(1).to({x:108.7,y:41.1},0).wait(1).to({x:96.8,y:40.9},0).wait(1).to({x:85,y:40.8},0).wait(1).to({x:73.2,y:40.7},0).wait(1).to({x:61.4,y:40.6},0).wait(1).to({x:49.6,y:40.4},0).wait(1).to({x:37.8,y:40.3},0).wait(1).to({x:25.9,y:40.2},0).wait(1).to({x:14.1,y:40.1},0).wait(1).to({x:2.3,y:40},0).wait(1).to({x:-9.5,y:39.8},0).wait(1).to({x:-21.4,y:39.7},0).wait(1).to({x:-33.2,y:39.6},0).wait(1).to({x:-45,y:39.5},0).wait(1).to({x:-56.8,y:39.3},0).wait(1).to({x:-68.7,y:39.2},0).wait(1).to({x:-80.5,y:39.1},0).wait(1).to({x:-92.3,y:39},0).wait(1).to({x:-104.1,y:38.8},0).wait(1).to({x:-115.9,y:38.7},0).wait(1).to({x:-127.8,y:38.6},0).wait(1).to({x:-139.6,y:38.5},0).wait(1).to({x:-151.4,y:38.4},0).wait(1));

	// classic
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-65,310.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:365,y:301.7},47).to({x:508.8,y:279.4},26).wait(6));

	// littleCloud
	this.instance_2 = new lib.littleCloud();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1188.2,201.8,1,1,0,0,0,89.4,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:89.2,regY:11.1,x:1171.4,y:205.8},0).wait(1).to({x:1154.9,y:205.5},0).wait(1).to({x:1138.4,y:205.1},0).wait(1).to({x:1121.9,y:204.8},0).wait(1).to({x:1105.4,y:204.4},0).wait(1).to({x:1088.9,y:204.1},0).wait(1).to({x:1072.4,y:203.7},0).wait(1).to({x:1055.9,y:203.4},0).wait(1).to({x:1039.4,y:203},0).wait(1).to({x:1022.9,y:202.7},0).wait(1).to({x:1006.4,y:202.4},0).wait(1).to({x:989.9,y:202},0).wait(1).to({x:973.4,y:201.7},0).wait(1).to({x:956.9,y:201.3},0).wait(1).to({x:940.4,y:201},0).wait(1).to({x:923.9,y:200.6},0).wait(1).to({x:907.4,y:200.3},0).wait(1).to({x:890.9,y:199.9},0).wait(1).to({x:874.4,y:199.6},0).wait(1).to({x:857.9,y:199.3},0).wait(1).to({x:841.4,y:198.9},0).wait(1).to({x:824.9,y:198.6},0).wait(1).to({x:808.4,y:198.2},0).wait(1).to({x:791.9,y:197.9},0).wait(1).to({x:775.4,y:197.5},0).wait(1).to({x:758.9,y:197.2},0).wait(1).to({x:742.4,y:196.8},0).wait(1).to({x:725.9,y:196.5},0).wait(1).to({x:709.4,y:196.1},0).wait(1).to({x:692.9,y:195.8},0).wait(1).to({x:676.4,y:195.5},0).wait(1).to({x:659.9,y:195.1},0).wait(1).to({x:643.4,y:194.8},0).wait(1).to({x:626.9,y:194.4},0).wait(1).to({x:610.4,y:194.1},0).wait(1).to({x:593.9,y:193.7},0).wait(1).to({x:577.4,y:193.4},0).wait(1).to({x:560.9,y:193},0).wait(1).to({x:544.4,y:192.7},0).wait(1).to({x:527.9,y:192.4},0).wait(1).to({x:511.4,y:192},0).wait(1).to({x:494.9,y:191.7},0).wait(1).to({x:478.4,y:191.3},0).wait(1).to({x:461.9,y:191},0).wait(1).to({x:445.4,y:190.6},0).wait(1).to({x:428.9,y:190.3},0).wait(1).to({x:412.4,y:189.9},0).wait(1).to({x:395.9,y:189.6},0).wait(1).to({x:379.4,y:189.3},0).wait(1).to({x:362.9,y:188.9},0).wait(1).to({x:346.4,y:188.6},0).wait(1).to({x:329.9,y:188.2},0).wait(1).to({x:313.4,y:187.9},0).wait(1).to({x:296.9,y:187.5},0).wait(1).to({x:280.4,y:187.2},0).wait(1).to({x:263.9,y:186.8},0).wait(1).to({x:247.4,y:186.5},0).wait(1).to({x:230.9,y:186.1},0).wait(1).to({x:214.4,y:185.8},0).wait(1).to({x:197.9,y:185.5},0).wait(1).to({x:181.4,y:185.1},0).wait(1).to({x:164.9,y:184.8},0).wait(1).to({x:148.4,y:184.4},0).wait(1).to({x:131.9,y:184.1},0).wait(1).to({x:115.4,y:183.7},0).wait(1).to({x:98.9,y:183.4},0).wait(1).to({x:82.4,y:183},0).wait(1).to({x:65.9,y:182.7},0).wait(1).to({x:49.4,y:182.4},0).wait(1).to({x:32.9,y:182},0).wait(1).to({x:16.4,y:181.7},0).wait(1).to({x:-0.1,y:181.3},0).wait(1).to({x:-16.6,y:181},0).wait(1).to({x:-33.1,y:180.6},0).wait(1).to({x:-49.6,y:180.3},0).wait(1).to({x:-66.1,y:179.9},0).wait(1).to({x:-82.6,y:179.6},0).wait(1).to({x:-99.1,y:179.3},0).wait(1));

	// hills
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336666").s().p("Eg5NAIKIAAwTUBP7AGPAiggGPIAAQTg");
	this.shape.setTransform(373.3,367.8,1.019,1.874);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(265.7,178.5,1429.3,497.2);
// library properties:
lib.properties = {
	id: 'E5B826621DCD4E4BA512FE5E8EF902D7',
	width: 747,
	height: 420,
	fps: 24,
	color: "#0066CC",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E5B826621DCD4E4BA512FE5E8EF902D7'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;