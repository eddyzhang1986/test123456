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
    ctx.drawImage(this.img, this.index * 175, (175 * 2 + 10), 175, 160, 60 + this.move, 270, 175, 160);
}
car.prototype.onmousedown = function (location) {

}
car.prototype.onmouseup = function (location) {

}
car.prototype.onmousemove = function (location) {

}
car.prototype.onmouseover = function (location) {

}