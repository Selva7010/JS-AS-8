var inputData=document.getElementById("input-data")
var toDodata=document.querySelector(".todo-data")
var adBtn1=document.getElementById("add")
var editBtn=document.getElementById("edit")
var delbtn=document.getElementById("del")

adBtn1.addEventListener("click", function(){
    var data=document.createElement("tr")
    data.setAttribute("class","table-data")
    data.innerHTML=`<td class="p-3 fw-bold">${inputData.value}</td>
                     <td class="text-center"><button class="btn btn-success" onclick="editTask(event)">Edit <i class="bi bi-pencil-square"></i></button></td>
                     <td class="text-center"><button class="btn btn-danger" onclick="del(event)">Delete <i class="bi bi-trash-fill" style="color: rgb(255, 255, 255);"></i></button></td>`
                    
   toDodata.append(data) 
   inputData.value=""
})

function del(event){
    event.target.closest("tr").remove()
}



function editTask(event) {
    let editBtn1 = event.target.closest("button")
    let row = editBtn1.closest("tr")
    let taskCell = row.querySelector("td")

    if (editBtn1.innerText.trim().startsWith("Edit")) {
        // Switch to editable mode
        let currentText = taskCell.innerText
        taskCell.innerHTML = `<input type="text" class="form-control" value="${currentText}">`
        editBtn1.innerHTML = `Save <i class="bi bi-check-lg"></i>`
        editBtn1.classList.remove("btn-success")
        editBtn1.classList.add("btn-primary")
    } 
    else {
        // Save the edited text
        let inputField = taskCell.querySelector("input")
        taskCell.innerHTML = inputField.value
        editBtn1.innerHTML = `Edit <i class="bi bi-pencil-square"></i>`
        editBtn1.classList.remove("btn-primary")
        editBtn1.classList.add("btn-success")
    }
}
    