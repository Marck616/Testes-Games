// Eventos aleatórios que podem acontecer
const events = [
    {
        message: 'Seu gato encontrou um inseto e passou a tarde caçando ele. Parece que se divertiu!',
        effects: [
            { stat: 'boredom', value: -20 },
            { stat: 'energy', value: -15 }
        ]
    },
    {
        message: 'Seu gato derrubou um vaso enquanto você não estava olhando!',
        effects: [
            { stat: 'stress', value: 10 }
        ]
    },
    {
        message: 'Seu gato dormiu o dia todo. Parece que estava cansado.',
        effects: [
            { stat: 'energy', value: 30 }
        ]
    },
    {
        message: 'Seu gato ficou olhando pela janela por horas, observando os pássaros.',
        effects: [
            { stat: 'boredom', value: -15 },
            { stat: 'stress', value: 5 }
        ]
    },
    {
        message: 'Seu gato parece ter tido um pesadelo. Ele está um pouco assustado.',
        effects: [
            { stat: 'stress', value: 15 }
        ]
    },
    {
        message: 'Seu gato fez um novo amigo gato através da janela!',
        effects: [
            { stat: 'boredom', value: -25 }
        ]
    },
    {
        message: 'Seu gato encontrou um pedaço de papel amassado e passou horas brincando com ele.',
        effects: [
            { stat: 'boredom', value: -30 },
            { stat: 'energy', value: -20 }
        ]
    },
    {
        message: 'Uma tempestade assustou seu gato. Ele está estressado.',
        season: 'Outono',
        effects: [
            { stat: 'stress', value: 30 }
        ]
    },
    {
        message: 'Seu gato está derrubando tudo da mesa. Parece entediado.',
        effects: [
            { stat: 'boredom', value: 20 }
        ]
    },
    {
        message: 'Seu gato parece não gostar da comida nova que você comprou.',
        minDay: 5,
        effects: [
            { stat: 'hunger', value: 15 }
        ]
    },
    {
        message: 'Seu gato está seguindo você por toda a casa. Parece carente hoje.',
        effects: [
            { stat: 'stress', value: -10 }
        ]
    },
    {
        message: 'Seu gato está ronronando e esfregando em você. Parece feliz!',
        effects: [
            { stat: 'stress', value: -15 }
        ]
    }
];
