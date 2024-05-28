// SCRIPTS
let saudacaoNome = "Compreendo, antes de verificar o que ocorreu, poderia me informar o seu nome e o endereço do local?"[0]



const temaOptions = {
  tema1: [saudacaoNome, "Opção 1.2", "Opção 1.3", "Opção 1.4", "Opção 1.5"],
  tema2: ["Opção 2.1", "Opção 2.2", "Opção 2.3", "Opção 2.4", "Opção 2.5"],
  tema3: ["Opção 3.1", "Opção 3.2", "Opção 3.3", "Opção 3.4", "Opção 3.5"],
};

const outputTexts = {
  tema1: "Texto do Tema 1",
  tema2: "Texto do Tema 2",
  tema3: "Texto do Tema 3",
};

function populateOptions() {
  const temaDropdown = document.getElementById("temaDropdown");
  const opcaoDropdown = document.getElementById("opcaoDropdown");
  const outputField = document.getElementById("outputField");
  const selectedTema = temaDropdown.value;

  opcaoDropdown.innerHTML =
    '<option value="" disabled selected>Selecione uma opção</option>';

  if (selectedTema) {
    temaOptions[selectedTema].forEach((option) => {
      const newOption = document.createElement("option");
      newOption.value = option;
      newOption.text = option;
      opcaoDropdown.appendChild(newOption);
    });
    opcaoDropdown.disabled = false;
    outputField.value = outputTexts[selectedTema];
  } else {
    opcaoDropdown.disabled = true;
    outputField.value = "";
  }
}

function copyText() {
  const outputField = document.getElementById("outputField");
  outputField.select();
  document.execCommand("copy");
  alert("Texto copiado: " + outputField.value);
}
