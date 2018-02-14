
//帧显示
var frameLabel = function (cav, deep) {
    this.cav = cav;
    this.deep = deep;
    this.frameNum = 0;

}
frameLabel.prototype.update = function (frameNum) {
    this.frameNum = frameNum;
}
frameLabel.prototype.draw = function () {
    var ctx = this.cav.getContext('2d');
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