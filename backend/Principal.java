public class Principal {
	public static void main(String[] args) {
		Ranking ranking = new Ranking();
		ranking.salvar("Ana", 80);
		ranking.salvar("Bruno", 100);
		ranking.salvar("Carla", 60);
		ranking.salvar("Diego", 90);
		ranking.salvar("Elisa", 70);

		System.out.println("Recicla+ | Melhores pontuacoes");
		System.out.println("Jogadores registrados: " + ranking.quantidadeDeJogadores());
		System.out.println();

		int posicao = 1;
		for (Pontuacao pontuacao : ranking.melhores(3)) {
			System.out.println(posicao + ". " + pontuacao.getJogador() + " - " + pontuacao.getPontos() + " pts");
			posicao++;
		}
	}
}