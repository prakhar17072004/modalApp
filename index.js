const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
console.log(overlay);

//Modal open function //
 const openModal= ()=>{
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
 };
 const closeModal= ()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
 };