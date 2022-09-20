const generator = document.querySelector('.generate-btn');
let randomNumber = document.querySelector('.random-number');
const submitBtn = document.querySelector('.submit-btn');
var inputBox = document.querySelector('.input-number');

function btnNumber(val){
    inputBox.value += val;
    inputBox.setAttribute('value', inputBox.value )
    document.querySelector('.notify.success').style.display = 'none';
    document.querySelector('.notify.error').style.display = 'none';
}
generator.addEventListener('click', function() {
    const randNumber = Math.floor(Math.random() * (9999 - 1000 +1)) + 1000;
    randomNumber.setAttribute('value', randNumber);
    document.querySelector('.notify.success').style.display = 'none';
    document.querySelector('.notify.error').style.display = 'none';
})

submitBtn.addEventListener('click', function() {
    if(randomNumber.value === inputBox.value){
        document.querySelector('.notify.success').style.display = 'block';
        document.querySelector('.notify.error').style.display = 'none';

    }else{
        document.querySelector('.notify.success').style.display = 'none';
        document.querySelector('.notify.error').style.display = 'block';
    }
    randomNumber.setAttribute('value', '');
    inputBox.setAttribute('value', '');
    inputBox.value = '';
})


