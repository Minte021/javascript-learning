function addNote() {
    let text = document.getElementById("note").value;
    if (text.trim() === "") return;
    let li = document.createElement("li");
    li.innerHTML = text;
    
    let btn = document.createElement("button");
    btn.innerHTML = "Delete Note";

    document.getElementById("note-list").appendChild(li);
    document.getElementById("note-list").appendChild(btn);

    btn.onclick = function() {
        li.remove();
        btn.remove();
    }
    
    document.getElementById("note").value = "";
}