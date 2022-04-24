let navItems = document.querySelectorAll(".nav-items");
let checkBox = document.getElementById('menu-toggle');
let overlay = document.querySelectorAll(".overlay");

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

navItems.forEach(element => {
    element.addEventListener('click',closesNav);
});

overlay.forEach(el => {
   el.addEventListener('click',closesNav);
});
