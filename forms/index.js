const user = document.getElementById("username");
const pass = document.getElementById("password");
const ema = document.getElementById("email");
const text = document.getElementById("text");
 $("#newCon").hide();

var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var passTwo = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

var alertRedInput = "#8C1010";
var defaultInput = "rgba(10, 180, 180, 1)";

var name = user.value;
// var verify = user.value.match(reg);


document.getElementById("btns").addEventListener("click", () => {
 if(user.value !== "" && pass.value !== "" && 
 ElementInternals.value !== "" && text !==""){
    if( pass.value.match(passTwo)){
        // var url = '/client.html';
        // var url = 'http://127.0.0.1:5500/client.html';
        // Input Password and Submit [6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter]
        // var newWindow = window.open();
        // var myWindow = window.open(url, "", "width=800,height=600");
        // newWindow.document.location.href = "/client.html";
        // window.open(url, "_self");
        // console.log("worked")
       
        alert("Logged On")
         $("#newCon").show();
        $(".form-style-8").hide();
        
    }else{
        console.log("not worked")
    }
    // console.log("Not empty")
 }else{
    alert("Blank Field")
 }

//    console.log("click")
});