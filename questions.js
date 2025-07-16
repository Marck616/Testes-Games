// Banco de dados de temas
const themes = [
    {
        id: 'music',
        name: 'Música',
        description: 'Teste seus conhecimentos sobre artistas e álbuns famosos',
        image: 'https://source.unsplash.com/random/800x600/?music'
    },
    {
        id: 'literature',
        name: 'Literatura Brasileira',
        description: 'Perguntas sobre grandes obras e autores brasileiros',
        image: 'https://source.unsplash.com/random/800x600/?books,brazil'
    },
    {
        id: 'architecture',
        name: 'Arquitetura Brasileira',
        description: 'Conheça os grandes nomes e obras da arquitetura nacional',
        image: 'https://source.unsplash.com/random/800x600/?architecture,brazil'
    },
    {
        id: 'world',
        name: 'Gigantes do Mundo',
        description: 'Desafie-se com perguntas sobre recordes mundiais',
        image: 'https://source.unsplash.com/random/800x600/?world,records'
    },
    {
        id: 'biology',
        name: 'Doenças Biológicas',
        description: 'Teste seus conhecimentos sobre doenças e biologia',
        image: 'https://source.unsplash.com/random/800x600/?biology,disease'
    },
    {
        id: 'mythology',
        name: 'Mitologia',
        description: 'Deuses, heróis e mitos das antigas civilizações',
        image: 'https://source.unsplash.com/random/800x600/?mythology,gods'
    },
    {
        id: 'history',
        name: 'História',
        description: 'Perguntas sobre eventos históricos importantes',
        image: 'https://source.unsplash.com/random/800x600/?history'
    },
    {
        id: 'entertainment',
        name: 'Entretenimento',
        description: 'Curiosidades sobre filmes, séries e cultura pop',
        image: 'https://source.unsplash.com/random/800x600/?entertainment'
    }
];

// Banco de dados de perguntas
const questions = [
    {
        id: 1,
        theme: 'music',
        question: "Qual o nome do álbum mais vendido de Michael Jackson?",
        options: ["Bad", "Thriller", "Dangerous", "Off the Wall"],
        correctAnswer: 1,
        explanation: '"Thriller" (1982) é o álbum mais vendido da história, com sucessos como "Billie Jean" e "Beat It", consolidando Michael Jackson como o Rei do Pop.'
    },
    {
        id: 2,
        theme: 'music',
        question: "Qual desses videoclipes de Michael Jackson ficou famoso por suas coreografias de zumbis?",
        options: ["Black or White", "Remember the Time", "Thriller", "Smooth Criminal"],
        correctAnswer: 2,
        explanation: 'O clipe de "Thriller" revolucionou o conceito de videoclipe, misturando música, dança e elementos de terror, com direção de John Landis.'
    },
    {
        id: 3,
        theme: 'music',
        question: "Como era chamado o passo de dança que Michael Jackson eternizou, onde ele parece deslizar para trás?",
        options: ["Side Step", "Glide Slide", "Floating Step", "Moonwalk"],
        correctAnswer: 3,
        explanation: 'O "Moonwalk" se tornou marca registrada de Michael Jackson após ele executá-lo ao vivo pela primeira vez em 1983, no especial "Motown 25".'
    },
    {
        id: 4,
        theme: 'music',
        question: "Qual era o nome do rancho onde Michael Jackson vivia, com zoológico e parque de diversões próprios?",
        options: ["Dreamland", "Thriller Park", "Neverland", "Pop Kingdom"],
        correctAnswer: 2,
        explanation: '"Neverland" foi o lar de Michael e um símbolo de sua busca por manter viva a infância, inspirado na Terra do Nunca de Peter Pan.'
    },
    {
        id: 5,
        theme: 'music',
        question: "Qual destes artistas NÃO colaborou com Michael Jackson em uma música?",
        options: ["Paul McCartney", "Slash (Guns N' Roses)", "Freddie Mercury", "Elvis Presley"],
        correctAnswer: 3,
        explanation: 'Elvis Presley nunca colaborou com Michael Jackson, já que faleceu em 1977, quando MJ ainda estava no início de sua carreira solo.'
    },
    {
        id: 6,
        theme: 'music',
        question: "O que significa a sigla BTS?",
        options: ["Behind The Scene", "Bangtan Sonyeondan", "Beyond The Stars", "Be The Sound"],
        correctAnswer: 1,
        explanation: 'BTS é a abreviação de "Bangtan Sonyeondan", que significa "escoteiros à prova de balas" em coreano. O nome simboliza a resistência às críticas e estereótipos enfrentados pelos jovens.'
    },
    {
        id: 7,
        theme: 'music',
        question: "Qual membro do BTS é o líder do grupo?",
        options: ["Jin", "Suga", "Jimin", "RM"],
        correctAnswer: 3,
        explanation: 'RM (Rap Monster), cujo nome real é Kim Namjoon, é o líder do BTS. Ele é conhecido por sua inteligência, talento em composição e fluência em inglês.'
    },
    {
        id: 8,
        theme: 'music',
        question: "Qual foi o primeiro single do BTS?",
        options: ["DNA", "No More Dream", "Boy With Luv", "Fire"],
        correctAnswer: 1,
        explanation: '"No More Dream" foi o single de estreia do BTS, lançado em 2013. A música critica as pressões sociais sobre os jovens e marcou o início do grupo no K-pop.'
    },
    {
        id: 9,
        theme: 'music',
        question: "Qual desses álbuns do BTS ficou no topo da Billboard 200 nos EUA?",
        options: ["Skool Luv Affair", "Wings", "Love Yourself: Tear", "Dark & Wild"],
        correctAnswer: 2,
        explanation: 'Em 2018, "Love Yourself: Tear" fez história ao se tornar o primeiro álbum em coreano a alcançar o topo da Billboard 200, consolidando o sucesso global do BTS.'
    },
    {
        id: 10,
        theme: 'music',
        question: "Qual desses artistas colaborou com o BTS na música 'Boy With Luv'?",
        options: ["Halsey", "Ariana Grande", "Billie Eilish", "Ed Sheeran"],
        correctAnswer: 0,
        explanation: 'A cantora americana Halsey participou da faixa "Boy With Luv", lançada em 2019, um dos clipes mais assistidos nas primeiras 24h do YouTube até hoje.'
    },
    {
        id: 11,
        theme: 'literature',
        question: "Quem é o autor de Dom Casmurro, obra famosa pelo personagem Bentinho e sua dúvida sobre Capitu?",
        options: ["José de Alencar", "Machado de Assis", "Lima Barreto", "Graciliano Ramos"],
        correctAnswer: 1,
        explanation: 'Machado de Assis é um dos maiores escritores brasileiros. Em "Dom Casmurro", ele cria uma narrativa ambígua que até hoje gera debates sobre traição e ciúmes.'
    },
    {
        id: 12,
        theme: 'literature',
        question: "Qual desses autores escreveu o clássico regionalista Vidas Secas?",
        options: ["Jorge Amado", "Graciliano Ramos", "Euclides da Cunha", "José Lins do Rego"],
        correctAnswer: 1,
        explanation: '"Vidas Secas" retrata a luta de uma família nordestina contra a seca e a miséria. É um dos grandes marcos do modernismo de 2ª fase no Brasil.'
    },
    {
        id: 13,
        theme: 'literature',
        question: "Quem foi o autor modernista que escreveu o poema 'No meio do caminho tinha uma pedra'?",
        options: ["Carlos Drummond de Andrade", "Manuel Bandeira", "Mário de Andrade", "João Cabral de Melo Neto"],
        correctAnswer: 0,
        explanation: 'Poeta mineiro, Drummond marcou a poesia brasileira com lirismo e ironia. Seu poema "No meio do caminho" causou polêmica na época pela quebra de padrões poéticos.'
    },
    {
        id: 14,
        theme: 'literature',
        question: "Qual obra é considerada o marco inicial do modernismo no Brasil?",
        options: ["A Moreninha", "O Guarani", "Macunaíma", "Pauliceia Desvairada"],
        correctAnswer: 3,
        explanation: '"Pauliceia Desvairada" (1922), de Mário de Andrade, é considerada a primeira obra modernista. Foi lançada no mesmo ano da Semana de Arte Moderna.'
    },
    {
        id: 15,
        theme: 'literature',
        question: "Qual dessas obras foi escrita por Clarice Lispector?",
        options: ["O Tempo e o Vento", "A Hora da Estrela", "Iracema", "Capitães da Areia"],
        correctAnswer: 1,
        explanation: 'Clarice Lispector é conhecida por sua escrita introspectiva e filosófica. "A Hora da Estrela" (1977) conta a história de Macabéa, uma nordestina invisibilizada no Rio de Janeiro.'
    },
    {
        id: 16,
        theme: 'architecture',
        question: "Quem é o arquiteto mais famoso do modernismo brasileiro, responsável por muitos prédios de Brasília?",
        options: ["Lúcio Costa", "Ruy Ohtake", "Oscar Niemeyer", "Paulo Mendes da Rocha"],
        correctAnswer: 2,
        explanation: 'Oscar Niemeyer é o nome mais associado ao modernismo no Brasil. Projetou obras icônicas como a Catedral de Brasília, usando curvas e concreto armado como marca registrada.'
    },
    {
        id: 17,
        theme: 'architecture',
        question: "Quem foi o urbanista responsável pelo plano piloto de Brasília?",
        options: ["Roberto Burle Marx", "Affonso Eduardo Reidy", "Lelé", "Lúcio Costa"],
        correctAnswer: 3,
        explanation: 'Lúcio Costa criou o projeto urbanístico de Brasília, com forma de avião (ou cruz), priorizando a separação de áreas residenciais, comerciais e políticas.'
    },
    {
        id: 18,
        theme: 'architecture',
        question: "Qual estilo arquitetônico predominava no Brasil durante o período colonial?",
        options: ["Neoclássico", "Modernista", "Barroco", "Brutalista"],
        correctAnswer: 2,
        explanation: 'O barroco marcou a arquitetura colonial brasileira, com igrejas ricamente decoradas e fachadas trabalhadas. Destaque para cidades como Ouro Preto (MG).'
    },
    {
        id: 19,
        theme: 'architecture',
        question: "A famosa Igreja de São Francisco de Assis, na Pampulha (BH), foi projetada por qual arquiteto?",
        options: ["João Batista Vilanova Artigas", "Oscar Niemeyer", "Lina Bo Bardi", "Gregori Warchavchik"],
        correctAnswer: 1,
        explanation: 'Projetada em 1943, com jardins de Burle Marx e painéis de Portinari, a igreja foi uma das primeiras obras modernistas no Brasil, enfrentando resistência da Igreja Católica na época.'
    },
    {
        id: 20,
        theme: 'architecture',
        question: "Qual dessas obras foi projetada por Lina Bo Bardi?",
        options: ["Museu de Arte de São Paulo (MASP)", "Palácio da Alvorada", "Congresso Nacional", "Memorial da América Latina"],
        correctAnswer: 0,
        explanation: 'O MASP, com seu icônico vão livre de 74 metros, é um símbolo da arquitetura moderna em São Paulo. Lina Bo Bardi era ítalo-brasileira e uma das pioneiras na valorização do popular na arquitetura.'
    },
    {
        id: 21,
        theme: 'world',
        question: "Qual é a montanha mais alta do mundo?",
        options: ["K2", "Monte Kilimanjaro", "Mont Blanc", "Monte Everest"],
        correctAnswer: 3,
        explanation: 'O Monte Everest, na Cordilheira do Himalaia (Nepal/China), é a montanha mais alta do mundo, com 8.848 metros acima do nível do mar.'
    },
    {
        id: 22,
        theme: 'world',
        question: "Qual é o maior oceano do planeta?",
        options: ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico", "Oceano Pacífico"],
        correctAnswer: 3,
        explanation: 'O Oceano Pacífico é o maior e mais profundo, cobrindo cerca de 1/3 da superfície da Terra e contendo a Fossa das Marianas, o ponto mais profundo do planeta.'
    },
    {
        id: 23,
        theme: 'world',
        question: "Qual é o maior país do mundo em extensão territorial?",
        options: ["Estados Unidos", "Canadá", "Rússia", "China"],
        correctAnswer: 2,
        explanation: 'A Rússia é o maior país do mundo, com mais de 17 milhões de km², ocupando partes da Europa e da Ásia.'
    },
    {
        id: 24,
        theme: 'world',
        question: "Qual é a maior estátua do mundo atualmente?",
        options: ["Cristo Redentor (Brasil)", "Estátua da Liberdade (EUA)", "Estátua da Unidade (Índia)", "Buda de Leshan (China)"],
        correctAnswer: 2,
        explanation: 'Com 182 metros de altura, a Estátua da Unidade, na Índia, homenageia Sardar Patel e é a mais alta do mundo, superando o dobro da altura do Cristo Redentor.'
    },
    {
        id: 25,
        theme: 'world',
        question: "Qual é o maior deserto do mundo em área total?",
        options: ["Deserto do Saara", "Deserto de Gobi", "Deserto da Antártida", "Deserto da Arábia"],
        correctAnswer: 2,
        explanation: 'Embora coberto de gelo, a Antártida é considerada um deserto por suas baixíssimas taxas de precipitação. É o maior do mundo, com mais de 14 milhões de km².'
    },
    {
        id: 26,
        theme: 'biology',
        question: "Qual agente causador da AIDS (Síndrome da Imunodeficiência Adquirida)?",
        options: ["Vírus Influenza", "Vírus HIV", "Bactéria Treponema pallidum", "Protozoário Plasmodium"],
        correctAnswer: 1,
        explanation: 'O HIV ataca as células de defesa (linfócitos T CD4+), comprometendo o sistema imunológico. Sem tratamento, evolui para a AIDS.'
    },
    {
        id: 27,
        theme: 'biology',
        question: "A malária é causada por um protozoário transmitido por qual vetor?",
        options: ["Mosquito Aedes aegypti", "Carrapato estrela", "Mosquito Anopheles", "Mosca tsé-tsé"],
        correctAnswer: 2,
        explanation: 'A malária é causada por protozoários do gênero Plasmodium, transmitidos pela picada do mosquito Anopheles. Afeta principalmente o fígado e o sangue.'
    },
    {
        id: 28,
        theme: 'biology',
        question: "Qual dessas doenças é causada por uma bactéria?",
        options: ["Catapora", "Tétano", "Dengue", "Caxumba"],
        correctAnswer: 1,
        explanation: 'O tétano é causado pela bactéria Clostridium tetani, que produz uma toxina que atinge o sistema nervoso. Pode ser evitado com vacinação.'
    },
    {
        id: 29,
        theme: 'biology',
        question: "A hanseníase (lepra) afeta principalmente qual sistema do corpo humano?",
        options: ["Respiratório", "Imunológico", "Digestivo", "Nervoso"],
        correctAnswer: 3,
        explanation: 'Causada pela bactéria Mycobacterium leprae, a hanseníase ataca nervos periféricos, podendo causar dormência, fraqueza muscular e deformações.'
    },
    {
        id: 30,
        theme: 'biology',
        question: "Qual dessas doenças é causada por fungos?",
        options: ["Tuberculose", "Candidíase", "Hepatite B", "Esquistossomose"],
        correctAnswer: 1,
        explanation: 'A candidíase é causada por fungos do gênero Candida, especialmente Candida albicans. Pode afetar pele, boca, intestino e órgãos genitais.'
    },
    {
        id: 31,
        theme: 'mythology',
        question: "Quem era o rei dos deuses na mitologia grega?",
        options: ["Hades", "Apolo", "Zeus", "Hermes"],
        correctAnswer: 2,
        explanation: 'Zeus é o deus do céu, dos raios e trovões. É o líder do Olimpo e governa os outros deuses após derrotar os Titãs.'
    },
    {
        id: 32,
        theme: 'mythology',
        question: "Qual deusa grega nasceu da espuma do mar?",
        options: ["Atena", "Ártemis", "Afrodite", "Deméter"],
        correctAnswer: 2,
        explanation: 'Afrodite é a deusa do amor e da beleza. Segundo o mito, ela surgiu da espuma do mar quando Cronos cortou o céu e lançou os genitais de Urano nas águas.'
    },
    {
        id: 33,
        theme: 'mythology',
        question: "Quem é o deus do submundo na mitologia grega?",
        options: ["Dionísio", "Ares", "Apolo", "Hades"],
        correctAnswer: 3,
        explanation: 'Hades governa o mundo dos mortos. Embora sombrio, ele não é um deus do mal — apenas o senhor dos mortos e dos ricos subterrâneos.'
    },
    {
        id: 34,
        theme: 'mythology',
        question: "Qual é a deusa da sabedoria, estratégia e artes?",
        options: ["Hera", "Atena", "Ártemis", "Héstia"],
        correctAnswer: 1,
        explanation: 'Atena nasceu da cabeça de Zeus, já adulta e armada. É a protetora de Atenas e símbolo de sabedoria e justiça.'
    },
    {
        id: 35,
        theme: 'mythology',
        question: "Dionísio é o deus de quê?",
        options: ["Guerra e destruição", "Caça e animais", "Vinhos, festas e teatro", "Força e agricultura"],
        correctAnswer: 2,
        explanation: 'Dionísio representa a liberdade dos instintos, o prazer e a loucura. Era cultuado com festas chamadas "bacanais", e também ligado ao teatro grego.'
    },
    {
        id: 36,
        theme: 'history',
        question: "Qual foi o evento que marcou o início oficial da Segunda Guerra Mundial?",
        options: [
            "A invasão da Polônia pela União Soviética (1939)",
            "O ataque japonês a Pearl Harbor (1941)",
            "A invasão da França pela Alemanha (1940)",
            "A invasão da Polônia pela Alemanha (1º de setembro de 1939)"
        ],
        correctAnswer: 3,
        explanation: 'A guerra começou quando a Alemanha nazista invadiu a Polônia, levando França e Reino Unido a declararem guerra à Alemanha.'
    },
    {
        id: 37,
        theme: 'history',
        question: "Qual foi o principal campo de concentração e extermínio nazista?",
        options: ["Dachau", "Treblinka", "Buchenwald", "Auschwitz (na Polônia ocupada)"],
        correctAnswer: 3,
        explanation: 'Auschwitz foi o maior e mais letal campo de extermínio, onde mais de 1 milhão de pessoas foram assassinadas.'
    },
    {
        id: 38,
        theme: 'history',
        question: "Qual batalha foi considerada o ponto de virada na Frente Oriental?",
        options: [
            "Batalha de Berlim (1945)",
            "Batalha de Kursk (1943)",
            "Batalha de Moscou (1941)",
            "Batalha de Stalingrado (1942–1943)"
        ],
        correctAnswer: 3,
        explanation: 'A derrota alemã em Stalingrado marcou o início da retirada nazista na URSS.'
    },
    {
        id: 39,
        theme: 'history',
        question: "Qual país foi invadido pela Alemanha na 'Operação Barbarossa'?",
        options: ["Reino Unido", "Itália", "França", "União Soviética (1941)"],
        correctAnswer: 3,
        explanation: 'A invasão da URSS em 1941 quebrou o pacto de não-agressão entre Hitler e Stalin.'
    },
    {
        id: 40,
        theme: 'history',
        question: "Qual foi o último grande ataque ofensivo alemão na Europa Ocidental?",
        options: [
            "Batalha da Normandia",
            "Batalha de Dunkirk",
            "Batalha das Ardenas (1940)",
            "Batalha do Bulge (Ardenas, 1944–1945)"
        ],
        correctAnswer: 3,
        explanation: 'A ofensiva das Ardenas (ou "Batalha do Bulge") foi uma tentativa frustrada da Alemanha de frear o avanço aliado.'
    },
    {
        id: 41,
        theme: 'entertainment',
        question: "Qual filme ganhou o Oscar de Melhor Filme em 1998, vencendo 'O Resgate do Soldado Ryan'?",
        options: ["Titanic", "Chicago", "Shakespeare Apaixonado", "Gladiador"],
        correctAnswer: 2,
        explanation: 'Shakespeare Apaixonado (Shakespeare) surpreendeu ao vencer o Oscar de Melhor Filme em 1999, desbancando o favorito O Resgate do Soldado Ryan.'
    },
    {
        id: 42,
        theme: 'entertainment',
        question: "Qual diretor é conhecido por filmes como 'Jurassic Park' e 'E.T.'?",
        options: ["Tarantino", "Spielberg", "Cameron", "Nolan"],
        correctAnswer: 1,
        explanation: 'Steven Spielberg é um dos diretores mais influentes da história do cinema, conhecido por seus grandes sucessos de bilheteria e filmes marcantes.'
    },
    {
        id: 43,
        theme: 'entertainment',
        question: "Qual ator interpretou o Coringa no filme 'Coringa' de 2019?",
        options: ["Phoenix", "Ledger", "Nicholson", "Leto"],
        correctAnswer: 0,
        explanation: 'Joaquin Phoenix interpretou o Coringa em 2019 e venceu o Oscar de Melhor Ator por sua performance intensa e elogiada.'
    },
    {
        id: 44,
        theme: 'entertainment',
        question: "Em que franquia aparece o personagem Darth Vader?",
        options: ["Matrix", "Star Wars", "Avatar", "Duna"],
        correctAnswer: 1,
        explanation: 'Darth Vader é um dos vilões mais icônicos da cultura pop, personagem central da franquia Star Wars.'
    },
    {
        id: 45,
        theme: 'entertainment',
        question: "Qual país criou o movimento cinematográfico chamado 'Neorrealismo'?",
        options: ["França", "EUA", "Itália", "Alemanha"],
        correctAnswer: 2,
        explanation: 'O neorrealismo surgiu na Itália após a Segunda Guerra Mundial, com filmes que mostravam a vida real, pobreza e questões sociais, como Ladrões de Bicicleta.'
    }
];
