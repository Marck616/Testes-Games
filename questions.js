// Banco de dados de temas
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
    },
    {
        id: 'sports',
        name: 'Esportes',
        description: 'Perguntas sobre diversos esportes e atletas famosos',
        image: 'https://source.unsplash.com/random/800x600/?sports'
    },
    {
        id: 'science',
        name: 'Ciência',
        description: 'Desafios sobre descobertas e conceitos científicos',
        image: 'https://source.unsplash.com/random/800x600/?science'
    },
    {
        id: 'geography',
        name: 'Geografia',
        description: 'Perguntas sobre países, cidades e fenômenos naturais',
        image: 'https://source.unsplash.com/random/800x600/?geography'
    },
    {
        id: 'art',
        name: 'Arte',
        description: 'Teste seus conhecimentos sobre artistas e movimentos artísticos',
        image: 'https://source.unsplash.com/random/800x600/?art'
    },
    {
        id: 'technology',
        name: 'Tecnologia',
        description: 'Perguntas sobre inovações tecnológicas e conceitos digitais',
        image: 'https://source.unsplash.com/random/800x600/?technology'
    },
    {
        id: 'language',
        name: 'Línguas',
        description: 'Desafios sobre idiomas e linguística',
        image: 'https://source.unsplash.com/random/800x600/?language'
    },
    {
        id: 'culture',
        name: 'Cultura',
        description: 'Perguntas sobre tradições e manifestações culturais',
        image: 'https://source.unsplash.com/random/800x600/?culture'
    },
    {
        id: 'math',
        name: 'Matemática',
        description: 'Teste seus conhecimentos matemáticos',
        image: 'https://source.unsplash.com/random/800x600/?math'
    }
];

// Banco de dados de perguntas
const questions = [
    // Música
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
        theme: 'music',
        question: "Em qual cidade Michael Jackson nasceu?",
        options: ["Los Angeles, CA", "Detroit, MI", "Chicago, IL", "Gary, IN"],
        correctAnswer: 3,
        explanation: 'Michael Jackson nasceu em Gary, Indiana, em 1958. Ele começou sua carreira ainda criança com os Jackson 5, grupo formado com seus irmãos.'
    },
    {
        id: 12,
        theme: 'music',
        question: "Qual cantora é conhecida como 'Rainha do Pop'?",
        options: ["Beyoncé", "Lady Gaga", "Madonna", "Taylor Swift"],
        correctAnswer: 2,
        explanation: 'Madonna é chamada de "Rainha do Pop" por sua enorme influência no gênero desde os anos 1980, com hits, reinvenções e impacto cultural marcante.'
    },
    {
        id: 13,
        theme: 'music',
        question: "Qual grupo lançou o sucesso mundial 'Wannabe' nos anos 90?",
        options: ["Backstreet Boys", "Spice Girls", "NSYNC", "Destiny's Child"],
        correctAnswer: 1,
        explanation: 'As Spice Girls foram um fenômeno pop britânico dos anos 90, conhecidas pelo empoderamento feminino e hits dançantes como "Wannabe".'
    },
    {
        id: 14,
        theme: 'music',
        question: "Quem lançou o álbum '1989', que marcou a transição do country para o pop?",
        options: ["Ariana Grande", "Taylor Swift", "Selena Gomez", "Katy Perry"],
        correctAnswer: 1,
        explanation: '"1989" é o quinto álbum de Taylor Swift, que consolidou sua carreira no pop, com hits como "Shake It Off" e "Blank Space".'
    },
    {
        id: 15,
        theme: 'music',
        question: "Qual artista pop ficou famosa com o hit 'Bad Romance'?",
        options: ["Britney Spears", "Rihanna", "Lady Gaga", "Christina Aguilera"],
        correctAnswer: 2,
        explanation: 'Lady Gaga ficou mundialmente conhecida por seu estilo único e o hit "Bad Romance" (2009), um marco na música pop e na cultura pop.'
    },
    {
        id: 16,
        theme: 'music',
        question: "Qual foi o primeiro videoclipe a alcançar 1 bilhão de visualizações no YouTube?",
        options: ["Gangnam Style — Psy", "Baby — Justin Bieber", "Despacito — Luis Fonsi", "Shape of You — Ed Sheeran"],
        correctAnswer: 0,
        explanation: 'O hit sul-coreano "Gangnam Style" viralizou mundialmente em 2012, sendo o primeiro vídeo do YouTube a ultrapassar 1 bilhão de views.'
    },
    {
        id: 17,
        theme: 'music',
        question: "De qual cidade eram os Mamonas Assassinas?",
        options: ["Rio de Janeiro (RJ)", "Guarulhos (SP)", "Belo Horizonte (MG)", "Campinas (SP)"],
        correctAnswer: 1,
        explanation: 'A banda surgiu em Guarulhos e ficou conhecida por seu estilo bem-humorado e apresentações enérgicas, conquistando o Brasil em pouco tempo.'
    },
    {
        id: 18,
        theme: 'music',
        question: "Qual era o nome da banda antes de se chamar Mamonas Assassinas?",
        options: ["Os Tretas", "Utopia", "Caos e Ordem", "Zorra Total"],
        correctAnswer: 1,
        explanation: 'Antes de se tornarem Mamonas Assassinas, os integrantes tocavam músicas mais sérias com a banda "Utopia", mas o sucesso só veio com o humor escrachado.'
    },
    {
        id: 19,
        theme: 'music',
        question: "Qual dessas músicas fez parte do único álbum da banda?",
        options: ["Vira-Vira", "Pelados em Santos", "Robocop Gay", "Todas as anteriores"],
        correctAnswer: 3,
        explanation: 'O álbum "Mamonas Assassinas" (1995) tinha vários sucessos que misturavam estilos musicais com humor escrachado. Foi um sucesso de vendas no Brasil.'
    },
    {
        id: 20,
        theme: 'music',
        question: "Qual estilo musical a banda costumava misturar influências para criar paródias?",
        options: ["Só rock", "Pop romântico", "Uma mistura de vários estilos (rock, sertanejo, pagode, etc.)", "Só samba"],
        correctAnswer: 2,
        explanation: 'Os Mamonas faziam sátiras de gêneros como pagode, música portuguesa, sertanejo, heavy metal e até bolero — sempre com bom humor.'
    },
    {
        id: 21,
        theme: 'music',
        question: "Em que ano aconteceu o acidente aéreo que causou a morte dos integrantes da banda?",
        options: ["1993", "1995", "1996", "1998"],
        correctAnswer: 2,
        explanation: 'No dia 2 de março de 1996, os cinco integrantes morreram em um acidente aéreo em São Paulo, no auge do sucesso. O país inteiro ficou de luto.'
    },
    {
        id: 22,
        theme: 'music',
        question: "Quem era o vocalista da banda Mamonas Assassinas?",
        options: ["Dinho", "Bento", "Júlio", "Sérgio"],
        correctAnswer: 0,
        explanation: 'Dinho era o carismático vocalista do grupo. Sua energia no palco e humor espontâneo foram essenciais para o sucesso meteórico da banda.'
    },
    
    // Literatura Brasileira
    {
        id: 23,
        theme: 'literature',
        question: "Quem é o autor de Dom Casmurro, obra famosa pelo personagem Bentinho e sua dúvida sobre Capitu?",
        options: ["José de Alencar", "Machado de Assis", "Lima Barreto", "Graciliano Ramos"],
        correctAnswer: 1,
        explanation: 'Machado de Assis é um dos maiores escritores brasileiros. Em "Dom Casmurro", ele cria uma narrativa ambígua que até hoje gera debates sobre traição e ciúmes.'
    },
    {
        id: 24,
        theme: 'literature',
        question: "Qual desses autores escreveu o clássico regionalista Vidas Secas?",
        options: ["Jorge Amado", "Graciliano Ramos", "Euclides da Cunha", "José Lins do Rego"],
        correctAnswer: 1,
        explanation: '"Vidas Secas" retrata a luta de uma família nordestina contra a seca e a miséria. É um dos grandes marcos do modernismo de 2ª fase no Brasil.'
    },
    {
        id: 25,
        theme: 'literature',
        question: "Quem foi o autor modernista que escreveu o poema 'No meio do caminho tinha uma pedra'?",
        options: ["Carlos Drummond de Andrade", "Manuel Bandeira", "Mário de Andrade", "João Cabral de Melo Neto"],
        correctAnswer: 0,
        explanation: 'Poeta mineiro, Drummond marcou a poesia brasileira com lirismo e ironia. Seu poema "No meio do caminho" causou polêmica na época pela quebra de padrões poéticos.'
    },
    {
        id: 26,
        theme: 'literature',
        question: "Qual obra é considerada o marco inicial do modernismo no Brasil?",
        options: ["A Moreninha", "O Guarani", "Macunaíma", "Pauliceia Desvairada"],
        correctAnswer: 3,
        explanation: '"Pauliceia Desvairada" (1922), de Mário de Andrade, é considerada a primeira obra modernista. Foi lançada no mesmo ano da Semana de Arte Moderna.'
    },
    {
        id: 27,
        theme: 'literature',
        question: "Qual dessas obras foi escrita por Clarice Lispector?",
        options: ["O Tempo e o Vento", "A Hora da Estrela", "Iracema", "Capitães da Areia"],
        correctAnswer: 1,
        explanation: 'Clarice Lispector é conhecida por sua escrita introspectiva e filosófica. "A Hora da Estrela" (1977) conta a história de Macabéa, uma nordestina invisibilizada no Rio de Janeiro.'
    },
    {
        id: 28,
        theme: 'literature',
        question: "Qual desses escritores também foi político e escreveu Triste Fim de Policarpo Quaresma?",
        options: ["José de Alencar", "Lima Barreto", "Álvares de Azevedo", "Monteiro Lobato"],
        correctAnswer: 1,
        explanation: 'Lima Barreto criticava o nacionalismo exagerado e as instituições brasileiras com ironia. Em "Triste Fim de Policarpo Quaresma", ele mostra o fracasso de um idealista patriota.'
    },
    {
        id: 29,
        theme: 'literature',
        question: "De qual língua a língua portuguesa deriva diretamente?",
        options: ["Latim vulgar", "Grego antigo", "Germânico", "Latim clássico"],
        correctAnswer: 0,
        explanation: 'O português evoluiu do latim vulgar falado pelos soldados e colonos romanos, que era diferente do latim clássico usado na literatura.'
    },
    {
        id: 30,
        theme: 'literature',
        question: "Qual região é considerada o berço da língua portuguesa?",
        options: ["Galícia", "Lisboa", "Província Romana da Lusitânia", "Andaluzia"],
        correctAnswer: 2,
        explanation: 'A Lusitânia correspondia a grande parte do território do atual Portugal e parte da Espanha, onde o latim evoluiu para o galego-português.'
    },
    {
        id: 31,
        theme: 'literature',
        question: "Em que período histórico a língua portuguesa começou a se diferenciar do galego?",
        options: ["Idade Média", "Renascimento", "Era Moderna", "Idade Antiga"],
        correctAnswer: 0,
        explanation: 'No período medieval, o galego e o português começaram a se diferenciar, principalmente devido à separação política e cultural entre Portugal e Galícia.'
    },
    {
        id: 32,
        theme: 'literature',
        question: "Qual foi o primeiro texto literário importante escrito em português?",
        options: ["Carta de Pero Vaz de Caminha", "Livro de Boa Memória", "Cantiga de Santa Maria", "Lusíadas"],
        correctAnswer: 2,
        explanation: 'As "Cantigas de Santa Maria", compiladas no século XIII, são algumas das primeiras obras importantes escritas em galaico-português, uma forma antiga do português.'
    },
    {
        id: 33,
        theme: 'literature',
        question: "Quem é o autor de Os Lusíadas, obra emblemática da língua portuguesa?",
        options: ["Gil Vicente", "Luís de Camões", "Fernando Pessoa", "José de Alencar"],
        correctAnswer: 1,
        explanation: 'Luís de Camões escreveu "Os Lusíadas" no século XVI, um poema épico que celebra os feitos dos navegadores portugueses e a expansão do império.'
    },
    {
        id: 34,
        theme: 'literature',
        question: "A expansão da língua portuguesa pelo mundo está associada principalmente a qual fenômeno histórico?",
        options: ["Guerra dos Cem Anos", "Descobrimentos marítimos e colonização", "Revolução Industrial", "Guerra Fria"],
        correctAnswer: 1,
        explanation: 'Com as grandes navegações do século XV e XVI, Portugal estabeleceu colônias na África, Ásia e América, levando o português a ser falado em várias partes do mundo.'
    },
    
    // Arquitetura Brasileira
    {
        id: 35,
        theme: 'architecture',
        question: "Quem é o arquiteto mais famoso do modernismo brasileiro, responsável por muitos prédios de Brasília?",
        options: ["Lúcio Costa", "Ruy Ohtake", "Oscar Niemeyer", "Paulo Mendes da Rocha"],
        correctAnswer: 2,
        explanation: 'Oscar Niemeyer é o nome mais associado ao modernismo no Brasil. Projetou obras icônicas como a Catedral de Brasília, usando curvas e concreto armado como marca registrada.'
    },
    {
        id: 36,
        theme: 'architecture',
        question: "Quem foi o urbanista responsável pelo plano piloto de Brasília?",
        options: ["Roberto Burle Marx", "Affonso Eduardo Reidy", "Lelé", "Lúcio Costa"],
        correctAnswer: 3,
        explanation: 'Lúcio Costa criou o projeto urbanístico de Brasília, com forma de avião (ou cruz), priorizando a separação de áreas residenciais, comerciais e políticas.'
    },
    {
        id: 37,
        theme: 'architecture',
        question: "Qual estilo arquitetônico predominava no Brasil durante o período colonial?",
        options: ["Neoclássico", "Modernista", "Barroco", "Brutalista"],
        correctAnswer: 2,
        explanation: 'O barroco marcou a arquitetura colonial brasileira, com igrejas ricamente decoradas e fachadas trabalhadas. Destaque para cidades como Ouro Preto (MG).'
    },
    {
        id: 38,
        theme: 'architecture',
        question: "A famosa Igreja de São Francisco de Assis, na Pampulha (BH), foi projetada por qual arquiteto?",
        options: ["João Batista Vilanova Artigas", "Oscar Niemeyer", "Lina Bo Bardi", "Gregori Warchavchik"],
        correctAnswer: 1,
        explanation: 'Projetada em 1943, com jardins de Burle Marx e painéis de Portinari, a igreja foi uma das primeiras obras modernistas no Brasil, enfrentando resistência da Igreja Católica na época.'
    },
    {
        id: 39,
        theme: 'architecture',
        question: "Qual dessas obras foi projetada por Lina Bo Bardi?",
        options: ["Museu de Arte de São Paulo (MASP)", "Palácio da Alvorada", "Congresso Nacional", "Memorial da América Latina"],
        correctAnswer: 0,
        explanation: 'O MASP, com seu icônico vão livre de 74 metros, é um símbolo da arquitetura moderna em São Paulo. Lina Bo Bardi era ítalo-brasileira e uma das pioneiras na valorização do popular na arquitetura.'
    },
    {
        id: 40,
        theme: 'architecture',
        question: "O que caracteriza a arquitetura brutalista brasileira, vista em obras como o SESC Pompeia?",
        options: ["Uso de vidro e estruturas leves", "Estilo colonial com adornos", "Concreto aparente e formas fortes", "Telhados coloniais e pisos de barro"],
        correctAnswer: 2,
        explanation: 'O brutalismo valoriza o concreto cru e estruturas pesadas, transmitindo força e função. Foi muito usado entre os anos 1950 e 1980 por arquitetos como Paulo Mendes da Rocha e Lina Bo Bardi.'
    },
    
    // Gigantes do Mundo
    {
        id: 41,
        theme: 'world',
        question: "Qual é a montanha mais alta do mundo?",
        options: ["K2", "Monte Kilimanjaro", "Mont Blanc", "Monte Everest"],
        correctAnswer: 3,
        explanation: 'O Monte Everest, na Cordilheira do Himalaia (Nepal/China), é a montanha mais alta do mundo, com 8.848 metros acima do nível do mar.'
    },
    {
        id: 42,
        theme: 'world',
        question: "Qual é o maior oceano do planeta?",
        options: ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico", "Oceano Pacífico"],
        correctAnswer: 3,
        explanation: 'O Oceano Pacífico é o maior e mais profundo, cobrindo cerca de 1/3 da superfície da Terra e contendo a Fossa das Marianas, o ponto mais profundo do planeta.'
    },
    {
        id: 43,
        theme: 'world',
        question: "Qual é o maior país do mundo em extensão territorial?",
        options: ["Estados Unidos", "Canadá", "Rússia", "China"],
        correctAnswer: 2,
        explanation: 'A Rússia é o maior país do mundo, com mais de 17 milhões de km², ocupando partes da Europa e da Ásia.'
    },
    {
        id: 44,
        theme: 'world',
        question: "Qual é a maior estátua do mundo atualmente?",
        options: ["Cristo Redentor (Brasil)", "Estátua da Liberdade (EUA)", "Estátua da Unidade (Índia)", "Buda de Leshan (China)"],
        correctAnswer: 2,
        explanation: 'Com 182 metros de altura, a Estátua da Unidade, na Índia, homenageia Sardar Patel e é a mais alta do mundo, superando o dobro da altura do Cristo Redentor.'
    },
    {
        id: 45,
        theme: 'world',
        question: "Qual é o maior deserto do mundo em área total?",
        options: ["Deserto do Saara", "Deserto de Gobi", "Deserto da Antártida", "Deserto da Arábia"],
        correctAnswer: 2,
        explanation: 'Embora coberto de gelo, a Antártida é considerada um deserto por suas baixíssimas taxas de precipitação. É o maior do mundo, com mais de 14 milhões de km².'
    },
    {
        id: 46,
        theme: 'world',
        question: "Qual é o maior rio do mundo em volume de água?",
        options: ["Nilo", "Amazonas", "Yangtzé", "Mississipi"],
        correctAnswer: 1,
        explanation: 'O Rio Amazonas, no Brasil, é o maior em volume de água e também o mais extenso segundo estudos recentes — com cerca de 7.062 km.'
    },
    {
        id: 47,
        theme: 'world',
        question: "Qual ilha é conhecida pela alta concentração de serpentes venenosas?",
        options: ["Ilha de Páscoa", "Ilha da Queimada Grande", "Ilha de Madeira", "Ilha de Bali"],
        correctAnswer: 1,
        explanation: 'A Ilha da Queimada Grande, no Brasil, tem uma das maiores densidades de serpentes venenosas do mundo, principalmente a jararaca-ilhoa, o que torna a ilha extremamente perigosa.'
    },
    {
        id: 48,
        theme: 'world',
        question: "Qual ilha italiana era usada para quarentena de doentes e é cercada de histórias sombrias?",
        options: ["Ilha de Capri", "Ilha de Poveglia", "Ilha de Sardenha", "Ilha de Elba"],
        correctAnswer: 1,
        explanation: 'A Ilha de Poveglia foi usada como local para isolar pessoas infectadas por doenças contagiosas e depois como sanatório, gerando muitas lendas de assombrações e fama de ser mal-assombrada.'
    },
    {
        id: 49,
        theme: 'world',
        question: "Qual ilha do Caribe tem um vulcão ativo que já destruiu sua capital?",
        options: ["Ilha de Aruba", "Ilha de Jamaica", "Ilha de Montserrat", "Ilha de Barbados"],
        correctAnswer: 2,
        explanation: 'O vulcão Soufrière Hills entrou em erupção em 1995 e devastou a capital Plymouth, obrigando a evacuação e tornando parte da ilha inabitável.'
    },
    {
        id: 50,
        theme: 'world',
        question: "Qual ilha remota no Atlântico Sul é conhecida por seu clima extremo e tubarões?",
        options: ["Ilha de Bouvet", "Ilha de Santa Helena", "Ilha de Ascensão", "Ilha de Tristan da Cunha"],
        correctAnswer: 0,
        explanation: 'Ilha de Bouvet é uma das mais isoladas do planeta, com águas frias e agitadas, clima extremo e presença de tubarões, dificultando o acesso humano.'
    },
    {
        id: 51,
        theme: 'world',
        question: "Qual ilha japonesa ficou altamente radioativa após um desastre nuclear?",
        options: ["Ilha de Okinawa", "Ilha de Hokkaido", "Ilha de Okuma (Fukushima)", "Ilha de Shikoku"],
        correctAnswer: 2,
        explanation: 'Após o acidente nuclear de 2011, a área de Fukushima foi evacuada e permanece contaminada, sendo perigosa para a população até hoje.'
    },
    {
        id: 52,
        theme: 'world',
        question: "Qual ilha no Oceano Índico é uma base militar secreta e conhecida pelos tubarões brancos?",
        options: ["Ilha de Diego Garcia", "Ilha de Madagascar", "Ilha Maurício", "Ilha Seychelles"],
        correctAnswer: 0,
        explanation: 'Diego Garcia é uma base militar estratégica com acesso restrito e águas infestadas de tubarões, além de ser cercada de segredos e perigos naturais.'
    },
    {
        id: 53,
        theme: 'world',
        question: "Qual prisão famosa fica localizada na ilha da Baía de São Francisco e já abrigou criminosos como Al Capone?",
        options: ["Prisão de Alcatraz", "Prisão de Rikers Island", "Prisão de Sing Sing", "Prisão de Robben Island"],
        correctAnswer: 0,
        explanation: 'Conhecida como "A Rocha", Alcatraz foi uma prisão federal de segurança máxima entre 1934 e 1963, famosa por sua localização isolada e presos notórios.'
    },
    {
        id: 54,
        theme: 'world',
        question: "Qual prisão sul-africana é famosa por ter mantido Nelson Mandela preso durante 18 anos?",
        options: ["Prisão de Robben Island", "Prisão de Pretoria", "Prisão de Pollsmoor", "Prisão de Johannesburg"],
        correctAnswer: 0,
        explanation: 'Robben Island é uma ilha-prisão onde Mandela e outros ativistas anti-apartheid foram mantidos, símbolo da luta contra a segregação racial.'
    },
    {
        id: 55,
        theme: 'world',
        question: "Qual é a maior prisão dos Estados Unidos em termos de população carcerária?",
        options: ["Prisão de San Quentin", "Prisão de Rikers Island", "Prisão de Pelican Bay", "Prisão de Attica"],
        correctAnswer: 1,
        explanation: 'Localizada em Nova York, Rikers Island é um complexo prisional enorme e um dos mais conhecidos dos EUA, com alta população e controvérsias sobre condições.'
    },
    {
        id: 56,
        theme: 'world',
        question: "Qual prisão brasileira é conhecida por episódios graves de rebeliões e é considerada uma das mais perigosas do país?",
        options: ["Penitenciária de Catanduvas", "Complexo Penitenciário de Pedrinhas", "Penitenciária de Tremembé", "Penitenciária de Presidente Venceslau"],
        correctAnswer: 1,
        explanation: 'Localizado no Maranhão, Pedrinhas é conhecido por violência extrema, rebeliões e mortes, retratando desafios do sistema prisional brasileiro.'
    },
    {
        id: 57,
        theme: 'world',
        question: "Qual prisão histórica da França foi tomada durante a Revolução Francesa, simbolizando o fim do Antigo Regime?",
        options: ["Prisão de Bastilha", "Prisão de Vincennes", "Prisão de La Santé", "Prisão de Conciergerie"],
        correctAnswer: 0,
        explanation: 'A tomada da Bastilha em 1789 marcou o início da Revolução Francesa e simbolizou a luta contra a monarquia absolutista.'
    },
    {
        id: 58,
        theme: 'world',
        question: "Qual prisão é conhecida por abrigar prisioneiros internacionais por crimes de guerra e crimes contra a humanidade?",
        options: ["Prisão de Guantánamo", "Prisão de La Santé", "Tribunal Penal Internacional (Hague)", "Prisão de Rikers Island"],
        correctAnswer: 2,
        explanation: 'O Tribunal Penal Internacional, na Haia, Holanda, julga crimes graves de alcance global, como genocídio e crimes contra a humanidade, mantendo presos condenados.'
    },
    
    // Doenças Biológicas
    {
        id: 59,
        theme: 'biology',
        question: "Qual agente causador da AIDS (Síndrome da Imunodeficiência Adquirida)?",
        options: ["Vírus Influenza", "Vírus HIV", "Bactéria Treponema pallidum", "Protozoário Plasmodium"],
        correctAnswer: 1,
        explanation: 'O HIV ataca as células de defesa (linfócitos T CD4+), comprometendo o sistema imunológico. Sem tratamento, evolui para a AIDS.'
    },
    {
        id: 60,
        theme: 'biology',
        question: "A malária é causada por um protozoário transmitido por qual vetor?",
        options: ["Mosquito Aedes aegypti", "Carrapato estrela", "Mosquito Anopheles", "Mosca tsé-tsé"],
        correctAnswer: 2,
        explanation: 'A malária é causada por protozoários do gênero Plasmodium, transmitidos pela picada do mosquito Anopheles. Afeta principalmente o fígado e o sangue.'
    },
    {
        id: 61,
        theme: 'biology',
        question: "Qual dessas doenças é causada por uma bactéria?",
        options: ["Catapora", "Tétano", "Dengue", "Caxumba"],
        correctAnswer: 1,
        explanation: 'O tétano é causado pela bactéria Clostridium tetani, que produz uma toxina que atinge o sistema nervoso. Pode ser evitado com vacinação.'
    },
    {
        id: 62,
        theme: 'biology',
        question: "A hanseníase (lepra) afeta principalmente qual sistema do corpo humano?",
        options: ["Respiratório", "Imunológico", "Digestivo", "Nervoso"],
        correctAnswer: 3,
        explanation: 'Causada pela bactéria Mycobacterium leprae, a hanseníase ataca nervos periféricos, podendo causar dormência, fraqueza muscular e deformações.'
    },
    {
        id: 63,
        theme: 'biology',
        question: "Qual dessas doenças é causada por fungos?",
        options: ["Tuberculose", "Candidíase", "Hepatite B", "Esquistossomose"],
        correctAnswer: 1,
        explanation: 'A candidíase é causada por fungos do gênero Candida, especialmente Candida albicans. Pode afetar pele, boca, intestino e órgãos genitais.'
    },
    {
        id: 64,
        theme: 'biology',
        question: "Qual doença viral é transmitida principalmente pelo mosquito Aedes aegypti e causa febre alta e dores intensas?",
        options: ["Gripe", "Febre amarela", "Dengue", "Sarampo"],
        correctAnswer: 2,
        explanation: 'A dengue é uma virose transmitida por mosquito e comum em áreas tropicais. Seus sintomas incluem febre alta, dores musculares e, em casos graves, hemorragia.'
    },
    {
        id: 65,
        theme: 'biology',
        question: "Qual animal pode dormir por até três anos seguidos em condições extremas?",
        options: ["Tatu", "Caracol", "Tamanduá", "Coala"],
        correctAnswer: 1,
        explanation: 'Alguns caracóis podem entrar em um estado de dormência profunda (estivação) e sobreviver sem comer por até 3 anos em ambientes secos.'
    },
    {
        id: 66,
        theme: 'biology',
        question: "Qual animal tem três corações e sangue azul?",
        options: ["Cavalo-marinho", "Lula", "Polvo", "Estrela-do-mar"],
        correctAnswer: 2,
        explanation: 'O polvo tem três corações e seu sangue é azul por conter hemocianina, uma proteína rica em cobre.'
    },
    {
        id: 67,
        theme: 'biology',
        question: "Qual é o único mamífero capaz de voar ativamente?",
        options: ["Esquilo", "Morcego", "Lêmure", "Tamanduá"],
        correctAnswer: 1,
        explanation: 'O morcego é o único mamífero que realmente voa (não apenas plana). Suas asas são adaptações dos membros anteriores.'
    },
    {
        id: 68,
        theme: 'biology',
        question: "Qual animal tem o maior cérebro proporcional ao corpo entre os invertebrados?",
        options: ["Lula", "Polvo", "Camarão", "Água-viva"],
        correctAnswer: 1,
        explanation: 'O polvo tem o cérebro mais desenvolvido entre os invertebrados e é conhecido por sua inteligência, memória e capacidade de resolver problemas.'
    },
    {
        id: 69,
        theme: 'biology',
        question: "Qual animal é capaz de reconhecer seu reflexo em um espelho, indicando autoconsciência?",
        options: ["Cavalo", "Golfinho", "Cachorro", "Arraia"],
        correctAnswer: 1,
        explanation: 'Golfinhos passam no teste do espelho, demonstrando autoconsciência, algo raro no reino animal e também observado em elefantes e alguns primatas.'
    },
    
    // Mitologia
    {
        id: 70,
        theme: 'mythology',
        question: "Quem era o rei dos deuses na mitologia grega?",
        options: ["Hades", "Apolo", "Zeus", "Hermes"],
        correctAnswer: 2,
        explanation: 'Zeus é o deus do céu, dos raios e trovões. É o líder do Olimpo e governa os outros deuses após derrotar os Titãs.'
    },
    {
        id: 71,
        theme: 'mythology',
        question: "Qual deusa grega nasceu da espuma do mar?",
        options: ["Atena", "Ártemis", "Afrodite", "Deméter"],
        correctAnswer: 2,
        explanation: 'Afrodite é a deusa do amor e da beleza. Segundo o mito, ela surgiu da espuma do mar quando Cronos cortou o céu e lançou os genitais de Urano nas águas.'
    },
    {
        id: 72,
        theme: 'mythology',
        question: "Quem é o deus do submundo na mitologia grega?",
        options: ["Dionísio", "Ares", "Apolo", "Hades"],
        correctAnswer: 3,
        explanation: 'Hades governa o mundo dos mortos. Embora sombrio, ele não é um deus do mal — apenas o senhor dos mortos e dos ricos subterrâneos.'
    },
    {
        id: 73,
        theme: 'mythology',
        question: "Qual é a deusa da sabedoria, estratégia e artes?",
        options: ["Hera", "Atena", "Ártemis", "Héstia"],
        correctAnswer: 1,
        explanation: 'Atena nasceu da cabeça de Zeus, já adulta e armada. É a protetora de Atenas e símbolo de sabedoria e justiça.'
    },
    {
        id: 74,
        theme: 'mythology',
        question: "Dionísio é o deus de quê?",
        options: ["Guerra e destruição", "Caça e animais", "Vinhos, festas e teatro", "Força e agricultura"],
        correctAnswer: 2,
        explanation: 'Dionísio representa a liberdade dos instintos, o prazer e a loucura. Era cultuado com festas chamadas "bacanais", e também ligado ao teatro grego.'
    },
    {
        id: 75,
        theme: 'mythology',
        question: "Quem era a esposa de Zeus e deusa do casamento?",
        options: ["Deméter", "Perséfone", "Ártemis", "Hera"],
        correctAnswer: 3,
        explanation: 'Hera é a deusa do casamento e da família. É esposa (e irmã) de Zeus, e frequentemente aparece nos mitos com ciúmes de suas traições.'
    },
    {
        id: 76,
        theme: 'mythology',
        question: "Qual era o deus-sol do Egito antigo?",
        options: ["Rá", "Anúbis", "Osíris", "Hórus"],
        correctAnswer: 0,
        explanation: 'Rá era a principal divindade solar na mitologia egípcia, simbolizando a luz e a criação.'
    },
    {
        id: 77,
        theme: 'mythology',
        question: "Quem era o deus do trovão na mitologia nórdica?",
        options: ["Thor", "Odin", "Loki", "Frey"],
        correctAnswer: 0,
        explanation: 'Thor, com seu martelo Mjölnir, era o deus do trovão e protetor dos humanos.'
    },
    {
        id: 78,
        theme: 'mythology',
        question: "Qual povo antigo adorava deuses como Zeus e Atena?",
        options: ["Gregos", "Romanos", "Egípcios", "Celtas"],
        correctAnswer: 0,
        explanation: 'Zeus (pai dos deuses) e Atena (deusa da sabedoria) faziam parte do panteão da Grécia Antiga.'
    },
    
    // História
    {
        id: 79,
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
        id: 80,
        theme: 'history',
        question: "Qual foi o principal campo de concentração e extermínio nazista?",
        options: ["Dachau", "Treblinka", "Buchenwald", "Auschwitz (na Polônia ocupada)"],
        correctAnswer: 3,
        explanation: 'Auschwitz foi o maior e mais letal campo de extermínio, onde mais de 1 milhão de pessoas foram assassinadas.'
    },
    {
        id: 81,
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
        id: 82,
        theme: 'history',
        question: "Qual país foi invadido pela Alemanha na 'Operação Barbarossa'?",
        options: ["Reino Unido", "Itália", "França", "União Soviética (1941)"],
        correctAnswer: 3,
        explanation: 'A invasão da URSS em 1941 quebrou o pacto de não-agressão entre Hitler e Stalin.'
    },
    {
        id: 83,
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
        id: 84,
        theme: 'history',
        question: "Qual conferência definiu a divisão da Alemanha após a guerra?",
        options: ["Conferência de Teerã (1943)", "Conferência de Munique (1938)", "Conferência de Yalta (1945)", "Conferência de Potsdam (1945)"],
        correctAnswer: 3,
        explanation: 'Em Potsdam, EUA, URSS e Reino Unido decidiram a divisão da Alemanha em zonas de ocupação.'
    },
    {
        id: 85,
        theme: 'history',
        question: "Qual foi o código do projeto nuclear dos EUA que criou a bomba atômica?",
        options: ["Projeto Manhattan", "Projeto Uranium", "Projeto Trinity", "Projeto Manhattan (1942–1945)"],
        correctAnswer: 3,
        explanation: 'O Projeto Manhattan desenvolveu as bombas lançadas em Hiroshima e Nagasaki.'
    },
    {
        id: 86,
        theme: 'history',
        question: "Qual líder soviético comandou a URSS durante a guerra?",
        options: ["Vladimir Lenin", "Leon Trotsky", "Nikita Khrushchev", "Josef Stalin"],
        correctAnswer: 3,
        explanation: 'Stalin liderou a URSS desde os anos 1920 até sua morte em 1953.'
    },
    {
        id: 87,
        theme: 'history',
        question: "Qual foi a única grande potência a mudar de lado durante a guerra?",
        options: ["França", "Japão", "Estados Unidos", "Itália (em 1943, após a queda de Mussolini)"],
        correctAnswer: 3,
        explanation: 'A Itália trocou o Eixo pelos Aliados após o armistício de 1943.'
    },
    {
        id: 88,
        theme: 'history',
        question: "Qual foi o principal objetivo do 'Dia D' (1944)?",
        options: ["Invadir a Alemanha diretamente", "Liberar a Itália", "Destruir Berlim", "Estabelecer uma frente de combate na França (Normandia)"],
        correctAnswer: 3,
        explanation: 'O Dia D (6/6/1944) iniciou a libertação da França ocupada pelos nazistas.'
    },
    {
        id: 89,
        theme: 'history',
        question: "Qual país sofreu os ataques nucleares de Hiroshima e Nagasaki?",
        options: ["Alemanha", "Itália", "União Soviética", "Japão (agosto de 1945)"],
        correctAnswer: 3,
        explanation: 'Os EUA lançaram as bombas para forçar a rendição japonesa.'
    },
    {
        id: 90,
        theme: 'history',
        question: "Qual foi o principal motivo da rendição japonesa em 1945?",
        options: ["Invasão soviética à Manchúria", "Bombardeios convencionais em Tóquio", "Falta de recursos naturais", "Bombas atômicas e entrada da URSS na guerra"],
        correctAnswer: 3,
        explanation: 'A combinação dos dois fatores acelerou o fim da guerra.'
    },
    {
        id: 91,
        theme: 'history',
        question: "Qual foi o principal líder militar alemão conhecido como 'Raposa do Deserto'?",
        options: ["Heinrich Himmler", "Hermann Göring", "Rudolf Hess", "Erwin Rommel"],
        correctAnswer: 3,
        explanation: 'Rommel comandou o Afrika Korps no Norte da África.'
    },
    {
        id: 92,
        theme: 'history',
        question: "Qual organização internacional foi criada após a guerra para evitar novos conflitos?",
        options: ["Liga das Nações", "OTAN", "União Europeia", "ONU (Organização das Nações Unidas, 1945)"],
        correctAnswer: 3,
        explanation: 'A ONU substituiu a fracassada Liga das Nações.'
    },
    {
        id: 93,
        theme: 'history',
        question: "Qual foi o principal acordo que permitiu a anexação dos Sudetos pela Alemanha?",
        options: ["Pacto Molotov-Ribbentrop", "Tratado de Versalhes", "Conferência de Yalta", "Acordo de Munique (1938)"],
        correctAnswer: 3,
        explanation: 'A Grã-Bretanha e França cederam aos nazistas para evitar a guerra (política de "apaziguamento").'
    },
    {
        id: 94,
        theme: 'history',
        question: "Em que ano Cristóvão Colombo chegou à América?",
        options: ["1492", "1500", "1488", "1519"],
        correctAnswer: 0,
        explanation: 'Cristóvão Colombo chegou ao continente americano em 12 de outubro de 1492, iniciando a colonização europeia.'
    },
    {
        id: 95,
        theme: 'history',
        question: "Qual evento marcou o início da Revolução Francesa?",
        options: ["Queda da Bastilha", "Declaração de Independência dos EUA", "Revolta dos Camponeses", "Tratado de Versalhes"],
        correctAnswer: 0,
        explanation: 'A tomada da prisão da Bastilha, em 14 de julho de 1789, simbolizou a luta contra a monarquia e o início da revolução.'
    },
    {
        id: 96,
        theme: 'history',
        question: "Em que cidade foram lançadas as bombas atômicas durante a Segunda Guerra Mundial?",
        options: ["Hiroshima e Nagasaki", "Tóquio e Osaka", "Seul e Pyongyang", "Berlim e Dresden"],
        correctAnswer: 0,
        explanation: 'Em agosto de 1945, os EUA lançaram bombas nucleares nessas cidades japonesas, acelerando o fim da Segunda Guerra Mundial.'
    },
    {
        id: 97,
        theme: 'history',
        question: "Qual documento histórico americano declara a independência dos Estados Unidos?",
        options: ["Constituição dos EUA", "Declaração de Independência", "Magna Carta", "Carta Magna"],
        correctAnswer: 1,
        explanation: 'Proclamada em 4 de julho de 1776, marcou a separação formal das 13 colônias do domínio britânico.'
    },
    {
        id: 98,
        theme: 'history',
        question: "Em que ano o homem pisou na Lua pela primeira vez?",
        options: ["1965", "1969", "1972", "1959"],
        correctAnswer: 1,
        explanation: 'Em 20 de julho de 1969, a missão Apollo 11 levou Neil Armstrong e Buzz Aldrin a pisarem na superfície lunar.'
    },
    {
        id: 99,
        theme: 'history',
        question: "Qual tratado marcou oficialmente o fim da Primeira Guerra Mundial?",
        options: ["Tratado de Versalhes", "Tratado de Paris", "Tratado de Tordesilhas", "Tratado de Potsdam"],
        correctAnswer: 0,
        explanation: 'Assinado em 1919, impôs duras condições à Alemanha e redesenhou o mapa político da Europa.'
    },
    {
        id: 100,
        theme: 'history',
        question: "Em qual país ocorreu o apartheid?",
        options: ["África do Sul", "Nigéria", "Etiópia", "Quênia"],
        correctAnswer: 0,
        explanation: 'O apartheid foi um regime de segregação racial que vigorou oficialmente na África do Sul entre 1948 e 1994.'
    },
    {
        id: 101,
        theme: 'history',
        question: "Qual foi o sobrenome do líder que lutou contra o apartheid e se tornou presidente?",
        options: ["Mandela", "Botha", "Malan", "Verwoerd"],
        correctAnswer: 0,
        explanation: 'Nelson Mandela foi o principal líder antiapartheid e o primeiro presidente negro da África do Sul após o fim do regime.'
    },
    {
        id: 102,
        theme: 'history',
        question: "Qual era a cor privilegiada pelo regime do apartheid?",
        options: ["Branca", "Negra", "Mestiça", "Asiática"],
        correctAnswer: 0,
        explanation: 'O apartheid garantia direitos superiores à minoria branca, enquanto a maioria negra e outros grupos eram discriminados.'
    },
    {
        id: 103,
        theme: 'history',
        question: "Qual filósofo francês escreveu 'O Contrato Social'?",
        options: ["Rousseau", "Voltaire", "Montesquieu", "Diderot"],
        correctAnswer: 0,
        explanation: 'Jean-Jacques Rousseau foi o autor dessa obra fundamental sobre a relação entre Estado e cidadãos.'
    },
    {
        id: 104,
        theme: 'history',
        question: "Qual valor era central no pensamento iluminista?",
        options: ["Razão", "Fé", "Tradição", "Autoridade divina"],
        correctAnswer: 0,
        explanation: 'O Iluminismo defendia o uso da razão como base para o conhecimento e a organização social.'
    },
    {
        id: 105,
        theme: 'history',
        question: "Qual revolução europeia foi fortemente influenciada pelo Iluminismo?",
        options: ["Francesa", "Industrial", "Russa", "Gloriosa"],
        correctAnswer: 0,
        explanation: 'A Revolução Francesa (1789) incorporou ideais iluministas como liberdade, igualdade e fraternidade.'
    },
    
    // Entretenimento
    {
        id: 106,
        theme: 'entertainment',
        question: "Qual filme ganhou o Oscar de Melhor Filme em 1998, vencendo 'O Resgate do Soldado Ryan'?",
        options: ["Titanic", "Chicago", "Shakespeare Apaixonado", "Gladiador"],
        correctAnswer: 2,
        explanation: 'Shakespeare Apaixonado (Shakespeare) surpreendeu ao vencer o Oscar de Melhor Filme em 1999, desbancando o favorito O Resgate do Soldado Ryan.'
    },
    {
        id: 107,
        theme: 'entertainment',
        question: "Qual diretor é conhecido por filmes como 'Jurassic Park' e 'E.T.'?",
        options: ["Tarantino", "Spielberg", "Cameron", "Nolan"],
        correctAnswer: 1,
        explanation: 'Steven Spielberg é um dos diretores mais influentes da história do cinema, conhecido por seus grandes sucessos de bilheteria e filmes marcantes.'
    },
    {
        id: 108,
        theme: 'entertainment',
        question: "Qual ator interpretou o Coringa no filme 'Coringa' de 2019?",
        options: ["Phoenix", "Ledger", "Nicholson", "Leto"],
        correctAnswer: 0,
        explanation: 'Joaquin Phoenix interpretou o Coringa em 2019 e venceu o Oscar de Melhor Ator por sua performance intensa e elogiada.'
    },
    {
        id: 109,
        theme: 'entertainment',
        question: "Em que franquia aparece o personagem Darth Vader?",
        options: ["Matrix", "Star Wars", "Avatar", "Duna"],
        correctAnswer: 1,
        explanation: 'Darth Vader é um dos vilões mais icônicos da cultura pop, personagem central da franquia Star Wars.'
    },
    {
        id: 110,
        theme: 'entertainment',
        question: "Qual país criou o movimento cinematográfico chamado 'Neorrealismo'?",
        options: ["França", "EUA", "Itália", "Alemanha"],
        correctAnswer: 2,
        explanation: 'O neorrealismo surgiu na Itália após a Segunda Guerra Mundial, com filmes que mostravam a vida real, pobreza e questões sociais, como Ladrões de Bicicleta.'
    },
    {
        id: 111,
        theme: 'entertainment',
        question: "Qual personagem do folclore brasileiro é conhecido por ter uma perna só e assobiar para assustar as pessoas?",
        options: ["Saci-Pererê", "Curupira", "Boto", "Boitatá"],
        correctAnswer: 0,
        explanation: 'O Saci-Pererê é uma das figuras mais famosas do folclore brasileiro, um menino travesso que usa um gorro vermelho e vive pregando peças, além de ter apenas uma perna.'
    },
    {
        id: 112,
        theme: 'entertainment',
        question: "Qual entidade do folclore brasileiro é conhecida por proteger as florestas e tem os pés virados para trás?",
        options: ["Boitatá", "Curupira", "Mula sem Cabeça", "Iara"],
        correctAnswer: 1,
        explanation: 'O Curupira é o protetor das matas, com pés virados para trás para confundir os caçadores e proteger os animais e plantas.'
    },
    {
        id: 113,
        theme: 'entertainment',
        question: "Qual personagem lendário é uma mulher que vive nos rios e encanta os homens com seu canto?",
        options: ["Iara", "Mula sem Cabeça", "Cuca", "Boto"],
        correctAnswer: 0,
        explanation: 'A Iara é uma sereia das águas doces brasileiras, que atrai pescadores e navegantes com seu canto, segundo o folclore amazônico.'
    },
    {
        id: 114,
        theme: 'entertainment',
        question: "Qual personagem é uma mulher que solta fogo pelo pescoço e aparece em noites de sexta-feira?",
        options: ["Mula sem Cabeça", "Cuca", "Vitória-Régia", "Saci"],
        correctAnswer: 0,
        explanation: 'A Mula sem Cabeça é uma figura que aparece à noite, representando uma mulher amaldiçoada que vira uma mula que solta fogo pelo pescoço.'
    },
    {
        id: 115,
        theme: 'entertainment',
        question: "Qual personagem do folclore brasileiro é conhecido por ter uma perna só e assobiar para assustar as pessoas?",
        options: ["Saci-Pererê", "Curupira", "Boto", "Boitatá"],
        correctAnswer: 0,
        explanation: 'O Saci-Pererê é uma das figuras mais famosas do folclore brasileiro, um menino travesso que usa um gorro vermelho e vive pregando peças, além de ter apenas uma perna.'
    },
    {
        id: 116,
        theme: 'entertainment',
        question: "Qual é o nome do protagonista Naruto?",
        options: ["Hatake", "Uchiha", "Uzumaki", "Hyuuga"],
        correctAnswer: 2,
        explanation: 'Naruto Uzumaki é o personagem principal da série. "Uzumaki" significa "redemoinho", referência à sua energia e ao símbolo da vila.'
    },
    {
        id: 117,
        theme: 'entertainment',
        question: "Qual é o nome da raposa de nove caudas selada dentro de Naruto?",
        options: ["Shukaku", "Kurama", "Gyūki", "Matatabi"],
        correctAnswer: 1,
        explanation: 'Kurama é o nome da Kyūbi (nove caudas), a besta selada dentro de Naruto desde seu nascimento, que mais tarde vira sua aliada.'
    },
    {
        id: 118,
        theme: 'entertainment',
        question: "Qual é o clã conhecido pelo Sharingan?",
        options: ["Nara", "Uchiha", "Aburame", "Inuzuka"],
        correctAnswer: 1,
        explanation: 'O clã Uchiha é famoso por seu Sharingan, um dojutsu (técnica ocular) que oferece habilidades poderosas de combate e percepção.'
    },
    {
        id: 119,
        theme: 'entertainment',
        question: "Qual vilão é conhecido por suas cobras e desejo de imortalidade?",
        options: ["Madara", "Orochimaru", "Zabuza", "Deidara"],
        correctAnswer: 1,
        explanation: 'Orochimaru é um dos Sannin lendários e obcecado por imortalidade e conhecimento, usando jutsus proibidos e cobras como símbolo.'
    },
    {
        id: 120,
        theme: 'entertainment',
        question: "Quem é o sensei da Equipe 7, mestre de Naruto, Sasuke e Sakura?",
        options: ["Iruka", "Minato", "Kakashi", "Jiraiya"],
        correctAnswer: 2,
        explanation: 'Kakashi Hatake, o "Ninja Copiador", é o primeiro sensei da Equipe 7 e ex-aluno do Quarto Hokage, Minato.'
    },
    {
        id: 121,
        theme: 'entertainment',
        question: "Qual é a técnica assinatura de Naruto, criada por seu pai?",
        options: ["Chidori", "Rasengan", "Amaterasu", "Byakugan"],
        correctAnswer: 1,
        explanation: 'O Rasengan é uma técnica poderosa criada por Minato, o pai de Naruto. Ele a domina e depois aprimora com o chakra da natureza.'
    },
    {
        id: 122,
        theme: 'entertainment',
        question: "Qual é o nome do sábio que guia os jovens no Reino?",
        options: ["Vingador", "Mestre", "Mago", "Dungeon"],
        correctAnswer: 1,
        explanation: 'O Mestre dos Magos é quem orienta os protagonistas com conselhos enigmáticos e mágicos durante sua jornada.'
    },
    {
        id: 123,
        theme: 'entertainment',
        question: "Qual é o nome do dragão de cinco cabeças que aparece na série?",
        options: ["Fúria", "Draco", "Tiamat", "Bahamut"],
        correctAnswer: 2,
        explanation: 'Tiamat é uma dragonesa de cinco cabeças, cada uma de um tipo de dragão, e uma das criaturas mais poderosas do Reino.'
    },
    {
        id: 124,
        theme: 'entertainment',
        question: "Qual é o nome do vilão principal da série?",
        options: ["Gárgula", "Vingador", "Lúcifer", "Demônio"],
        correctAnswer: 1,
        explanation: 'O Vingador é o arqui-inimigo dos heróis. Ele quer os poderes das armas mágicas dos jovens para dominar o Reino.'
    },
    {
        id: 125,
        theme: 'entertainment',
        question: "Qual personagem usa um escudo mágico que cria uma barreira protetora?",
        options: ["Eric", "Hank", "Bobby", "Presto"],
        correctAnswer: 0,
        explanation: 'Eric, o Cavaleiro, tem um escudo mágico que gera campos de força, apesar de ser medroso e reclamão.'
    },
    {
        id: 126,
        theme: 'entertainment',
        question: "Quem é o líder do grupo e usa um arco mágico de energia?",
        options: ["Eric", "Presto", "Hank", "Bobby"],
        correctAnswer: 2,
        explanation: 'Hank é o Ranger, o líder responsável e corajoso do grupo, que usa um arco de energia como arma.'
    },
    {
        id: 127,
        theme: 'entertainment',
        question: "Qual é o nome do unicórnio que acompanha o grupo?",
        options: ["Arco", "Uni", "Pônei", "Luna"],
        correctAnswer: 1,
        explanation: 'Uni é o unicórnio filhote que acompanha os heróis, especialmente a Sheila. Ele é sensível ao perigo e muito leal.'
    },
    {
        id: 128,
        theme: 'entertainment',
        question: "Qual é o ingrediente secreto do Hambúrguer de Siri que o Plankton tenta roubar?",
        options: ["Sal", "Maionese", "Fórmula", "Alga"],
        correctAnswer: 2,
        explanation: 'O segredo do Hambúrguer de Siri é a fórmula secreta, guardada a sete chaves pelo Sr. Siriguejo. Plankton tenta roubá-la em quase todos os episódios.'
    },
    {
        id: 129,
        theme: 'entertainment',
        question: "Qual é o nome completo do caracol de estimação do Bob Esponja?",
        options: ["Garyson", "Garold", "Gaston", "Garfield"],
        correctAnswer: 1,
        explanation: 'Em episódios especiais, o nome completo de Gary é revelado como Garold, um detalhe pouco conhecido pelos fãs casuais da série.'
    },
    {
        id: 130,
        theme: 'entertainment',
        question: "Qual o nome da água-viva lendária que Bob Esponja tenta capturar no episódio 'O Clube das Águas-Vivas'?",
        options: ["Azulina", "Medusalina", "Rainha", "Pérola"],
        correctAnswer: 1,
        explanation: 'A lendária água-viva gigante e brilhante é chamada Medusalina. Bob tenta capturá-la com muito esforço e cuidado.'
    },
    {
        id: 131,
        theme: 'entertainment',
        question: "Qual é o nome do clarinete do Lula Molusco?",
        options: ["Noturno", "Clarencio", "Clari", "Lenora"],
        correctAnswer: 2,
        explanation: 'Lula Molusco é obcecado por seu clarinete, a quem ele chama carinhosamente de Clari — embora toque muito mal!'
    },
    {
        id: 132,
        theme: 'entertainment',
        question: "Qual é o nome da escola onde Bob Esponja tenta tirar a carteira de motorista?",
        options: ["Dirigópolis", "Lagoa", "Náutica", "Concha"],
        correctAnswer: 2,
        explanation: 'Bob Esponja frequenta a Escola de Condução Náutica, onde tenta (e falha repetidamente) tirar sua carteira de motorista.'
    },
    
    // Esportes
    {
        id: 133,
        theme: 'sports',
        question: "Qual país sediou a Copa do Mundo de 2022?",
        options: ["Rússia", "Catar", "Japão", "Alemanha"],
        correctAnswer: 1,
        explanation: 'A Copa do Mundo de 2022 foi realizada no Catar, sendo a primeira edição disputada no Oriente Médio e em novembro/dezembro, devido ao clima.'
    },
    {
        id: 134,
        theme: 'sports',
        question: "Qual jogador é conhecido como 'King James' na NBA?",
        options: ["Curry", "Durant", "LeBron", "Kobe"],
        correctAnswer: 2,
        explanation: 'LeBron James é apelidado de "King James" e é um dos maiores jogadores da história do basquete, com múltiplos títulos da NBA.'
    },
    {
        id: 135,
        theme: 'sports',
        question: "Qual piloto venceu o maior número de corridas na Fórmula 1 até 2024?",
        options: ["Hamilton", "Senna", "Verstappen", "Schumacher"],
        correctAnswer: 0,
        explanation: 'Lewis Hamilton detém o recorde de vitórias na Fórmula 1, ultrapassando Schumacher, e é um dos maiores nomes do automobilismo.'
    },
    {
        id: 136,
        theme: 'sports',
        question: "Qual tenista é conhecido por seus 14 títulos de Roland Garros?",
        options: ["Nadal", "Federer", "Djokovic", "Alcaraz"],
        correctAnswer: 0,
        explanation: 'Rafael Nadal é o rei do saibro, com impressionantes 14 títulos em Roland Garros, recorde absoluto no torneio francês.'
    },
    {
        id: 137,
        theme: 'sports',
        question: "Qual arte marcial é de origem japonesa e é esporte olímpico?",
        options: ["Jiu-jitsu", "Judô", "Taekwondo", "Kung fu"],
        correctAnswer: 1,
        explanation: 'O judô, criado no Japão por Jigoro Kano, foi o primeiro esporte de combate asiático a entrar nos Jogos Olímpicos, em 1964.'
    },
    {
        id: 138,
        theme: 'sports',
        question: "Qual jogador brasileiro é conhecido como 'O Rei do Futebol'?",
        options: ["Zico", "Pelé", "Garrincha", "Ronaldo Fenômeno"],
        correctAnswer: 1,
        explanation: 'Pelé é considerado um dos maiores jogadores da história, tricampeão mundial com a seleção brasileira e ícone global do futebol.'
    },
    {
        id: 139,
        theme: 'sports',
        question: "Quantas Copas do Mundo a seleção brasileira já conquistou?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 2,
        explanation: 'O Brasil é pentacampeão mundial, com títulos em 1958, 1962, 1970, 1994 e 2002, sendo o país com mais títulos na história da Copa.'
    },
    {
        id: 140,
        theme: 'sports',
        question: "Qual clube brasileiro é conhecido como 'O Mais Querido do Brasil'?",
        options: ["Flamengo", "Corinthians", "Palmeiras", "Santos"],
        correctAnswer: 0,
        explanation: 'O Flamengo, do Rio de Janeiro, possui a maior torcida do país e é um dos clubes mais vitoriosos do futebol brasileiro.'
    },
    {
        id: 141,
        theme: 'sports',
        question: "Quem é o maior artilheiro da história do Campeonato Brasileiro?",
        options: ["Roberto Dinamite", "Zico", "Romário", "Edmundo"],
        correctAnswer: 0,
        explanation: 'Roberto Dinamite marcou mais de 190 gols no Brasileirão, principalmente defendendo o Vasco da Gama, e é o maior goleador da competição.'
    },
    {
        id: 142,
        theme: 'sports',
        question: "Qual jogador brasileiro ganhou a Bola de Ouro da FIFA em 2007?",
        options: ["Ronaldinho Gaúcho", "Kaká", "Neymar", "Rivaldo"],
        correctAnswer: 1,
        explanation: 'Kaká foi eleito o melhor jogador do mundo em 2007 após grande temporada pelo Milan e pela seleção brasileira.'
    },
    {
        id: 143,
        theme: 'sports',
        question: "Em que ano o Brasil sediou pela primeira vez a Copa do Mundo?",
        options: ["1930", "1950", "1962", "1970"],
        correctAnswer: 1,
        explanation: 'O Brasil sediou a Copa de 1950, famosa pelo jogo final contra o Uruguai no Maracanã, conhecido como "Maracanazo".'
    },
    
    // Ciência
    {
        id: 144,
        theme: 'science',
        question: "Quem desenvolveu a teoria da relatividade?",
        options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileu Galilei"],
        correctAnswer: 1,
        explanation: 'Albert Einstein desenvolveu a teoria da relatividade, que revolucionou nossa compreensão do tempo, espaço e gravidade, especialmente com sua famosa equação E=mc².'
    },
    {
        id: 145,
        theme: 'science',
        question: "Qual cientista descobriu a penicilina?",
        options: ["Louis Pasteur", "Gregor Mendel", "Alexander Fleming", "Robert Koch"],
        correctAnswer: 2,
        explanation: 'Alexander Fleming descobriu a penicilina em 1928 ao observar que um fungo eliminava bactérias — o que levou ao desenvolvimento dos antibióticos.'
    },
    {
        id: 146,
        theme: 'science',
        question: "Quem é considerado o pai da física clássica?",
        options: ["Galileu Galilei", "Johannes Kepler", "Isaac Newton", "Niels Bohr"],
        correctAnswer: 2,
        explanation: 'Isaac Newton formulou as leis do movimento e a gravitação universal, baseando as fundações da física clássica moderna.'
    },
    {
        id: 147,
        theme: 'science',
        question: "Marie Curie ganhou dois prêmios Nobel em quais áreas?",
        options: ["Física e Matemática", "Química e Medicina", "Física e Química", "Biologia e Física"],
        correctAnswer: 2,
        explanation: 'Marie Curie foi pioneira no estudo da radioatividade e a única pessoa a ganhar dois prêmios Nobel em áreas científicas diferentes — Física (1903) e Química (1911).'
    },
    {
        id: 148,
        theme: 'science',
        question: "Stephen Hawking é conhecido por seus estudos sobre o quê?",
        options: ["Energia nuclear", "Clonagem humana", "Buracos negros", "Vacinas"],
        correctAnswer: 2,
        explanation: 'Stephen Hawking fez avanços teóricos sobre buracos negros e cosmologia, especialmente propondo que buracos negros emitem radiação (conhecida como radiação Hawking).'
    },
    {
        id: 149,
        theme: 'science',
        question: "Qual desses cientistas propôs a teoria da evolução por seleção natural?",
        options: ["Alfred Wallace", "Charles Darwin", "Carl Linnaeus", "Richard Dawkins"],
        correctAnswer: 1,
        explanation: 'Em A Origem das Espécies (1859), Darwin descreveu como as espécies evoluem ao longo do tempo por meio da seleção natural.'
    },
    {
        id: 150,
        theme: 'science',
        question: "Qual cientista é conhecido por suas invenções com eletricidade e corrente alternada?",
        options: ["Thomas Edison", "Michael Faraday", "Nikola Tesla", "Benjamin Franklin"],
        correctAnswer: 2,
        explanation: 'Tesla desenvolveu a corrente alternada (AC), que é o sistema elétrico usado até hoje. Também trabalhou com rádio, raios-X e campos magnéticos.'
    },
    {
        id: 151,
        theme: 'science',
        question: "Qual cientista ajudou a desvendar a estrutura do DNA?",
        options: ["Rosalind Franklin", "Albert Einstein", "Marie Curie", "Edwin Hubble"],
        correctAnswer: 0,
        explanation: 'Através da técnica de difração de raios-X, Franklin obteve imagens cruciais que levaram à descoberta da estrutura em dupla hélice do DNA, embora seu trabalho tenha sido inicialmente subestimado.'
    },
    {
        id: 152,
        theme: 'science',
        question: "Qual é a molécula responsável por armazenar a informação genética nos seres vivos?",
        options: ["RNA", "Glicose", "DNA", "Hemoglobina"],
        correctAnswer: 2,
        explanation: 'O DNA (ácido desoxirribonucleico) é a molécula que carrega as instruções genéticas usadas no desenvolvimento e funcionamento de todos os organismos vivos e vírus.'
    },
    {
        id: 153,
        theme: 'science',
        question: "Qual é o nome da ciência que estuda os seres vivos?",
        options: ["Química", "Geologia", "Física", "Biologia"],
        correctAnswer: 3,
        explanation: 'Biologia é a ciência que estuda os seres vivos em todos os seus níveis — das moléculas e células até os ecossistemas e a evolução.'
    },
    {
        id: 154,
        theme: 'science',
        question: "Qual é a principal função dos glóbulos brancos no sangue humano?",
        options: ["Transportar oxigênio", "Combater micro-organismos invasores", "Coagular o sangue", "Regular a temperatura corporal"],
        correctAnswer: 1,
        explanation: 'Os glóbulos brancos (leucócitos) fazem parte do sistema imunológico e atuam na defesa do corpo contra vírus, bactérias e outros agentes infecciosos.'
    },
    {
        id: 155,
        theme: 'science',
        question: "Qual é o nome do processo pelo qual plantas convertem luz solar em energia química?",
        options: ["Fermentação", "Respiração celular", "Fotossíntese", "Transpiração"],
        correctAnswer: 2,
        explanation: 'A fotossíntese é o processo em que plantas, algas e algumas bactérias transformam luz solar, água e dióxido de carbono em glicose e oxigênio.'
    },
    {
        id: 156,
        theme: 'science',
        question: "Qual é o maior órgão do corpo humano?",
        options: ["Fígado", "Pulmão", "Coração", "Pele"],
        correctAnswer: 3,
        explanation: 'A pele é o maior órgão do corpo humano em área e peso. Atua como barreira protetora, regula a temperatura e permite a sensação do ambiente externo.'
    },
    {
        id: 157,
        theme: 'science',
        question: "Qual é o nome do osso da coxa, o mais longo do corpo humano?",
        options: ["Fêmur", "Tíbia", "Úmero", "Rádio"],
        correctAnswer: 0,
        explanation: 'O fêmur é o osso mais longo e forte do corpo humano. Ele conecta o quadril ao joelho e sustenta boa parte do peso do corpo.'
    },
    {
        id: 158,
        theme: 'science',
        question: "Qual sistema do corpo humano é responsável por transportar sangue?",
        options: ["Digestivo", "Respiratório", "Circulatório", "Excretor"],
        correctAnswer: 2,
        explanation: 'O sistema circulatório inclui o coração, os vasos sanguíneos e o sangue. Sua principal função é distribuir oxigênio, nutrientes e remover resíduos das células.'
    },
    {
        id: 159,
        theme: 'science',
        question: "Qual é o nome do efeito que sugere que pequenas causas podem gerar grandes consequências?",
        options: ["Tornado", "Efeito", "Borboleta", "Caótico"],
        correctAnswer: 2,
        explanation: 'O efeito borboleta ilustra como uma pequena mudança em um sistema pode ter grandes impactos no futuro, um conceito central na Teoria do Caos.'
    },
    {
        id: 160,
        theme: 'science',
        question: "Qual é o tipo de sistema que a Teoria do Caos estuda?",
        options: ["Linear", "Aleatório", "Caótico", "Simples"],
        correctAnswer: 2,
        explanation: 'A Teoria do Caos estuda sistemas caóticos, que são determinísticos, mas extremamente sensíveis às condições iniciais.'
    },
    {
        id: 161,
        theme: 'science',
        question: "Qual é o nome da estrutura matemática complexa que aparece em muitos sistemas caóticos?",
        options: ["Vetor", "Fractal", "Prisma", "Algoritmo"],
        correctAnswer: 1,
        explanation: 'Fractais são formas geométricas que se repetem em diferentes escalas e são comuns em sistemas caóticos, como o clima e os mercados financeiros.'
    },
    {
        id: 162,
        theme: 'science',
        question: "Qual característica define um sistema caótico?",
        options: ["Estabilidade", "Aleatoriedade", "Repetição", "Sensibilidade"],
        correctAnswer: 3,
        explanation: 'Sistemas caóticos apresentam sensibilidade às condições iniciais, ou seja, pequenas mudanças no começo podem gerar resultados totalmente diferentes.'
    },
    {
        id: 163,
        theme: 'science',
        question: "Quem foi o meteorologista que popularizou a Teoria do Caos com seu estudo do clima?",
        options: ["Newton", "Einstein", "Lorenz", "Hawking"],
        correctAnswer: 2,
        explanation: 'Edward Lorenz é considerado o pai da Teoria do Caos moderna, ao observar como mínimas alterações nos dados climáticos levavam a previsões completamente diferentes.'
    },
    {
        id: 164,
        theme: 'science',
        question: "Qual entidade astronômica é uma consequência extrema da curvatura do espaço-tempo?",
        options: ["Estrela", "Buraco", "Cometa", "Planeta"],
        correctAnswer: 1,
        explanation: 'Um buraco negro é uma região do espaço onde a curvatura do espaço-tempo é tão intensa que nada, nem mesmo a luz, pode escapar.'
    },
    {
        id: 165,
        theme: 'science',
        question: "Qual conceito central da Relatividade Geral descreve a alteração do espaço e do tempo pela gravidade?",
        options: ["Matéria", "Curvatura", "Expansão", "Radiação"],
        correctAnswer: 1,
        explanation: 'A curvatura do espaço-tempo causada por massa e energia é o núcleo da teoria de Einstein: a gravidade não é uma força, mas uma deformação do espaço-tempo.'
    },
    {
        id: 166,
        theme: 'science',
        question: "Segundo a Relatividade Geral, o tempo passa mais devagar em regiões com maior...?",
        options: ["Luz", "Massa", "Energia", "Temperatura"],
        correctAnswer: 1,
        explanation: 'Quanto maior a massa (e portanto, a gravidade), mais lentamente o tempo passa — um fenômeno conhecido como dilatação gravitacional do tempo.'
    },
    {
        id: 167,
        theme: 'science',
        question: "Qual planeta foi observado durante um eclipse para comprovar a deflexão da luz prevista por Einstein?",
        options: ["Marte", "Mercúrio", "Júpiter", "Sol"],
        correctAnswer: 3,
        explanation: 'Durante um eclipse solar em 1919, foi possível observar a deflexão da luz de estrelas pelo Sol, confirmando a previsão da Relatividade Geral.'
    },
    {
        id: 168,
        theme: 'science',
        question: "Quem formulou a Teoria da Relatividade Geral?",
        options: ["Newton", "Bohr", "Maxwell", "Einstein"],
        correctAnswer: 3,
        explanation: 'A Relatividade Geral foi proposta por Albert Einstein em 1915, revolucionando a física ao descrever a gravidade como geometria do espaço-tempo.'
    },
    {
        id: 169,
        theme: 'science',
        question: "Qual tecnologia permite que máquinas 'pensem' e aprendam com dados?",
        options: ["Robótica", "Impressão", "Inteligência", "Algoritmo"],
        correctAnswer: 2,
        explanation: 'Refere-se à Inteligência Artificial, que é a capacidade das máquinas de aprender, adaptar e realizar tarefas que normalmente exigiriam inteligência humana.'
    },
    {
        id: 170,
        theme: 'science',
        question: "Qual é o nome da teoria que prevê a colonização de outros planetas por humanos?",
        options: ["Terraformação", "Alienação", "Digitalização", "Submersão"],
        correctAnswer: 0,
        explanation: 'A terraformação é a ideia de modificar a atmosfera e as condições de um planeta (como Marte) para torná-lo habitável por humanos.'
    },
    {
        id: 171,
        theme: 'science',
        question: "Como se chama a edição direta de genes em organismos vivos?",
        options: ["Vacinação", "Clonagem", "CRISPR", "Mutação"],
        correctAnswer: 2,
        explanation: 'CRISPR é uma tecnologia revolucionária de edição genética que permite alterar sequências de DNA com precisão, podendo curar doenças genéticas no futuro.'
    },
    {
        id: 172,
        theme: 'science',
        question: "Qual é o nome dado à internet de alta velocidade baseada em satélites?",
        options: ["Skyweb", "Starlink", "Cloudnet", "Orbital"],
        correctAnswer: 1,
        explanation: 'Starlink é o projeto da SpaceX que utiliza satélites para oferecer internet de alta velocidade global, especialmente em áreas remotas.'
    },
    {
        id: 173,
        theme: 'science',
        question: "Como é chamado o conceito de conectar o cérebro humano diretamente a computadores?",
        options: ["Biolink", "Ciberconexão", "Neuralink", "Upload"],
        correctAnswer: 2,
        explanation: 'Neuralink é uma empresa que desenvolve implantes cerebrais para interação direta entre cérebro e máquina, podendo no futuro permitir controlar computadores com o pensamento.'
    },
    
    // Geografia
    {
        id: 174,
        theme: 'geography',
        question: "Qual é o nome da maior floresta tropical do mundo, localizada principalmente no Brasil?",
        options: ["Floresta Negra", "Floresta Amazônica", "Taiga", "Floresta Boreal"],
        correctAnswer: 1,
        explanation: 'Considerada o "pulmão do mundo", abriga enorme biodiversidade.'
    },
    {
        id: 175,
        theme: 'geography',
        question: "Qual monumento é único e símbolo do Egito antigo?",
        options: ["Torre Eiffel", "Pirâmides de Gizé", "Estátua da Liberdade", "Coliseu"],
        correctAnswer: 1,
        explanation: 'Construídas há milhares de anos, são uma das Sete Maravilhas do Mundo Antigo.'
    },
    {
        id: 176,
        theme: 'geography',
        question: "Qual é o nome da flor de cerejeira que é símbolo nacional do Japão?",
        options: ["Sakura", "Tulipa", "Rosa", "Orquídea"],
        correctAnswer: 0,
        explanation: 'A floração da sakura é celebrada anualmente com festivais.'
    },
    {
        id: 177,
        theme: 'geography',
        question: "Qual é a estrutura longa e antiga, construída para proteger a China?",
        options: ["Muralha da China", "Coliseu", "Torre de Pisa", "Grande Pirâmide"],
        correctAnswer: 0,
        explanation: 'Extensão de milhares de quilômetros, construída para defesa.'
    },
    {
        id: 178,
        theme: 'geography',
        question: "Qual é a cidade italiana famosa pela construção de prédios inclinados?",
        options: ["Roma", "Veneza", "Pisa", "Florença"],
        correctAnswer: 2,
        explanation: 'A Torre de Pisa é conhecida mundialmente por sua inclinação.'
    },
    {
        id: 179,
        theme: 'geography',
        question: "Qual é a civilização indígena antiga conhecida pelas pirâmides em Chichén Itzá?",
        options: ["Asteca", "Maia", "Inca", "Olmeca"],
        correctAnswer: 1,
        explanation: 'Maias deixaram ruínas e pirâmides impressionantes na Península de Yucatán.'
    },
    {
        id: 180,
        theme: 'geography',
        question: "Qual monumento icônico em Paris é símbolo da França?",
        options: ["Torre Eiffel", "Big Ben", "Estátua da Liberdade", "Coliseu"],
        correctAnswer: 0,
        explanation: 'Construída para a Exposição Universal de 1889.'
    },
    {
        id: 181,
        theme: 'geography',
        question: "Qual é o nome do fenômeno em que relâmpagos ocorrem continuamente sem chuva, especialmente na Venezuela?",
        options: ["Elétrico", "Trovão", "Catatumbo", "Nimbos"],
        correctAnswer: 2,
        explanation: 'O Relâmpago do Catatumbo ocorre no lago de mesmo nome na Venezuela. É um fenômeno raro, com milhares de relâmpagos por noite, quase sem chuva.'
    },
    {
        id: 182,
        theme: 'geography',
        question: "Qual fenômeno ocorre quando magma subterrâneo entra em contato com água, causando explosões violentas?",
        options: ["Sismo", "Geiser", "Freatomagma", "Vulcão"],
        correctAnswer: 2,
        explanation: 'A erupção freatomagmática acontece quando água e magma se misturam, resultando em explosões altamente destrutivas.'
    },
    {
        id: 183,
        theme: 'geography',
        question: "Qual é o nome do fenômeno ótico atmosférico que forma anéis coloridos ao redor do Sol ou da Lua?",
        options: ["Neblina", "Arco-íris", "Halo", "Círculo"],
        correctAnswer: 2,
        explanation: 'O halo é um anel de luz que aparece ao redor do Sol ou da Lua, causado pela refração da luz em cristais de gelo na atmosfera.'
    },
    {
        id: 184,
        theme: 'geography',
        question: "Qual é o nome do fenômeno em que dois tornados giram em torno de um ponto comum?",
        options: ["Duplo", "Binário", "Gêmeo", "Fuji"],
        correctAnswer: 1,
        explanation: 'O fenômeno binário ou "dança dos tornados" ocorre quando dois tornados interagem, girando ao redor de um centro comum.'
    },
    {
        id: 185,
        theme: 'geography',
        question: "Qual fenômeno oceânico causado por um terremoto pode gerar ondas gigantes de destruição?",
        options: ["Maremoto", "Redemoinho", "Tsunami", "Ressaca"],
        correctAnswer: 2,
        explanation: 'Um tsunami é uma série de ondas gigantes provocadas geralmente por terremotos submarinos ou deslocamentos tectônicos.'
    },
    {
        id: 186,
        theme: 'geography',
        question: "Qual é a etnia indígena que habitava a região onde hoje está a cidade de São Paulo?",
        options: ["Tupinambá", "Guarani", "Tupi", "Guaianás"],
        correctAnswer: 3,
        explanation: 'Os Guaianás eram um dos grupos indígenas que habitavam a região do planalto de Piratininga, onde foi fundada São Paulo em 1554.'
    },
    {
        id: 187,
        theme: 'geography',
        question: "Qual etnia é considerada a maior população indígena do Brasil atualmente?",
        options: ["Tikuna", "Xavante", "Yanomami", "Pataxó"],
        correctAnswer: 0,
        explanation: 'Os Tikuna vivem principalmente na região do Alto Solimões (AM) e formam o maior grupo indígena em número populacional no Brasil.'
    },
    {
        id: 188,
        theme: 'geography',
        question: "Os berberes são um grupo étnico originário de qual região do mundo?",
        options: ["Arábia", "Saara", "Himalaia", "Cáucaso"],
        correctAnswer: 1,
        explanation: 'Os berberes são povos nativos do norte da África, especialmente nas regiões montanhosas e desérticas do Saara, presentes no Marrocos, Argélia e Tunísia.'
    },
    {
        id: 189,
        theme: 'geography',
        question: "Qual etnia norte-americana ficou conhecida por seguir o Búfalo como base de sua cultura e subsistência?",
        options: ["Sioux", "Cherokee", "Apache", "Navajo"],
        correctAnswer: 0,
        explanation: 'Os Sioux eram povos indígenas das planícies dos EUA que dependiam intensamente do búfalo para alimentação, vestuário e habitação (tipis).'
    },
    {
        id: 190,
        theme: 'geography',
        question: "Qual é o nome da etnia tradicionalmente associada à cultura cigana na Europa?",
        options: ["Sámi", "Báltica", "Roma", "Gaélica"],
        correctAnswer: 2,
        explanation: 'O povo Roma (também chamados de ciganos) tem origem no norte da Índia e se espalhou pela Europa, mantendo uma cultura nômade e própria, rica em música e oralidade.'
    },
    
    // Arte
    {
        id: 191,
        theme: 'art',
        question: "Quem pintou a obra 'Mona Lisa'?",
        options: ["Van Gogh", "Picasso", "Michelangelo", "Da Vinci"],
        correctAnswer: 3,
        explanation: 'A Mona Lisa foi pintada por Leonardo da Vinci, um dos maiores nomes do Renascimento, conhecido também por suas invenções e estudos científicos.'
    },
    {
        id: 192,
        theme: 'art',
        question: "Qual movimento artístico é associado a Salvador Dalí?",
        options: ["Cubismo", "Surrealismo", "Impressionismo", "Realismo"],
        correctAnswer: 1,
        explanation: 'O surrealismo explora o inconsciente e o mundo dos sonhos; Salvador Dalí é um dos principais representantes, com obras como A Persistência da Memória.'
    },
    {
        id: 193,
        theme: 'art',
        question: "O que é o 'Davi', escultura renascentista feita em mármore?",
        options: ["Rodin", "Bernini", "Donatello", "Michelangelo"],
        correctAnswer: 3,
        explanation: 'O Davi de Michelangelo é uma das esculturas mais famosas do Renascimento, simbolizando a força e a beleza humanas.'
    },
    {
        id: 194,
        theme: 'art',
        question: "Qual artista pintou 'Noite Estrelada'?",
        options: ["Monet", "Matisse", "Van Gogh", "Cézanne"],
        correctAnswer: 2,
        explanation: 'Vincent van Gogh pintou Noite Estrelada em 1889, uma de suas obras mais conhecidas, marcada por cores vibrantes e movimento emocional.'
    },
    {
        id: 195,
        theme: 'art',
        question: "Qual técnica artística usa pequenos pedaços para formar uma imagem?",
        options: ["Aquarela", "Mosaico", "Têmpera", "Gravura"],
        correctAnswer: 1,
        explanation: 'O mosaico é feito com pequenas peças (como cerâmica ou vidro) que, juntas, formam imagens. Era comum na arte romana e bizantina.'
    },
    {
        id: 196,
        theme: 'art',
        question: "Qual artista brasileiro é conhecido por suas obras coloridas com temas de favelas e festas populares?",
        options: ["Tarsila", "Portinari", "Romero", "DiCavalcanti"],
        correctAnswer: 2,
        explanation: 'Romero Britto é um artista pop brasileiro conhecido por seu estilo colorido e alegre, presente em murais e objetos pelo mundo todo.'
    },
    
    // Tecnologia
    {
        id: 197,
        theme: 'technology',
        question: "O que é uma intranet?",
        options: [
            "Rede privada usada dentro de uma organização",
            "Rede pública acessível a todos",
            "Um tipo de vírus de computador",
            "Um programa para edição de imagens"
        ],
        correctAnswer: 0,
        explanation: 'Intranets conectam dispositivos e pessoas dentro de empresas para comunicação interna.'
    },
    {
        id: 198,
        theme: 'technology',
        question: "O que significa o termo 'IP' na internet?",
        options: ["Internet Provider", "Internet Protocol", "Internal Program", "Interactive Page"],
        correctAnswer: 1,
        explanation: 'IP é um conjunto de regras para endereçar e enviar dados na internet.'
    },
    {
        id: 199,
        theme: 'technology',
        question: "O que é um endereço IP?",
        options: [
            "Um número único que identifica um dispositivo na rede",
            "Um programa para acessar a internet",
            "Um tipo de conexão sem fio",
            "Um vírus de computador"
        ],
        correctAnswer: 0,
        explanation: 'Endereços IP permitem que dispositivos comuniquem-se na rede.'
    },
    {
        id: 200,
        theme: 'technology',
        question: "O que é Wi-Fi?",
        options: [
            "Um protocolo de comunicação sem fio para redes locais",
            "Um tipo de cabo de rede",
            "Um software antivírus",
            "Um sistema operacional"
        ],
        correctAnswer: 0,
        explanation: 'Wi-Fi permite a conexão de dispositivos à internet sem fios.'
    },
    {
        id: 201,
        theme: 'technology',
        question: "O que é 'cloud computing' (computação em nuvem)?",
        options: [
            "Armazenamento e processamento de dados pela internet em servidores remotos",
            "Computação feita apenas em computadores locais",
            "Um tipo de software para editar fotos",
            "Um videogame online"
        ],
        correctAnswer: 0,
        explanation: 'Permite acessar arquivos e aplicativos de qualquer lugar.'
    },
    
    // Línguas
    {
        id: 202,
        theme: 'language',
        question: "Qual é o significado da palavra 'apple' em português?",
        options: ["Banana", "Maçã", "Uva", "Pêssego"],
        correctAnswer: 1,
        explanation: 'Apple é um substantivo comum em inglês e significa "maçã", uma das primeiras palavras ensinadas no idioma.'
    },
    {
        id: 203,
        theme: 'language',
        question: "Como se diz 'bom dia' em espanhol?",
        options: ["Buenas noches", "Buenas tardes", "Buen día", "Buenos días"],
        correctAnswer: 3,
        explanation: 'Buenos días é a forma padrão de cumprimentar pela manhã em espanhol, usado até o meio-dia.'
    },
    {
        id: 204,
        theme: 'language',
        question: "Qual dessas palavras significa 'obrigado' em alemão?",
        options: ["Bitte", "Hallo", "Danke", "Guten"],
        correctAnswer: 2,
        explanation: 'Danke é a forma básica de dizer "obrigado" em alemão. Para mais formalidade, pode-se usar Danke schön.'
    },
    {
        id: 205,
        theme: 'language',
        question: "O que significa a palavra italiana ciao?",
        options: ["Olá e tchau", "Obrigado", "Por favor", "Tudo bem?"],
        correctAnswer: 0,
        explanation: 'Ciao é uma saudação informal muito usada na Itália e serve tanto para dizer "oi" quanto "tchau".'
    },
    {
        id: 206,
        theme: 'language',
        question: "Qual destas expressões significa 'olá' em coreano?",
        options: ["안녕 (annyeong)", "감사합니다 (gamsahamnida)", "사랑해 (saranghae)", "학교 (hakgyo)"],
        correctAnswer: 0,
        explanation: '안녕 (annyeong) é uma forma informal de dizer "oi" ou "olá" em coreano, geralmente usada entre amigos ou pessoas próximas.'
    },
    {
        id: 207,
        theme: 'language',
        question: "O que significa a palavra house?",
        options: ["Cavalo", "Casa", "Rua", "Carro"],
        correctAnswer: 1,
        explanation: 'House é "casa" em inglês, diferente de home, que tem sentido mais emocional ou familiar.'
    },
    {
        id: 208,
        theme: 'language',
        question: "Qual dessas palavras é um verbo em inglês?",
        options: ["Beautiful", "Run", "Apple", "Happy"],
        correctAnswer: 1,
        explanation: 'Run significa "correr" e é um verbo. As outras palavras são substantivos ou adjetivos.'
    },


// Inglês
{
    id: 221,
    theme: 'language',
    question: "Qual é o significado da palavra 'apple' em português?",
    options: ["Banana", "Maçã", "Uva", "Pêssego"],
    correctAnswer: 1,
    explanation: "Apple é um substantivo comum em inglês e significa 'maçã', uma das primeiras palavras ensinadas no idioma."
},
{
    id: 222,
    theme: 'language',
    question: "O que significa a palavra 'house'?",
    options: ["Cavalo", "Casa", "Rua", "Carro"],
    correctAnswer: 1,
    explanation: "House é 'casa' em inglês, diferente de home, que tem sentido mais emocional ou familiar."
},

// Espanhol
{
    id: 223,
    theme: 'language',
    question: "Como se diz 'bom dia' em espanhol?",
    options: ["Buenas noches", "Buenas tardes", "Buen día", "Buenos días"],
    correctAnswer: 3,
    explanation: "Buenos días é a forma padrão de cumprimentar pela manhã em espanhol, usado até o meio-dia."
},
{
    id: 224,
    theme: 'language',
    question: "Como se diz 'cachorro' em espanhol?",
    options: ["Gato", "Perro", "Caballo", "Vaca"],
    correctAnswer: 1,
    explanation: "'Perro' é 'cachorro' ou 'cão' em espanhol. Gato = gato, caballo = cavalo."
},

// Alemão
{
    id: 225,
    theme: 'language',
    question: "Qual dessas palavras significa 'obrigado' em alemão?",
    options: ["Bitte", "Hallo", "Danke", "Guten"],
    correctAnswer: 2,
    explanation: "Danke é a forma básica de dizer 'obrigado' em alemão. Para mais formalidade, pode-se usar Danke schön."
},
{
    id: 226,
    theme: 'language',
    question: "O que significa 'Wasser' em alemão?",
    options: ["Ar", "Comida", "Água", "Leite"],
    correctAnswer: 2,
    explanation: "Wasser é 'água' em alemão. Muito comum em placas e cardápios."
},

// Italiano
{
    id: 227,
    theme: 'language',
    question: "O que significa a palavra italiana 'ciao'?",
    options: ["Olá e tchau", "Obrigado", "Por favor", "Tudo bem?"],
    correctAnswer: 0,
    explanation: "Ciao é uma saudação informal muito usada na Itália e serve tanto para dizer 'oi' quanto 'tchau'."
},
{
    id: 228,
    theme: 'language',
    question: "O que significa a palavra italiana 'grazie'?",
    options: ["Por favor", "Tchau", "De nada", "Obrigado"],
    correctAnswer: 3,
    explanation: "Grazie é a forma básica de agradecer. 'Prego' é 'de nada'."
},

// Coreano
{
    id: 229,
    theme: 'language',
    question: "Qual destas expressões significa 'olá' em coreano?",
    options: ["안녕 (annyeong)", "감사합니다 (gamsahamnida)", "사랑해 (saranghae)", "학교 (hakgyo)"],
    correctAnswer: 0,
    explanation: "안녕 (annyeong) é uma forma informal de dizer 'oi' ou 'olá' em coreano, geralmente usada entre amigos ou pessoas próximas."
},
{
    id: 230,
    theme: 'language',
    question: "O que significa '감사합니다' (gamsahamnida)?",
    options: ["Com licença", "Bom dia", "Obrigado", "Por favor"],
    correctAnswer: 2,
    explanation: "감사합니다 é uma forma educada de dizer 'obrigado'. Usado em contextos formais."
},


    
{
    id: 209,
    theme: 'math',
    question: "Qual o valor aproximado de π (pi)?",
    options: ["2,14", "3,14", "4,13", "3,41"],
    correctAnswer: 1,
    explanation: "π (pi) é uma constante matemática que representa a razão entre a circunferência e o diâmetro de um círculo. Seu valor aproximado é 3,14."
},
{
    id: 210,
    theme: 'math',
    question: "Qual é a metade de 1.000?",
    options: ["100", "500", "200", "50"],
    correctAnswer: 1,
    explanation: "Metade de um número é o valor dividido por 2. Metade de 1.000 é 1000 ÷ 2 = 500."
},
{
    id: 211,
    theme: 'math',
    question: "Quantos lados tem um hexágono?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1,
    explanation: "O prefixo 'hexa' significa seis. Um hexágono é uma figura geométrica com 6 lados."
},
{
    id: 212,
    theme: 'math',
    question: "Quantos segundos há em 1 minuto?",
    options: ["60", "100", "30", "90"],
    correctAnswer: 0,
    explanation: "Cada minuto tem exatamente 60 segundos. Esse padrão é usado em medidas de tempo no sistema sexagesimal."
},
{
    id: 213,
    theme: 'math',
    question: "Qual número vem antes do 0 (zero) na reta numérica?",
    options: ["-1", "1", "2", "-2"],
    correctAnswer: 0,
    explanation: "Números negativos estão à esquerda do zero na reta numérica. O número imediatamente anterior ao zero é o -1."
},
{
    id: 214,
    theme: 'math',
    question: "Um triângulo tem quantos lados?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "Triângulo é uma figura geométrica com três lados e três ângulos internos."
},
{
    id: 215,
    theme: 'math',
    question: "Se hoje é terça-feira, que dia será depois de 3 dias?",
    options: ["Sexta-feira", "Quinta-feira", "Segunda-feira", "Domingo"],
    correctAnswer: 0,
    explanation: "Adicionando 3 dias à terça-feira: quarta (1), quinta (2), sexta (3)."
},
{
    id: 216,
    theme: 'math',
    question: "Qual número multiplicado por 0 sempre dá 0?",
    options: ["Qualquer número", "Somente o 0", "Apenas números pares", "Nenhum número"],
    correctAnswer: 0,
    explanation: "Qualquer número real multiplicado por zero sempre resulta em zero. É uma das propriedades da multiplicação."
},
{
    id: 217,
    theme: 'math',
    question: "Se um bolo foi cortado em 8 pedaços iguais, qual fração representa 1 pedaço?",
    options: ["1/4", "1/6", "1/8", "1/2"],
    correctAnswer: 2,
    explanation: "Quando dividimos algo em partes iguais, cada parte é uma fração do todo. 1 pedaço de 8 partes é representado por 1/8."
},
{
    id: 218,
    theme: 'math',
    question: "Qual é o menor número primo?",
    options: ["1", "2", "3", "5"],
    correctAnswer: 1,
    explanation: "Números primos têm apenas dois divisores: 1 e ele mesmo. O menor número primo é 2 — e o único que é par."
},
{
    id: 219,
    theme: 'math',
    question: "Qual é o dobro de 12?",
    options: ["22", "20", "24", "26"],
    correctAnswer: 2,
    explanation: "Dobro significa multiplicar por 2. 12 × 2 = 24."
},
{
    id: 220,
    theme: 'math',
    question: "Quantos centímetros há em 1 metro?",
    options: ["10", "100", "1.000", "1.500"],
    correctAnswer: 1,
    explanation: "O sistema métrico define que 1 metro equivale a 100 centímetros."
},



{
    id: 231,
    theme: 'culture',
    question: "Qual festa espanhola envolve correr na frente de touros?",
    options: ["La Tomatina", "San Fermín", "Feria de Abril", "Día de los Muertos"],
    correctAnswer: 1,
    explanation: "Corrida de touros em Pamplona, famosa mundialmente."
},
{
    id: 232,
    theme: 'culture',
    question: "O que é 'La Tomatina'?",
    options: ["Uma corrida de cavalos", "Um festival de batalha de tomates", "Uma festa de música tradicional", "Uma celebração religiosa"],
    correctAnswer: 1,
    explanation: "Evento anual na cidade de Buñol, onde as pessoas jogam tomates umas nas outras."
},
{
    id: 233,
    theme: 'culture',
    question: "No Japão, o que simboliza a flor de cerejeira (sakura)?",
    options: ["Riqueza", "Vida e renovação", "Força", "Sorte"],
    correctAnswer: 1,
    explanation: "Sakura é símbolo da efemeridade da vida e do início da primavera."
},
{
    id: 234,
    theme: 'culture',
    question: "Em que país se celebra o Dia de los Muertos, uma festa para homenagear os mortos?",
    options: ["México", "Brasil", "Argentina", "Peru"],
    correctAnswer: 0,
    explanation: "Festa cheia de altares coloridos, comidas e lembranças dos falecidos."
},
{
    id: 235,
    theme: 'culture',
    question: "Qual desses países é famoso por sua dança folclórica flamenca?",
    options: ["Portugal", "Espanha", "França", "Itália"],
    correctAnswer: 1,
    explanation: "Flamenco é uma dança vibrante originada na Andaluzia."
},




{
    id: 241,
    theme: 'science',
    question: "Qual é a grandeza física medida em newtons?",
    options: ["Força", "Massa", "Velocidade", "Energia"],
    correctAnswer: 0,
    explanation: "O newton (N) é a unidade de força no Sistema Internacional."
},
{
    id: 242,
    theme: 'science',
    question: "Qual partícula é responsável pela corrente elétrica nos condutores?",
    options: ["Fóton", "Próton", "Elétron", "Nêutron"],
    correctAnswer: 2,
    explanation: "A corrente elétrica é formada pelo fluxo de elétrons livres em materiais condutores."
},



{
    id: 243,
    theme: 'culture',
    question: "Qual manifestação cultural brasileira é conhecida por seus bonecos gigantes em Olinda?",
    options: ["Frevo", "Bumba meu boi", "Maracatu", "Carnaval"],
    correctAnswer: 3,
    explanation: "Os bonecos gigantes são uma tradição do Carnaval de Olinda (PE)."
},
{
    id: 244,
    theme: 'culture',
    question: "Qual é a festa tradicional nordestina celebrada com quadrilhas, comidas típicas e fogueiras?",
    options: ["Natal", "Carnaval", "Junina", "Cosme e Damião"],
    correctAnswer: 2,
    explanation: "As festas juninas celebram santos populares como São João."
}

    


    

    
    
];
