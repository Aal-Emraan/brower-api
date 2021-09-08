const addItem = () => {
    const input = document.getElementById('input-field');
    if(input.value === ''){
        return;
    }
    const item = document.createElement('li');
    item.innerText = input.value;
    const list = document.getElementById('list');
    list.appendChild(item);
    setItem(input.value);
    input.value = '';
}

const getCart = () => {
    const getcart = localStorage.getItem('cart');
    let cartObj;
    if(getcart){
        cartObj = JSON.parse(getcart);
    }else{
        cartObj = {};
    }
    return cartObj;
}

const setItem = name => {
    const cart = getCart();
    cart[name] = 1;
    const stringified = JSON.stringify(cart);
    localStorage.setItem('cart', stringified);
}