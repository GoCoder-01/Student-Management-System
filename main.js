import createStudent from "./Js-files/CreateStudent";
import showStudent from "./Js-files/ShowStudent.js";
import editStudent from "./Js-files/EditStudent.js";
import deleteStudent from "./Js-files/DeleteStudent.js";
import goHome from "./Js-files/Home.js";
document.addEventListener("DOMContentLoaded", () => {
    const home = document.getElementById('home');
    const addStudent = document.getElementById('add-student');
    const viewStudent = document.getElementById('view-student');
    const updateStudent = document.getElementById('update-student');
    const removeStudent = document.getElementById('remove-student');

    home.addEventListener('click', goHome);
    addStudent.addEventListener('click', createStudent);
    viewStudent.addEventListener('click', showStudent);
    updateStudent.addEventListener('click', editStudent);
    removeStudent.addEventListener('click', deleteStudent);
});

