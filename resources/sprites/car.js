//第一个小精灵
var car = function (key, collisionName, type, usePhy, deep, x, y, vx, vy, ax, ay) {

    //唯一标识
    this.key = key;
    this.deep = deep;
    this.imageUrl = 'resources/images/sprite1.png';
    this.img = new Image();
    this.img.src = this.imageUrl;
    this.showCount = 0;
    this.index = 0;

    //设置物理模型的宽和高
    this.width = 175;
    this.height = 175;

    //默认小车朝前面开
    this.direct = 2;

    //是否使用物理引擎的特性
    this.usePhy = usePhy;

    //继承自物理模型
    PhysicsEntity.call(this, collisionName, type, this.width, this.height, x, y, vx, vy, ax, ay);
}

//继承原型链上的方法(使用组合继承方式对物理特性实体类进行继承关系,以实现更好的复用)
car.prototype = new PhysicsEntity();

//继承原型链上的方法后扩展出的方法
car.prototype.update = function (elapsed) {
    //每秒钟刷1次动画,每次动画持续1000/10毫秒,除以每帧绘制所用的毫秒数,就等于每个动画要持续多少个绘制帧
    var count = Math.round((1000 / 10) / elapsed);
    this.showCount++;
    if (this.showCount >= count) {
        this.showCount = 0;
        this.index++;
    }
    if (this.index >= 4) {
        this.index = 0;
    }
}
car.prototype.draw = function (cavs) {
    var ctx = cavs.getContext('2d');
    ctx.drawImage(this.img, this.index * 175, (175 * this.direct + 10), 175, 160, (this.x - this.width * 0.5), (this.y - this.height * 0.5), 175, 160);
}
car.prototype.onmousedown = function (location) {

}
car.prototype.onmouseup = function (location) {

}
car.prototype.onmousemove = function (location) {

}
car.prototype.onmouseover = function (location) {

}
car.prototype.onkeydown = function (e) {

    var keynum;
    var keychar;

    keynum = window.event ? e.keyCode : e.which;
    keychar = String.fromCharCode(keynum);
    //alert(keynum+':'+keychar);
    switch (keynum) {
        case 38:
            this.direct = 3;
            break;
        case 40:
            this.direct = 0;
            break;
        case 37:
            this.direct = 1;
            break;
        case 39:
            this.direct = 2;
            break;
        default:
            break;
    }
}