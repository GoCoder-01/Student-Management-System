import "../css-files/Home.css";
const goHome = ()=>{
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML="";
    mainContent.innerText="";
    mainContent.classList.forEach(className =>{
        if(!className === "main-content"){
            mainContent.classList.remove(className);
        }
    })
};

export default goHome;