function as()
{
    alert("hlo")
}
let regexp = /^([A-Za-z0-9\.\-]+)\@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
let pwdreg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/;
let phonereg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
function validate(){
 
  
  let email = document.getElementById("email");
  let pwd= document.getElementById("pwd");
  let pwd1 = document.getElementById("pwd1");
  let phone = document.getElementById("phone");
  let error = document.getElementById("error");
  let error2 = document.getElementById("error2");
  let error3 = document.getElementById("error3");
  let error4 = document.getElementById("error4");
   
    if (regexp.test(email.value)&&(pwdreg.test(pwd.value))&&(phonereg.test(phone.value))&&(pwd.value==pwd1.value))
    {
      alert("Signup success");
      return true;  
    }
       
}
