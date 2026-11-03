
let std = document.querySelector("#student-container");

std.innerHTML = " ";
    async function getStudents() {
        let response = await fetch("http://localhost:3000/students");
        let data = await response.json();
        
        data.forEach((dt) => {
            let div = document.createElement("div");
            div.innerText = `
                Name: ${dt.name} 
                Email: ${dt.email}
                Course: ${dt.course}`
            ;
            std.appendChild(div);
        });
    }; 

getStudents();

let form = document.querySelector("#student-form");
let name = document.querySelector("#student-name");
let email = document.querySelector("#student-email");
let course = document.querySelector("#student-course");


form.addEventListener("submit" ,async (event)=>{
    event.preventDefault();

    let studentName = name.value;
    let studentEmail = email.value;
    let studentCourse = course.value ;

    let student = {
        name : studentName ,
        email : studentEmail ,
        course : studentCourse
    }

    let response = await fetch("http://localhost:3000/students",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(student)
    });

    form.reset();
    await getStudents();

});