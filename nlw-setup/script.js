// Formas de usar o 'querySelector'

// com atributos document.querySelector("header button"); "button que está no header"

// com classes document.querySelector(".registrar"); "classe registrar no documento"

// com id document.querySelector("#form-habits"); "id no documento"

const form = document.querySelector("#form-habits"); // Consulta o formulário de id 'form-habits'
const nlwSetup = new NLWSetup(form); // cria uma variável para iniciar a biblioteca
const button = document.querySelector("header button");

button.addEventListener("click", add); // Quando houver um click no botão 'registrar o meu dia' adicionar o dia de hoje
form.addEventListener("change", save); // sempre que houver uma alteração em alguma atividade, será chamada a função 'save'

// Criando uma função para adicionar um dia
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5); // gera uma variável que retorna o dia de hoje no formato 'dd/mm'

  // const today = '01/01'  - metódo hardcode
  const dayExists = nlwSetup.dayExists(today); // função que verifica se um dia já existe no nosso sistema

  if (dayExists) {
    alert("Dia já registrado ❌");
    return;
  }

  nlwSetup.addDay(today);
  alert("Adicionado com sucesso ✔");
}

// criando uma função, para salvar a personalização do site
function save() {
  // JSON.stringify(nlwSetup.data) => Transforma um objeto em um texto
  localStorage.setItem("habitos@habitos", JSON.stringify(nlwSetup.data));
}

// const data = {
//     run: ['01-01'],
//     water: ['01-01', '01-02', '01-03', '01-06', '01-08'],
//     fruit: ['01-01', '01-03'],
//     book: ['01-03'],
//     medicine: ['01-01'],
// }

// JSON.parse => transforma um texto em objeto
const data = JSON.parse(localStorage.getItem("habitos@habitos")) || {};
nlwSetup.setData(data); // define as configurações salvas na variável 'data'
nlwSetup.load(); // carrega as informações salvas na variável 'data'
