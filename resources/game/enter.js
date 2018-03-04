//初始化渲染小精灵
var addSprites = function () {

    //需要渲染的小精灵列表
    var sprites = [];
    //渲染列表
    sprites.push(new bg(4));
    sprites.push(new bg2(4));
    sprites.push(new frameLabel(3));
    sprites.push(new startButton(2));

    sprites.push(new car("player1", "elastic", "dynamic", "group1", true, 100, 2, 180, 380, 0, 0, 0, 0, 0));
    sprites.push(new car("player2", "elastic", "dynamic", "group1", true, 99, 1, 580, 380, -100, 0, 0, 0, 0));

    //sprites.push(new sprite2(cavs, 1));
    //sprites.push(new sprite3(cavs, 1));
    //对sprites进行排序
    sprites = _.orderBy(sprites, ['deep'], ['asc']);

    //并将其push进精灵渲染数组
    for (var i = 0; i < sprites.length; i++) {
        window.Gamex.sprites.push(sprites[i]);
    }


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

