
const showStudent = async() => {
    // await fetch("Student.json").then(response => response.json()).then(data => console.log(data)).catch((error) => console.log(error));

    const mainContainer = document.querySelector('.main-content');
    mainContainer.innerHTML="";
    const tableContainer = document.createElement("div");
    tableContainer.classList.add('table-container');

    const response = await fetch("Student.json");
    const data = await response.json();
    const students = Array.from(data);

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
        classData.innerText=  `${student.className}`;
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