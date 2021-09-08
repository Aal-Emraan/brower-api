function print(){
    console.log('hello')
}
// print('hello')
setInterval(print, 3500);
// setTimeout(function(){console.log('hello')}, 3000)

const work = () => {
    const getNumber = prompt("please type a number");
    const result = parseInt(getNumber) + 200;
    alert(result);

}

const show = () => {
    const con = confirm('do you want to see the secret number?')
    const num = 12345;
    if(con){
        alert(num)
    }
}