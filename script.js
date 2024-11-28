// Selecionando elementos do DOM
const quizForm = document.getElementById("quizForm");
const resultSection = document.getElementById("resultSection");
const resultMessage = document.getElementById("resultMessage");

// Adicionando evento de envio no formulário
quizForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    let score = 0;

    // Calculando a pontuação
    const question1 = document.querySelector('input[name="question1"]:checked');
    const question2 = document.querySelector('input[name="question2"]:checked');
    const question3 = document.querySelector('input[name="question3"]:checked');
    const question4 = document.querySelector('input[name="question4"]:checked');
    const question5 = document.querySelector('input[name="question5"]:checked');

    if (question1 && question1.value === "1") score++;
    if (question2 && question2.value === "1") score++;
    if (question3 && question3.value === "1") score++;
    if (question4 && question4.value === "1") score++;
    if (question5 && question5.value === "1") score++;

    // Exibindo o resultado
    resultMessage.textContent = `Você acertou ${score} de 5 perguntas!`;

    // Mensagens de feedback dinâmicas
    if (score === 5) {
        resultMessage.textContent += " Excelente trabalho!";
        resultSection.classList.add('result-high');
    } else if (score >= 3 ) {
        resultMessage.textContent += " Quase lá! Tente melhorar na próxima!";
        resultSection.classList.add('result-medium');
    } else {
        resultMessage.textContent += " Não desista! Tente novamente!";
        resultSection.classList.add('result-low');
    }

    // Exibindo a seção de resultados
    resultSection.classList.remove("d-none");
});
