import "../css-files/EditStudent.css";
const editStudent = () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML="";
    mainContent.innerText="";

    const div = document.createElement('div');
    div.classList.add('update-container');
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    const heading = document.createElement('h1');
    heading.innerText="UPDATE STUDENT";
    headingContainer.appendChild(heading);
    div.appendChild(headingContainer);
    const updateContainer = document.createElement('div');
    updateContainer.classList.add('update-data');

    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Your name');
    name.classList.add('update-input');

    const currentClass = document.createElement('input');
    currentClass.setAttribute('type', 'text');
    currentClass.setAttribute('placeholder', 'Your class');
    currentClass.classList.add('update-input');

    const gender =  document.createElement('input');
    gender.setAttribute('placeholder', 'gender');
    const datalist = document.createElement('datalist');
    const optionMale = document.createElement('option');
    optionMale.innerText="MALE";
    const optionFemale = document.createElement('option');
    optionFemale.innerText="FEMALE";
    datalist.appendChild(optionMale);
    datalist.appendChild(optionFemale);
    datalist.setAttribute('id', 'options');
    gender.setAttribute('list','options');
    gender.appendChild(datalist);
    gender.classList.add('update-input');

    const dateOfBirth = document.createElement('input');
    dateOfBirth.setAttribute('type', 'date');
    dateOfBirth.setAttribute('placeholder', 'DD-MM-YYYY');
    dateOfBirth.classList.add('update-input');

    const updateButton = document.createElement('button');
    updateButton.innerText="UPDATE";
    updateButton.classList.add('update-btn');
    updateButton.classList.add('update-input');

    updateContainer.appendChild(name);
    updateContainer.appendChild(currentClass);
    updateContainer.appendChild(gender);
    updateContainer.appendChild(dateOfBirth);
    updateContainer.appendChild(updateButton);
    div.appendChild(updateContainer);
    mainContent.appendChild(div);
}
export default editStudent;