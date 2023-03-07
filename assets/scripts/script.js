"use strict"

let produto = [
    {
        marca: "avon",
        sub_categorias: ["perfumes", "hidradantes", "maquiagem", "kids"],
        imagens: [
            ["p01.jpg", "p02.jpg", "p03.jpg", "p04.jpg"], ["avonH", "avonH", "avonH", "avonH"], ["avonM", "avonM", "avonM", "avonM"], ["avonK", "avonK", "avonK", "avonK"]
        ],
        precos: ["valor", 'valor', "valor", "valor"],
    },
    {
        marca: "natura",
        sub_categorias: ["perfumes", "hidradantes", "maquiagem", "kids"],
        imagens: [
            ["naturaP", "naturaP", "naturaP", "naturaP"], ["naturaH", "naturaH", "naturaH", "naturaH"], ["naturaM", "naturaM", "naturaM", "naturaM"], ["naturaK", "naturaK", "naturaK", "naturaK"]
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


// animação quando sumir ou aparecer o sub menu!!

// a promise tem a função de apenas esconder ou aparecer a visibilidade, 
//pois se o usuário fazer vários clicks rápidos, irá bugar, e decidir usar
// o visibility pois, se usasse só o opacity ele ainda iria ocupar o espaço e podia ter iteratividade do usuário sem querer

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
                icon.style.transform = "rotate(0deg)"
                setTimeout(() => {

                    reject()
                }, 100)
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

let selected = document.querySelector(".titulo select")

let categorias_produtos = document.querySelectorAll(".titulo_produtos > ul > button")
let sumario_produtos = document.querySelectorAll(".cards_produtos > ul > li > div > h2 > span")
let fotos = document.querySelectorAll(".cards_produtos > ul > li > img")
selected.addEventListener("change", function (element) {
    
    let option = element.target.value
    let indexProduto = produto.findIndex(el=>el.marca == option)

    for (let dis = 0; dis < categorias_produtos.length; dis++) {
        categorias_produtos[dis].innerHTML = produto[indexProduto].sub_categorias[dis]
        categorias_produtos[dis].value = produto[indexProduto].sub_categorias[dis]
    }
    let ind = Array.from(categorias_produtos).findIndex(el=>el.classList.contains("ativos"))
    let indValue = categorias_produtos[ind].value
    
    for (let dis = 0; dis < produto[indexProduto].imagens.length; dis++) {
        fotos[dis].src = `./assets/img/listFotos/${option}/${indValue}/${produto[indexProduto].imagens[ind][dis]}`
    }
})


categorias_produtos.forEach((element, ind) => {
    element.addEventListener("click", function () {
        categorias_produtos.forEach(elements => elements.classList.remove("ativos"))

        this.classList.add("ativos")
        let option = selected.value

        let indexProduto = produto.findIndex(el=>el.marca == option)
        if (produto[indexProduto].marca == option) {
            for (let dis = 0; dis < produto[indexProduto].imagens.length; dis++) {
                fotos[dis].src = `./assets/img/listFotos/${option}/${this.value}/${produto[indexProduto].imagens[ind][dis]}`
            }
        }
    })
})
