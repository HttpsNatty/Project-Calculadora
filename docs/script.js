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

const calcularHora = tipo => {
  const horaEntrada = document.getElementById("horaEntrada").value;
  const [hora, minutos] = horaEntrada.split(":").map(Number);

  if (!horaEntrada || isNaN(hora) || isNaN(minutos) || hora < 0 || hora > 23 || minutos < 0 || minutos > 59) {
      document.getElementById("error").innerText = "Insira uma hora válida (00:00 - 23:59)";
      return;
  }

  // Define o tempo a ser somado baseado no botão clicado
  let somaHoras = 0;
  let somaMinutos = 0;

  switch (tipo) {
      case 'segTerQui':
          somaHoras = 9;
          somaMinutos = 40;
          break;
      case 'quarta':
          somaHoras = 5;
          somaMinutos = 30;
          break;
      case 'sextaManha':
          somaHoras = 3;
          somaMinutos = 30;
          break;
      case 'sextaTarde':
          somaHoras = 5;
          somaMinutos = 0;
          break;
      default:
          break;
  }

  // Calcula a nova hora
  let novaHora = hora + somaHoras;
  let novosMinutos = minutos + somaMinutos;

  // Ajusta minutos e horas quando ultrapassam 60 minutos
  if (novosMinutos >= 60) {
      novaHora += Math.floor(novosMinutos / 60);
      novosMinutos = novosMinutos % 60;
  }

  // Ajusta a rotação do relógio (24 horas)
  novaHora = novaHora % 24;

  // Formata a hora de saída
  const horaSaida = `${novaHora < 10 ? "0" : ""}${novaHora}:${novosMinutos < 10 ? "0" : ""}${novosMinutos}`;

  // Exibe o resultado e limpa a mensagem de erro
  document.getElementById("resultado").innerHTML = `Hora de Saída: ${horaSaida}`;
  document.getElementById("error").innerText = "";
};