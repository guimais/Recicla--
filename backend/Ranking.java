import java.util.ArrayList;
import java.util.List;

public class Ranking {
	private List<Pontuacao> pontuacoes = new ArrayList<>();

	public void salvar(String jogador, int pontos) {
		pontuacoes.add(new Pontuacao(jogador, pontos));
	}

	public int quantidadeDeJogadores() {
		return pontuacoes.size();
	}

	public List<Pontuacao> melhores(int quantidade) {
		pontuacoes.sort((primeira, segunda) -> segunda.getPontos() - primeira.getPontos());
		if (pontuacoes.size() < quantidade) {
			return pontuacoes;
		}
		return pontuacoes.subList(0, quantidade);
	}
}