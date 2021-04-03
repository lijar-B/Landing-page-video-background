const menuToggle = document.querySelector('.toggle');
        const showCase = document.querySelector('.showcase');
        const closeMenu = document.querySelector('.close');


        menuToggle.addEventListener('click', () => {
            showCase.classList.toggle('active')
            menuToggle.classList.toggle('active')
            closeMenu.classList.toggle('active')
            
        });
        closeMenu.addEventListener('click', () => {
            showCase.classList.toggle('active')
            menuToggle.classList.toggle('active')
            closeMenu.classList.toggle('active')
            
        });

const quote1 = 'never give up';
const quote2 = 'passion made possible';

let index = 0;
let letter = '';
 
(function type1() {
    letter = quote1.slice(0, ++index);
    document.querySelector('.quote1').textContent=letter;
    
    if (letter.length===quote1.length){
        index=0;
    }
    setTimeout(type1,400);
})();

// (function type2() {
//     letter = quote2.slice(0, ++index);
//     document.querySelector('.quote2').textContent=letter;

//     if (letter.length===quote2.length){
//         index=0;
//     }
//     setTimeout(type2, 400);
// }) ();
