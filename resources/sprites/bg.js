//1号背景
var bg = function (cav, deep) {
    this.cav = cav;
    this.deep = deep;
    this.imageUrl = 'resources/images/bg3.png';
    this.img = new Image();
    this.img.src = this.imageUrl;
    this.move = 0;
    this.begpos = 0;
}
bg.prototype.update = function (frameNum) {

    this.begpos--;
    if (this.begpos <= -860) {
        this.begpos = 860;
    }
}
bg.prototype.draw = function () {
    var ctx = this.cav.getContext('2d');
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