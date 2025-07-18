// Tipos de personalidade base para gatos
const personalities = {
    affectionate: {
        name: 'Carinhoso',
        description: 'Gatos carinhosos gostam de atenção e carinho dos donos.',
        baseValue: 70
    },
    aloof: {
        name: 'Arisco',
        description: 'Gatos ariscos são mais independentes e menos propensos a procurar carinho.',
        baseValue: 30
    },
    independent: {
        name: 'Independente',
        description: 'Gatos independentes não precisam de muita atenção e se divertem sozinhos.',
        baseValue: 70
    },
    dependent: {
        name: 'Dependente',
        description: 'Gatos dependentes precisam de muita atenção e interação com os donos.',
        baseValue: 30
    },
    brave: {
        name: 'Aventureiro',
        description: 'Gatos aventureiros são curiosos e não se assustam facilmente.',
        baseValue: 70
    },
    timid: {
        name: 'Medroso',
        description: 'Gatos medrosos se assustam facilmente com barulhos e mudanças.',
        baseValue: 30
    }
};

// Função para gerar uma personalidade aleatória
function generateRandomPersonality() {
    return {
        affectionate: Math.floor(Math.random() * 40) + 30, // 30-70
        independent: Math.floor(Math.random() * 40) + 30,
        brave: Math.floor(Math.random() * 40) + 30
    };
}
