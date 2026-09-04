public class Pontuacao {
	private String jogador;
	private int pontos;

	public Pontuacao(String jogador, int pontos) {
		this.jogador = jogador;
		this.pontos = pontos;
	}

	public String getJogador() {
		return jogador;
	}

	public int getPontos() {
		return pontos;
	}
}