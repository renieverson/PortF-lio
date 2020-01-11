
function modificaMenu(){
    var nav = document.querySelector('nav');
    var i = document.querySelector('i');

    if(nav.classList == 'menu' ){
        nav.classList.remove('menu');
        nav.classList.add('menu-mobile');
        i.classList.remove('fa-bars');
        i.classList.add('fa-times');
    }
    else{
        nav.classList.remove('menu-mobile');
        nav.classList.add('menu');
        i.classList.remove('fa-times');
        i.classList.add('fa-bars');
    }
}
