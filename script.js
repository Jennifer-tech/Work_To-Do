document.getElementById('push').onclick = function(){
    console.log('hello')
    if(document.getElementById('input').value.length === 0){
        alert("Please Enter a task");
    }
    else{
        document.getElementById('tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.getElementById("input").value}
            </span>

            <button class = "delete">
            <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
        </div>`;

        var current_tasks = document.getElementsByClassName("delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        console.log('hi');
    }
}



/*var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");

function inputLength(){
    return input.Value.length;
}
function listLength(){
    return Item.length;
}
function createListElement(){
    var li = document.createElement("li");
    
    li.appendChild(document.createTextNode(input.value));
}*/