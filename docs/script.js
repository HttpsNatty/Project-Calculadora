const pressEnter = event => {
    if (event.key === "Enter") {
        event.preventDefault();
        calcularHora();
    }
};

const formatarHora = input => {
    let valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (valor.length > 2) {
        valor = valor.substring(0, 2) + ':' + valor.substring(2); // Adiciona ":" após os primeiros dois dígitos
    }
    input.value = valor;
};

const calcularHora = () => {
    const horaEntrada = document.getElementById("horaEntrada").value;
    const [hora, minutos] = horaEntrada.split(":").map(Number);

    if (!horaEntrada || isNaN(hora) || isNaN(minutos) || hora < 0 || hora > 23 || minutos < 0 || minutos > 59) {
        document.getElementById("error").innerText = "Insira uma hora válida (00:00 - 23:59)";
        return;
    }

    let novaHora = hora + 9;
    let novosMinutos = minutos;

    novaHora = novaHora % 24;

    const horaSaida = `${novaHora < 10 ? "0" : ""}${novaHora}:${novosMinutos < 10 ? "0" : ""}${novosMinutos}`;

    document.getElementById("resultado").innerHTML = `Hora de Saída: ${horaSaida}`;
    document.getElementById("error").innerText = "";
};
