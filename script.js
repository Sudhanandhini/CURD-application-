// alert();    is used to create alert message box

var selectedRow = null;

// show alerts
function showAlert(message , className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector("alert").remove(), 300);
    
}

// clear all field
function clearField(){
    document.querySelector("#firstname").value ="";
    document.querySelector("#course").value="";
    document.querySelector("#rollno").value="";
}

// add data
document.querySelector("#student-form").addEventListener("submit",(e) =>{
    e.preventDefault();
    
    // get form value
    const firstName = document.querySelector("#firstname").value;
    const courseName = document.querySelector("#course").value;
    const rollNo = document.querySelector("#rollno").value;
    
    // validate
    if(firstName == " " || course== "" || rollNo==""){
        showAlert("please fill in all fields", "danger" )
    } 
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${firstName}</td>
                <td>${courseName}</td>
                <td>${rollNo}</td>
                <td><a href="#" class="btn btn-warning btn-sm edit"> Edit</a>
                   <a href="#" class="btn btn-danger btn-sm delete"> Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("student details added","success")
        }
        else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = courseName;
            selectedRow.children[2].textContent = rollNo;
            selectedRow = null;
            showAlert("Student Info Edited","info");
        }
        clearField();
    }   

} );

// edit data
document.querySelector("#student-list").addEventListener("click",(e) =>{
     target = e.target;
     if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstname").value = selectedRow.children[0].textContent;
        document.querySelector("#course").value =  selectedRow.children[1].textContent;
        document.querySelector("#rollno").value =  selectedRow.children[2].textContent;
               
     }
} );


// delete data
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("student Data Deleted", "danger");
    }
});
