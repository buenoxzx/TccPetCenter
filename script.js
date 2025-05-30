
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


function addToCart(nomeProduto, precoProduto) {

  let item = {
    nome: nomeProduto,
    preco: precoProduto
  };


  carrinho.push(item);


  localStorage.setItem("carrinho", JSON.stringify(carrinho));


  atualizarContadorCarrinho();
}


function atualizarContadorCarrinho() {
  let contador = carrinho.length;
  document.getElementById("cartCount").innerText = contador;
}


function verCarrinho() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
  } else {
    let detalhesCarrinho = carrinho.map(item => `${item.nome} - R$${item.preco}`).join("\n");
    alert("Carrinho:\n" + detalhesCarrinho);
  }
}


function exibirCarrinho() {
  let carrinhoConteudo = document.getElementById("carrinhoConteudo");
  if (carrinho.length === 0) {
    carrinhoConteudo.innerHTML = "<p>Seu carrinho está vazio.</p>";
  } else {
    carrinhoConteudo.innerHTML = "<ul>" + carrinho.map(function(item) {
      return "<li>" + item.nome + " - R$ " + item.preco.toFixed(2) + "</li>";
    }).join("") + "</ul>";
  }
}


function finalizarCompra() {
  alert("Compra finalizada!");
  localStorage.removeItem("carrinho");
  exibirCarrinho(); 
}


document.addEventListener("DOMContentLoaded", function() {
  atualizarContadorCarrinho();
  exibirCarrinho(); 
});

function excluirItem(index){
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContadorCarrinho();
  exibirCarrinho();

}
function mostrarFormulario(){
  let formulario = document.getElementById("formulario");
  formulario.style.display = "block";
}
function mostrarProduto(index){
  let produto = document.getElementById("produto" + index);
  produto.style.display = "block";

}
function mostrarfotodoproduto(index){
  let fotodoproduto = document.getElementById("fotodoproduto" + index);
  fotodoproduto.style.display = "block";

}
