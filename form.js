let email=document.getElementById("inputEmail4");
let pwd = document.getElementById("password");
let pwdc = document.getElementById("inputPassword5");
let ph = document.getElementById("phone");
let error = document.getElementById("error");
let error2 = document.getElementById("error1");
let error3 = document.getElementById("error2");
let error4 = document.getElementById("error3");

function validateEmail(){

    
    if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email.value)){
        error.innerHTML = "valid";
        error.style.color ="green";
        return true;
    }
    else {
        error.innerHTML = "invalid";
        error.style.color ="red";
        
        return false;
    }
}
function validatePwd(){

    
    if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(pwd.value)){
        error2.innerHTML = "valid";
        error2.style.color ="green";
        return true;
    }
    else{
        error2.innerHTML = "invalid";
        error2.style.color ="red";
        
        return false;
    }

}
    function confirmPwd(){

        if(pwdc.value==pwd.value){

            error3.innerHTML ="password match"
            error3.style.color ="green";
            return true;
            

        }
        else{
            error3.innerHTML="incorrect"
            error3.style.color ="red";
            
            return false;
            
        }

    }
    function phoneno(){

        if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(ph.value)){

            error4.innerHTML = "valid";
            error4.style.color ="green";
            
            return true;
        }
        else{   
            error4.innerHTML="incorrect"
            error4.style.color ="red";
            return false;

        }

        }
    function callfn(){

        if((validateEmail()&&validatePwd()&&confirmPwd()&&phoneno())==false){

            return false;
        }
        else{
            return true;
        }
    }
   

      

    function checkPasswordStrength() {
        var number = /([0-9])/;
        var alphabets = /([a-zA-Z])/;
        var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
        
        if($('#password').val().length<6) {
            $('#password-strength-status').removeClass();
            $('#password-strength-status').addClass('weak-password');
            $('#password-strength-status').html("Weak (should be atleast 6 characters.)");
        } else {  	
            if($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(special_characters)) {            
                $('#password-strength-status').removeClass();
                $('#password-strength-status').addClass('strong-password');
                $('#password-strength-status').html("Strong");
            } else {
                $('#password-strength-status').removeClass();
                $('#password-strength-status').addClass('medium-password');
                $('#password-strength-status').html("Medium (should include alphabets, numbers and special characters.)");
            } 
        }
    }


