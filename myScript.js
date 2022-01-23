
var mydiv=document.querySelector('#mydiv');
mydiv.style.backgroundColor = 'green'
var backColor = mydiv.style.backgroundColor;

mydiv.addEventListener('click', function(e) {
    e.stopImmediatePropagation();

    if (backColor === 'green') {
        this.style.backgroundColor = 'red';
        backColor = 'red';
    } else {
        this.style.backgroundColor = 'green';
        backColor = 'green';
    }
});

