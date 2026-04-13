function addNote() {
    let noteInput = document.getElementById("note");
    let text = noteInput.value;
    if (text.trim() === "") return;

    let delete_btn = document.createElement("button");
    delete_btn.id = "delete-btn";
    delete_btn.innerText = "Delete";

    let edit_btn = document.createElement("button");
    edit_btn.id = "edit-btn";
    edit_btn.innerText = "Edit";

    let li = document.createElement("li");
    li.innerText = text;

    let note_lst = document.getElementById("note-list");
    note_lst.appendChild(li);
    note_lst.appendChild(delete_btn);
    note_lst.appendChild(edit_btn);

    delete_btn.onclick = function() {
        note_lst.removeChild(li);
        note_lst.removeChild(delete_btn);
        note_lst.removeChild(edit_btn);
    }

    edit_btn.onclick = function() {
        noteInput.value = text;
        note_lst.removeChild(li);
        note_lst.removeChild(delete_btn);
        note_lst.removeChild(edit_btn);
    }


    document.getElementById("note").value = "";
}