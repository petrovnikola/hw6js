//1
var loremip = document.getElementsByTagName("p");
loremip.innerHTML="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.";
console.log(loremip);

//2
var zero = document.querySelector("#zero");
var maxb = document.querySelector("#max");
var minb = document.querySelector("#min");
var count = 0;
maxb.addEventListener("click", function () {
    count += 1;
    if (count >= 10) {
        count = 10;
    }
    zero.innerHTML = count;
});

minb.addEventListener("click", function () {
    count -= 1;
    if (count <= 0) {
        count = 0;
    }
    zero.innerHTML = count;
});

//3

var lang = document.getElementsByClassName("list-item");


lang[0].innerHTML = "javascript",
lang[1].innerHTML = "Python",
lang[2].innerHTML = "C++",
lang[3].innerHTML = "C#",
lang[4].innerHTML = "SQL";

//4

var photo = document.getElementById("image");
photo.addEventListener("click",function(){
    photo.src = "https://newsghana.com.gh/wp-content/uploads/2022/07/JavaScript.png";

});




