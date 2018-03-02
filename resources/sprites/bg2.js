//背景2两幅图片用来进行切换
var bg2 = function (deep) {

    this.deep = deep;
    this.imageUrl = 'resources/images/bg4.png';
    this.img = new Image();
    this.img.src = this.imageUrl;
    this.move = 0;
    this.begpos = 860;
}
bg2.prototype.update = function (elapsed) {

    this.begpos--;
    if (this.begpos <= -860) {
        this.begpos = 860;
    }

}
bg2.prototype.draw = function (cavs) {
    var ctx = cavs.getContext('2d');
    ctx.drawImage(this.img, 0, 0, 860, 550, this.begpos, 0, 860, 550);
}
bg2.prototype.onmousedown = function (location) {

}
bg2.prototype.onmouseup = function (location) {

}
bg2.prototype.onmousemove = function (location) {

}
bg2.prototype.onmouseover = function (location) {

}