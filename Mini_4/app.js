document.addEventListener("DOMContentLoaded", function() {
    var main = document.getElementById("main");
    var table = document.createElement("table");

    for (var i = 0; i < 3; i++) {
        var row = document.createElement("tr");
        row.id = i;
        for (var j = 0; j < 10; j++) {
            var cell = document.createElement("td");
            cell.id = j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    main.appendChild(table);
    
    function curPos(){
        var tdElements = document.getElementsByTagName("td");

        for (var i = 0; i < tdElements.length; i++) {
            var td = tdElements[i];
            var circle = td.querySelector("#circle");
        if (circle) {
            console.log("Found circle in cell with ID:", td.id);
        }
    }
    }
    function removeCircle(){
        var exist = document.getElementById("circle");
        if(exist) {
            exist.remove();
        }
    }

    table.addEventListener('click', function(event) {
        var clicked = event.target;
        var exist = document.getElementById("circle");
        if(exist){
            exist.remove();
        }
        var div = document.createElement('div');
        div.id = "circle";
        clicked.appendChild(div);
    });

    var forward = document.getElementById("forward");
    forward.addEventListener('click', function(event){
        curPos();
    });
});
