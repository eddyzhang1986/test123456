//��ʼ����ȾС����
var initSprites = function (sprites) {
    //��Ⱦ�б�
    sprites.push(new bg(4));
    sprites.push(new bg2(4));
    sprites.push(new frameLabel(3));
    sprites.push(new startButton(2));
    sprites.push(new car(1));
    //sprites.push(new sprite2(cavs, 1));
    //sprites.push(new sprite3(cavs, 1));
    sprites = _.orderBy(sprites, ['deep'], ['desc']);
}


//������
var cavs = document.getElementById('mainCav');
//��ʼ����Ϸ
var g = game(cavs);
//��ʼ����ϷС����
//����GamexΪȫ�ֱ���
window.Gamex = g.Gamex;
initSprites(g.Gamex.sprites);
//��Ϸ��ʼ
g.start();