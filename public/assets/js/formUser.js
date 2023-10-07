
// TODOS DIREITOS RESERVADOS  
// CRIADO: 07/10/2023
// AUTOR:  ENAYATOLAH AGIBO BADRU 

const rightSvgTop = document.querySelectorAll('.right-svg-top');
const password = document.querySelector('#password');
const rightSvgBottom = document.querySelectorAll('.right-svg-bottom');
const confirmPassword = document.querySelector('#conf-password');

rightSvgTop.forEach((element) => {
    element.addEventListener('click', () => {
        const visible = element.querySelector('.visible');
        const hidden = element.querySelector('.hidden');

        visible.classList.toggle('active');
        hidden.classList.toggle('active');

        if (visible.classList.contains('active')) {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    });
});

rightSvgBottom.forEach((element) => {
    element.addEventListener('click', () => {
        const visible = element.querySelector('.visible');
        const hidden = element.querySelector('.hidden');

        visible.classList.toggle('active');
        hidden.classList.toggle('active');

        if (visible.classList.contains('active')) {
            confirmPassword.type = 'text';
        } else {
            confirmPassword.type = 'password';
        }
    });
});
