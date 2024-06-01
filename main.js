import createStudent from "./CreateStudent";
import showStudent from "./ShowStudent";
import editStudent from "./EditStudent.js";
import deleteStudent from "./DeleteStudent.js";
import goHome from "./Home.js";
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

