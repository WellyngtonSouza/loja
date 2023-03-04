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
        imagens: ["tal", "tal", "tal", "tal"],
        precos: ["valor", 'valor', "valor", "valor"],
    },
    {
        marca: "Natura",
        sub_categorias: ["perfumes", "hidradantes", "maquiagem", "kids"],
        imagens: ["tal", "tal", "tal", "tal"],
        precos: ["valor", 'valor', "valor", "valor"],
    },
    {
        marca: "Boticario",
        sub_categorias: ["perfumes", "hidradantes", "maquiagem", "kids"],
        imagens: ["tal", "tal", "tal", "tal"],
        precos: ["valor", 'valor', "valor", "valor"],
    },
    {
        marca: "Romance",
        sub_categorias: ["calcinhas", "sutiãs", "calças", "calças legins"],
        imagens: ["tal", "tal", "tal", "tal"],
        precos: ["valor", 'valor', "valor", "valor"],
    },
]




let selected = document.querySelector(".titulo select")

let categorias_produtos = document.querySelectorAll(".titulo_produtos > ul > button")
let fotos = document.querySelectorAll(".cards_produtos > ul > li > img")
let sumario_produtos = document.querySelectorAll(".cards_produtos > ul > li > div > h2 > span")
console.log(fotos)
selected.addEventListener("change", function (element) {
    let option = element.target.value


    for (let index = 0; index < categorias_produtos.length; index++){
        if (option == categorias[index].marca) {
            console.log(index)
            for(let dis = 0; dis < categorias_produtos.length; dis++){
                categorias_produtos[dis].innerHTML = categorias[index].sub_categorias[dis]
            }
        }
    }

    // if (option == categorias[0].marca) {
    //     console.log("avon")
    //     for (let index = 0; index < categorias_produtos.length; index++) {

    //         categorias_produtos[index].innerHTML = categorias[0].sub_categorias[index]
    //     }
    // }
    // else if (option == categorias[1].marca) {
    //     for (let index = 0; index < categorias_produtos.length; index++) {
    //         categorias_produtos[index].innerHTML = categorias[1].sub_categorias[index]
    //     }
    // }
    // else if (option == categorias[2].marca) {
    //     for (let index = 0; index < categorias_produtos.length; index++) {
    //         categorias_produtos[index].innerHTML = categorias[2].sub_categorias[index]
    //     }
    // }
    // else if (option == categorias[3].marca) {
    //     for (let index = 0; index < categorias_produtos.length; index++) {
    //         categorias_produtos[index].innerHTML = categorias[3].sub_categorias[index]
    //     }
    // }


})




console.log(categorias)