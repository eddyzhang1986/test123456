//��ʼ����ȾС����
var initSprites = function () {

    //��Ҫ��Ⱦ��С�����б�
    var sprites = window.Gamex.sprites;
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
//����GamexΪȫ�ֱ���
window.Gamex = g.Gamex;
//��ʼ����ϷС����
initSprites();
//��Ϸ��ʼ
g.start();