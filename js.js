// const username = document.querySelector("#username");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const confirmPassword = document.querySelector("#confirmPassword");
// const form = document.querySelector("#form");

// const showError= (input,message)=>{
//     let parentElement = input.parentElement;
//     parentElement.classList = "form-control error";
//     const small = parentElement.querySelector("small");
//     small.innerHTML = message;
// }
// const showSuccess= (input)=>{
//     let parentElement = input.parentElement;
//     parentElement.classList = "form-control success";
//     // const small = parentElement.querySelector("small");
//     // small.innerHTML = message;
// }

// const checkEmpty = (elements)=>{
//     elements.forEach ((element)=>{
        
//         if (element.value === ""){
//             showError(element,"box ku waa madhan");
//         }
//         else{
//             showSuccess(element);
//         }

//     });
// }

// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     checkEmpty ([username, email , password, confirmPassword]);
// });

//----------------------------------------------------------------------------------------------------------

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector("#form");
 //hadii aad inputka ka tagto isaga oo madhan waxa uu ku so saraya calmad guduud ah

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     if(username.value === ""){
//         username.parentElement.classList = "form-control error";
//     }
// });

const showError = (input ,message)=>{
    let parentElement = input.parentElement;
    parentElement.classList = "form-control error";
    const small = parentElement.querySelector("small");
    small.innerHTML = message;

}
const showSuccess = (input)=>{
    const parentElement=input.parentElement;
    parentElement.classList = "form-control success";
}

const checkBox = (elements)=>{
    elements.forEach((som)=>{
        if(som.value == ""){
            showError(som,"fadlan box ka buxi");
          
        }
        else{
            showSuccess(som);
        }
    });
}
//cheked the email
const checkEmail = (email)=>{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email.value)){
        showSuccess(email);
    }else{
        showError(email,"Email is invalid");
    }
}
//check password min and max charecters
const checkPassword = (input, min, max)=>{
    if (input.value.length < min){
        showError(input, `password minmam is ${min}`);
    }else if (input.value.length > max){
        showError(input,`pasword maximam is ${max}`);
    }
    else{
        showSuccess(input);
    }
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    checkBox([username,email,password,confirmPassword]);
    checkEmail(email);//function
    checkPassword(password,5,10);
    checkPassword(confirmPassword,5,10);
});