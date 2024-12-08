// Seleciona as barras do estado do gato
const healthBar = document.querySelector('.health'); // Barra de saúde
const hungerBar = document.querySelector('.hunger'); // Barra de fome
const thirstBar = document.querySelector('.thirst'); // Barra de sede

// Seleciona a área onde as notificações serão exibidas
const notifications = document.getElementById('notifications');

// Seleciona o botão inicial "Ok"
const startButton = document.getElementById('start-button');

// Função para exibir notificações na área central
function displayNotification(message) {
    notifications.innerHTML = `<p>${message}</p>`; // Insere a mensagem no elemento de notificações
}

// Função para atualizar a largura de uma barra (saúde, fome, sede)
function updateBar(bar, value) {
    bar.style.width = `${value}%`; // Ajusta visualmente a largura da barra
    if (value <= 0) {
        bar.style.width = '0%'; // Garante que a largura nunca fique negativa
    }
}

// Função chamada quando o jogador clica em "Ok" (início do jogo)
function startGame() {
    // Substitui o conteúdo da área de notificações com inputs para o jogador
    notifications.innerHTML = `
        <p>Qual será o nome do seu gato?</p> <!-- Pergunta ao jogador -->
        <input type="text" id="cat-name" placeholder="Digite o nome do seu gato"> <!-- Campo de texto para o nome -->
        <p>Escolha a aparência do seu gato:</p> <!-- Texto sobre as opções -->
        <!-- Opções para o jogador escolher a aparência -->
        <label><input type="radio" name="appearance" value="marron"> Marron</label><br>
        <label><input type="radio" name="appearance" value="amarelo"> Amarelo</label><br>
        <label><input type="radio" name="appearance" value="preto-e-branco"> Preto e branco</label><br>
        <!-- Botão para confirmar as escolhas -->
        <button id="confirm-button">Confirmar</button>
    `;

    // Seleciona o novo botão "Confirmar" e adiciona um evento de clique
    document.getElementById('confirm-button').addEventListener('click', confirmCat);
}

// Função chamada ao clicar no botão "Confirmar"
function confirmCat() {
    // Captura o valor do campo de texto (nome do gato)
    const catName = document.getElementById('cat-name').value.trim();

    // Captura a aparência selecionada (radio button)
    const appearance = document.querySelector('input[name="appearance"]:checked');

    // Verifica se ambos os campos foram preenchidos
    if (catName && appearance) {
        // Substitui o conteúdo com uma mensagem de confirmação
        displayNotification(
            `Ótimo! Seu gato se chama <strong>${catName}</strong> e tem aparência <strong>${appearance.value}</strong>.`
        );

        // Ativar a próxima funcionalidade (exemplo: botões de ação)
        enableGameActions();
    } else {
        // Exibe uma mensagem de erro se algo estiver faltando
        displayNotification(
            `<p style="color: red;">Por favor, preencha todas as informações antes de continuar.</p>`
        );
    }
}

// Função para habilitar as ações do jogo após o início
function enableGameActions() {
    displayNotification(`Ótimo! Seu gato se chama <strong>${catName}</strong> e tem aparência <strong>${appearance.value}</strong>.`);
}

// Função para calcular o próximo dia
function nextDay() {
    // Pega os valores atuais das barras
    let health = parseInt(healthBar.style.width) || 100;
    let hunger = parseInt(hungerBar.style.width) || 100;
    let thirst = parseInt(thirstBar.style.width) || 100;

    // Diminui fome e sede
    hunger = Math.max(hunger - 25, 0); // Reduz fome em 25%, mas nunca abaixo de 0
    thirst = Math.max(thirst - 25, 0); // Reduz sede em 25%, mas nunca abaixo de 0

    // Calcula a redução de saúde
    if (hunger === 0 || thirst === 0) {
        health -= 20; // Reduz 20% para cada atributo zerado
        if (hunger === 0 && thirst === 0) {
            health -= 20; // Redução extra de 20% se ambos forem 0
        }
    }

    // Atualiza as barras
    updateBar(hungerBar, hunger); // Atualiza a barra de fome
    updateBar(thirstBar, thirst); // Atualiza a barra de sede
    updateBar(healthBar, health); // Atualiza a barra de saúde

    // Verifica se a saúde chegou a 0
    if (health <= 0) {
        displayNotification(
            'Seu gato fugiu, ele entendeu que você é um péssimo dono e decidiu ir em busca de uma vida melhor :('
        );
        document.getElementById('actions').innerHTML = ''; // Remove os botões de ação
    }
}

// Adiciona funcionalidade ao botão "Próximo Dia"
document.getElementById('next-day').addEventListener('click', nextDay);

// Adiciona o evento de clique ao botão "Ok" na mensagem inicial
startButton.addEventListener('click', startGame);
