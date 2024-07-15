document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos necessários
    const produtoSelect = document.getElementById("produto");
    const quantidadeInput = document.getElementById("quantidade");
    const listaProdutos = document.getElementById("lista-produtos");
    const valorTotal = document.getElementById("valor-total");

    // Função para adicionar produto ao carrinho
    function adicionar() {
        const produtoTexto = produtoSelect.options[produtoSelect.selectedIndex].text;
        const quantidade = parseInt(quantidadeInput.value);
        const preco = parseFloat(produtoTexto.split('R$')[1]);

        if (isNaN(quantidade) || quantidade <= 0) {
            alert("Por favor, insira uma quantidade válida.");
            return;
        }

        const itemCarrinho = document.createElement("section");
        itemCarrinho.className = "carrinho__produtos__produto";
        itemCarrinho.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produtoTexto.split(' - ')[0]} <span class="texto-azul">R$${(preco * quantidade).toFixed(2)}</span>`;

        listaProdutos.appendChild(itemCarrinho);
        atualizarTotal(preco * quantidade);
    }

    // Função para limpar o carrinho
    function limpar() {
        listaProdutos.innerHTML = "";
        valorTotal.textContent = "R$0.00";
    }

    // Função para atualizar o total
    function atualizarTotal(valor) {
        const totalAtual = parseFloat(valorTotal.textContent.replace("R$", ""));
        const novoTotal = totalAtual + valor;
        valorTotal.textContent = `R$${novoTotal.toFixed(2)}`;
    }

    // Adiciona eventos aos botões
    document.querySelector(".botao-adicionar").addEventListener("click", adicionar);
    document.querySelector(".botao-limpar").addEventListener("click", limpar);
});
