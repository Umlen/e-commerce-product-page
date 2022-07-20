window.onload = () => {
    if (document.documentElement.clientWidth <= 480) {
        mobileRes();
    }

    counter();
    mobileMenuOpen();
    mobileMenuClose();
    openCloseCart();
    let addBtn = document.getElementById('add-to-cart-btn');
    addBtn.addEventListener('click', addToCart);
}


function mobileRes() {
    document.getElementById('navigation--mobilemenu_openicon').classList.remove('hide');
    document.getElementById('gallery-prevbtn').classList.remove('hide');
    document.getElementById('gallery-nextbtn').classList.remove('hide');
    document.querySelector('.navigation--mainmenu').classList.add('hide');
    document.querySelector('.maincontent--gallery_imglist').classList.add('hide');
}

function mobileMenuOpen() {
    let openMenuIcon = document.getElementById('navigation--mobilemenu_openicon');
    openMenuIcon.onclick = function() {
        document.querySelector('.mobilemenu').classList.remove('hide');
        document.body.classList.add('darkfilter');
    }
}

function mobileMenuClose() {
    let closeMenuIcon = document.getElementById('navigation--mobilemenu_closeicon');
    closeMenuIcon.onclick = function() {
        document.querySelector('.mobilemenu').classList.add('hide');
        document.body.classList.remove('darkfilter');
    }
}

function counter() {
    let minusBtn = document.getElementById('minus-btn');
    let plusBtn = document.getElementById('plus-btn');
    let count = document.getElementById('counter-amount');
    let number = count.innerText;

    minusBtn.onmousedown = function(event) {
        event.preventDefault();
    }
    plusBtn.onmousedown = function(event) {
        event.preventDefault();
    }

    minusBtn.onclick = function() {
        if (number > 0) {
            number--;
            count.innerText = number;
        } else {
            alert(`Can't be less then 0`);
        }   
    }
    plusBtn.onclick = function() {
        number++;
        count.innerText = number;
    }
}

function openCloseCart() {
    let cartIcon = document.querySelector('.navigation--accountmenu_carticon');
    let cart = document.getElementById('cart');
    cartIcon.onclick = function() {
        cart.classList.toggle('hide');
    }
}

function addToCart() {
    if (document.getElementById('counter-amount').innerText === '0') {
        alert(`Can't be 0!`);
    } else {
        let price = document.getElementById('current-price').innerText;
        let name = document.querySelector('.maincontent--productinfo_productname').innerText;
        let cartContent = document.getElementById('cart-content');
        let cartItem = document.createElement('div');
        let amount = document.getElementById('counter-amount').innerText;

        cartItem.classList.add('navigation--accountmenu--cart--item');
        cartItem.innerHTML = (`
            <img src = "${document.querySelector('.maincontent--gallery_imglist').firstElementChild.firstElementChild.getAttribute('src')}" alt = "sneakers" class = "navigation--accountmenu--cart--item_img">
            <div>
                <p>${name}</p> 
                <p>$${price} x ${amount} 
                    <span class = "navigation--accountmenu--cart--item_cost">$${(price * amount).toFixed(2)}</span>
                </p>
            </div>
            <svg class = "navigation--accountmenu--cart--item_delbtn" onclick = "deleteItem(event)" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/>
                </defs>
                <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/>
            </svg>
        `);
        cartContent.classList.add('hide');
        document.querySelector('.navigation--accountmenu--cart_header').after(cartItem);
        if (!document.querySelector('.navigation--accountmenu--cart--checkoutbtn')) {
            let checkoutBtn = document.createElement('div');
            checkoutBtn.classList.add('navigation--accountmenu--cart--checkoutbtn');
            checkoutBtn.textContent = 'Checkout';
            document.querySelector('.navigation--accountmenu--cart').append(checkoutBtn);
        }
        if (!document.querySelector('.navigation--accountmenu--cart_total')) {
            let totalPrice = document.createElement('div');
            totalPrice.classList.add('navigation--accountmenu--cart_total');
            totalPrice.textContent = `Total: $ ${(price * amount).toFixed(2)}`;
            document.querySelector('.navigation--accountmenu--cart--checkoutbtn').before(totalPrice);
        } else {
            let totalPrice = document.querySelector('.navigation--accountmenu--cart_total');
            let itemsCost = document.querySelectorAll('.navigation--accountmenu--cart--item_cost');
            let total = 0;
            for (let item of itemsCost) {
                total = total + Number(item.innerHTML.slice(1));
            }
            totalPrice.textContent = `Total: $ ${total.toFixed(2)}`;
        }
    }
}

function deleteItem(event) {
    event.target.closest('.navigation--accountmenu--cart--item').remove();
    let totalPrice = document.querySelector('.navigation--accountmenu--cart_total');
    let itemsCost = document.querySelectorAll('.navigation--accountmenu--cart--item_cost');
    let total = 0;
    for (let item of itemsCost) {
        total = total + Number(item.innerHTML.slice(1));
    }
    totalPrice.textContent = `Total: $ ${total.toFixed(2)}`;
    if (document.querySelectorAll('.navigation--accountmenu--cart--item').length === 0) {
        document.querySelector('.navigation--accountmenu--cart--checkoutbtn').remove();
        document.querySelector('.navigation--accountmenu--cart_total').remove();
        document.getElementById('cart-content').classList.remove('hide');
    }
}