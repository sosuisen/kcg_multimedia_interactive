const app = new PIXI.Application({ width: 640, height: 480 });

document.body.appendChild(app.view);

const atlasData = {
	frames: {
		fly0: {
			frame: { x: 0, y: 0, w: 126, h: 126 },
			sourceSize: { w: 126, h: 126 },
			spriteSourceSize: { x: 0, y: 0, w: 126, h: 126 }
		},
		fly1: {
			frame: { x: 126, y: 0, w: 126, h: 126 },
			sourceSize: { w: 126, h: 126 },
			spriteSourceSize: { x: 0, y: 0, w: 126, h: 126 }
		},
		fly2: {
			frame: { x: 252, y: 0, w: 126, h: 126 },
			sourceSize: { w: 126, h: 126 },
			spriteSourceSize: { x: 0, y: 0, w: 126, h: 126 }
		},
		fly3: {
			frame: { x: 378, y: 0, w: 126, h: 126 },
			sourceSize: { w: 126, h: 126 },
			spriteSourceSize: { x: 0, y: 0, w: 126, h: 126 }
		},
		fly4: {
			frame: { x: 504, y: 0, w: 126, h: 126 },
			sourceSize: { w: 126, h: 126 },
			spriteSourceSize: { x: 0, y: 0, w: 126, h: 126 }
		},
		fly5: {
			frame: { x: 630, y: 0, w: 126, h: 126 },
			sourceSize: { w: 126, h: 126 },
			spriteSourceSize: { x: 0, y: 0, w: 126, h: 126 }
		},

	},
	meta: {
		image: 'spritesheet.png',
		format: 'RGBA8888',
		size: { w: 768, h: 126 },
		scale: 1
	},
	animations: {
		fly: ['fly0', 'fly1', 'fly2', 'fly3', 'fly4', 'fly5'],
	},
};

// スプライトシートを作成
const spritesheet = new PIXI.Spritesheet(
	PIXI.BaseTexture.from(atlasData.meta.image),
	atlasData
);
await spritesheet.parse();

const anime = new PIXI.AnimatedSprite(spritesheet.animations.fly);
anime.animationSpeed = 0.1;
anime.loop = false; // アニメをループさせない

app.stage.addChild(anime);

const playAnime = () => {
	// ループしていないアニメは再生時にフレーム0へ戻す必要がある
	anime.gotoAndPlay(0);
};

let currentMove = '';

// イベントリスナー登録
// カーソルキーで移動する
window.addEventListener("keydown", event => {
	switch (event.key) {
		case 'ArrowRight':
			currentMove = 'walkRight';
			break;
		case 'ArrowLeft':
			currentMove = 'walkLeft';
			break;
		case 'ArrowDown':
			currentMove = 'walkDown';
			break;
		case 'ArrowUp':
			currentMove = 'walkUp';
			break;
		case ' ': // スペースキーでアニメ再生
			playAnime();
			currentMove = 'fly';
			break;
	}
});
window.addEventListener("keyup", () => {
	currentMove = '';
});

// 移動処理
app.ticker.add(() => {
	switch (currentMove) {
		case 'walkLeft': anime.x-=2; break;
		case 'walkRight': anime.x+=2; break;
		case 'walkUp': anime.y-=2; break;
		case 'walkDown': anime.y+=2; break;
		default: break;
	}
});

// スプライトをクリックしたときもアニメ再生
anime.interactive = true;
anime.on('pointerdown', () => playAnime());
