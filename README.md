# ♻️ Recicla+

Jogo web educativo de separação de resíduos. O jogador vê um resíduo na tela e escolhe em qual das seis categorias ele deve ser descartado. Acertos somam pontos; erros mostram uma explicação de por que aquele material pertence a outra categoria.

Projeto acadêmico de Engenharia da Computação, com tema em tecnologia e sustentabilidade.

## Como funciona

Cada partida tem 10 desafios sorteados de uma lista de 30 resíduos, sem repetição. Cada acerto vale 10 pontos. Errar não tira pontos: a ideia é ensinar, não punir.

As seis categorias seguem o código de cores da coleta seletiva brasileira (Resolução CONAMA nº 275/2001):

| Categoria | Cor | Exemplos |
|---|---|---|
| Papel | Azul | Jornal, papelão, caderno |
| Plástico | Vermelho | Garrafa PET, sacola, pote |
| Vidro | Verde | Garrafa, pote de conserva, copo |
| Metal | Amarelo | Lata, tampa, talher |
| Orgânico | Marrom | Casca de fruta, borra de café |
| Eletrônico | Preto | Pilha, cabo, celular antigo |

## Tecnologias

- **HTML** — estrutura das três telas
- **CSS** — layout responsivo, cores das categorias e animações
- **JavaScript** — lógica da partida, sorteio, pontuação e troca de telas
- **Java** — classes de ranking que ordenam e listam as melhores pontuações

## Estrutura do projeto

```
recicla-mais/
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── residuos.js
│       └── jogo.js
├── backend/
│   ├── Pontuacao.java
│   ├── Ranking.java
│   └── Principal.java
└── README.md
```

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Telas de início, jogo e resultado |
| `styles.css` | Estilos, cores das categorias e animações |
| `residuos.js` | Lista dos 30 resíduos com categoria e explicação |
| `jogo.js` | Sorteio, validação da resposta, pontuação e navegação |
| `Pontuacao.java` | Guarda o nome e os pontos de um jogador |
| `Ranking.java` | Armazena e ordena as pontuações |
| `Principal.java` | Executa uma demonstração do ranking no terminal |

## Como executar

### Front-end

Abra `frontend/index.html` no navegador. Não precisa instalar nada.

Se estiver usando o VS Code, a extensão Live Server evita problemas de cache durante o desenvolvimento.

### Back-end

Requer o **JDK 17 ou superior** instalado. Verifique com `javac -version`.

```bash
cd backend
javac *.java
java Principal
```

Saída esperada:

```
Recicla+ | Melhores pontuacoes
Jogadores registrados: 5

1. Bruno - 100 pts
2. Diego - 90 pts
3. Ana - 80 pts
```

## Adicionando novos resíduos

Basta incluir um item em `js/residuos.js` seguindo o mesmo formato:

```javascript
{ nome: "Copo descartável", categoria: "PLASTICO", explicacao: "É plástico, mas o tipo dificulta a reciclagem." }
```

A categoria deve ser exatamente uma destas: `PAPEL`, `PLASTICO`, `VIDRO`, `METAL`, `ORGANICO`, `ELETRONICO`.

## Acessibilidade

- Navegação completa por teclado, com foco visível
- Mensagens de acerto e erro anunciadas por leitores de tela (`aria-live`)
- Animações desativadas para quem usa `prefers-reduced-motion`
- Layout responsivo a partir de 320px de largura

## Limitações atuais

O front-end e o back-end ainda não se comunicam. O jogo roda inteiro no navegador e as classes Java funcionam como um programa separado, executado no terminal.

## Próximos passos

- Conectar o jogo ao ranking em Java por meio de um servidor HTTP
- Cronômetro por desafio e níveis de dificuldade
- Bônus por acertos seguidos
- Reconhecimento de resíduos por foto, usando classificação de imagens

## Créditos

Categorias e cores baseadas na Resolução CONAMA nº 275/2001. Fonte Poppins, do Google Fonts.
