"use strict"
//produtos
let produto = [
    {
        marca: "avon",
        sub_categorias: ["perfumes", "hidradantes", "maquiagem", "kids"],
        imagens: [
            ["p01.jpg", "p02.jpg", "p03.jpg", "p04.jpg"],
            ["avonH", "avonH", "avonH", "avonH"],
            ["avonM", "avonM", "avonM", "avonM"],
            ["avonK", "avonK", "avonK", "avonK"]
        ],
        precos: ["valor", 'valor', "valor", "valor"],
        descricao: ["avon1", "avon2", "avon3", "avon4"],
        nome: [
            ["avonP", "avonP", "avonP", "avonP"],
            ["avonH", "avonH", "avonH", "avonH"],
            ["avonM", "avonM", "avonM", "avonM"],
            ["avonK", "avonK", "avonK", "avonK"],
        ],
        catalogo: "",

    },
    {
        marca: "natura",
        sub_categorias: ["perfumes", "hidradantes", "maquiagem", "kids"],
        imagens: [
            ["naturaP", "naturaP", "naturaP", "naturaP"],
            ["naturaH", "naturaH", "naturaH", "naturaH"],
            ["naturaM", "naturaM", "naturaM", "naturaM"],
            ["naturaK", "naturaK", "naturaK", "naturaK"]
        ],
        precos: ["valor", 'valor', "valor", "valor"],
        descricao: ["natura1", "natura2", "natura3", "natura4"],
        nome: [
            ["naturaP", "naturaP", "naturaP", "naturaP"],
            ["naturaH", "naturaH", "naturaH", "naturaH"],
            ["naturaM", "naturaM", "naturaM", "naturaM"],
            ["naturaK", "naturaK", "naturaK", "naturaK"],
        ],
        catalogo: "",
    },
    {
        marca: "boticario",
        sub_categorias: ["perfumes", "hidradantes", "maquiagem", "kids"],
        imagens: [
            ["boticarioP", "boticarioP", "boticarioP", "boticarioP"],
            ["boticarioH", "boticarioH", "boticarioH", "boticarioH"],
            ["boticarioM", "boticarioM", "boticarioM", "boticarioM"],
            ["boticarioK", "boticarioK", "boticarioK", "boticarioK"]
        ],
        precos: ["valor", 'valor', "valor", "valor"],
        descricao: ["boticario1", "boticario2", "boticario3", "boticario4"],
        nome: [
            ["boticarioP", "boticarioP", "boticarioP", "boticarioP"],
            ["boticarioH", "boticarioH", "boticarioH", "boticarioH"],
            ["boticarioM", "boticarioM", "boticarioM", "boticarioM"],
            ["boticarioK", "boticarioK", "boticarioK", "boticarioK"],
        ],
        catalogo: "",
    },
    {
        marca: "romance",
        sub_categorias: ["calcinhas", "sutiãs", "calças", "calças legins"],
        imagens: [
            ["romanceC", "romanceC", "romanceC", "romanceC"],
            ["romanceS", "romanceS", "romanceS", "romanceS"],
            ["romanceCL", "romanceCL", "romanceCL", "romanceCL"],
            ["romanceCLG", "romanceCLG", "romanceCLG", "romanceCLG"]
        ],
        precos: ["valor", 'valor', "valor", "valor"],
        descricao: ["romance1", "romance2", "romance3", "romance4"],
        nome: [
            ["romanceC", "romanceC", "romanceC", "romanceC"],
            ["romanceS", "romanceS", "romanceS", "romanceS"],
            ["romanceCL", "romanceCL", "romanceCL", "romanceCL"],
            ["romanceCLG", "romanceCLG", "romanceCLG", "romanceCLG"],
        ],
        catalogo: "",
    },
]

let selected = document.querySelectorAll(".main-promocoes-selection > button")


let categorias_produtos = document.querySelectorAll(".promocoes-header-produtos > ul > button")
let sumario_produtos = document.querySelectorAll(".promocoes-cards-produtos > ul > li > div > h2 > span")
let fotos = document.querySelectorAll(".promocoes-cards-produtos > ul > li > img")
let nome_produto = document.querySelectorAll(".promocoes-cards-produtos > ul > li > div > h2 >  span")
let angleOn = document.querySelector(".angleOn")

let containerScroll = document.querySelector(".promocoes-cards-produtos ul")
let buttonRight = document.querySelector(".an-1")
let buttonLeft = document.querySelector(".an-2")

buttonRight.addEventListener("click", () => containerScroll.scrollLeft = containerScroll.scrollWidth / 2)
buttonLeft.addEventListener("click", () => containerScroll.scrollLeft = -(containerScroll.scrollWidth / 2))


selected.forEach((element) => {
    element.addEventListener("click", function () {

        selected.forEach((el) => el.classList.remove("ativos"))
        this.classList.toggle("ativos")
        let option = this.value
        let indexProduto = produto.findIndex((el => el.marca == option))

        for (let dis = 0; dis < categorias_produtos.length; dis++) {
            categorias_produtos[dis].innerHTML = produto[indexProduto].sub_categorias[dis] // esse bloco muda os valores e o conteúdo dependendo da marca
            categorias_produtos[dis].value = produto[indexProduto].sub_categorias[dis]
        }

        let ind = Array.from(categorias_produtos).findIndex(el => el.classList.contains("ativos")) // aqui irá pegar o index da categoria marcada como ativa
        let indValue = categorias_produtos[ind].value

        for (let dis = 0; dis < produto[indexProduto].imagens.length; dis++) {
            // eu coloquei os nomes das pastas de acordo os valores pra eu manipular por aqui, pois os nomes das imagens estaoria no objeto produto assim consigo controlar com facilidade
            fotos[dis].src = `./assets/img/listFotos/${option}/${indValue}/${produto[indexProduto].imagens[ind][dis]}` // aqui eu distribuo as imagens dependendo onde a categoria estiver selecionada pelos index que definir acima
            // nome_produto[dis].innerHTML = produto[indexProduto].nome[ind][dis]
        }

    })
})


categorias_produtos.forEach((element, index) => {
    element.addEventListener("click", function () {
        categorias_produtos.forEach(elements => elements.classList.remove("ativos")) // aqui removo todos os botões ativos, pra sempre ter um ativo

        this.classList.add("ativos") //e aqui adiciono apenas um
        let option;
        selected.forEach((el) => {
            if (el.classList.contains("ativos")) {
                option = el.value
            }
        })

        console.log(option)
        let indexProduto = produto.findIndex(el => el.marca == option)
        if (produto[indexProduto].marca == option) {                                // aqui eu irei pegar as marca e categoria atual e adicionar a imagen de acordo com os index de marca e categoria
            for (let dis = 0; dis < produto[indexProduto].imagens.length; dis++) {
                fotos[dis].src = `./assets/img/listFotos/${option}/${this.value}/${produto[indexProduto].imagens[index][dis]}`

                // nome_produto[dis].innerHTML = produto[indexProduto].nome[index][dis]
            }
        }
    })
})
