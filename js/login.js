// login button event handler 
document.getElementById('login-button').addEventListener('click',function(){
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if(email.value == 'hmdshakil4444@gmail.com' && password.value == '1234'){
        window.location.href = 'banking.html';
    }
    else{
        console.log('invalid email or password.');
    }
})

