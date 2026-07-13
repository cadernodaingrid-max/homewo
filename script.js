const treinos = {
    "1": {
        "titulo": "Home A: Empurrar & Boxe Técnico",
        "tempo": "60-65 min",
        "aquecimento": "Mobilidade de punhos, escápulas e 2 séries de 30s de prancha abdominal.",
        "exercicios": [
            "Boxe (Foco Técnica de Linha): 4 rounds x 3 min [Jab - Direto - Jab - Direto - Passo atrás] (Descanso: 1 min)",
            "Skill/Ativação: Support Hold nas Argolas (Mãos em RTO): 2 x 20 a 30 seg (Não ir até o limite)",
            "Força 1: Dips (Mergulho) nas Argolas ou Paralelas: 4 x 6 a 8 (Foco em controle)",
            "Força 2: Flexão de Braço nos Paraletes de 10cm: 3 x 10 a 12 (Cadência lenta)",
            "Finalizador: Tríceps no Elástico (Ancorado alto): 3 x 15 a 20 (Estímulo metabólico)"
        ]
    },
    "2": {
        "titulo": "Home B: Puxar & Costas Estrutural",
        "tempo": "60-65 min",
        "aquecimento": "Ativação de dorsais com elástico (Band Pull Apart) e mobilidade de coluna.",
        "exercicios": [
            "Boxe (Foco Volume de Golpes): 4 rounds x 3 min [Jab - Jab - Direto - Cruzado - Cruzado] (Descanso: 1 min)",
            "Força 1: Barra Fixa nas Argolas (Pull-ups): 4 x 6 a 8 (Elástico nos pés)",
            "Força 2: Remada Invertida nas Argolas (Corpo horizontal): 4 x 10 a 12",
            "Finalizador 1: Rosca Bíceps com Elástico: 3 x 15 (Foco na contração)",
            "Finalizador2 - Skill/Ativação: False Grip na posição de Remada Invertida: 2 x 20 seg (Braços dobrados)"
        ]
    },
    "3": {
        "titulo": "Gym: Inferiores Cadência e Força Máxima",
        "tempo": "55-60 min",
        "aquecimento": "Mobilidade de quadril/tornozelo + Agachamento livre sem peso (2 séries de 15 reps).",
        "exercicios": [
            "Quadríceps/Glúteos: Agachamento Livre com Barra: 4 x 8 a 10",
            "Força Coordenativa: Levantamento Terra (Barra Livre): 3 x 6",
            "Leg Press 45º: 3 x 10 a 12",
            "Isolamento Posterior: Cadeira Flexora: 3 x 12 (Segurando 1s na máxima contração)",
            "Panturrilhas: Gêmeos em Pé (Máquina ou Smith): 4 x 15 (3s de alongamento embaixo)"
        ]
    },
    "4": {
        "titulo": "Home C: Core Avançado & Ombros",
        "tempo": "50-55 min",
        "aquecimento": "Rotação de ombros, mobilidade de cotovelos e prancha lateral (2 séries de 30s cada lado).",
        "exercicios": [
            "Boxe (Foco Curta Distância/Infight): 4 rounds x 3 min [Jab - Direto - Gancho corpo - Gancho cabeça]",
            "Core Avançado 1: L-Sit Progressão nos Paraletes de 40cm (Joelhos no peito): 4 x 15 a 20 seg",
            "Core Avançado 2: Ring Plank (Prancha nas Argolas): 3 x 45s",
            "Ombros: Elevação Lateral com Elástico: 4 x 12 a 15 (Controlando a descida)",
            "Finalizador: Superman no Tatame (Extensão lombar): 3 x 12"
        ]
    },
    "5": {
        "titulo": "Home D: Condicionamento, Potência & Resistência",
        "tempo": "50-55 min",
        "aquecimento": "Mobilidade de tornozelos, joelhos e Scapular Push-ups (2 séries de 12).",
        "exercicios": [
            "Cardio/Agilidade: Corda de Pular: 10 a 12 min (Ritmo moderado para regeneração)",
            "Potência/Explosão: Flexão: 4 x 5-6 (Foco na subida explosiva)",
            "Core Dinâmico: Abdominal Remador (Com pesos de punho de 1kg): 3 x 20",
            "Boxe Burnout (Foco Cardio/Velocidade): 4 rounds x 3 min [Jab - Direto - Esquiva Lateral - Direto]",
            "Potência/Explosão: Flexão Diamante no Tatame: 3 séries até a falha",
            "Finalizador Estabilidade: Prancha 2 apoios na Bola de Pilates: 3 séries de 45s (Estático controlado)"
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
