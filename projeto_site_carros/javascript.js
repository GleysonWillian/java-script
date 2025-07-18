let listaCarros = [{
    "nome": "Bugatti Tourbillon",
    "img": "img/bugatti-tourbillon.webp",
    "descricao": "O Bugatti Tourbillon é o sucessor do Chiron, um hipercarro híbrido com motor central, fabricado pela Bugatti."
},
{
    "nome": "Ferrari La Ferrari",
    "img": "img/ferrari-la-ferrari.jpg",
    "descricao": "A LaFerrari é um carro esportivo híbrido da Ferrari, produzido entre 2013 e 2018, com apenas 499 unidades construídas."
},
{
    "nome": "Rolls Royce CC",
    "img": "img/Mansory-Rolls-Royce-Cullinan-Coastline.jpg",
    "descricao": "O Mansory Rolls-Royce Cullinan Coastline é uma versão personalizada do SUV de luxo da Rolls-Royce, modificada pela empresa alemã Mansory."
},
{
    "nome": "MacLaren Elva",
    "img": "img/mclaren-ELVA.jpg",
    "descricao": "O McLaren Elva é um roadster ultraleve, sem teto e sem para-brisa, projetado para oferecer uma experiência de condução pura e emocionante."
},
{
    "nome": "MacLaren P1",
    "img": "img/McLaren-P1.jpg",
    "descricao": "O McLaren P1 é um supercarro híbrido de produção limitada, o segundo da série Ultimate Series da McLaren, após o McLaren F1."
},
{
    "nome": "Pagani Huayra",
    "img": "img/pagani-huayra.webp",
    "descricao": "O Pagani Huayra é um supercarro esportivo italiano produzido pela Pagani, conhecido por seu design exclusivo e desempenho excepcional."
}];

listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
                <div class="col">
                <div class="card h-100">
                    <img src="${carro.img}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${carro.nome}</h5>
                        <a href="#" class="btn btn-secondary" onClick = "zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                    </div>
                </div>
            </div>
    `
})

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
}