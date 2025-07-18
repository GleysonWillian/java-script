let listaCarros = [{
    "nome": "Bugatti Tourbillon",
    "images": "images/bugatti-tourbillon.webp",
    "descricao": "O Bugatti Tourbillon é o sucessor do Chiron, um hipercarro híbrido com motor central, fabricado pela Bugatti"
},
{
    "nome": "Ferrari La Ferrari",
    "images": "images/ferrari-la-ferrari.jpg",
    "descricao": "A LaFerrari é um carro esportivo híbrido da Ferrari, produzido entre 2013 e 2018, com apenas 499 unidades construídas."
},
{
    "nome": "Rolls Royce CC",
    "images": "images/Mansory-Rolls-Royce-Cullinan-Coastline.jpg",
    "descricao": "O Mansory Rolls-Royce Cullinan Coastline é uma versão personalizada do SUV de luxo da Rolls-Royce, modificada pela empresa alemã Mansory."
},
{
    "nome": "MacLaren Elva",
    "images": "images/mclaren-ELVA.jpg",
    "descricao": "O McLaren Elva é um roadster ultraleve, sem teto e sem para-brisa, projetado para oferecer uma experiência de condução pura e emocionante."
},
{
    "nome": "MacLaren P1",
    "images": "images/McLaren-P1.jpg",
    "descricao": "O McLaren P1 é um supercarro híbrido de produção limitada, o segundo da série Ultimate Series da McLaren, após o McLaren F1."
},
{
    "nome": "Pagani Huayra",
    "images": "images/pagani-huayra.webp",
    "descricao": "O Pagani Huayra é um supercarro esportivo italiano produzido pela Pagani, conhecido por seu design exclusivo e desempenho excepcional."
}];

listaCarros.map((carro) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
                <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${carro.images}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${carro.nome}</h5>
                        <a href="#" class="btn btn-secondary"><i class="bi bi-zoom-in"></i></a>
                    </div>
                </div>
            </div>
    `
})