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
    const cart = getCart();
    let num;
    if(!cart[value]){
        num = 1;
    }else{
        num = cart[value] + 1
    }
    item.innerText = `${value} ${num}`;
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
    if(cart[name]){
        cart[name] += 1;
    }else{
        cart[name] = 1;
    }
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
    document.getElementById('list').textContent= '';
    localStorage.removeItem('cart');   
}