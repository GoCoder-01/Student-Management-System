import "../css-files/DeleteStudent.css";
import "../utility.css";
const deleteStudent = () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML="";
    mainContent.innerText="";

    // const deleteContainer = document.createElement("div");
    // deleteContainer.classList.add('delete-container');

    // const head = document.createElement('div');
    // head.classList.add('head');
    // head.classList.add('flex-center');
    // const h1 = document.createElement('h1');
    // h1.innerText = "Delete Student";
    
    // head.appendChild(h1);
    // deleteContainer.appendChild(head);
    
    // const deleteForm = document.createElement('div');
    // deleteForm.classList.add('delete-form');
    // const nameInput = document.createElement('input');
    // nameInput.classList.add('delete-input');
    // nameInput.type = 'text';
    // nameInput.placeholder = 'Enter Student Name';

    // const deleteBtn = document.createElement('button');
    // deleteBtn.classList.add('btn');
    // deleteBtn.innerText="Delete";
    // deleteForm.appendChild(nameInput);

    // deleteForm.appendChild(nameInput);
    // deleteForm.appendChild(deleteBtn);
    // deleteContainer.appendChild(deleteForm);

    mainContent.innerHTML=`<div class="delete-container">
    <div class="head flex-center">
      <h1>Delete Student</h1>
    </div>
    <div class="delete-form">
      <input class="delete-input" type="text" name="name" id="studentName" placeholder="Student Name">
      <button class="btn" id="delete-btn">Delete</button>
    </div>
  </div>
    `;
    document.getElementById('delete-btn').addEventListener('click', () =>{
        alert("Form is submitted");
    });
    mainContent.appendChild(deleteContainer);

}

export default deleteStudent;