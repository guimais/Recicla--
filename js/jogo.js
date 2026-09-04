const TOTAL_DE_DESAFIOS = 10;
const PONTOS_POR_ACERTO = 10;
const TEMPO_DE_LEITURA = 1600;

const telaInicial = document.getElementById("tela-inicial");
const telaDoJogo = document.getElementById("tela-do-jogo");
const telaDeResultado = document.getElementById("tela-de-resultado");
const botaoComecar = document.getElementById("botao-comecar");
const botaoJogarDeNovo = document.getElementById("botao-jogar-de-novo");
const botoesDeCategoria = document.querySelectorAll(".botao-categoria");
const numeroDoDesafio = document.getElementById("numero-do-desafio");
const nomeDoResiduo = document.getElementById("nome-do-residuo");
const pontuacaoAtual = document.getElementById("pontuacao-atual");
const mensagemDeFeedback = document.getElementById("mensagem-de-feedback");
const totalDeAcertos = document.getElementById("total-de-acertos");
const botaoSair = document.getElementById("botao-sair");

let residuosDaPartida = [];
let indiceDoDesafio = 0;
let pontuacao = 0;
let acertos = 0;
let temporizador = null;

function sortearResiduos() {
	const disponiveis = RESIDUOS.slice();
	const sorteados = [];
	while (sorteados.length < TOTAL_DE_DESAFIOS && disponiveis.length > 0) {
		const posicao = Math.floor(Math.random() * disponiveis.length);
		sorteados.push(disponiveis.splice(posicao, 1)[0]);
	}
	return sorteados;
}

function rotuloDaCategoria(categoria) {
	const botao = document.querySelector(`.botao-categoria[data-categoria="${categoria}"]`);
	return botao.textContent.trim();
}

function mostrarTela(telaVisivel) {
	[telaInicial, telaDoJogo, telaDeResultado].forEach((tela) => {
		tela.hidden = tela !== telaVisivel;
	});
}

function mostrarFeedback(texto) {
	mensagemDeFeedback.style.animation = "none";
	void mensagemDeFeedback.offsetHeight;
	mensagemDeFeedback.style.animation = "";
	mensagemDeFeedback.textContent = texto;
}

function atualizarPlacar() {
	pontuacaoAtual.textContent = String(pontuacao).padStart(3, "0");
}

function mostrarDesafio() {
	const residuo = residuosDaPartida[indiceDoDesafio];
	nomeDoResiduo.textContent = residuo.nome;
	numeroDoDesafio.textContent = String(indiceDoDesafio + 1).padStart(2, "0");
	mensagemDeFeedback.textContent = "";
	botoesDeCategoria.forEach((botao) => {
		botao.disabled = false;
		botao.classList.remove("escolha-certa", "escolha-errada");
	});
}

function avancar() {
	indiceDoDesafio++;
	if (indiceDoDesafio < residuosDaPartida.length) {
		mostrarDesafio();
	} else {
		encerrarPartida();
	}
}

function responder(categoriaEscolhida) {
	const residuo = residuosDaPartida[indiceDoDesafio];
	const acertou = categoriaEscolhida === residuo.categoria;
	botoesDeCategoria.forEach((botao) => {
		botao.disabled = true;
		const classe = botao.dataset.categoria === residuo.categoria ? "escolha-certa" : "escolha-errada";
		botao.classList.add(classe);
	});
	if (acertou) {
		acertos++;
		pontuacao += PONTOS_POR_ACERTO;
		atualizarPlacar();
		mostrarFeedback("Isso mesmo! " + residuo.explicacao);
	} else {
		mostrarFeedback("Ops! " + residuo.nome + " deve ir em " + rotuloDaCategoria(residuo.categoria) + ".");
	}
	setTimeout(avancar, TEMPO_DE_LEITURA);
    temporizador = setTimeout(avancar, TEMPO_DE_LEITURA);
}

function iniciarPartida() {
	residuosDaPartida = sortearResiduos();
	indiceDoDesafio = 0;
	pontuacao = 0;
	acertos = 0;
	atualizarPlacar();
	mostrarDesafio();
	mostrarTela(telaDoJogo);
}

function encerrarPartida() {
	totalDeAcertos.textContent = acertos;
	mostrarTela(telaDeResultado);
}

botaoComecar.addEventListener("click", iniciarPartida);
botaoJogarDeNovo.addEventListener("click", iniciarPartida);
botoesDeCategoria.forEach((botao) => {
	botao.addEventListener("click", () => responder(botao.dataset.categoria));
});

function sairDaPartida() {
	clearTimeout(temporizador);
	mostrarTela(telaInicial);
}

botaoComecar.addEventListener("click", iniciarPartida);
botaoSair.addEventListener("click", sairDaPartida);