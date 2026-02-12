const treinos = {
    "1": {
        titulo: "Foco Handstand & Peitoral",
        tempo: "50-55 min",
        aquecimento: "Mobilidade de punhos, escápulas e 3 séries de 30s de prancha abdominal.",
        exercicios: [
            "Skill: Handstand (5 x 30s)",
            "Força: Flexão (4 séries)",
            "Core: L-Sit (4 séries)",
            "Boxe: 5 rounds x 3 min",
            "Finalizador: Rodinha (3 séries)"
        ]
    },
    "2": {
        titulo: "Foco Isometria & Tríceps",
        tempo: "52-57 min",
        aquecimento: "Rotação de ombros, mobilidade de cotovelos e prancha lateral (30s cada lado).",
        exercicios: [
            "Skill: V-Sit (5 x 15s)",
            "Força: Dips Argolas (4 séries)",
            "Core: Prancha 2 apoios (4 x 45s/lado)",
            "Boxe: 5 rounds x 3 min",
            "Finalizador: Elástico (3 séries)"
        ]
    },
    "3": {
        titulo: "Foco Tripé & Costas",
        tempo: "48-53 min",
        aquecimento: "Ativação de dorsais (band pull apart) e mobilidade de pescoço/coluna.",
        exercicios: [
            "Skill: Tripé (4 x 45s)",
            "Força: Remada Argolas (4 séries)",
            "Core: L-Sit Chão (4 séries)",
            "Boxe: 5 rounds x 3 min",
            "Finalizador: Superman (3 séries)"
        ]
    },
    "4": {
        titulo: "Foco Explosão & Mobilidade",
        tempo: "45-50 min",
        aquecimento: "Agachamentos livres, polichinelos e mobilidade de quadril.",
        exercicios: [
            "Skill: Wall Walk (5 reps lentas)",
            "Força: Agachamento Elástico (4 x 15 reps)",
            "Core: Rodinha Diagonal (3 séries)",
            "Boxe: 5 rounds x 3 min",
            "Finalizador: Sombra c/ Peso (2 rounds x 3 min)"
        ]
    },
    "5": {
        titulo: "Técnica Tripé & Estabilidade",
        tempo: "47-52 min",
        aquecimento: "Rotação de punhos (15/15), círculos com ombros (15/15), Gato-Camelo (10) e Scapular Push-ups (12).",
        exercicios: [
            "Skill: Suporte Argolas (3 x 45s)",
            "Força: Flexão Diamante (4 séries)",
            "Core: Tripé Dinâmico (4 x 10 reps)",
            "Boxe (Jab Direto Gancho Gancho Pendular): 5 rounds x 3 min",
            "Finalizador: Prancha 2 apoios (3 min direto)"
        ]
    }
};

const urlParams = new URLSearchParams(window.location.search);
const opcaoSelecionada = urlParams.get('opcao');

if (opcaoSelecionada && treinos[opcaoSelecionada]) {
    const treino = treinos[opcaoSelecionada];
    
    document.getElementById('workout-title').innerText = treino.titulo;
    document.getElementById('workout-duration').innerText = `⏱ ${treino.tempo}`;
    document.getElementById('warmup-content').innerText = treino.aquecimento;

    const listaContainer = document.getElementById('exercise-list');
    
    treino.exercicios.forEach(exer => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <span>${exer}</span>
        `;
        listaContainer.appendChild(li);
    });
} else {
    document.body.innerHTML = "<h1>Treino não encontrado</h1><a href='index.html'>Voltar</a>";
}
