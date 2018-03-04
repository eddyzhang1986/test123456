//主游戏对象
var game = function (cavs) {


    //时间间隔
    var step = (1000 / 60);

    //需要绘制的小精灵列表,这是为了以后在逻辑中
    //方便进行对象的添加和删除以及物理引擎的处理
    var Gamex = { sprites: [], cavs: cavs, elapsed: step, paused: false };
    var sprites = Gamex.sprites;


    //拥有物理特性的精灵列表更新
    var updatePhy = function (sp, elapsed) {

        //按深度分组,同一组深度的物理刚体才可能发生碰撞
        //orderBy deep

        for (var i = 0; i < sp.length; i++) {
            //速度 * 时间 / 1000 = 每帧移动的距离 单位为 px/秒
            if (sp[i].vx) {
                sp[i].x = sp[i].x + (sp[i].vx * elapsed / 1000);
            }
            if (sp[i].vy) {
                sp[i].y = sp[i].y + (sp[i].vy * elapsed / 1000);
            }

            sp[i].update(elapsed);
        }
    }

    //无物理特性的精灵列表更新
    var updateNoPhy = function (sp, elapsed) {
        for (var i = 0; i < sp.length; i++) {
            sp[i].update(elapsed);
        }
    }

    //主update
    var update = function (elapsed) {

        //无物理特性的精灵列表
        var noPhyList = _.filter(sprites, { usePhy: false });
        updateNoPhy(noPhyList, elapsed);
        //拥有物理特性的精灵列表
        var phyList = _.filter(sprites, { usePhy: true });
        updatePhy(phyList, elapsed);

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
        if (!Gamex.paused) {
            update(Gamex.elapsed);
        }
        draw();
        var end = new Date();
        //计算一次渲染所用的时间/毫秒
        var interval = end - begin;
        //需要等待的时间
        var wait = step - interval;

        //计算每一次主循环实际使用的时间
        Gamex.elapsed = interval + (wait <= 0 ? 0 : wait);


        //调用主循环
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
    var run = function () {
        //进行事件的处理
        handleEvents();
        //启动游戏渲染
        setTimeout(loop, 0);
    }


    return {
        run: run,
        Gamex: Gamex
    }
}