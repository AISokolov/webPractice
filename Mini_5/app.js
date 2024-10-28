function drop(){
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    var top = document.getElementById("topNum");
    var topVal = top.value;
    var left = document.getElementById("leftNum");
    var leftVal = left.value;
    var warn = document.getElementById("warning");
    if ((leftVal < 0 || topVal < 0)||(leftVal > 100 || topVal > 100)){
        warn.style.display = "flex";
        return 0;
    }else{
        warn.style.display = "none";
    }
    var mainDiv = document.getElementById("main");
    var addCircle = document.createElement("div");
    addCircle.id = "circle";
    addCircle.style.left = leftVal + "%";
    addCircle.style.top = topVal + "%";
    addCircle.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    mainDiv.appendChild(addCircle);
    var topValpx = (parseInt(topVal) / 100) * 400;
    moveCircle(addCircle, topValpx);
}
function moveCircle(circle, iVal){
    var animation = setInterval(function(){
        if(iVal < 365){
            iVal += 5;
            circle.style.top = iVal + "px";
        }else {
            circle.style.backgroundColor = "gray";
            clearInterval(animation);
        }
    }, 50);
}