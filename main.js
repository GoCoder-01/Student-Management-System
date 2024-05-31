document.addEventListener("DOMContentLoaded", () => {
    const home = document.getElementById('home');
    const addStudent = document.getElementById('add-student');
    const viewStudent = document.getElementById('view-student');
    const updateStudent = document.getElementById('remove-student');
    const removeStudent = document.getElementById('update-student');

    home.addEventListener('click', goHome);
    addStudent.addEventListener('click', createStudent);
    viewStudent.addEventListener('click', showStudent);
    updateStudent.addEventListener('click', editStudent);
    removeStudent.addEventListener('click', deleteStudent);
});

const goHome = () => {
    alert("GO TO HOME PAGE");
}

const createStudent = () => {
    const mainContent = document.querySelector('.main-content');
    console.log(mainContent);
    if(!document.querySelector('.form-container')){
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

    submit.addEventListener('click', () =>{
        const studentName=document.getElementById('name').value;
        const admClass = document.getElementById('currentClass').value;
        const studentGender =document.getElementById('gender').value;
        const dob = document.getElementById('dob').value;

        const student = {
            name : `${studentName}`,
            admittedToClass : `${admClass}`,
            gender : `${studentGender}`,
            dateOfBirth : `${dob}`
        }
        alert(JSON.stringify(student));
    })

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
    
}

const showStudent = () => {
    alert("RENDERING STUDENT DATA");
}

const editStudent = () => {
    alert("Edit Student Here");
}

const deleteStudent = () => {
    alert("Delete your student from here");
}
