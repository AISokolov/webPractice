// то, куда премещаем
function squareOver(){
    event.preventDefault();
}
// то, куда премещаем
function squareDrop(event, tdNo){
    event.preventDefault();
    //отправляет номер квадрата из которого взяли
    var dragSq = document.getElementById("square" + draggedNo);
    //квадрат который взяли  
    var dropDiv = document.getElementById("cell"+tdNo);

    var dragParent = dragSq.parentNode;
    var dropChild = dropDiv.children[0];
    dropDiv.appendChild(dragSq);
    dragParent.appendChild(dropChild);
}
// то, что премещаем
let draggedNo = null;
function squareDrag(event, divNo){
    draggedNo = divNo;
    //отправляет номер diva из которого берем
}