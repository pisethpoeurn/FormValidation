$(document).ready(function(){
    var countError = [];
    $("button").on('click' ,function(){
        var user = $("#user").val();
        var age = $("#age").val();
        var nickName = $("#n_name").val();
        // console.log(user + pass + nickName);
        /// Name cannot empty and cannot only number 
        var isNameValid = user != "" && isNaN(user);
        if(isNameValid){
            setSuccess("#user");
            countError[0] = 0;
        }else {
            setError("#user");
            countError[0] = 1;
        }
        //// Age Should be int number and positive
        var isAgeValid = age != "" && age > 0 && !isNaN(age) && age == parseInt(age) && age.length <= 3;
        if(isAgeValid){
            setSuccess("#age");
            countError[1] = 0;
        }else {
            setError("#age");
            countError[1] = 2;
        }
        /// Nickname must be contain 1 uppercase and at least 9 chars
        var atLeast9Chars = nickName.length >= 9 && nickName != "";
        var atLeast1Uppercase = false;
        for( let i = 0 ; i < nickName.length ; i++){
            var chars =nickName.charAt(i);
            if( isNaN(chars)) {
                var isUppercase = chars.toUpperCase() == chars;
                atLeast1Uppercase = atLeast1Uppercase || isUppercase;
            }
        }
        var isNicknameValid = atLeast9Chars || atLeast1Uppercase ; 
        if( isNicknameValid){
            setSuccess("#n_name");
            countError[2] = 0;
        }else {
            setError("#n_name");
            countError[2] = 3;
        }
        /// all Information correct 
        var allValid = isNameValid && isAgeValid && isNicknameValid 
        if( allValid){
            showMessageSuccess();
        }else {
            showMessageError(countError);
        }

    });
}); 
// /border Success
function setSuccess (success){
    $(success).addClass("border-success").removeClass("border-danger");
}
/// border Error
function setError (error){
    $(error).addClass("border-danger").removeClass("border-success");
}
///Show message success 
var showMessageSuccess = () => {
    var success = "";
    success +=`
        <div class="alert alert-success">
            <strong >Success !</strong>
        </div>
    `;
    $("#message").html(success);
}
/// Show message error
var errorSMS = [ "Name is not empty" , " Age shall be munbers!",
                "NickName shall contain 1 uppercase and 9 chars"]
var showMessageError = (errors) => {
//    for( let i = 0 ; i <errors.length; i++){
//        console.log(errors[i]);
//    }
    var showError = "";
    if( errors[0] == 1){
        showError +=   "-" + errorSMS[0] + "<br>";
    }else {
        showError += "";
    };
    if( errors[1] == 2){
        showError += "-" + errorSMS[1] + "<br>";
    }else {
        showError += "";
    }
    if( errors[2] == 3){
        showError +=  "-" + errorSMS[2] + "<br>";
    }else {
        showError += "";
    }
   $("#message").html(
       `
        <div class="alert alert-danger">
            <strong > ${showError}</strong>
        </div>
    `
);
}