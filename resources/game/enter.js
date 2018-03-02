//初始化渲染小精灵
var addSprites = function () {

    //需要渲染的小精灵列表
    var sprites = window.Gamex.sprites;
    //渲染列表
    sprites.push(new bg(4));
    sprites.push(new bg2(4));
    sprites.push(new frameLabel(3));
    sprites.push(new startButton(2));
    sprites.push(new car(150, 380, 0, 0, 1));
    sprites.push(new car(350, 380, 55, 0, 1));
    //sprites.push(new sprite2(cavs, 1));
    //sprites.push(new sprite3(cavs, 1));
    sprites = _.orderBy(sprites, ['deep'], ['desc']);

}


//主画布
var cavs = document.getElementById('mainCav');
//初始化游戏
var g = game(cavs);
//设置Gamex为全局变量
window.Gamex = g.Gamex;
//添加游戏小精灵
addSprites();
//游戏主循环开始
g.run();

