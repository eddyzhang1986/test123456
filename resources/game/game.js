//主游戏对象
var game = function (cavs) {


    //游戏帧数
    var frameNum = 0;

    //时间间隔
    var step = (1000 / 60);

    //需要绘制的小精灵列表,这是为了以后在逻辑中
    //方便进行对象的添加和删除以及物理引擎的处理
    var Gamex = { sprites: [], cavs: cavs };
    var sprites = Gamex.sprites;


    //主update
    var update = function () {
        for (var i = 0; i < sprites.length; i++) {
            sprites[i].update(frameNum);
        }
    }


    //主场景绘制
    var draw = function () {
        for (var i = 0; i < sprites.length; i++) {
            sprites[i].draw(cavs);
        }
    }

    //清楚残留影像
    var clear = function () {
        var ctx = cavs.getContext('2d');
        ctx.clearRect(0, 0, 860, 550);
    }

    //主循环
    var loop = function () {
        var begin = new Date();
        clear();
        update();
        draw();
        var end = new Date();
        //计算一次渲染所用的时间/毫秒
        var interval = end - begin;
        //需要等待的时间
        var wait = step - interval;

        //计算帧数
        frameNum = Math.round((1000 / (interval + wait)));
        if (wait <= 0) {
            setTimeout(loop, 0);
        }
        else {
            setTimeout(loop, wait);
        }
    }



    //对游戏的事件进行处理
    var handleEvents = function () {

        //坐标系统转换函数
        function getLocation(x, y) {
            var bbox = cavs.getBoundingClientRect();
            return {
                x: (x - bbox.left) * (cavs.width / bbox.width),
                y: (y - bbox.top) * (cavs.height / bbox.height)
            };
        }

        //系统级别的事件
        cavs.onmousedown = function (e) {
            var location = getLocation(e.clientX, e.clientY);
            for (var i = 0; i < sprites.length; i++) {
                if (sprites[i].onmousedown) {
                    sprites[i].onmousedown(location);
                }
            }
        }
        cavs.onmouseup = function (e) {
            var location = getLocation(e.clientX, e.clientY);
            for (var i = 0; i < sprites.length; i++) {
                if (sprites[i].onmouseup) {
                    sprites[i].onmouseup(location);
                }
            }
        }
        cavs.onmousemove = function (e) {
            var location = getLocation(e.clientX, e.clientY);
            for (var i = 0; i < sprites.length; i++) {
                if (sprites[i].onmousemove) {
                    sprites[i].onmousemove(location);
                }
            }
        }
        cavs.onmouseover = function (e) {
            var location = getLocation(e.clientX, e.clientY);
            for (var i = 0; i < sprites.length; i++) {
                if (sprites[i].onmouseover) {
                    sprites[i].onmouseover(location);
                }
            }
        }

        //响应键盘事件
        window.onkeydown = function (e) {

            for (var i = 0; i < sprites.length; i++) {
                if (sprites[i].onkeydown) {
                    sprites[i].onkeydown(e);
                }
            }
        }


    }

    //开始整体游戏的循环
    var start = function () {
        //进行事件的处理
        handleEvents();
        //启动游戏渲染
        setTimeout(loop, 0);
    }


    return {
        start: start,
        Gamex: Gamex
    }
}