document.addEventListener("DOMContentLoaded", ()=>{
    localStorage.removeItem("editIndex");
    localStorage.removeItem("editStudent");
});

let studentBody = document.getElementById("studentBody");
let studentArr = JSON.parse(localStorage.getItem("students")) || [];

if(studentArr.length == 0){
    Swal.fire("No, Student found");
}

function display(){
    studentBody.innerHTML = "";
    studentArr.forEach((student, idx) => {
    

    studentBody.innerHTML +=
        `
        <tr class="table-secondary">
            <td>${student.name1}</td>
            <td>${student.email}</td>
            <td>${student.course == 1 ? "Full Stack Web Development"
            : student.course == 2 ? "UI/UX Design"
                : student.course == 3 ? "AI/ML"
                    : "Cyber Security"
            }
            </td>
            <td>${student.gender}</td>
            <td class="d-flex gap-2">
                <div>
                    <button class="btn btn-success" onclick="editStudent(${idx})"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn btn-danger" onclick="deleteData(${idx})" ><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `
});
}

function editStudent(idx){
    let editIdx = localStorage.setItem("editIndex", idx);
    let editStudent = localStorage.setItem("editStudent", JSON.stringify(studentArr[idx]));

    window.location = "./index.html"

}

display();

function deleteData(idx){
    studentArr.splice(idx, 1);
    localStorage.setItem("students", JSON.stringify(studentArr));
    display();
}
