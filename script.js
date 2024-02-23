var FName = document.getElementById("Fname-error")
var LName = document.getElementById("Lname-error")
var EMail = document.getElementById("Email-error")
var PAss = document.getElementById("Pass-error")
var SubmitError = document.getElementById("SubmitError");

function valfname(){
    var fname = document.getElementById("Fname").value;

    if (fname.length == 0) {
        FName.innerHTML = "filed is requried " + "" +'<i class="bi bi-exclamation-circle-fill"></i>';
        return Fname.classList.add("invalid");
    }
    FName.innerHTML = "";
    return  Fname.classList.remove("invalid");

}

function vallname(){
    var lname = document.getElementById("Lname").value;

    if (lname.length == 0) {
        LName.innerHTML = "filed is requried " + "" + ' <i class="bi bi-exclamation-circle-fill"></i>';
        return  Lname.classList.add("invalid");
    }
    LName.innerHTML = "";
    return  Lname.classList.remove("invalid");

}
function valemail(){
    var email = document.getElementById("Email").value;

    if (email.length == 0) {
        EMail.innerHTML =' <i class="bi bi-exclamation-circle-fill"></i>';
        return Email.classList.add("invalid");
    }
    EMail.innerHTML = "";
    return Email.classList.remove("invalid");

}

function valpass(){
    var pass = document.getElementById("Pass").value;

    if (pass.length == 0) {
        PAss.innerHTML = "filed is requried " + ' <i class="bi bi-exclamation-circle-fill"></i>';
        return Pass.classList.add("invalid");
    }
    if (pass.length <= 7) {
        PAss.innerHTML = "filed must contain 8 characters ";
        return Pass.classList.add("invalid");
    }else{
        PAss.innerHTML = "";
    }

    PAss.innerHTML = "";
    return Pass.classList.remove("invalid");

}

// function valform() {
//     if (!vallname()) {
//         SubmitError.style.display = "block";
//         SubmitError.innerHTML = "please fill required filed";
//         setTimeout(function(){SubmitError.style.display = "none";}, 2000);
//         return false;
        
//     }

    
// }

// function valform() {
//     if (!valfname()) {
//         SubmitError.style.display = "block";
//         SubmitError.innerHTML = "please fill required filed";
//         setTimeout(function(){SubmitError.style.display = "none";}, 2000);
//         return false;
        
//     }

    
// }