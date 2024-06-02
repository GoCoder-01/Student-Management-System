import "../css-files/DeleteStudent.css";
import "../utility.css";
const deleteStudent = () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML="";
    mainContent.innerText="";
    const formContainer = document.createElement("div");
    formContainer.classList.add('delete-container');
    const head = document.createElement('div');
    head.classList.add('head');
    head.classList.add('flex-center');
    const h1 = document.createElement('h1');
    h1.innerText = "Delete Student";
    head.appendChild(h1);
    formContainer.appendChild(head);
    mainContent.appendChild(formContainer);

    
}

export default deleteStudent;