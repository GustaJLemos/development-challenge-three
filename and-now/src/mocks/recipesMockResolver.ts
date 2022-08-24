import { Recipe } from "../types/Recipe";

const recipeExample: Recipe[] = [
  {
    id: 1,
    nomeReceita: "Brownie de Chocolate com Gengibre",
    itensFaltantes: [],
    ingredientes: [
      "50 g farinha de milho fina",
      "10 g de cacau em pó",
      "250 g de chocolate meio amargo",
      "200 g de manteiga sem sal cortada em cubos",
      "20 ml de suco de gengibre",
      "5 ovos",
      "200 g de açúcar",
      "1 colher (chá) de fermento em pó",
      "100 g de nozes picadas grosseiramente",
    ],
    modoPreparo: [
      "1 - Coloque numa tigela a farinha de milho fina e o cacau em pó.",
      "2 - Misture e reserve.",
      "3 - Numa panela, em banho-maria, derreta o chocolate meio amargo picado com a manteiga sem sal cortada em cubos.",
      "4 - Retire do fogo.",
      "5 - Adicione o suco de gengibre e misture.",
      "6 - Acrescente a mistura de farinha com cacau em pó (reservada acima). Misture bem e reserve.",
      "7 - Numa batedeira, coloque os ovos e o açúcar. Bata bem até dobrar de volume.",
      "8 - Com a batedeira ainda ligada, adicione o fermento em pó e bata até misturar.",
      "9 - Desligue a batedeira. Acrescente a mistura de chocolate (reservada acima) e as nozes picadas. Misture.",
      "10 - Transfira a massa para uma assadeira retangular (18 cm X 30 cm) untada e forrada com papel manteiga.",
      "11 - Leve para assar em forno médio pré-aquecido a 180°C por +/- 40 minutos.",
      "12 - Retire do forno.",
      "13 - Cubra o brownie com papel manteiga.",
      "14 - Coloque outra assadeira do mesmo tamanho pressionando levemente o brownie para que fique mais compacto e úmido",
      "15 - Deixe por +/- 4 horas na geladeira.",
      "16 - Retire a assadeira de cima do brownie, desenforme, corte em quadrados e sirva em seguida.",
    ],
    rendimento: "20 porções",
    tempoPreparo: "60 minutos"
  },

  {
    id: 2,
    nomeReceita: "Macarrão com molho.",
    itensFaltantes: [
      "1 pacote de macarrão tipo espaguete",
      "1/2 cebola picada"
    ],
    ingredientes: [
      "1 pacote de macarrão tipo espaguete",
      "1/2 cebola picada",
      "03 dentes grandes de alho, picados (quantidade opcional)",
      "Azeitonas verdes (opcional)",
      "Queijo ralado",
      "2 caixas de molho pronto",
      "3 calabresas cortadas em cubos",
    ],
    modoPreparo: [
      "1 - Coloque água para cozinhar com sal a gosto e um fio de óleo (para quem gosta de usar óleo no cozimento do macarrão). Quando a água estiver fervendo, coloque todo o pacote de macarrão e deixe cozinhar até chegar ao ponto de ao dente. Escorra e reserve em uma travessa.",
      "2 - Refogue o alho com um pouco de azeite (o suficiente para untar o fundo da panela, não usando muito por que a calabresa solta gordura). Coloque a cebola e mexa até dourar.",
      "3 - Coloque a calabresa, refogue bem e só depois coloque o molho pronto.",
      "4 - Quando o molho estiver bem apurado, adicione o creme de leite aos poucos até ficar em um tom rosado. Espere ferver um pouco para apurar bem o gosto.",
      "5 - Retire do fogo e arrume sobre o macarrão.",
      "6 - Decore com azeitas e queijo ralado.",
    ],
    rendimento: "8 porções",
    tempoPreparo: "20 minutos"
  },

  {
    id: 3,
    nomeReceita: "Macarrão com molho.",
    itensFaltantes: [],
    ingredientes: [
      "1 pacote de macarrão tipo espaguete",
      "1/2 cebola picada",
      "03 dentes grandes de alho, picados (quantidade opcional)",
      "Azeitonas verdes (opcional)",
      "Queijo ralado",
      "2 caixas de molho pronto",
      "3 calabresas cortadas em cubos",
    ],
    modoPreparo: [
      "1 - Coloque água para cozinhar com sal a gosto e um fio de óleo (para quem gosta de usar óleo no cozimento do macarrão). Quando a água estiver fervendo, coloque todo o pacote de macarrão e deixe cozinhar até chegar ao ponto de ao dente. Escorra e reserve em uma travessa.",
      "2 - Refogue o alho com um pouco de azeite (o suficiente para untar o fundo da panela, não usando muito por que a calabresa solta gordura). Coloque a cebola e mexa até dourar.",
      "3 - Coloque a calabresa, refogue bem e só depois coloque o molho pronto.",
      "4 - Quando o molho estiver bem apurado, adicione o creme de leite aos poucos até ficar em um tom rosado. Espere ferver um pouco para apurar bem o gosto.",
      "5 - Retire do fogo e arrume sobre o macarrão.",
      "6 - Decore com azeitas e queijo ralado.",
    ],
    rendimento: "8 porções",
    tempoPreparo: "20 minutos"
  },

  {
    id: 4,
    nomeReceita: "Brownie de Chocolate com Gengibre",
    itensFaltantes: [
      "50 g farinha de milho fina",
      "10 g de cacau em pó",
      "250 g de chocolate meio amargo"
    ],
    ingredientes: [
      "50 g farinha de milho fina",
      "10 g de cacau em pó",
      "250 g de chocolate meio amargo",
      "200 g de manteiga sem sal cortada em cubos",
      "20 ml de suco de gengibre",
      "5 ovos",
      "200 g de açúcar",
      "1 colher (chá) de fermento em pó",
      "100 g de nozes picadas grosseiramente",
    ],
    modoPreparo: [
      "1 - Coloque numa tigela a farinha de milho fina e o cacau em pó.",
      "2 - Misture e reserve.",
      "3 - Numa panela, em banho-maria, derreta o chocolate meio amargo picado com a manteiga sem sal cortada em cubos.",
      "4 - Retire do fogo.",
      "5 - Adicione o suco de gengibre e misture.",
      "6 - Acrescente a mistura de farinha com cacau em pó (reservada acima). Misture bem e reserve.",
      "7 - Numa batedeira, coloque os ovos e o açúcar. Bata bem até dobrar de volume.",
      "8 - Com a batedeira ainda ligada, adicione o fermento em pó e bata até misturar.",
      "9 - Desligue a batedeira. Acrescente a mistura de chocolate (reservada acima) e as nozes picadas. Misture.",
      "10 - Transfira a massa para uma assadeira retangular (18 cm X 30 cm) untada e forrada com papel manteiga.",
      "11 - Leve para assar em forno médio pré-aquecido a 180°C por +/- 40 minutos.",
      "12 - Retire do forno.",
      "13 - Cubra o brownie com papel manteiga.",
      "14 - Coloque outra assadeira do mesmo tamanho pressionando levemente o brownie para que fique mais compacto e úmido",
      "15 - Deixe por +/- 4 horas na geladeira.",
      "16 - Retire a assadeira de cima do brownie, desenforme, corte em quadrados e sirva em seguida.",
    ],
    rendimento: "20 porções",
    tempoPreparo: "60 minutos"
  },

  {
    id: 5,
    nomeReceita: "Macarrão com molho.",
    itensFaltantes: [],
    ingredientes: [
      "1 pacote de macarrão tipo espaguete",
      "1/2 cebola picada",
      "03 dentes grandes de alho, picados (quantidade opcional)",
      "Azeitonas verdes (opcional)",
      "Queijo ralado",
      "2 caixas de molho pronto",
      "3 calabresas cortadas em cubos",
    ],
    modoPreparo: [
      "1 - Coloque água para cozinhar com sal a gosto e um fio de óleo (para quem gosta de usar óleo no cozimento do macarrão). Quando a água estiver fervendo, coloque todo o pacote de macarrão e deixe cozinhar até chegar ao ponto de ao dente. Escorra e reserve em uma travessa.",
      "2 - Refogue o alho com um pouco de azeite (o suficiente para untar o fundo da panela, não usando muito por que a calabresa solta gordura). Coloque a cebola e mexa até dourar.",
      "3 - Coloque a calabresa, refogue bem e só depois coloque o molho pronto.",
      "4 - Quando o molho estiver bem apurado, adicione o creme de leite aos poucos até ficar em um tom rosado. Espere ferver um pouco para apurar bem o gosto.",
      "5 - Retire do fogo e arrume sobre o macarrão.",
      "6 - Decore com azeitas e queijo ralado.",
    ],
    rendimento: "8 porções",
    tempoPreparo: "20 minutos"
  },

  {
    id: 6,
    nomeReceita: "Brownie de Chocolate com Gengibre",
    itensFaltantes: [
      "50 g farinha de milho fina",
      "10 g de cacau em pó",
      "250 g de chocolate meio amargo"
    ],
    ingredientes: [
      "50 g farinha de milho fina",
      "10 g de cacau em pó",
      "250 g de chocolate meio amargo",
      "200 g de manteiga sem sal cortada em cubos",
      "20 ml de suco de gengibre",
      "5 ovos",
      "200 g de açúcar",
      "1 colher (chá) de fermento em pó",
      "100 g de nozes picadas grosseiramente",
    ],
    modoPreparo: [
      "1 - Coloque numa tigela a farinha de milho fina e o cacau em pó.",
      "2 - Misture e reserve.",
      "3 - Numa panela, em banho-maria, derreta o chocolate meio amargo picado com a manteiga sem sal cortada em cubos.",
      "4 - Retire do fogo.",
      "5 - Adicione o suco de gengibre e misture.",
      "6 - Acrescente a mistura de farinha com cacau em pó (reservada acima). Misture bem e reserve.",
      "7 - Numa batedeira, coloque os ovos e o açúcar. Bata bem até dobrar de volume.",
      "8 - Com a batedeira ainda ligada, adicione o fermento em pó e bata até misturar.",
      "9 - Desligue a batedeira. Acrescente a mistura de chocolate (reservada acima) e as nozes picadas. Misture.",
      "10 - Transfira a massa para uma assadeira retangular (18 cm X 30 cm) untada e forrada com papel manteiga.",
      "11 - Leve para assar em forno médio pré-aquecido a 180°C por +/- 40 minutos.",
      "12 - Retire do forno.",
      "13 - Cubra o brownie com papel manteiga.",
      "14 - Coloque outra assadeira do mesmo tamanho pressionando levemente o brownie para que fique mais compacto e úmido",
      "15 - Deixe por +/- 4 horas na geladeira.",
      "16 - Retire a assadeira de cima do brownie, desenforme, corte em quadrados e sirva em seguida.",
    ],
    rendimento: "20 porções",
    tempoPreparo: "60 minutos"
  },
]

export const recipesMockResolver = () => {
  return recipeExample;
}
