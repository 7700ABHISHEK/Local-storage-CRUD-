let name1 = document.getElementById("name");
let email = document.getElementById("email");
let course = document.getElementById("course");
let studentArr = JSON.parse(localStorage.getItem("students")) || [];


document.addEventListener("DOMContentLoaded", () => {
    let index = JSON.parse(localStorage.getItem("editIndex"));
    let studentDetail = JSON.parse(localStorage.getItem("editStudent"));

    if (index !== null && studentDetail) {
        name1.value = `${studentDetail.name1}`;
        email.value = `${studentDetail.email}`;
        course.value = `${studentDetail.course}`;
        document.querySelector(`input[value=${studentDetail.gender}]`).checked = true;

        let submitBtn = document.getElementById("submitBtn")
        submitBtn.innerHTML = "Update";
        // submitBtn.addEventListener("click", function () {
        //     studentArr.splice(index, 1, studentObj)
        // })
    }


})

document.getElementById("submitBtn").addEventListener("click", () => {
    let gender = document.querySelector(`input[type="radio"]:checked`);    

    if (name1.value == "" || email.value == "" || course.value == "0" || gender == null) {
        Swal.fire({
            title: "Empty",
            text: "Please, Enter value...",
            icon: "error",
            backdrop: false,
        });
        return;
    }

    let studentObj = {
        name1: name1.value,
        email: email.value,
        course: course.value,
        gender: gender.value,
    }

    let index = JSON.parse(localStorage.getItem("editIndex"));
    let studentDetail = JSON.parse(localStorage.getItem("editStudent"));

    if(index !== null && studentDetail){
        studentArr[index] = studentObj;
        localStorage.setItem("students", JSON.stringify(studentArr))
        window.location = "./studentDetails.html"

    } else{
    
        let studentArr = JSON.parse(localStorage.getItem("students")) || [];
    
        studentArr.push(studentObj);
    
        localStorage.setItem("students", JSON.stringify(studentArr))
    
        window.location = "./studentDetails.html";
    }

})