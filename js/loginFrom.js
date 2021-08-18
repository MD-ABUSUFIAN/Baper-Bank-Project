// login button handler part

const login=document.getElementById('login-button').addEventListener('click',function(){
    // input email event 
    const emailField=document.getElementById('input-email');
    const userEmail=emailField.value;
   
    // input password event 
    const passwordField=document.getElementById('input-password');
   const userPassword=passwordField.value;
//  input clear part 
emailField.value='';
passwordField.value='';

// valudation emailField and password conditaion 
if (userEmail=='chamok.computers@gmail.com' && userPassword==01722123801) {
    window.location.href=("banking.html")
}
else{
    console.log("ivalid User & Password Plz Enter Your Valid User & Password");
}

})