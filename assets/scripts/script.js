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
            }else{
                sub_menu.style.opacity = "0"
                
                setTimeout(() => {
                    icon.style.transform = "rotate(0deg)"
                    reject()
                }, 500)
                
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
        marca: "avon",
        sub_categorias: ["perfumes", "hidradantes", "maquiagem", "kids"],
        imagens: [
            ["p01.jpg", "p02.jpg", "p03.jpg", "p04.jpg"], ["hidratantes1", "hidratantes2", "hidratantes3", "hidratantes4"], ["maquiagem1", "maquiagem2", "maquiagem3", "maquiagem4"], ["kids1", "kids2", "kids3", "kids4"]
        ],
        precos: ["valor", 'valor', "valor", "valor"],
    },
    {
        marca: "natura",
        sub_categorias: ["perfumes", "hidradantes", "maquiagem", "kids"],
        imagens: [
            ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"]
        ],
        precos: ["valor", 'valor', "valor", "valor"],
    },
    {
        marca: "boticario",
        sub_categorias: ["perfumes", "hidradantes", "maquiagem", "kids"],
        imagens: [
            ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"], ["tal", "tal", "tal", "tal"]
        ],
        precos: ["valor", 'valor', "valor", "valor"],
    },
    {
        marca: "romance",
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

categorias_produtos.forEach((element, ind) => {
    element.addEventListener("click", function () {

        categorias_produtos.forEach(elements => elements.classList.remove("ativos"))

        this.classList.add("ativos")
        let exist = this.classList.contains("ativos")
        let option = selected.value
        if (exist) {
            
        }

        
        for (let index = 0; index < categorias_produtos.length; index++) {
                if (categorias[index].marca == option && categorias[index].sub_categorias[ind] == this.value ) {
                    for (let dis = 0; dis < categorias[index].imagens.length; dis++) {
                        fotos[dis].src = `./assets/img/listFotos/${option}/${this.value}/${categorias[index].imagens[ind][dis]}`
                    }
                }
            }
    })
})
