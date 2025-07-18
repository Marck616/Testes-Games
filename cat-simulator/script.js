// Configurações do jogo
const gameConfig = {
    timeSpeed: 1000, // 1 segundo real = 10 minutos no jogo
    dayLength: 144, // 144 períodos de 10 minutos = 24 horas
    statsUpdateInterval: 5, // Atualizar stats a cada 5 minutos do jogo
    salaryInterval: 15, // Salário a cada 15 dias
    baseSalary: 1000,
    startingMoney: 1000
};

// Estado do jogo
const gameState = {
    currentTime: 480, // 8:00 AM em minutos (480 minutos)
    currentDay: 1,
    season: 'Primavera',
    weather: 'Sunny',
    money: gameConfig.startingMoney,
    daysUntilSalary: gameConfig.salaryInterval,
    gameInterval: null,
    statsInterval: null,
    paused: false
};

// Estado do gato
const cat = {
    name: 'Whiskers',
    age: 0, // Em meses
    stats: {
        health: 100,
        hunger: 50,
        thirst: 50,
        energy: 80,
        stress: 20,
        boredom: 30
    },
    personality: {
        affectionate: 60, // 0-100 (0 = arisco, 100 = carinhoso)
        independent: 40, // 0-100 (0 = dependente, 100 = independente)
        brave: 70 // 0-100 (0 = medroso, 100 = aventureiro)
    },
    mood: 'Feliz',
    condition: 'Saudável',
    position: 'floor',
    currentAction: null,
    inventory: [],
    favoriteToy: null,
    favoriteFood: null,
    discoveredItems: []
};

// Elementos DOM
const DOM = {
    timeDisplay: document.querySelector('.time'),
    dayDisplay: document.querySelector('.day'),
    seasonDisplay: document.querySelector('.season'),
    moneyDisplay: document.querySelector('.money-amount'),
    daysUntilSalaryDisplay: document.querySelector('.days-left'),
    catElement: document.getElementById('cat'),
    catThoughtBubble: document.querySelector('.cat-thought-bubble'),
    logMessages: document.querySelector('.log-messages'),
    inventoryItems: document.querySelector('.inventory-items'),
    shopModal: document.getElementById('shop-modal'),
    catStatusModal: document.getElementById('cat-status-modal'),
    shopItemsContainer: document.querySelector('.shop-items')
};

// Atualizar displays
function updateDisplays() {
    // Atualizar tempo
    const hours = Math.floor(gameState.currentTime / 60);
    const minutes = gameState.currentTime % 60;
    DOM.timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    DOM.dayDisplay.textContent = `Dia ${gameState.currentDay}`;
    DOM.seasonDisplay.textContent = gameState.season;
    
    // Atualizar dinheiro
    DOM.moneyDisplay.textContent = gameState.money;
    DOM.daysUntilSalaryDisplay.textContent = gameState.daysUntilSalary;
    
    // Atualizar barras de status
    updateStatBars();
    
    // Atualizar inventário
    updateInventoryDisplay();
}

// Atualizar barras de status
function updateStatBars() {
    document.querySelector('.health-bar').style.width = `${cat.stats.health}%`;
    document.querySelector('.hunger-bar').style.width = `${cat.stats.hunger}%`;
    document.querySelector('.thirst-bar').style.width = `${cat.stats.thirst}%`;
    document.querySelector('.energy-bar').style.width = `${cat.stats.energy}%`;
    document.querySelector('.stress-bar').style.width = `${cat.stats.stress}%`;
    document.querySelector('.boredom-bar').style.width = `${cat.stats.boredom}%`;
    
    document.querySelector('.health-bar').nextElementSibling.textContent = `${cat.stats.health}%`;
    document.querySelector('.hunger-bar').nextElementSibling.textContent = `${cat.stats.hunger}%`;
    document.querySelector('.thirst-bar').nextElementSibling.textContent = `${cat.stats.thirst}%`;
    document.querySelector('.energy-bar').nextElementSibling.textContent = `${cat.stats.energy}%`;
    document.querySelector('.stress-bar').nextElementSibling.textContent = `${cat.stats.stress}%`;
    document.querySelector('.boredom-bar').nextElementSibling.textContent = `${cat.stats.boredom}%`;
    
    // Atualizar traços de personalidade
    document.querySelector('.affectionate-bar').style.width = `${cat.personality.affectionate}%`;
    document.querySelector('.independent-bar').style.width = `${cat.personality.independent}%`;
    document.querySelector('.brave-bar').style.width = `${cat.personality.brave}%`;
    
    document.querySelectorAll('.trait-value')[0].textContent = `${cat.personality.affectionate}%`;
    document.querySelectorAll('.trait-value')[1].textContent = `${cat.personality.independent}%`;
    document.querySelectorAll('.trait-value')[2].textContent = `${100 - cat.personality.brave}%`;
}

// Atualizar inventário
function updateInventoryDisplay() {
    DOM.inventoryItems.innerHTML = '';
    cat.inventory.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'inventory-item';
        itemElement.textContent = item.name;
        itemElement.addEventListener('click', () => useItem(item));
        DOM.inventoryItems.appendChild(itemElement);
    });
}

// Adicionar mensagem ao log
function addLogMessage(message) {
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.textContent = message;
    DOM.logMessages.appendChild(logEntry);
    DOM.logMessages.scrollTop = DOM.logMessages.scrollHeight;
}

// Mostrar balão de pensamento do gato
function showCatThought(message, duration = 3000) {
    DOM.catThoughtBubble.textContent = message;
    DOM.catThoughtBubble.style.display = 'flex';
    
    // Posicionar o balão acima do gato
    const catRect = DOM.catElement.getBoundingClientRect();
    DOM.catThoughtBubble.style.left = `${catRect.left - 50}px`;
    DOM.catThoughtBubble.style.top = `${catRect.top - 70}px`;
    
    setTimeout(() => {
        DOM.catThoughtBubble.style.display = 'none';
    }, duration);
}

// Atualizar condição do gato baseado nas estatísticas
function updateCatCondition() {
    // Verificar saúde primeiro
    if (cat.stats.health <= 20) {
        cat.condition = 'Muito Doente';
    } else if (cat.stats.health <= 50) {
        cat.condition = 'Doente';
    } else if (cat.stats.health < 80) {
        cat.condition = 'Levemente Doente';
    } else {
        // Verificar outras necessidades para determinar humor
        const needs = [];
        
        if (cat.stats.hunger > 70) needs.push('faminto');
        if (cat.stats.thirst > 70) needs.push('sedento');
        if (cat.stats.energy < 30) needs.push('cansado');
        if (cat.stats.stress > 60) needs.push('estressado');
        if (cat.stats.boredom > 60) needs.push('entediado');
        
        if (needs.length > 2) {
            cat.mood = 'Irritado';
        } else if (needs.length > 0) {
            cat.mood = 'Incomodado';
        } else if (cat.stats.health >= 95 && cat.stats.energy >= 80) {
            cat.mood = 'Extasiado';
        } else {
            cat.mood = 'Feliz';
        }
        
        cat.condition = 'Saudável';
    }
}

// Atualizar estatísticas do gato com o tempo
function updateCatStats() {
    // Fome e sede aumentam com o tempo
    cat.stats.hunger = Math.min(100, cat.stats.hunger + 1);
    cat.stats.thirst = Math.min(100, cat.stats.thirst + 1);
    
    // Energia diminui durante o dia, recupera à noite
    const isNightTime = gameState.currentTime < 360 || gameState.currentTime >= 1200; // 6AM-8PM é dia
    if (isNightTime && cat.position === 'bed') {
        cat.stats.energy = Math.min(100, cat.stats.energy + 3);
    } else {
        cat.stats.energy = Math.max(0, cat.stats.energy - 1);
    }
    
    // Estresse e tédio aumentam se necessidades não forem atendidas
    if (cat.stats.hunger > 70 || cat.stats.thirst > 70) {
        cat.stats.stress = Math.min(100, cat.stats.stress + 2);
    }
    
    if (cat.stats.boredom > 50 && cat.currentAction === null) {
        cat.stats.boredom = Math.min(100, cat.stats.boredom + 1);
    }
    
    // Saúde é afetada por outras estatísticas
    if (cat.stats.hunger > 80 || cat.stats.thirst > 80 || cat.stats.stress > 80) {
        cat.stats.health = Math.max(0, cat.stats.health - 1);
    } else if (cat.stats.health < 100) {
        cat.stats.health = Math.min(100, cat.stats.health + 0.5);
    }
    
    // Atualizar condição e humor
    updateCatCondition();
    
    // Atualizar displays
    updateStatBars();
}

// Comportamento aleatório do gato
function randomCatBehavior() {
    if (cat.currentAction !== null) return; // Não interromper ações em andamento
    
    const behaviors = [
        'sleep', 'play', 'explore', 'groom', 'window', 'scratch'
    ];
    
    const weights = [
        0.3, // sleep
        0.2, // play
        0.2, // explore
        0.1, // groom
        0.15, // window
        0.05 // scratch
    ];
    
    // Ajustar pesos baseado na personalidade
    if (cat.personality.brave > 70) weights[2] += 0.1; // explore mais
    if (cat.personality.affectionate > 70) weights[3] += 0.1; // groom mais
    
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;
    let behaviorIndex = 0;
    
    while (random > weights[behaviorIndex]) {
        random -= weights[behaviorIndex];
        behaviorIndex++;
    }
    
    const selectedBehavior = behaviors[behaviorIndex];
    
    switch (selectedBehavior) {
        case 'sleep':
            if (cat.stats.energy < 70) {
                startCatAction('sleep', 5000);
                showCatThought(catPhrases.sleep[Math.floor(Math.random() * catPhrases.sleep.length)]);
            }
            break;
        case 'play':
            if (cat.stats.boredom > 30 && cat.stats.energy > 30) {
                startCatAction('play', 6000);
                showCatThought(catPhrases.play[Math.floor(Math.random() * catPhrases.play.length)]);
            }
            break;
        case 'explore':
            if (cat.personality.brave > 50) {
                startCatAction('explore', 8000);
                showCatThought(catPhrases.explore[Math.floor(Math.random() * catPhrases.explore.length)]);
            }
            break;
        case 'groom':
            startCatAction('groom', 4000);
            showCatThought(catPhrases.groom[Math.floor(Math.random() * catPhrases.groom.length)]);
            break;
        case 'window':
            startCatAction('window', 7000);
            showCatThought(catPhrases.window[Math.floor(Math.random() * catPhrases.window.length)]);
            break;
        case 'scratch':
            startCatAction('scratch', 3000);
            showCatThought(catPhrases.scratch[Math.floor(Math.random() * catPhrases.scratch.length)]);
            break;
    }
}

// Iniciar ação do gato
function startCatAction(action, duration) {
    cat.currentAction = action;
    
    // Resetar classes de animação
    DOM.catElement.className = 'cat';
    DOM.catElement.classList.add(`cat-${action}`);
    
    // Mover gato para posição apropriada
    moveCatToPosition(action);
    
    // Finalizar ação após a duração
    setTimeout(() => {
        if (cat.currentAction === action) {
            finishCatAction(action);
        }
    }, duration);
}

// Mover gato para posição baseado na ação
function moveCatToPosition(action) {
    const roomWidth = document.querySelector('.room').offsetWidth;
    const roomHeight = document.querySelector('.room').offsetHeight;
    
    switch (action) {
        case 'sleep':
            DOM.catElement.style.left = `${roomWidth - 100}px`;
            DOM.catElement.style.top = `${roomHeight - 130}px`;
            cat.position = 'bed';
            break;
        case 'play':
            DOM.catElement.style.left = `${roomWidth / 2 - 40}px`;
            DOM.catElement.style.top = `${roomHeight / 2 - 25}px`;
            cat.position = 'floor';
            DOM.catElement.classList.add('cat-jumping');
            break;
        case 'explore':
            DOM.catElement.style.left = `${50}px`;
            DOM.catElement.style.top = `${roomHeight - 80}px`;
            cat.position = 'floor';
            DOM.catElement.classList.add('cat-walking');
            break;
        case 'groom':
            DOM.catElement.style.left = `${roomWidth - 150}px`;
            DOM.catElement.style.top = `${roomHeight - 80}px`;
            cat.position = 'floor';
            break;
        case 'window':
            DOM.catElement.style.left = `${roomWidth - 100}px`;
            DOM.catElement.style.top = `${50}px`;
            cat.position = 'window';
            break;
        case 'scratch':
            DOM.catElement.style.left = `${60}px`;
            DOM.catElement.style.top = `${170}px`;
            cat.position = 'scratch';
            break;
        default:
            DOM.catElement.style.left = `${roomWidth / 2 - 40}px`;
            DOM.catElement.style.top = `${roomHeight - 80}px`;
            cat.position = 'floor';
    }
}

// Finalizar ação do gato
function finishCatAction(action) {
    cat.currentAction = null;
    DOM.catElement.className = 'cat';
    
    // Efeitos da ação
    switch (action) {
        case 'sleep':
            cat.stats.energy = Math.min(100, cat.stats.energy + 20);
            cat.stats.stress = Math.max(0, cat.stats.stress - 10);
            break;
        case 'play':
            cat.stats.boredom = Math.max(0, cat.stats.boredom - 20);
            cat.stats.energy = Math.max(0, cat.stats.energy - 15);
            break;
        case 'explore':
            cat.stats.boredom = Math.max(0, cat.stats.boredom - 15);
            cat.stats.stress = Math.min(100, cat.stats.stress + 5);
            // Chance de descobrir um item novo
            if (Math.random() < 0.1) {
                const undiscoveredItems = items.filter(item => !cat.discoveredItems.includes(item.id));
                if (undiscoveredItems.length > 0) {
                    const newItem = undiscoveredItems[Math.floor(Math.random() * undiscoveredItems.length)];
                    cat.discoveredItems.push(newItem.id);
                    addLogMessage(`${cat.name} descobriu um novo item: ${newItem.name}!`);
                }
            }
            break;
        case 'groom':
            cat.stats.stress = Math.max(0, cat.stats.stress - 5);
            break;
        case 'window':
            cat.stats.boredom = Math.max(0, cat.stats.boredom - 10);
            // Chance de ver um pássaro
            if (Math.random() < 0.3) {
                showCatThought('Pássaro!', 2000);
                cat.stats.stress = Math.min(100, cat.stats.stress + 15);
            }
            break;
        case 'scratch':
            cat.stats.stress = Math.max(0, cat.stats.stress - 10);
            break;
    }
    
    updateStatBars();
}

// Ações do jogador
function petCat() {
    if (cat.currentAction !== null) {
        addLogMessage(`${cat.name} está ocupado com outra coisa.`);
        return;
    }
    
    const reactionThreshold = 100 - cat.personality.affectionate;
    const reactionRoll = Math.random() * 100;
    
    if (reactionRoll > reactionThreshold) {
        // Reação positiva
        startCatAction('pet', 4000);
        showCatThought(catPhrases.petPositive[Math.floor(Math.random() * catPhrases.petPositive.length)]);
        cat.stats.stress = Math.max(0, cat.stats.stress - 15);
        addLogMessage(`${cat.name} está adorando os carinhos!`);
    } else {
        // Reação negativa
        showCatThought(catPhrases.petNegative[Math.floor(Math.random() * catPhrases.petNegative.length)]);
        cat.stats.stress = Math.min(100, cat.stats.stress + 20);
        addLogMessage(`${cat.name} não está com vontade de carinho agora.`);
    }
    
    updateStatBars();
}

function playWithCat() {
    if (cat.currentAction !== null) {
        addLogMessage(`${cat.name} está ocupado com outra coisa.`);
        return;
    }
    
    // Verificar se há brinquedos no inventário
    const toys = cat.inventory.filter(item => item.category === 'toys');
    
    if (toys.length === 0) {
        addLogMessage(`Você não tem brinquedos para brincar com ${cat.name}. Visite a loja.`);
        return;
    }
    
    // Escolher um brinquedo aleatório (com preferência pelo favorito)
    let selectedToy;
    if (cat.favoriteToy && Math.random() > 0.7) {
        selectedToy = toys.find(toy => toy.id === cat.favoriteToy);
    } else {
        selectedToy = toys[Math.floor(Math.random() * toys.length)];
    }
    
    startCatAction('play', 6000);
    showCatThought(`${selectedToy.playMessage || 'Brincando!'}`, 3000);
    cat.stats.boredom = Math.max(0, cat.stats.boredom - 30);
    cat.stats.energy = Math.max(0, cat.stats.energy - 20);
    cat.stats.stress = Math.max(0, cat.stats.stress - 10);
    
    // Chance de se tornar brinquedo favorito
    if (!cat.favoriteToy && Math.random() > 0.8) {
        cat.favoriteToy = selectedToy.id;
        addLogMessage(`${cat.name} adorou o ${selectedToy.name}! Tornou-se seu brinquedo favorito.`);
    }
    
    addLogMessage(`Você brincou com ${cat.name} usando ${selectedToy.name}.`);
    updateStatBars();
}

function feedCat() {
    if (cat.currentAction !== null) {
        addLogMessage(`${cat.name} está ocupado com outra coisa.`);
        return;
    }
    
    // Verificar se há comida no inventário
    const foods = cat.inventory.filter(item => item.category === 'food');
    
    if (foods.length === 0) {
        addLogMessage(`Você não tem comida para ${cat.name}. Visite a loja.`);
        return;
    }
    
    // Escolher uma comida aleatória (com preferência pela favorita)
    let selectedFood;
    if (cat.favoriteFood && Math.random() > 0.7) {
        selectedFood = foods.find(food => food.id === cat.favoriteFood);
    } else {
        selectedFood = foods[Math.floor(Math.random() * foods.length)];
    }
    
    startCatAction('eat', 4000);
    showCatThought(`${selectedFood.eatMessage || 'Comida!'}`, 3000);
    cat.stats.hunger = Math.max(0, cat.stats.hunger - (selectedFood.hungerEffect || 30));
    
    // Efeitos especiais da comida
    if (selectedFood.specialEffect) {
        switch (selectedFood.specialEffect.type) {
            case 'health':
                cat.stats.health = Math.min(100, cat.stats.health + selectedFood.specialEffect.value);
                break;
            case 'energy':
                cat.stats.energy = Math.min(100, cat.stats.energy + selectedFood.specialEffect.value);
                break;
            case 'stress':
                cat.stats.stress = Math.max(0, cat.stats.stress - selectedFood.specialEffect.value);
                break;
        }
    }
    
    // Chance de se tornar comida favorita
    if (!cat.favoriteFood && Math.random() > 0.8) {
        cat.favoriteFood = selectedFood.id;
        addLogMessage(`${cat.name} adorou o ${selectedFood.name}! Tornou-se sua comida favorita.`);
    }
    
    addLogMessage(`Você alimentou ${cat.name} com ${selectedFood.name}.`);
    updateStatBars();
}

function giveWater() {
    if (cat.currentAction !== null) {
        addLogMessage(`${cat.name} está ocupado com outra coisa.`);
        return;
    }
    
    startCatAction('drink', 3000);
    showCatThought(catPhrases.drink[Math.floor(Math.random() * catPhrases.drink.length)]);
    cat.stats.thirst = Math.max(0, cat.stats.thirst - 40);
    addLogMessage(`Você deu água para ${cat.name}.`);
    updateStatBars();
}

function openShop() {
    gameState.paused = true;
    DOM.shopModal.style.display = 'flex';
    loadShopItems('food');
}

function closeShop() {
    gameState.paused = false;
    DOM.shopModal.style.display = 'none';
}

function loadShopItems(category) {
    DOM.shopItemsContainer.innerHTML = '';
    
    // Ativar botão da categoria selecionada
    document.querySelectorAll('.shop-category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Filtrar itens por categoria
    const categoryItems = items.filter(item => item.category === category && 
        (cat.discoveredItems.includes(item.id) || !item.requiresDiscovery));
    
    if (categoryItems.length === 0) {
        DOM.shopItemsContainer.innerHTML = '<p>Nenhum item disponível nesta categoria.</p>';
        return;
    }
    
    categoryItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'shop-item';
        itemElement.innerHTML = `
            <div class="shop-item-name">${item.name}</div>
            <div class="shop-item-price">$${item.price}</div>
            <div class="shop-item-description">${item.description}</div>
        `;
        
        itemElement.addEventListener('click', () => buyItem(item));
        DOM.shopItemsContainer.appendChild(itemElement);
    });
}

function buyItem(item) {
    if (gameState.money < item.price) {
        addLogMessage(`Você não tem dinheiro suficiente para comprar ${item.name}.`);
        return;
    }
    
    gameState.money -= item.price;
    cat.inventory.push(item);
    
    // Adicionar ao inventário se não estiver lá
    if (!cat.inventory.some(invItem => invItem.id === item.id)) {
        cat.inventory.push(item);
    }
    
    addLogMessage(`Você comprou ${item.name} por $${item.price}.`);
    updateDisplays();
}

function useItem(item) {
    switch (item.category) {
        case 'food':
            feedCat();
            break;
        case 'toys':
            playWithCat();
            break;
        case 'health':
            useHealthItem(item);
            break;
        default:
            addLogMessage(`Você usou ${item.name}.`);
    }
    
    // Remover item consumível do inventário
    if (item.consumable) {
        const itemIndex = cat.inventory.findIndex(invItem => invItem.id === item.id);
        if (itemIndex > -1) {
            cat.inventory.splice(itemIndex, 1);
            updateInventoryDisplay();
        }
    }
}

function useHealthItem(item) {
    if (item.specialEffect) {
        switch (item.specialEffect.type) {
            case 'health':
                cat.stats.health = Math.min(100, cat.stats.health + item.specialEffect.value);
                addLogMessage(`Você usou ${item.name}. Saúde de ${cat.name} aumentou.`);
                break;
            case 'stress':
                cat.stats.stress = Math.max(0, cat.stats.stress - item.specialEffect.value);
                addLogMessage(`Você usou ${item.name}. Estresse de ${cat.name} diminuiu.`);
                break;
        }
    } else {
        cat.stats.health = Math.min(100, cat.stats.health + 20);
        addLogMessage(`Você usou ${item.name}. Saúde de ${cat.name} aumentou.`);
    }
    
    updateStatBars();
}

function openCatStatus() {
    gameState.paused = true;
    
    // Atualizar informações no modal
    document.querySelector('.cat-name').textContent = cat.name;
    document.querySelector('.cat-age').textContent = `Idade: ${cat.age} meses`;
    document.querySelector('.cat-mood').textContent = `Humor: ${cat.mood}`;
    document.querySelector('.cat-condition').textContent = `Condição: ${cat.condition}`;
    
    // Atualizar necessidades
    const needsList = document.querySelector('.needs-list');
    needsList.innerHTML = '';
    
    const needs = [];
    if (cat.stats.hunger > 70) needs.push('Precisa comer');
    if (cat.stats.thirst > 70) needs.push('Precisa de água');
    if (cat.stats.energy < 30) needs.push('Precisa descansar');
    if (cat.stats.stress > 60) needs.push('Precisa relaxar');
    if (cat.stats.boredom > 60) needs.push('Precisa brincar');
    
    if (needs.length === 0) {
        needs.push('Todas as necessidades estão atendidas');
    }
    
    needs.forEach(need => {
        const li = document.createElement('li');
        li.textContent = need;
        needsList.appendChild(li);
    });
    
    DOM.catStatusModal.style.display = 'flex';
}

// Avançar o tempo do jogo
function advanceTime() {
    if (gameState.paused) return;
    
    gameState.currentTime += 10; // Avançar 10 minutos
    
    // Verificar se passou um dia
    if (gameState.currentTime >= 1440) {
        gameState.currentTime = 0;
        gameState.currentDay++;
        gameState.daysUntilSalary--;
        
        // Envelhecer o gato a cada 30 dias
        if (gameState.currentDay % 30 === 0) {
            cat.age++;
            addLogMessage(`${cat.name} está fazendo ${cat.age} meses!`);
        }
        
        // Mudar estação a cada 90 dias
        if (gameState.currentDay % 90 === 0) {
            const seasons = ['Primavera', 'Verão', 'Outono', 'Inverno'];
            const currentSeasonIndex = seasons.indexOf(gameState.season);
            gameState.season = seasons[(currentSeasonIndex + 1) % seasons.length];
            addLogMessage(`As estações mudaram. Agora é ${gameState.season}.`);
        }
        
        // Receber salário
        if (gameState.daysUntilSalary <= 0) {
            gameState.money += gameConfig.baseSalary;
            gameState.daysUntilSalary = gameConfig.salaryInterval;
            addLogMessage(`Você recebeu seu salário de $${gameConfig.baseSalary}.`);
        }
    }
    
    // Atualizar displays
    updateDisplays();
    
    // Comportamento aleatório do gato
    if (Math.random() < 0.1) {
        randomCatBehavior();
    }
    
    // Eventos aleatórios
    if (Math.random() < 0.05) {
        triggerRandomEvent();
    }
}

// Disparar evento aleatório
function triggerRandomEvent() {
    const possibleEvents = events.filter(event => 
        (event.minDay === undefined || gameState.currentDay >= event.minDay) &&
        (event.season === undefined || event.season === gameState.season)
    );
    
    if (possibleEvents.length === 0) return;
    
    const event = possibleEvents[Math.floor(Math.random() * possibleEvents.length)];
    
    addLogMessage(event.message);
    
    // Aplicar efeitos do evento
    if (event.effects) {
        event.effects.forEach(effect => {
            switch (effect.stat) {
                case 'health':
                    cat.stats.health = Math.max(0, Math.min(100, cat.stats.health + effect.value));
                    break;
                case 'hunger':
                    cat.stats.hunger = Math.max(0, Math.min(100, cat.stats.hunger + effect.value));
                    break;
                case 'thirst':
                    cat.stats.thirst = Math.max(0, Math.min(100, cat.stats.thirst + effect.value));
                    break;
                case 'energy':
                    cat.stats.energy = Math.max(0, Math.min(100, cat.stats.energy + effect.value));
                    break;
                case 'stress':
                    cat.stats.stress = Math.max(0, Math.min(100, cat.stats.stress + effect.value));
                    break;
                case 'boredom':
                    cat.stats.boredom = Math.max(0, Math.min(100, cat.stats.boredom + effect.value));
                    break;
            }
        });
    }
    
    // Atualizar displays
    updateStatBars();
}

// Inicializar o jogo
function initGame() {
    // Configurar intervalos
    gameState.gameInterval = setInterval(advanceTime, gameConfig.timeSpeed);
    gameState.statsInterval = setInterval(updateCatStats, gameConfig.timeSpeed * gameConfig.statsUpdateInterval);
    
    // Configurar event listeners
    document.getElementById('pet-btn').addEventListener('click', petCat);
    document.getElementById('play-btn').addEventListener('click', playWithCat);
    document.getElementById('feed-btn').addEventListener('click', feedCat);
    document.getElementById('water-btn').addEventListener('click', giveWater);
    document.getElementById('shop-btn').addEventListener('click', openShop);
    document.getElementById('vet-btn').addEventListener('click', openCatStatus);
    
    document.querySelector('.close-btn').addEventListener('click', closeShop);
    document.querySelector('#cat-status-modal .close-btn').addEventListener('click', () => {
        gameState.paused = false;
        DOM.catStatusModal.style.display = 'none';
    });
    
    // Configurar botões de categoria da loja
    document.querySelectorAll('.shop-category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadShopItems(btn.dataset.category);
        });
    });
    
    // Adicionar alguns itens iniciais
    const initialItems = items.filter(item => item.starter);
    cat.inventory = [...initialItems];
    
    // Configurar itens favoritos iniciais
    const starterFoods = initialItems.filter(item => item.category === 'food');
    if (starterFoods.length > 0) {
        cat.favoriteFood = starterFoods[0].id;
    }
    
    const starterToys = initialItems.filter(item => item.category === 'toys');
    if (starterToys.length > 0) {
        cat.favoriteToy = starterToys[0].id;
    }
    
    // Marcar itens iniciais como descobertos
    initialItems.forEach(item => {
        if (!cat.discoveredItems.includes(item.id)) {
            cat.discoveredItems.push(item.id);
        }
    });
    
    // Mensagem inicial
    addLogMessage(`Bem-vindo ao Cat Simulator! Você adotou ${cat.name}, um adorável gatinho.`);
    addLogMessage(`Cuide de ${cat.name} atendendo suas necessidades.`);
    
    // Posicionar gato inicialmente
    moveCatToPosition('floor');
    
    // Atualizar displays
    updateDisplays();
}

// Iniciar o jogo quando a página carregar
window.addEventListener('DOMContentLoaded', initGame);
