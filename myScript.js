var mydiv=document.querySelector('#mydiv');
var backColor = mydiv.style.backgroundColor;
var color1 = 'lawngreen';
var color2 = 'red';
mydiv.style.backgroundColor = color1;

mydiv.addEventListener('click', function(e) {
    if (backColor === color1) {
        this.style.backgroundColor = color2;
        backColor = color2;
    } else {
        this.style.backgroundColor = color1;
        backColor = color1;
    }
});

