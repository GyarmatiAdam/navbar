const navbarBtn = document.querySelector('.navbar_btn');
const navbarLinks = document.querySelector('.navbar_links');

/** onclick add or remove css classes */
navbarBtn.addEventListener('click', function(){
    let value = navbarLinks.classList.contains('navbar_collapse')

    if(value){
        navbarLinks.classList.remove('navbar_collapse')
        navbarBtn.classList.remove('change')
    }
    else{
        navbarLinks.classList.add('navbar_collapse')
        navbarBtn.classList.add('change')
    }
})