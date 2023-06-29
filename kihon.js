import * as PIXI from 'pixi.js';
const app = new PIXI.Application({ width: 640, height: 480 });

document.body.appendChild(app.view);

const atlasData = {
	frames: {
    walkLeft0: {
			frame: { x: 0, y:256, w:128, h:128 },
		},
    walkLeft1: {
			frame: { x: 128, y:256, w:128, h:128 },
		},
    walkLeft2: {
			frame: { x: 256, y:256, w:128, h:128 },
		},
    walkRight0: {
			frame: { x: 384, y:256, w:128, h:128 },
		},
    walkRight1: {
			frame: { x: 512, y:256, w:128, h:128 },
		},
    walkRight2: {
			frame: { x: 640, y:256, w:128, h:128 },
		},    
    walkDown0: {
			frame: { x: 0, y:128, w:128, h:128 },
		},
    walkDown1: {
			frame: { x: 128, y:128, w:128, h:128 },
		},
    walkDown2: {
			frame: { x: 256, y:128, w:128, h:128 },
		},
    walkDown0: {
			frame: { x: 0, y:128, w:128, h:128 },
		},
    walkDown1: {
			frame: { x: 128, y:128, w:128, h:128 },
		},
    walkDown2: {
			frame: { x: 256, y:128, w:128, h:128 },
		},
    walkUp0: {
			frame: { x: 384, y:128, w:128, h:128 },
		},
    walkUp1: {
			frame: { x: 512, y:128, w:128, h:128 },
		},
    walkUp2: {
			frame: { x: 640, y:128, w:128, h:128 },
		},    
    fly0: {
			frame: { x: 0, y:0, w:128, h:128 },
		},
    fly1: {
			frame: { x: 128, y:0, w:128, h:128 },
		},
    fly2: {
			frame: { x: 256, y:0, w:128, h:128 },
		},
    fly3: {
			frame: { x: 384, y:0, w:128, h:128 },
		},
    fly4: {
			frame: { x: 512, y:0, w:128, h:128 },
		},
    fly5: {
			frame: { x: 640, y:0, w:128, h:128 },
		},
	},
	meta: {
		image: 'hiyoco.png',
	},
	animations: {
		walkLeft: ['walkLeft0','walkLeft1','walkLeft2'],
		walkRight: ['walkRight0','walkRight1','walkRight2'],
		walkDown: ['walkDown0','walkDown1','walkDown2'],
		walkUp: ['walkUp0','walkUp1','walkUp2'],
		fly: ['fly0','fly1','fly2','fly3','fly4','fly5'],
	},
};

// スプライトシートを作成
const spritesheet = new PIXI.Spritesheet(
	PIXI.BaseTexture.from(atlasData.meta.image),
	atlasData
);
await spritesheet.parse();

// スプライトシートからアニメを取り出し
const walkLeft = new PIXI.AnimatedSprite(spritesheet.animations.walkLeft);
// アニメーション速度
walkLeft.animationSpeed = 0.1;
//walkLeft.loop = true; // デフォルトはtrueなので不要
walkLeft.play();
app.stage.addChild(walkLeft);

const walkRight = new PIXI.AnimatedSprite(spritesheet.animations.walkRight);
walkRight.animationSpeed = 0.1;
walkRight.play();
walkRight.x = 128;
app.stage.addChild(walkRight);

const walkDown = new PIXI.AnimatedSprite(spritesheet.animations.walkDown);
walkDown.animationSpeed = 0.1;
walkDown.play();
walkDown.x = 0;
walkDown.y = 128;
app.stage.addChild(walkDown);

const walkUp = new PIXI.AnimatedSprite(spritesheet.animations.walkUp);
walkUp.animationSpeed = 0.1;
walkUp.play();
walkUp.x = 128;
walkUp.y = 128;
app.stage.addChild(walkUp);

const fly = new PIXI.AnimatedSprite(spritesheet.animations.fly);
fly.animationSpeed = 0.1;
fly.play();
fly.x = 0;
fly.y = 256;
app.stage.addChild(fly);

