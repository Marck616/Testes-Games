// Banco de dados de itens
const items = [
    {
        id: 'dry_kitten_food',
        name: 'Ração para Filhotes',
        category: 'food',
        price: 50,
        description: 'Ração balanceada para gatos filhotes.',
        hungerEffect: 30,
        starter: true,
        eatMessage: 'Nham nham!'
    },
    {
        id: 'wet_food',
        name: 'Comida Úmida',
        category: 'food',
        price: 80,
        description: 'Comida enlatada saborosa que os gatos adoram.',
        hungerEffect: 40,
        specialEffect: {
            type: 'thirst',
            value: 10
        },
        eatMessage: 'Delícia!'
    },
    {
        id: 'premium_food',
        name: 'Ração Premium',
        category: 'food',
        price: 120,
        description: 'Ração de alta qualidade com ingredientes naturais.',
        hungerEffect: 35,
        specialEffect: {
            type: 'health',
            value: 5
        }
    },
    {
        id: 'catnip',
        name: 'Catnip',
        category: 'food',
        price: 60,
        description: 'Erva que deixa os gatos eufóricos.',
        hungerEffect: 10,
        specialEffect: {
            type: 'stress',
            value: -30
        },
        consumable: true,
        requiresDiscovery: true
    },
    {
        id: 'ball',
        name: 'Bolinha',
        category: 'toys',
        price: 30,
        description: 'Bolinha simples para o gato perseguir.',
        starter: true,
        playMessage: 'Vou pegar!'
    },
    {
        id: 'feather_toy',
        name: 'Pena de Brincar',
        category: 'toys',
        price: 45,
        description: 'Vara com penas que imita pássaros.',
        playMessage: 'Pássaro!'
    },
    {
        id: 'mouse_toy',
        name: 'Rato de Brinquedo',
        category: 'toys',
        price: 35,
        description: 'Rato falso para o gato caçar.',
        playMessage: 'Caçando!'
    },
    {
        id: 'scratch_post',
        name: 'Arranhador',
        category: 'furniture',
        price: 150,
        description: 'Poste para o gato arranhar e se exercitar.',
        requiresDiscovery: true
    },
    {
        id: 'cat_bed',
        name: 'Cama de Gato',
        category: 'furniture',
        price: 200,
        description: 'Cama confortável para o gato dormir.',
        requiresDiscovery: true
    },
    {
        id: 'health_kit',
        name: 'Kit de Saúde',
        category: 'health',
        price: 100,
        description: 'Medicamentos básicos para tratar seu gato.',
        specialEffect: {
            type: 'health',
            value: 30
        },
        consumable: true,
        requiresDiscovery: true
    },
    {
        id: 'calming_spray',
        name: 'Spray Calmante',
        category: 'health',
        price: 70,
        description: 'Ajuda a reduzir o estresse do gato.',
        specialEffect: {
            type: 'stress',
            value: -25
        },
        consumable: true,
        requiresDiscovery: true
    }
];
