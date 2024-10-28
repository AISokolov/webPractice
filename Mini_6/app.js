function drag(event, dragId){
    event.dataTransfer.setData("text", dragId.toString());
  }

function allowDrop(event){
    event.preventDefault();
  }

function drop(event){
    event.preventDefault();
    var draggedSquare = event.dataTransfer.getData("text");
    console.log(draggedSquare);
    
}