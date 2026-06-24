const treinos = {
    "1": {
        "titulo": "Home A: Empurrar & Estabilidade",
        "tempo": "50-55 min",
        "aquecimento": "Mobilidade de punhos, escápulas e 3 séries de 30s de prancha abdominal.",
        "exercicios": [
            "Skill: Support Hold nas Argolas ou Paraletes de 40cm (Mãos em RTO): 4 x max",
            "Força 1: Dips (Mergulho) nas Argolas: 4 x falha técnica",
            "Força 2: Flexão de Braço nos Paraletes de 10cm: 4 x 10 a 12",
            "Boxe (Foco Técnica de Linha): 5 rounds x 3 min [Jab - Direto - Jab - Direto - Passo atrás]",
            "Finalizador: Tríceps no Elástico (Ancorado alto): 3 x 15 a 20"
        ]
    },
    "2": {
        "titulo": "Home B: Puxar & Força de Costas",
        "tempo": "48-53 min",
        "aquecimento": "Ativação de dorsais com elástico (Band Pull Apart) e mobilidade de coluna.",
        "exercicios": [
            "Skill/Pegada: False Grip na posição de Remada Invertida: 4 x 30 seg (Braços dobrados)",
            "Força 1: Remada Invertida nas Argolas (Corpo horizontal): 4 x 10 a 12",
            "Força 2: Puxada Alta Vertical com Elástico (Ancorado alto): 4 x 12 a 15",
            "Boxe (Foco Volume): 5 rounds x 3 min [Jab - Jab - Direto - Cruzado - Cruzado]",
            "Finalizador: Rosca Bíceps com Elástico: 3 x 15"
        ]
    },
    "3": {
        "titulo": "Gym: Inferiores Foco Força (Na Academia)",
        "tempo": "50-60 min",
        "aquecimento": "5 min esteira leve + Agachamento livre sem peso (20 reps).",
        "exercicios": [
            "Quadríceps/Glúteos: Agachamento no Smith: 4 x 8 a 10",
            "Cadeia Posterior/Lombar: Levantamento Terra (Barra): 3 x 8",
            "Isolamento Posterior: Cadeira Flexora: 3 x 12",
            "Unilateral: Leg Press Horizontal (Foco amplitude): 3 x 10 por perna",
            "Panturrilhas: Gêmeos em Pé (Máquina ou Smith): 4 x 15"
        ]
    },
    "4": {
        "titulo": "Home C: Core Avançado & Ombros",
        "tempo": "45-50 min",
        "aquecimento": "Rotação de ombros, mobilidade de cotovelos e prancha lateral (30s cada lado).",
        "exercicios": [
            "Skill: Ring Plank (Prancha nas Argolas): 4 x 45s",
            "Core Avançado: L-Sit Progressão nos Paraletes de 40cm (Joelhos no peito): 4 x 20 seg",
            "Ombros: Elevação Lateral com Elástico: 4 x 12 a 15",
            "Boxe (Foco Curta Distância): 5 rounds x 3 min [Jab - Direto - Gancho corpo - Gancho cabeça]",
            "Finalizador: Superman no Tatame (Extensão lombar): 3 x 12"
        ]
    },
    "5": {
        "titulo": "Home D: Condicionamento & Potência",
        "tempo": "47-52 min",
        "aquecimento": "Mobilidade de tornozelos, joelhos, círculos com ombros e Scapular Push-ups (12).",
        "exercicios": [
            "Cardio/Agilidade: 10 a 15 min de Corda de Pular ou Patins de forma contínua: 1 x max",
            "Força: Flexão Diamante no Tatame: 4 x 10 a 12",
            "Core: Abdominal Remador (Com pesos de punho de 1kg): 4 x 20 a 25",
            "Boxe (Foco Defesa/Contra-ataque): 5 rounds x 3 min [Jab - Direto - Esquiva Lateral - Direto]",
            "Finalizador: Prancha 2 apoios na Bola de Pilates: 3 min direto (Troca a cada 15s)"
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
