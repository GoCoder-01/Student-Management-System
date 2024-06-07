import "../css-files/ShowStudent.css"
import axios from "axios";
const showStudent = async () => {
    // await fetch("Student.json").then(response => response.json()).then(data => console.log(data)).catch((error) => console.log(error));

    // await fetch('http://localhost:8080/api/students').then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));

    // fetch('http://localhost:8080/api/students', {
    //     mode: 'cors'
    // })
    // .then(Response => { 
    //     console.log(Response);
    //     Response.json();

    // })
    // .then(data => console.log(data));

    let response="";
    try {
        response = await axios.get('http://localhost:8080/api/students');
    } catch (error) {
        console.log(error);
    }

    console.log(response.data);

    const mainContainer = document.querySelector('.main-content');
    mainContainer.innerHTML="";
    const tableContainer = document.createElement("div");
    tableContainer.classList.add('table-container');

    
    const students = response.data;

    const table = document.createElement('table');

    const row = document.createElement('tr');
    const nameHead = document.createElement("th");
    nameHead.innerText= "STUDENT NAME";

    const classHead = document.createElement("th");
    classHead.innerText= "CLASS";

    const dobHead = document.createElement("th");
    dobHead.innerText= "BIRTH DATE";

    const genderHead = document.createElement("th");
    genderHead.innerText= "GENDER";

    row.appendChild(nameHead);
    row.appendChild(classHead);
    row.appendChild(dobHead);
    row.appendChild(genderHead);

    table.appendChild(row);

    students.forEach(student => {
        const dataRow = document.createElement("tr");
        const nameData = document.createElement('td');
        const classData = document.createElement('td');
        const dobData = document.createElement('td');
        const genderData = document.createElement('td');
        nameData.innerText= `${student.name}`;
        classData.innerText=  `${student.admittedToClass}`;
        dobData.innerText=  `${student.dob}`;
        genderData.innerText=  `${student.gender}`;

        dataRow.appendChild(nameData);
        dataRow.appendChild(classData);
        dataRow.appendChild(dobData);
        dataRow.appendChild(genderData);

        table.appendChild(dataRow);
    });
    tableContainer.appendChild(table);
    mainContainer.appendChild(tableContainer);
}

export default showStudent;