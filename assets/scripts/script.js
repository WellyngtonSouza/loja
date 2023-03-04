"use strict"

let sub_menus = document.querySelectorAll(".categorias > ul > li")

sub_menus.forEach(function (menus) {
    menus.addEventListener("click", function () {
        let sub_menu = this.querySelector(".sub_menu");
        let icon = this.querySelector("p > i")

        let isExpanded = sub_menu.dataset.show === "true";
        let promise = new Promise((resolve, reject) => {

            if (!isExpanded) {
                setTimeout(() => {
                    sub_menu.style.visibility = "visible"
                    icon.style.transform = "rotate(180deg)"
                    resolve()
                }, 100)


            } else {

                sub_menu.style.opacity = "0"

                setTimeout(() => {
                    icon.style.transform = "rotate(0deg)"
                    reject()
                }, 300)
            }


        })

        promise.then(() => {
            sub_menu.style.opacity = "1"
        }).catch(() => {
            sub_menu.style.visibility = "hidden"
        })


        sub_menu.dataset.show = !isExpanded;
    })
})

let categorias = [
    {
        marca: "Avon",
        sub_categorias: ["perfumes", "hidradantes", "maquiagem", "kids"],
        imagens: [
            ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"]
        ],
        precos: ["valor", 'valor', "valor", "valor"],
    },
    {
        marca: "Natura",
        sub_categorias: ["perfumes", "hidradantes", "maquiagem", "kids"],
        imagens: [
            ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"]
        ],
        precos: ["valor", 'valor', "valor", "valor"],
    },
    {
        marca: "Boticario",
        sub_categorias: ["perfumes", "hidradantes", "maquiagem", "kids"],
        imagens: [
            ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"]
        ],
        precos: ["valor", 'valor', "valor", "valor"],
    },
    {
        marca: "Romance",
        sub_categorias: ["calcinhas", "sutiãs", "calças", "calças legins"],
        imagens: [
            ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"]
        ],
        precos: ["valor", 'valor', "valor", "valor"],
    },
]




let selected = document.querySelector(".titulo select")

let categorias_produtos = document.querySelectorAll(".titulo_produtos > ul > button")
let fotos = document.querySelectorAll(".cards_produtos > ul > li > img")
let sumario_produtos = document.querySelectorAll(".cards_produtos > ul > li > div > h2 > span")
selected.addEventListener("change", function (element) {
    let option = element.target.value


    for (let index = 0; index < categorias_produtos.length; index++) {
        if (option == categorias[index].marca) {
            for (let dis = 0; dis < categorias_produtos.length; dis++) {
                categorias_produtos[dis].innerHTML = categorias[index].sub_categorias[dis]
            }
        }
    }

})

categorias_produtos.forEach((element) => {
    element.addEventListener("click", function () {
        
        categorias_produtos.forEach(elements=>elements.dataset.clickin = false)

        let controle = this.dataset.clickin
        this.dataset.clickin = !!controle

        categorias_produtos.forEach((elements)=>{

            if(elements.dataset.clickin == "true"){
                elements.style.backgroundColor = "rgba(255,255,255, 0.1)"
            }
            else{
                elements.style.backgroundColor = "rgba(255,255,255, 1)"
            }
        })
        
    })
})
