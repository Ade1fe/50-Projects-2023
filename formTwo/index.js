
const fname = document.getElementById("firstname");
const lname = document.getElementById("lastname");
const email = document.getElementById("email");
const pass = document.getElementById("password");
// const text = document.getElementById("text");
//  $("#newCon").hide();
var passTwo = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

document.getElementById("btns").addEventListener("click", () => {
 if(fname.value !== "" && lname.value !== "" ){
    if(pass.value.match(passTwo)){
        alert("Coming Soon")
    }else{
        alert(`incorrect password`)
    }
    
    // console.log("Not empty")
 }else{
    alert("Blank Field")
 }

//    console.log("click")
});