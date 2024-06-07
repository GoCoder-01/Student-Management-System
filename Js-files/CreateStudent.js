import "../css-files/CreateStudent.css";
import "../utility.css";
import axios from "axios";
const createStudent = () => {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML="";
    mainContent.innerText="";
    mainContent.classList.add("create-student");
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    formContainer.classList.add('flex');
    formContainer.classList.add('col-dir');

    const head = document.createElement('div');
    head.classList.add('head');
    head.classList.add('flex-center');
    const h1 = document.createElement('h1');
    h1.innerText = "Create New Student";
    head.appendChild(h1);
    formContainer.appendChild(head);

    const studentForm = document.createElement('form');

    const nameInput = document.createElement('input');
    nameInput.classList.add('input');
    nameInput.classList.add('text-input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('placeholder', 'Student Name');

    const classInput = document.createElement('input');
    classInput.classList.add('input');
    classInput.setAttribute('type', 'text');
    classInput.setAttribute('id', 'currentClass');
    classInput.setAttribute('placeholder', 'Current Class');

    const genderInput = document.createElement('input');
    genderInput.classList.add('input');
    genderInput.setAttribute('type', 'text');
    genderInput.setAttribute('id', 'gender');
    genderInput.setAttribute('list', 'gender-list');
    genderInput.setAttribute('placeholder', 'Select Gender');

    const genderList=document.createElement('datalist');
    genderList.setAttribute('id', 'gender-list');

    const maleOptn = document.createElement('option');
    maleOptn.setAttribute('value', 'MALE');
    maleOptn.innerText='MALE';

    const femaleOptn = document.createElement('option');
    femaleOptn.setAttribute('value', 'FEMALE');
    femaleOptn.innerText="FEMALE";

    genderList.appendChild(maleOptn);
    genderList.appendChild(femaleOptn);

    const birthInput = document.createElement('input');
    birthInput.classList.add('input');
    birthInput.setAttribute('type', 'date');
    birthInput.setAttribute('name', 'dateOfBirth');
    birthInput.setAttribute('id', 'dob');
    
    const buttonCont = document.createElement('div');
    buttonCont.classList.add('buttons');
    buttonCont.classList.add('flex');
    buttonCont.classList.add('justify-btwn');

    const cancel = document.createElement('button');
    cancel.classList.add('button');
    cancel.classList.add('bg-danger');
    cancel.setAttribute('id', 'cancel-btn');
    cancel.innerText= "Cancel";

    const submit = document.createElement('button');
    submit.classList.add('button');
    submit.classList.add('bg-success');
    submit.setAttribute('id', 'confirm-btn');
    submit.innerText = "Save & Continue";

    submit.addEventListener('click', async () =>{
        const studentName=document.getElementById('name').value;
        const admClass = document.getElementById('currentClass').value;
        const studentGender =document.getElementById('gender').value;
        const dob = document.getElementById('dob').value;

        // Sending post reqest to server using FetchAPI
        /*
        const data = {
            name : studentName,
            admittedToClass : admClass,
            gender : studentGender,
            dob : dob
        };

        console.log('Fetch started');
        const url = 'http://localhost:8080/api/create';
        const reque = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const response  = await fetch(url, reque);
        const d = await response.json();
        alert(d);
        */

        axios({
            method: 'post',
            url: 'http://localhost:8080/api/create',
            data: {
                name : studentName,
                admittedToClass : admClass,
                gender : studentGender,
                dob : dob
            }
        }).then(response => {
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.data);
            console.log(response.request);
        })
    });
    buttonCont.appendChild(cancel);
    buttonCont.appendChild(submit);
    
    studentForm.appendChild(nameInput);
    studentForm.appendChild(classInput);
    studentForm.appendChild(genderInput);
    studentForm.appendChild(genderList);
    studentForm.appendChild(birthInput);
    studentForm.appendChild(buttonCont);

    formContainer.appendChild(studentForm);
    mainContent.appendChild(formContainer);
}

function sendReq(){
    
}

export default createStudent;