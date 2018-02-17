
//碰撞类
var collision = {

    //设置物体的表面弹性如果没有设置则设置为0.2
    elastic: function (restitution) {
        this.restitution = restitution || .2;
    },
    displace: function () {
       //本引擎暂不支持
       //位移碰撞可以包括摩擦力
       //从碰撞中使实体减速
    }

}