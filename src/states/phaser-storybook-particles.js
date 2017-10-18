class StorybookParticleFx {
    constructor(game) {
        this.game = game;
        this.manager = this.game.plugins.add(Phaser.ParticleStorm);
        this.emitter = this.manager.createEmitter(Phaser.ParticleStorm.SPRITE);
        this.particleFxData = [];
        this.createParticleFxData();
    }

    addToGroup(group){
        this.emitter.addToWorld(group);
    }

    createParticleFxData(){
        //let minVel = -0.5;
        //let maxVel = 0.5;

        //==== Demo particle data object with additional property for tag (if needed)
       /* this.particleFxData.push({
            key: "particle1",
            data:
                {
                    lifespan: 2000,
                    image: 'star3',
                    anchorX: 0.5,
                    anchorY: 0.55,
                    vx: {min: minVel, max: maxVel},
                    vy: {min: minVel, max: maxVel},
                    rotation: {delta: 0.5},
                    alpha: {min: 0.3, max: 0.9},
                    scale: {min: 0.5, max: 1.2}
                }
        });*/

      /*  this.particleFxData.push(
            {
                lifespan: 3000,
                image: 'star',
                vx: { min: -2, max: 2 },
                vy: { min: -2, max: 2 },
                rotation: { delta: 5 },
                alpha: { min: 0.1, max: 0.5},
                scale: { initial: 0.00001, delta: 0.00001 }
            }
        );

        this.particleFxData.push(
            {
                image: 'flareBlue',
                animations: { 'explode': { frameRate: 24, loop: true } },
                vx: { min: -0.5, max: 0.5 },
                vy: { min: -0.5, max: 0.5 },
                //vy: { value: 2, control : [ { x: 0, y: 0 }, { x: 0.5, y: 0 }, { x: 1, y: 1 } ] },
                scale: { min: 0.05, max: 0.4 },
                alpha: { min: 0.2, max: 0.5 }
            }
        )

        for (let i = 0; i < this.particleFxData.length; i++){
            this.manager.addData(this.particleFxData[i]);
        }*/

        //=========== if all else fails, add objects manually!
        let minVel = -0.5;
        let maxVel = 0.5
        let particleData = {
            lifespan: 2000,
            image: 'star3',
            anchorX: 0.5,
            anchorY: 0.55,
            vx: { min: minVel, max: maxVel },
            vy: { min: minVel, max: maxVel },
            rotation: { delta: 0.5 },
            alpha: { min: 0.3, max: 0.9},
            scale: { min: 0.5, max: 1.2 }
        }

        let star2data = {
            lifespan: 3000,
            image: 'star',
            vx: { min: -2, max: 2 },
            vy: { min: -2, max: 2 },
            rotation: { delta: 5 },
            alpha: { min: 0.1, max: 0.5},
            scale: { initial: 0.00001, delta: 0.00001 }
        };

        let flareFall = {
            image: 'flareBlue',
            animations: { 'explode': { frameRate: 24, loop: true } },
            vx: { min: -0.5, max: 0.5 },
            vy: { min: -0.5, max: 0.5 },
            //vy: { value: 2, control : [ { x: 0, y: 0 }, { x: 0.5, y: 0 }, { x: 1, y: 1 } ] },
            scale: { min: 0.05, max: 0.4 },
            alpha: { min: 0.2, max: 0.5 }
        };
        this.manager.addData('flareFall', flareFall);

        this.manager.addData('starSpin', particleData);
        this.manager.addData('star2data', star2data);


    }

    testEmit(){
        console.log('testEmit')
        //this.emitter.emit('starSpin', 400, 200, {total: 5, repeat: -1, frequency: 500 });
        //this.emitter.emit('star2data', 400, 400, {total: 3, repeat: 29, frequency: 500 });

        this.emitter.emit('flareFall', 400,400, {total: 5, repeat: -1, frequency: 500});
    }

    emit(key, x, y, controlObject){
        //this.emitter.emit('flareFall', 400,400, {total: 5, repeat: -1, frequency: 500});
        this.emitter.emit(key, x, y, controlObject);
    }

    debug(x = 0, y = 0){
        this.emitter.debug(x, y);
    }
}

export default StorybookParticleFx;