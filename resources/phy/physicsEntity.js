//用于碰撞的物理实体类
var PhysicsEntity = function (collisionName, type) {

    //如果没有给定参数则设置默认值,类型表示碰撞检测的处理
    this.type = type || PhysicsEntity.DYNAMIC;

    //代表碰撞实体中的另外一个对象
    this.collision = collisionName || PhysicsEntity.ELASTIC;

    //设定一个宽度和高度
    this.width = 20;
    this.height = 20;

    //半宽半高
    this.halfWidth = this.width * .5;
    this.halfHeight = this.height * .5;


    var collision = Collision[this.collision];
    collision.call(this);

    //设置基础的位置和速度
    // 速度
    this.vx = 0;
    this.vy = 0;

    // 加速度
    this.ax = 0;
    this.ay = 0;

    // 更新对象边界重新计算
    // 半尺寸和其他任何部分
    this.updateBounds();

}

PhysicsEntity.prototype = {

    //更新矩形的边界
    updateBounds: function () {
        this.halfWidth = this.width * .5;
        this.halfHeight = this.height * .5;
    },


    // Getters for the mid point of the rect
    getMidX: function () {
        return this.halfWidth + this.x;
    },

    getMidY: function () {
        return this.halfHeight + this.y;
    },

    // Getters for the top, left, right, and bottom
    // of the rectangle
    getTop: function () {
        return this.y;
    },
    getLeft: function () {
        return this.x;
    },
    getRight: function () {
        return this.x + this.width;
    },
    getBottom: function () {
        return this.y + this.height;
    }
}

// Constants
 
// Engine Constants
 
// These constants represent the 3 different types of
// entities acting in this engine
// These types are derived from Box2D's engine that
// model the behaviors of its own entities/bodies
 
// Kinematic entities are not affected by gravity, and
// will not allow the solver to solve these elements
// These entities will be our platforms in the stage
PhysicsEntity.KINEMATIC = 'kinematic';
 
// Dynamic entities will be completely changing and are
// affected by all aspects of the physics system
PhysicsEntity.DYNAMIC   = 'dynamic';
 
// Solver Constants
 
// These constants represent the different methods our
// solver will take to resolve collisions
 
// The displace resolution will only move an entity
// outside of the space of the other and zero the
// velocity in that direction
PhysicsEntity.DISPLACE = 'displace';
 
// The elastic resolution will displace and also bounce
// the colliding entity off by reducing the velocity by
// its restituion coefficient
PhysicsEntity.ELASTIC = 'elastic';


//碰撞检测器
// Rect collision tests the edges of each rect to
// test whether the objects are overlapping the other
// CollisionDetector.prototype.collideRect = 
//     function(collider, collidee) {
 
//     // Store the collider and collidee edges
//     var l1 = collider.getLeft();
//     var t1 = collider.getTop();
//     var r1 = collider.getRight();
//     var b1 = collider.getBottom();
 
//     var l2 = collidee.getLeft();
//     var t2 = collidee.getTop();
//     var r2 = collidee.getRight();
//     var b2 = collidee.getBottom();
 
//     // If the any of the edges are beyond any of the
//     // others, then we know that the box cannot be
//     // colliding
//     if (b1 < t2 || t1 > b2 || r1 < l2 || l1 > r2) {
//         return false;
//     }
 
//     // If the algorithm made it here, it had to collide
//     return true;
// };