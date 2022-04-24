let navItems = document.querySelectorAll(".nav-items");
let checkBox = document.getElementById('menu-toggle');
let overlay = document.querySelectorAll(".overlay");
let btnCloseAboutPet = document.getElementsByClassName('close-about-pet')[0];

let learnMore = document.querySelectorAll(".slider-button");

if (document.getElementById("menu-toggle").checked === true){
    document.body.style.overflow = "hidden";  
}

checkBox.addEventListener('change', (event)=>{
    document.body.style.overflow = event.currentTarget.checked ? "hidden" : "auto";
})

function closesNav() {
    console.log(document.getElementById("menu-toggle"));
    document.getElementById("menu-toggle").checked = false;
    document.body.style.overflow = "auto";
}

function openAboutPet(){
    document.getElementById('frame-about-pet').style.display = 'block';
    document.getElementById('about-pet').style.display = 'block';
    btnCloseAboutPet.style.display = 'block';
    document.body.style.overflow = "hidden";
}
function closeAboutPet(){
    document.getElementById('frame-about-pet').style.display = 'none';  
    document.getElementById('about-pet').style.display = 'none';
    btnCloseAboutPet.style.display = 'none';
    document.body.style.overflow = "auto";
}

navItems.forEach(element => {
    element.addEventListener('click',closesNav);
});

overlay.forEach(el => {
   el.addEventListener('click',closesNav);
});

learnMore.forEach(element=>{
    element.addEventListener('click',openAboutPet);
});
document.getElementById('frame-about-pet').addEventListener('click', closeAboutPet);

btnCloseAboutPet.addEventListener('click', closeAboutPet);


