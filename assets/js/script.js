let name1 = document.getElementById("name");
let email = document.getElementById("email");
let course = document.getElementById("course");

document.getElementById("submitBtn").addEventListener("click", () => {
    let gender = document.querySelector(`input[type="radio"]:checked`);

    if(name1.value == "" || email.value == "" || course.value == "" || !gender){
        Swal.fire({
            title: "Empty",
            text: "Please, Enter value...",
            icon: "error",
            backdrop : false,
          });
    }

    let studentObj = { 
        name1: name1.value,
        email: email.value,
        course: course.value, 
        gender: gender.value,
    }

    let studentArr = JSON.parse(localStorage.getItem("students")) || [];

    studentArr.push(studentObj);

    localStorage.setItem("students", JSON.stringify(studentArr))

    window.location = "./studentDetails.html";
})