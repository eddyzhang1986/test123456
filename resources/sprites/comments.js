


//第二个小精灵
var sprite2 = function (deep) {

    this.deep = deep;
    this.imageUrl = 'resources/images/sprite1.png';
    this.img = new Image();
    this.img.src = this.imageUrl;
    this.showCount = 0;
    this.index = 0;
    this.move = 0;
}
sprite2.prototype.draw = function (cavs) {
    var ctx = cavs.getContext('2d');
    var count = Math.round((1000 / 10) / (1000 / frameNum));
    this.showCount++;
    if (this.showCount >= count) {
        this.showCount = 0;
        this.index++;
    }
    if (this.index >= 4) {
        this.index = 0;
    }
    this.move++;
    //console.log('index', this.index);
    ctx.drawImage(this.img, this.index * 175, (175 * 3 + 10), 175, 160, 0 + this.move, 100, 175, 160);
}
sprite2.prototype.onmousedown = function (location) {

}
sprite2.prototype.onmouseup = function (location) {

}
sprite2.prototype.onmousemove = function (location) {

}
sprite2.prototype.onmouseover = function (location) {

}


//第三个小精灵
var sprite3 = function (deep) {

    this.deep = deep;
    this.imageUrl = 'resources/images/sprite1.png';
    this.img = new Image();
    this.img.src = this.imageUrl;
    this.showCount = 0;
    this.index = 0;
    this.move = 0;
}
sprite3.prototype.draw = function () {
    var ctx = this.cav.getContext('2d');
    var count = Math.round((1000 / 10) / (1000 / frameNum));
    this.showCount++;
    if (this.showCount >= count) {
        this.showCount = 0;
        this.index++;
    }
    if (this.index >= 4) {
        this.index = 0;
    }
    this.move++;
    //console.log('index', this.index);
    ctx.drawImage(this.img, this.index * 175, (175 * 1 + 10), 175, 160, 860 - this.move, 400, 175, 160);
}
sprite3.prototype.onmousedown = function (location) {

}
sprite3.prototype.onmouseup = function (location) {

}
sprite3.prototype.onmousemove = function (location) {

}
sprite3.prototype.onmouseover = function (location) {

}