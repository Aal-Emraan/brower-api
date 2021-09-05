const show = () => {
    alert('this is an alert.')
}

const hello = () => {
    const res = confirm('are you confirm?');
    if(res === true){
        let money = prompt('please provide money.');
        alert('you have given '+ money + ' taka')
    }else{
        alert('ok thanks...')
        open('https://google.com');
        close('https://google.com')
    }
}

const info = () => {
    const name = prompt('what is your name?');
    const address = prompt('what is your address?');
    const phone = prompt('what is your phone number?')
    alert(`Your name is ${name}. Your address is ${address} and your phone number is ${phone}.`)
}