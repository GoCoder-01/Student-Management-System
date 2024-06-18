import "../css-files/DeleteStudent.css";
import "../utility.css";
import axios from "axios";
const deleteStudent = () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML="";
    mainContent.innerText="";

    const deleteContainer = document.createElement("div");
    deleteContainer.classList.add('delete-container');

    const head = document.createElement('div');
    head.classList.add('head');
    head.classList.add('flex-center');
    const h1 = document.createElement('h1');
    h1.innerText = "Delete Student";
    
    head.appendChild(h1);
    deleteContainer.appendChild(head);
    
    const deleteForm = document.createElement('div');
    deleteForm.classList.add('delete-form');
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'studentName');
    nameInput.classList.add('delete-input');
    nameInput.placeholder = 'Enter Student Name';

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', 'delete-btn');
    deleteBtn.classList.add('btn');
    deleteBtn.innerText="Delete";
    deleteForm.appendChild(nameInput);

    deleteForm.appendChild(nameInput);
    deleteForm.appendChild(deleteBtn);
    deleteContainer.appendChild(deleteForm);
    mainContent.appendChild(deleteContainer);
    
    document.getElementById('delete-btn').addEventListener('click', async () =>{
      const sName = document.getElementById('studentName').value;
      const response  = await axios.delete(`http://localhost:8080/api/delete-student/${sName}`);
      console.log(response.data);
      });
}

export default deleteStudent;