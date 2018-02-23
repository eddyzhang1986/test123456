
//开始按钮
var startButton = function (deep) {

    this.deep = deep;
}
//游戏开始方法
startButton.startGame = function () {
}
//更新方法
startButton.prototype.update = function (frameNum) {


}
//按钮绘图
startButton.prototype.draw = function (cavs) {
    var ctx = cavs.getContext('2d');
    //ctx.fillStyle = "#FF0000";
    //ctx.fillRect(100, 100, 200 / 2, 200 / 2);
    //ctx.font = "20px Arial";
    //ctx.fillStyle = "#0000FF";
    ctx.fillText("囧", 860 / 2, 550 / 2);
}
startButton.prototype.onmousedown = function (location) {
    console.log('点击了画布x' + location.x + ',y:' + location.y);
}
startButton.prototype.onmouseup = function (location) {

}
startButton.prototype.onmousemove = function (location) {

}
startButton.prototype.onmouseover = function (location) {

}