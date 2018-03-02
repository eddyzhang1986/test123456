//1号背景
var bg = function (deep) {

    this.deep = deep;
    this.imageUrl = 'resources/images/bg3.png';
    this.img = new Image();
    this.img.src = this.imageUrl;
    this.move = 0;
    this.begpos = 0;

    //是否使用物理引擎的特性
    this.usePhy = false;
}
bg.prototype.update = function (elapsed) {

    this.begpos--;
    if (this.begpos <= -860) {
        this.begpos = 860;
    }
}
bg.prototype.draw = function (cavs) {
    var ctx = cavs.getContext('2d');
    ctx.drawImage(this.img, 0, 0, 860, 550, this.begpos, 0, 860, 550);
}
bg.prototype.onmousedown = function (location) {

}
bg.prototype.onmouseup = function (location) {

}
bg.prototype.onmousemove = function (location) {

}
bg.prototype.onmouseover = function (location) {

}