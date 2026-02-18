const treinos = {
    "1": {
        "titulo": "Home A: Estabilidade (Support)",
        "tempo": "50-55 min",
        "aquecimento": "Mobilidade de punhos, escápulas e 3 séries de 30s de prancha abdominal.",
        "exercicios": [
            "Skill: Support Hold Braço Esticado - (5 x max)",
            "Força: Flexão Diamante (Tatame): 4 x 10 a 12",
            "Core: L-Sit Progressão (Joelhos no Peito): 4 x 20 seg",
            "Boxe (Foco Técnica de Linha): 5 rounds x 3 min [Jab - Direto - Jab - Direto - Passo atrás]"
        ]
    },
    "2": {
        "titulo": "Foco Isometria & Tríceps",
        "tempo": "52-57 min",
        "aquecimento": "Rotação de ombros, mobilidade de cotovelos e prancha lateral (30s cada lado).",
        "exercicios": [
            "Skill: Ring Plank (Prancha nas Argolas): 5 x 45s",
            "Força: Dips Argolas (4 séries x falha técnica)",
            "Core: Prancha 2 apoios (4 x 45s/lado)",
            "Boxe (Foco Volume): 5 rounds x 3 min [Jab - Jab - Direto - Cruzado - Cruzado]"
        ]
    },
    "3": {
        "titulo": "Home B: Dinâmica (Puxar/Empurrar)",
        "tempo": "48-53 min",
        "aquecimento": "Ativação de dorsais (band pull apart) e mobilidade de pescoço/coluna.",
        "exercicios": [
            "Skill: False Grip (Posição de Remada): 4 x 30 seg (Braços dobrados para focar no punho).",
            "Força: Remada Invertida (Argolas): 4 x 12",
            "Força: Dips/Mergulho na argola (Com Elástico): 4 x 6 a 8",
            "Boxe (Foco Curta Distância): 5 rounds x 3 min [Jab - Direto - Gancho corpo - Gancho cabeça]", // <--- VÍRGULA ADICIONADA AQUI
            "Finalizador: Superman (3 x 12 reps)"
        ]
    },
    "4": {
        "titulo": "Foco Explosão & Estabilidade Lateral",
        "tempo": "45-50 min",
        "aquecimento": "Agachamentos livres, polichinelos e mobilidade de quadril.",
        "exercicios": [
            "Skill: Ring Flyes Isométrico (Argolas baixas): 5 x 20s",
            "Força: Agachamento Elástico (4 x 15 reps)",
            "Core: Rodinha Diagonal (3 x 10 reps)",
            "Boxe (Foco Defesa/Contra-ataque): 5 rounds x 3 min [Jab - Direto - Esquiva Lateral - Direto]",
            "Finalizador: Sombra c/ Peso (2 rounds x 3 min)"
        ]
    },
    "5": {
        "titulo": "Técnica de Pegada & Suporte",
        "tempo": "47-52 min",
        "aquecimento": "Rotação de punhos (15/15), círculos com ombros (15/15), Gato-Camelo (10) e Scapular Push-ups (12).",
        "exercicios": [
            "Skill: Suporte Argolas com RTO (Mãos para fora): 3 x 45s",
            "Força: Flexão Diamante (4 x 12 reps)",
            "Core: Abdominal Remador (4 x 25 reps)",
            "Boxe (Foco Coordenação Complexa): 5 rounds x 3 min [Jab - Direto - Gancho - Gancho - Pendular]",
            "Finalizador: Prancha 2 apoios (3 min direto - troca de 15s em 15s)"
        ]
    }
};

const urlParams = new URLSearchParams(window.location.search);
const opcaoSelecionada = urlParams.get('opcao');

const listaContainer = document.getElementById('exercise-list');

if (opcaoSelecionada && treinos[opcaoSelecionada]) {
    const treino = treinos[opcaoSelecionada];

    
    document.getElementById('workout-title').textContent = treino.titulo;
    document.getElementById('workout-duration').textContent = `⏱ ${treino.tempo}`;
    document.getElementById('warmup-content').textContent = treino.aquecimento;

    
    listaContainer.innerHTML = "";
    
    treino.exercicios.forEach(exer => {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        
        const span = document.createElement('span');
        span.textContent = exer;

        li.appendChild(checkbox);
        li.appendChild(span);
        listaContainer.appendChild(li);
    });
} else {
    document.body.innerHTML = "<h1>Treino não encontrado</h1><a href='index.html'>Voltar</a>";
}
