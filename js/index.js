function validation(){
    var user =document.getElementById("user").value;
    var pass =document.getElementById("pass").value;
    var cpass =document.getElementById("cpass").value;
    var mnum =document.getElementById("mnum").value;
    var email =document.getElementById("email").value;



    
if (user==""){
    document.getElementById("username").innerHTML="Username is required";
    return false;
}

if (pass==""){
    document.getElementById("password").innerHTML="Password is required";
    return false;
}

if (cpass==""){
    document.getElementById("confirmpassword").innerHTML="Confirm password is required";
    return false;
}

if (mnum==""){
    document.getElementById("mobilenumber").innerHTML="Mobile Number is required";
    return false;
}

if (email==""){
    document.getElementById("youremail").innerHTML="Email is required";
    return false;
}

else{
    document.write("<h1>Congratulation your resgistration succesful</h1>")
}

}
