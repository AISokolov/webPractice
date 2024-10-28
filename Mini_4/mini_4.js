function functionForward(){
    
}

function functionBackward(){
    
}

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
    var table = document.getElementById("table");
    if (table) {
        var div = document.createElement('div');
        div.id = "circle";
        table.appendChild(div);
        table.addEventListener("click", function(event) {
            var clicked = event.target;
            var exist = document.getElementById("circle");
            if(exist){
                exist.remove();
            }
            var div = document.createElement('div');
            div.id = "circle";
            clicked.appendChild(div);
        });
    }
});
