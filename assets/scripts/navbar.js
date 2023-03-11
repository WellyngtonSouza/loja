"user strict"

let navbar = document.querySelector(".menu-mobile")
let contentNavbar = document.querySelector(".main-menu-categorias")
let contentLi = document.querySelectorAll(".main-menu-categorias > ul > li")
console.log(contentNavbar)
navbar.addEventListener("click", function () {
    this.classList.toggle("menu-ativo")

    contentNavbar.classList.toggle("menu-ativo")

})

contentLi.forEach((element) => {
    element.addEventListener("click", () => {

        contentNavbar.classList.toggle("menu-ativo")
        navbar.classList.toggle("menu-ativo")

    })
})


