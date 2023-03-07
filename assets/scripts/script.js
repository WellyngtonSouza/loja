"use strict"
//produtos
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
    let indexProduto = produto.findIndex(el=>el.marca == option)   // sempre pego o index atual da  marca selecionada

    for (let dis = 0; dis < categorias_produtos.length; dis++) {
        categorias_produtos[dis].innerHTML = produto[indexProduto].sub_categorias[dis] // esse bloco muda os valores e o conteúdo dependendo da marca
        categorias_produtos[dis].value = produto[indexProduto].sub_categorias[dis]
    }
    let ind = Array.from(categorias_produtos).findIndex(el=>el.classList.contains("ativos")) // aqui irá pegar o index da categoria marcada como ativa
    let indValue = categorias_produtos[ind].value                                            // aqui pego o valor da categoria selecionada pelo index
    
    for (let dis = 0; dis < produto[indexProduto].imagens.length; dis++) {
        // eu coloquei os nomes das pastas de acordo os valores pra eu manipular por aqui, pois os nomes das imagens estaoria no objeto produto assim consigo controlar com facilidade
        fotos[dis].src = `./assets/img/listFotos/${option}/${indValue}/${produto[indexProduto].imagens[ind][dis]}` // aqui eu distribuo as imagens dependendo onde a categoria estiver selecionada pelos index que definir acima
    }
})

categorias_produtos.forEach((element, ind) => {
    element.addEventListener("click", function () {
        categorias_produtos.forEach(elements => elements.classList.remove("ativos")) // aqui removo todos os botões ativos, pra sempre ter um ativo

        this.classList.add("ativos") //e aqui adiciono apenas um
        let option = selected.value

        let indexProduto = produto.findIndex(el=>el.marca == option)
        if (produto[indexProduto].marca == option) {                                // aqui eu irei pegar as marca e categoria atual e adicionar a imagen de acordo com os index de marca e categoria
            for (let dis = 0; dis < produto[indexProduto].imagens.length; dis++) {
                fotos[dis].src = `./assets/img/listFotos/${option}/${this.value}/${produto[indexProduto].imagens[ind][dis]}`
            }
        }
    })
})
