const navbar = document.querySelector(".navbar")


const menubtn = document.querySelector(".menubtn")
const list = document.querySelector(".navlinks")
console.log(list)

menubtn.addEventListener("click", ()=>{
    list.classList.toggle("active");
    menubtn.classList.toggle("menubtn-rotate");
    
}
    

)
