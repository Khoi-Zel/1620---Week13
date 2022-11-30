function changeBGCOlor(){
    document.body.classList.toggle("pinkBG");
}

function submitHandler(){
    const firstNameInput = document.querySelector("#firstname");
    const lastNameInput = document.querySelector("#lastname");
    const progNameInput = document.querySelector("#progName");
    let obj = {
        firstName: firstNameInput.value, 
        lastName: lastNameInput.value, 
        progName: progNameInput.value,
    };

    console.log(obj);
    // const CITList = 
    // const CSTList = 

    firstNameInput.value = "";
    lastNameInput.value = "";
    progNameInput.value = "";
}

function clickHandler(event){
    console.log("clicked", event.target)
    if(event.target.textContent === "Change Background Color"){
        changeBGCOlor();
    }

    else if(event.target.textContent === "Submit"){
        submitHandler();
    }
}


document.body.addEventListener("click", clickHandler);