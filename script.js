window.onscroll=function showHeader(){
    let header = document.querySelector('.header');
    console.log(window.scrollY);
    if (window.scrollY > 200){
        header.classList.add('header_fixed');
    }
    else
    {
        header.classList.remove('header_fixed');
    }
}
function onEntry(entry){
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.add('show');
        } else{
        change.target.classList.remove('show');
        }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.skynet-windows');
for (let elm of elements){
    observer.observe(elm);
}

let elements1 = document.querySelectorAll('.windows');
for (let elm of elements1){
    observer.observe(elm);
}
let elements2 = document.querySelectorAll('.linux');
for (let elm of elements2){
    observer.observe(elm);
}
let elements3 = document.querySelectorAll('.skynet-container2');
for (let elm of elements3){
    observer.observe(elm);
}
let elements4 = document.querySelectorAll('.div34');
for (let elm of elements4){
    observer.observe(elm);
}
let elements5 = document.querySelectorAll('.chatgpt');
for (let elm of elements5){
    observer.observe(elm);
}
let elements6 = document.querySelectorAll('.div20');
for (let elm of elements6){
    observer.observe(elm);
}
let elements7 = document.querySelectorAll('.div32');
for (let elm of elements7){
    observer.observe(elm);
}
let elements8 = document.querySelectorAll('.div22');
for (let elm of elements8){
    observer.observe(elm);
}
let elements9 = document.querySelectorAll('.div24');
for (let elm of elements9){
    observer.observe(elm);
}
let elements10 = document.querySelectorAll('.div26');
for (let elm of elements10){
    observer.observe(elm);
}
let elements11 = document.querySelectorAll('.div28');
for (let elm of elements11){
    observer.observe(elm);
}
let elements12 = document.querySelectorAll('.div30');
for (let elm of elements12){
    observer.observe(elm);
}