const form = document.getElementById("feedbackForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const course = document.getElementById("course");
const feedback = document.getElementById("feedback");

const output = document.getElementById("output");
const sessionUser = document.getElementById("sessionUser");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const courseError = document.getElementById("courseError");
const feedbackError = document.getElementById("feedbackError");

function displayStoredData() {

    let data = JSON.parse(localStorage.getItem("feedback"));

    if(data){

        output.innerHTML = `
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Course:</b> ${data.course}</p>
        <p><b>Feedback:</b> ${data.feedback}</p>
        `;

    }
    else{

        output.innerHTML="No feedback stored.";
    }

    let currentUser = sessionStorage.getItem("student");

    if(currentUser){
        sessionUser.innerHTML="Current Session User: " + currentUser;
    }
    else{
        sessionUser.innerHTML="";
    }

}

displayStoredData();

function clearErrors(){
    nameError.innerHTML="";
    emailError.innerHTML="";
    courseError.innerHTML="";
    feedbackError.innerHTML="";
}

name.addEventListener("input",()=>nameError.innerHTML="");
email.addEventListener("input",()=>emailError.innerHTML="");
course.addEventListener("change",()=>courseError.innerHTML="");
feedback.addEventListener("input",()=>feedbackError.innerHTML="");

form.addEventListener("submit",function(e){

    e.preventDefault();

    clearErrors();

    let valid=true;

    if(name.value.trim()==""){
        nameError.innerHTML="Student Name is required";
        valid=false;
    }

    if(email.value.trim()==""){
        emailError.innerHTML="Email is required";
        valid=false;
    }
    else{

        let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!pattern.test(email.value)){
            emailError.innerHTML="Enter a valid email";
            valid=false;
        }

    }

    if(course.value==""){
        courseError.innerHTML="Select a course";
        valid=false;
    }

    if(feedback.value.trim()==""){
        feedbackError.innerHTML="Feedback cannot be empty";
        valid=false;
    }

    if(valid){

        let studentData={

            name:name.value,
            email:email.value,
            course:course.value,
            feedback:feedback.value

        };

        localStorage.setItem("feedback",JSON.stringify(studentData));

        sessionStorage.setItem("student",name.value);

        displayStoredData();

        alert("Feedback Submitted Successfully!");

        form.reset();
    }

});

document.getElementById("deleteBtn").addEventListener("click",function(){

    localStorage.removeItem("feedback");
    sessionStorage.removeItem("student");

    output.innerHTML="No feedback stored.";
    sessionUser.innerHTML="";

});