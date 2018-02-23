//初始化渲染小精灵
var initSprites = function (sprites) {
    //渲染列表
    sprites.push(new bg(4));
    sprites.push(new bg2(4));
    sprites.push(new frameLabel(3));
    sprites.push(new startButton(2));
    sprites.push(new car(1));
    //sprites.push(new sprite2(cavs, 1));
    //sprites.push(new sprite3(cavs, 1));
    sprites = _.orderBy(sprites, ['deep'], ['desc']);
}


//主画布
var cavs = document.getElementById('mainCav');
//初始化游戏
var g = game(cavs);
//初始化游戏小精灵
//设置Gamex为全局变量
window.Gamex = g.Gamex;
initSprites(g.Gamex.sprites);
//游戏开始
g.start();