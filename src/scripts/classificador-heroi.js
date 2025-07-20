// Adiciona um evento de envio ao formulário com ID 'campos'
document.getElementById('campos').addEventListener('submit', function(event) {
    console.log('Formulário submetido'); // Loga no console quando o formulário é submetido
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos de entrada
    let nome = document.getElementById('nome').value;
    let Win = parseInt(document.getElementById('Win').value); // Converte para número
    let Loss = parseInt(document.getElementById('Loss').value); // Converte para número

    // Função para calcular saldo e nível
    function calcularSaldoELevel(Win, Loss) {
        const saldo = Win - Loss; // Calcula o saldo de vitórias e derrotas
        let nivel;

        if (saldo <= 10) {
            nivel = "Ferro";
        } else if (saldo >= 11 && saldo <= 20) {
            nivel = "Bronze";
        } else if (saldo >= 21 && saldo <= 50) {
            nivel = "Prata";
        } else if (saldo >= 51 && saldo <= 80) {
            nivel = "Ouro";
        } else if (saldo >= 81 && saldo <= 90) {
            nivel = "Diamante";
        } else if (saldo >= 91 && saldo <= 100) {
            nivel = "Lendário";
        } else if (saldo >= 101 && saldo <= 110) {
            nivel = "Imortal";
        } else {
            nivel = "Deus";
        }

        // Exibe o resultado no div de resultado
        const resultado = `O Herói ${nome} está no Rank ${nivel}`;
        document.getElementById('resultado').textContent = resultado;
    }

    // Chama a função para calcular e mostrar o resultado
    calcularSaldoELevel(Win, Loss);
});

