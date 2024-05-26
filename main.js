document.addEventListener("DOMContentLoaded", () =>{
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
const goHome = () =>{
    alert("go Home");
}

const createStudent = () =>{
    alert("element clicked")
   const mainContent =  document.querySelector('main-content');

}

const showStudent = () =>{
    alert("Student Data is Showing here");
}

const editStudent = () =>{
    alert("Edit Student Here");
}

const deleteStudent = () =>{
    alert("Delete your student from here");
}
