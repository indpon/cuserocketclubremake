const how_often = 5; 
var current_pic = 1;

function switchPicture() {

    var cur_pic_str = current_pic < 10 ? "0" + current_pic.toString() : current_pic.toString();

    var url = `http://www.syracuserocketclub.org/images/homepagephotos/${cur_pic_str}.jpg`;

    document.getElementById('image').src = url;

    current_pic++;

    if (current_pic > 22) {
        current_pic = 1;
    }
}

switchPicture();
setInterval(switchPicture, how_often * 1000);
