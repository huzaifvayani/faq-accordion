let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");
let btn4 = document.querySelector(".btn-4");
let btn5 = document.querySelector(".btn-5");
let faq = document.querySelector(".faq-1");
let faq2 = document.querySelector(".faq-2");
let faq3 = document.querySelector(".faq-3");
let faq4 = document.querySelector(".faq-4");
let faq5 = document.querySelector(".faq-5");
let container = document.querySelector(".container");
let heading = document.querySelector(".heading");
let heading2 = document.querySelector(".heading-2");
let heading3 = document.querySelector(".heading-3");
let heading4 = document.querySelector(".heading-4");
let heading5 = document.querySelector(".heading-5");
console.log(heading4);
btn.addEventListener("click", function(){
    btn.classList.toggle("btn-active");
    faq.classList.toggle("faq-active");
    heading.classList.toggle("active");
    container.classList.remove("container-active");
});
btn2.addEventListener("click", function(){
    btn2.classList.toggle("btn-active");
    faq2.classList.toggle("faq-2-active");
    heading2.classList.toggle("active");
    container.classList.remove("container-active");
});

btn3.addEventListener("click", function(){
    btn3.classList.toggle("btn-active");
    faq3.classList.toggle("faq-3-active");
    heading3.classList.toggle("active");
    container.classList.remove("container-active");
});

btn4.addEventListener("click", function(){
    btn4.classList.toggle("btn-active");
    faq4.classList.toggle("faq-4-active");
    heading4.classList.toggle("active");
    container.classList.remove("container-active");
});

btn5.addEventListener("click", function(){
    btn5.classList.toggle("btn-active");
    faq5.classList.toggle("faq-5-active");
    heading5.classList.toggle("active");
    container.classList.remove("container-active");
});