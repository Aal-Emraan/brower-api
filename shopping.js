const addItem = () => {
    const input = document.getElementById('input-field');
    const value = input.value;
    if(!value){
        return;
    }
    add(value);
    input.value = '';
}

const add = (value) => {
    const item = document.createElement('li');
    item.innerText = value;
    const list = document.getElementById('list');
    list.appendChild(item);
    setItem(value);
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
    const cartcheck = JSON.stringify(cart);
    cart[name] = 1;
    const stringified = JSON.stringify(cart);
    localStorage.setItem('cart', stringified);
}

const prevCart = () => {
    const cart = getCart();
    for(const item in cart){
        add(item);
    }
/*     const prevCart = JSON.parse(localStorage.getItem('cart'));
    console.log(prevCart);
    if(prevCart){
        for(c in prevCart){
            const list = document.getElementById('list');
            const li = document.createElement('li');
            li.innerText = c;
            list.appendChild(li);
        }
    } */
}
prevCart()

const placeOrder = () => {
    const ul = document.getElementById('list');
    ul.innerHTML = '';
    localStorage.removeItem('cart');
    
}