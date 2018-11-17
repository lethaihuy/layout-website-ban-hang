var CONTANT_USER = 'huylethai';
var CONTANT_PASS = '123';

var inputUsername= document.getElementById('username');
var inputPassword = document.getElementById('password');


var formLogin = document.getElementById('fLogin');

if(formLogin.attachEvent){
    formLogin.attachEvent('submit', onFormSubmit);
}
else{
    formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e){
    var ten = inputUsername.value;
    var mk = inputPassword.value;

    if(ten==CONTANT_USER && mk==CONTANT_PASS){
        // alert('Đăng nhập thành công!');
        return true;
    }
    else{
        alert('Đăng nhập không thành công! Vui lòng kiểm tra lại!');
        return false;
    }
}