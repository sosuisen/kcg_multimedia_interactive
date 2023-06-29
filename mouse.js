import * as PIXI from 'pixi.js';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";
gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const app = new PIXI.Application({ antialias: true, width: 640, height: 480 });
app.ticker.stop();
gsap.ticker.add(time => {
  app.ticker.update();
});

document.body.appendChild(app.view);

// largeObjがマウスに反応するようにする
const largeObj = new PIXI.Graphics();
largeObj.beginFill(0xffb090);
largeObj.drawRoundedRect(0, 0, 480, 360);
largeObj.endFill();
largeObj.position.set(80, 60);
largeObj.eventMode = 'static';
largeObj.on('pointermove', event => {
    const localPos = event.getLocalPosition(event.currentTarget);
    console.log(`[parent] screen(${event.screen.x}, ${event.screen.y}), local(${localPos.x}, ${localPos.y}))`);
    // greenStarはapp.stageの子なので、グローバル座標を指定する。
    // マウスの位置へ移動
    // greenStar.position = event.screen;
    // マウスの位置までアニメーションさせるとよりスムーズ
    // gsap.to(greenStar, { x: event.screen.x, y: event.screen.y });
});
app.stage.addChild(largeObj);

// app.stageに星を追加。
// この星はlargeObjより手前、smallObjより奥側になる。
/*
const greenStar = PIXI.Sprite.from('greenstar.png');
greenStar.pivot.set(16, 16);
greenStar.position.set(80, 60);
app.stage.addChild(greenStar);
gsap.to(greenStar, { duration: 5, repeat: -1, ease: 'none', pixi: {
    rotation: 360,
}});
*/

// smallObjがマウスに反応するようにする
const smallObj = new PIXI.Graphics();
smallObj.beginFill(0xa0a0f0);
smallObj.drawCircle(0, 0, 120);
smallObj.position.set(320, 240); 
smallObj.endFill();
smallObj.eventMode = 'static';
smallObj.interactiveChildren = false;
smallObj.on('pointermove', event => {
    // オブジェクト内のローカル座標系
    // 円の場合、中心が(0, 0)となる。
    const localPos = event.getLocalPosition(event.currentTarget);
    console.log(`[child] screen(${event.screen.x}, ${event.screen.y}), local(${localPos.x}, ${localPos.y}))`);
    // yellowStarはsmallObjの子なので、smallObjのローカル座標を指定する。
    // yellowStar.position = localPos;
    // マウスの位置までアニメーションさせるとよりスムーズ
    // gsap.to(yellowStar, { x: localPos.x, y: localPos.y });
});
app.stage.addChild(smallObj);

// smallObjに星を追加
/*
const yellowStar = PIXI.Sprite.from('yellowstar.png');
yellowStar.pivot.set(16, 16);
smallObj.addChild(yellowStar);
gsap.to(yellowStar, { duration: 5, repeat: -1, ease: 'none', pixi: {
    rotation: -360,
}});
*/

/*
// マウスが画面上のどこにあっても反応するようにする
app.stage.eventMode = 'static';
app.stage.on('globalpointermove', (event) => {
    console.log(`[global] screen(${event.screen.x}, ${event.screen.y}))`);
});
*/