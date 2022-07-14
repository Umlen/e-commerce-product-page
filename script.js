window.onload = () => {
    if (document.documentElement.clientWidth <= 480) {
        mobileRes();
    }

    counter();
    mobileMenuOpen();
}


function mobileRes() {
    document.getElementById('navigation--mobilemenu_icon').classList.remove('hide');
    document.getElementById('gallery-prevbtn').classList.remove('hide');
    document.getElementById('gallery-nextbtn').classList.remove('hide');
    document.querySelector('.navigation--mainmenu').classList.add('hide');
    document.querySelector('.maincontent--gallery_imglist').classList.add('hide');
}

function mobileMenuOpen() {
    let openMenuIcon = document.getElementById('navigation--mobilemenu_icon');
    openMenuIcon.onclick = function() {
        document.querySelector('.mobilemenu').classList.remove('hide');
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
