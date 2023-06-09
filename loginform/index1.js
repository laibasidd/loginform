function validate(){
    let username=document.querySelector("#uname").value;
    let password=document.querySelector("#pass1").value;
    let email=document.querySelector("#email1").value;

   if(username.length<5 || password.length<5){
        let com=document.querySelector("#myname").innerHTML="Name Must Contain Atleast 6 Character"
        let con=document.querySelector("#mypass").innerHTML="Password Should be 6 Character long"
        return false;
         
      } 
   else{
    window.location.assign("landing.html");
    alert("login successfully")
    return true ;
        
   }
}
