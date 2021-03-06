$(function() {
    var load_image = function(e) {
        showImage($('#car-seats').val());
        return false;
    };

    $('#car-seats').bind('change', load_image);

});

var firstTime = [true, true, true, true, true, true];

function vdu_setPersonInSeat(seat, id){
    if(id>4 || id<0)
        id=5;

    var users = ['rui', 'hugo', 'herlander', 'roger', 'david', 'nobody'];
    var user = users[id];

    var img_height;
    var w_weight, h_weight, l, t;
    switch(seat) {
        case 'FrontLeft':
            img_height = 80;
            l = 181;
            t = 1006;
            break;
        case 'FrontRight':
            img_height = 80;
            l = 288;
            t = 1006;
            break;
        case 'RearLeft':
            img_height = 65;
            l = 185;
            t = 1135;
            break;
        case 'RearRight':
            img_height = 65;
            l = 310;
            t = 1135;
            break;
        case 'RearCenter':
            img_height = 65;
            l = 242;
            t = 1135;
            break;
        default:
            w_weight = 0;
            h_weight = 0;
    }

    var image = document.getElementById('car-occupation-img');
    margin = 10;

    /*
    l = image.offsetLeft;
    t = image.offsetTop;
    w = image.width;
    h = image.height;

    console.log(l, t);
    // Location inside the image
    offX = parseInt(w_weight * w);
    offY = parseInt(h_weight * h);

    if(offX > margin) offX -= margin;
    if(offY > margin) offY -= margin;
    l += offX;

    t += offY;
    console.log(l, t);

    l = 300;
    t = 900;
    */
    if (!firstTime[id]){
        var bubble = document.createElement("img");
        bubble.setAttribute('src', 'static/images/bubble.png');
        bubble.setAttribute('class', 'overlays  img-circle');
        bubble.style.left = l + "px";
        bubble.style.top = t + "px";
        bubble.height = img_height;
        document.body.appendChild(bubble);

        setTimeout(function() {
            bubble.parentNode.removeChild(bubble);
        }, 2000);
    }else{
        var newImage = document.createElement("img");
        newImage.setAttribute('src', 'static/images/' + user + '.jpg');
        newImage.setAttribute('class', 'overlays  img-circle');
        newImage.style.left = l + "px";
        newImage.style.top = t + "px";
        newImage.height = img_height;
        document.body.appendChild(newImage);
    }
    firstTime[id] = false;
}

function showImage(pos, user) {

    var users = ['rui', 'hugo', 'herlander', 'roger', 'david', 'nobody'];

    //var user = users[Math.floor(Math.random()*users.length)];
    if (users.indexOf(user) == -1) {
        user = 'nobody';
    }
    var img_height;
    var w_weight, h_weight;
    switch(pos) {
        case 'front_left':
            img_height = 90;
            w_weight = 0.42;
            h_weight = 0.60;
            break;
        case 'front_right':
            img_height = 90;
            w_weight = 0.42;
            h_weight = 0.20;
            break;
        case 'back_left':
            img_height = 75;
            w_weight = 0.62;
            h_weight = 0.62;
            break;
        case 'back_right':
            img_height = 75;
            w_weight = 0.62;
            h_weight = 0.18;
            break;
        case 'back_center':
            img_height = 75;
            w_weight = 0.62;
            h_weight = 0.40;
            break;
        default:
            w_weight = 0;
            h_weight = 0;
    }

    // myImage : ID of image on which to place new image

    var image = document.getElementById('car-occupation-img');

    console.log(image.width);

    margin = 10;

    l = image.offsetLeft;
    t = image.offsetTop;
    w = image.width;
    h = image.height;

    // Location inside the image
    offX = parseInt(w_weight * w);
    offY = parseInt(h_weight * h);

    if(offX > margin) offX -= margin;
    if(offY > margin) offY -= margin;

    l += offX;
    t += offY;
    console.log(offX, offY);
    console.log(w, h);
    var newImage = document.createElement("img");
    newImage.setAttribute('src', 'static/images/' + user + '.jpg');
    newImage.setAttribute('class', 'overlays img-circle');
    newImage.style.left = l + "px";
    newImage.style.top = t + "px";

    newImage.height = img_height;
    document.body.appendChild(newImage);
}

