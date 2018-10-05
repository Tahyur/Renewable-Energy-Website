 
 window.onload = function(){
        document.getElementById('submit').onclick = validate;
    }
 
 function validate(){
    
        if(!checkName())
             sweetAlert('Please enter a valid name with letters only','between 2-8 letters','error');
       else if(!checkEmail())
            sweetAlert('Invalid Email','','error');
        else if(!checkPhone())
            sweetAlert('Please enter valid phone number ','e.g. 6476850000','error');
        else if (!checkMessage())
            sweetAlert('Message Empty','','error');
		else
		{             
            sweetAlert('Thank you for submitting the form, we will contact you soon.','','success');
            setTimeout(function () { window.location.reload(1);}, 5000);  // After 5 secs   
        }
         
    }

function checkName(){
        var isCheckName= false;
        var fname = document.getElementById('fname');
        var patternFirst = /^[a-zA-Z]{2,8}$/;
        var errfname = document.getElementById('errfname');
    
     if(patternFirst.test(fname.value) && (!(fname.value == '')))
        {
            errfname.innerHTML = " ";
            isCheckName = true;
        }
    
    return isCheckName;
}

function checkEmail(){
    var isCheckEmail = false;
        var email = document.getElementById('email');
        var erremail = document.getElementById('erremail');
        var patternEmail = /^[a-zA-Z]+@+[a-zA-Z]+\.+[a-zA-Z]{2,4}$/;
    
        if(patternEmail.test(email.value))
            {
            erremail.innerHTML = " ";
            isCheckEmail = true;
        }
    return isCheckEmail;
}

function checkPhone(){
        var isCheckPhone= false;
        var phone = document.getElementById('phone');
        var patternPhone = /^[0-9]{10}$/;
        var errphone = document.getElementById('errphone');
    
    if(patternPhone.test(phone.value))
         {
            errphone.innerHTML = " ";
            isCheckPhone = true;
        }
    return isCheckPhone;
}

function checkMessage(){
    var isCheckMsg = false;
    var msg = document.getElementById('text');
    var errmsg = document.getElementById('errmsg');
    
    if (!(msg.value == ''))
        isCheckMsg = true;
    
    return isCheckMsg;
}