import * as PIXI from 'pixi.js';
const app = new PIXI.Application({ width: 640, height: 480 });

document.body.appendChild(app.view);

const atlasData = {
	frames: {
    walkLeft0: {
			frame: { x: 0, y:252, w:126, h:126 },
			sourceSize: { w: 126, h: 126 },
			spriteSourceSize: { x: 0, y: 0, w: 126, h: 126 }
		},
    walkLeft1: {
			frame: { x: 126, y:252, w:126, h:126 },
			sourceSize: { w: 126, h: 126 },
			spriteSourceSize: { x: 0, y: 0, w: 126, h: 126 }
		},
    walkLeft2: {
			frame: { x: 252, y:252, w:126, h:126 },
			sourceSize: { w: 126, h: 126 },
			spriteSourceSize: { x: 0, y: 0, w: 126, h: 126 }
		},
	},
    /* 必要なフレームを追加 */



	meta: {
		image: 'hiyoco.png',
		format: 'RGBA8888',
		size: { w: 768, h: 384 },
		scale: 1
	},
	animations: {
		walkLeft: ['walkLeft0','walkLeft1','walkLeft2'],
        /* 必要なアニメを追加 */
		walkRight: [],
		walkDown: [],
		walkUp: [],
		fly: [],
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
walkRight.x = 126;
app.stage.addChild(walkRight);

const walkDown = new PIXI.AnimatedSprite(spritesheet.animations.walkDown);
walkDown.animationSpeed = 0.1;
walkDown.play();
walkDown.x = 0;
walkDown.y = 126;
app.stage.addChild(walkDown);

const walkUp = new PIXI.AnimatedSprite(spritesheet.animations.walkUp);
walkUp.animationSpeed = 0.1;
walkUp.play();
walkUp.x = 126;
walkUp.y = 126;
app.stage.addChild(walkUp);

const fly = new PIXI.AnimatedSprite(spritesheet.animations.fly);
fly.animationSpeed = 0.1;
fly.play();
fly.x = 0;
fly.y = 252;
app.stage.addChild(fly);

