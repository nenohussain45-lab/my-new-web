
let ulList = document.querySelector(".show-list");
let list = document.querySelector(".fa-list");

//  to show ul list
list.onclick = function() {
    ulList.style.opacity = 1;
    ulList.style.top = "60px";
};

let login = document.querySelector(".login");
// let addUser = document.querySelector(".fa-user-plus");
// let btn2 = document.querySelector(".btn2");


// to show the login form 
function shows() {
    login.style.opacity = 1;
    login.style.display = "flex";
}
//  is follow div to show after 5s
// let followMy = document.querySelector(".follow");
// setTimeout(function() {
//     followMy.style.display = "flex";
//     followMy.style.opacity = 1;
// }, 5000);
//  to move login form and div follow
function move() {
    // followMy.style.display = "none";  
    login.style.display = "none";
};