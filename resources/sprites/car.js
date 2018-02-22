//第一个小精灵
var car = function (cav, deep) {
    this.cav = cav;
    this.deep = deep;
    this.imageUrl = 'resources/images/sprite1.png';
    this.img = new Image();
    this.img.src = this.imageUrl;
    this.showCount = 0;
    this.index = 0;
    this.move = 0;

    this.x = 150;
    this.y = 380;
    this.width = 175;
    this.height = 175;

    //默认小车朝前面开
    this.direct = 2;
}
car.prototype.update = function (frameNum) {
    var count = Math.round((1000 / 10) / (1000 / frameNum));
    this.showCount++;
    if (this.showCount >= count) {
        this.showCount = 0;
        this.index++;
    }
    if (this.index >= 4) {
        this.index = 0;
    }
}
car.prototype.draw = function () {
    var ctx = this.cav.getContext('2d');
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