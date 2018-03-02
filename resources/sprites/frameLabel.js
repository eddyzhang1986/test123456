
//帧显示
var frameLabel = function (deep) {

    this.deep = deep;
    this.frameNum = 0;

    //是否使用物理引擎的特性
    this.usePhy = false;

}
frameLabel.prototype.update = function (elapsed) {
    this.frameNum = Math.round(1000 / elapsed);
}
frameLabel.prototype.draw = function (cavs) {
    var ctx = cavs.getContext('2d');
    ctx.font = "20px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("帧数:" + this.frameNum, 10, 30);
}
frameLabel.prototype.onmousedown = function (location) {

}
frameLabel.prototype.onmouseup = function (location) {

}
frameLabel.prototype.onmousemove = function (location) {

}
frameLabel.prototype.onmouseover = function (location) {

}