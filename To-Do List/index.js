
    let yourname = prompt("Wie lautet dein Name?")
    document.getElementById("name").innerHTML =
    "Hallo " + yourname + "!";


function Addtask(){
    let add = addmytask.value
    if(add === ""){
        alert('Bitte schreib ein To-Do in das Textfeld.')
    }else{
        mytask.innerHTML +=
        '<div class="tasks">' + add  + '<div class="delete" onclick="removetask()"> &#128465; </div> </div>'
        add = " ";
    }

    
}

function removetask(){
    const list = document.getElementById("mytask");
    list.removeChild(list.firstElementChild);

}

