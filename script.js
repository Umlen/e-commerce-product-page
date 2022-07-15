window.onload = () => {
    if (document.documentElement.clientWidth <= 480) {
        mobileRes();
    }

    counter();
    mobileMenuOpen();
    mobileMenuClose();
    openCloseCart();
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