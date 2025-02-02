let montandoMsg = [];
let menuRoteadorSelecionado = 0;

//const msgCopiado = document.getElementById("msgCopiado");
const msgCopiado = document.createElement("span");
msgCopiado.id = "msgCopiado";

let msgCopiadoText = document.createElement("p");
msgCopiadoText.textContent = "Copiado com sucesso!";

msgCopiado.appendChild(msgCopiadoText);

document.querySelectorAll(".title").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (
      document.getElementById("configuracoesSection").style.display == "none"
    ) {
      const phrase = event.target.getAttribute("data-phrase");
      navigator.clipboard
        .writeText(phrase)
        .then(() => {
          mostraImagem(msgCopiado);
        })
        .catch((err) => {
          console.error("Erro ao copiar frase: ", err);
        });
    }
  });
});

function mostraImagem(element) {
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(element);

  element.style.display = "flex";
  setTimeout(function () {
    if (element.style.display === "flex") element.style.display = "none";
  }, 1500);
}

function abrirConfiguracoes() {
  const configuracoesSection = document.getElementById("configuracoesSection");
  configuracoesSection.style.display = "flex";
  efeitoAlternarDisplay("dropdownRoteadoresContentDiv", "block", false);
}

function efeitoAlternarDisplay(idElemento, novoDisplay, alternarAuto) {
  const elemento = document.getElementById(idElemento);
  if (alternarAuto) {
    if (elemento.style.display == "none") {
      elemento.style.display = novoDisplay;
    } else {
      elemento.style.display = "none";
    }
  } else {
    elemento.style.display = novoDisplay;
  }
}

const btnDrop = document.getElementById("btnDrop");
const btnConfigOnt = document.getElementById("btnConfigOnt");
const btnConfigGreatek = document.getElementById("btnConfigGreatek");
const btnConfigOutros = document.getElementById("btnConfigOutros");

function removerElementosFilhos(nomeElemento) {
  const elementoPai = document.getElementById(nomeElemento);
  if (elementoPai) {
    while (elementoPai.firstChild) {
      elementoPai.removeChild(elementoPai.firstChild);
    }
  }
}

function selecionarTudoCheckbox() {
  if (document.getElementsByName("configCheckboxIpt") != undefined) {
    const configCheckboxIpt = document.getElementsByName("configCheckboxIpt");
    for (let i = 0; i < configCheckboxIpt.length; i++) {
      if (configCheckboxIpt[i].checked === false) {
        configCheckboxIpt[i].checked = true;
      }
    }
  } else {
    alert("nop");
  }
}

function desselecionarIptRadioPt() {
  let pontos = document.getElementsByName("pontos");
  for (let i = 0; i < pontos.length; i++) {
    if (pontos[i].checked) {
      pontos[i].checked = false;
    }
  }
  if (document.getElementsByName("configCheckboxIpt") != undefined) {
    const configCheckboxIpt = document.getElementsByName("configCheckboxIpt");
    for (let i = 0; i < configCheckboxIpt.length; i++) {
      if (configCheckboxIpt[i].checked) {
        configCheckboxIpt[i].checked = false;
      }
    }
  }
}

let msgConfig = "";
function exibirConfig(param) {
  const resultadoConfigDiv = document.getElementById("resultadoConfigDiv");
  removerElementosFilhos("resultadoConfigDiv");

  let iptValorOnt = [
    "  > BLINDING OPTIONS: LAN 1 ATÉ LAN 4 > HAB / SSID 1 > HAB / SSID 5 > HAB",
    "  > NAT: FULL CONE",
    "  > ROUTE: IPV4 E IPV6 PADRONIZADOS",
    "  > UPNP:HAB",
    "  > IPV6: DES",
    "  > CRIPTOGRAFIA: HÍBRIDA",
    "  > 2.4 CANAL: FIXADO >> AUTO",
    "  > 2.4G LARGURA: 20MHZ",
    "  > 5G CANAL: FIXADO >> AUTO",
    "  > 5G LARGURA: 40MHZ",
    "  > DNS: WSNET >> 8.8.8.8 / 8.8.4.4",
    "  > TIME: SINCRONIZADO",
    "  > ONT REINICIADA",
  ];
  let iMaxValueOnt = [
    "BLINDING OPTIONS",
    "NAT",
    "ROUTE",
    "UPNP",
    "IPV6",
    "CRIPTOGRAFIA",
    "2.4 CANAL",
    "2.4 LARGURA",
    "5G CANAL",
    "5G LARGURA",
    "DNS",
    "TIME",
    "REINÍCIO",
  ];

  // Greatek
  let iptValorGreatek = [
    "  > TX BEAMFORMING: HAB",
    "  > LDPC: HAB",
    "  > STBC: HAB",
    "  > BG PROTEÇÃO: HAB",
    "  > QOS: HAB",
    "  > UPNP:HAB",
    "  > IPV6: DES",
    "  > CRIPTOGRAFIA: HÍBRIDA",
    "  > 2.4 CANAL: FIXADO >> AUTO",
    "  > 2.4G LARGURA: 20MHZ",
    "  > 5G CANAL: FIXADO >> AUTO",
    "  > 5G LARGURA: 40MHZ",
    "  > DNS: WSNET >> 8.8.8.8 / 8.8.4.4",
    "  > TIME: SINCRONIZADO",
    "  > ROTEADOR E ONU REINICIADOS",
  ];
  let iMaxValueGreatek = [
    "TX BEAMFORMING",
    "LDPC",
    "STBC",
    "BG PROTEÇÃO",
    "QOS",
    "UPNP",
    "IPV6",
    "CRIPTOGRAFIA",
    "2.4 CANAL",
    "2.4 LARGURA",
    "5G CANAL",
    "5G LARGURA",
    "DNS",
    "TIME",
    "REINÍCIO",
  ];

  // Outros
  let iptValorOutros = [
    "  > UPNP:HAB",
    "  > IPV6: DES",
    "  > CRIPTOGRAFIA: HÍBRIDA",
    "  > 2.4 CANAL: FIXADO >> AUTO",
    "  > 2.4G LARGURA: 20MHZ",
    "  > 2.4G INTERVALO: CURTO >> LONGO",
    "  > 5G CANAL: FIXADO >> AUTO",
    "  > 5G LARGURA: 40MHZ",
    "  > 5G INTERVALO: CURTO >> LONGO",
    "  > DNS: WSNET >> 8.8.8.8 / 8.8.4.4",
    "  > TIME: SINCRONIZADO",
    "  > WPS: DES",
    "  > LINK+: DES",
    "  > ROTEADOR E ONU REINICIADOS",
  ];
  let iMaxValueOutros = [
    "UPNP",
    "IPV6",
    "CRIPTOGRAFIA",
    "2.4 CANAL",
    "2.4 LARGURA",
    "2.4 INTERVALO",
    "5G CANAL",
    "5G LARGURA",
    "5G INTERVALO",
    "DNS",
    "TIME",
    "WPS",
    "LINK+",
    "REINÍCIO",
  ];

  let iMaxValue = null;
  let iptValor = null;

  switch (param) {
    case 1:
      iMaxValue = iMaxValueOnt;
      iptValor = iptValorOnt;
      btnDrop.style.display = "none";
      btnConfigGreatek.style.display = "none";

      btnConfigOutros.style.display = "none";
      if (btnConfigOnt.ariaValueText == "ativado") {
        btnConfigOnt.ariaValueText = "";
        btnDrop.style.display = "flex";
        btnConfigGreatek.style.display = "flex";
        btnConfigOutros.style.display = "flex";
        resultadoConfigDiv.style.display = "none";
        menuRoteadorSelecionado = 0;
      } else {
        btnConfigOnt.ariaValueText = "ativado";
        menuRoteadorSelecionado = 1;
      }
      break;
    case 2:
      iMaxValue = iMaxValueGreatek;
      iptValor = iptValorGreatek;
      btnDrop.style.display = "none";
      btnConfigOnt.style.display = "none";
      btnConfigOutros.style.display = "none";
      if (btnConfigGreatek.ariaValueText == "ativado") {
        btnConfigGreatek.ariaValueText = "";
        btnDrop.style.display = "flex";
        btnConfigOnt.style.display = "flex";
        btnConfigOutros.style.display = "flex";
        resultadoConfigDiv.style.display = "none";
        menuRoteadorSelecionado = 0;
      } else {
        btnConfigGreatek.ariaValueText = "ativado";
        menuRoteadorSelecionado = 2;
      }
      break;
    case 3:
      iMaxValue = iMaxValueOutros;
      iptValor = iptValorOutros;
      btnDrop.style.display = "none";
      btnConfigGreatek.style.display = "none";
      btnConfigOnt.style.display = "none";
      if (btnConfigOutros.ariaValueText == "ativado") {
        btnConfigOutros.ariaValueText = "";
        btnDrop.style.display = "flex";
        btnConfigOnt.style.display = "flex";
        btnConfigGreatek.style.display = "flex";
        resultadoConfigDiv.style.display = "none";
        menuRoteadorSelecionado = 0;
      } else {
        btnConfigOutros.ariaValueText = "ativado";
        menuRoteadorSelecionado = 3;
      }
      break;
    default:
      console.log("Valor do parâmetro do roteador não encontrado.");
      break;
  }
  if (
    btnConfigOnt.ariaValueText == "ativado" ||
    btnConfigGreatek.ariaValueText == "ativado" ||
    btnConfigOutros.ariaValueText == "ativado"
  ) {
    for (let i = 0; i < iMaxValue.length; i++) {
      const radioPt = document.querySelector('input[name="pontos"]:checked');
      // Span
      let elementSpan = document.createElement("span");
      //elementSpan.className("configCheckboxDiv");
      elementSpan.setAttribute("class", "configCheckboxSpan");

      // Input
      let elementIpt = document.createElement("input");
      elementIpt.type = "checkbox";
      elementIpt.setAttribute("name", "configCheckboxIpt");
      elementIpt.setAttribute("id", "configCheckboxIpt" + i);

      if (
        iptValor[i] == "  > ROTEADOR E ONU REINICIADOS" &&
        radioPt.value != "- configurações realizadas no 1º ponto:"
      ) {
        elementIpt.value = "ROTEADOR REINICIADO";
      } else {
        elementIpt.value = iptValor[i];
      }

      // Label
      let elementLbl = document.createElement("label");
      elementLbl.setAttribute("name", "configCheckboxLbl");
      elementLbl.setAttribute("for", "configCheckboxIpt" + i);

      elementSpan.appendChild(elementIpt);
      elementSpan.appendChild(elementLbl);
      elementLbl.textContent = iMaxValue[i];
      resultadoConfigDiv.appendChild(elementSpan);
    }
    resultadoConfigDiv.style.display = "grid";
  }
}

function montarMensagem() {
  // Verificando a seleção dos radios (pontos adicionais)
  const pontos = document.getElementsByName("pontos");
  for (let i = 0; i < pontos.length; i++) {
    if (pontos[i].checked) {
      montandoMsg.push("\n" + pontos[i].value);
    }
  }

  // Verificando a seleção da checkbox das configurações
  const configCheckboxIpt = document.getElementsByName("configCheckboxIpt");
  for (let i = 0; i < configCheckboxIpt.length; i++) {
    if (configCheckboxIpt[i].checked) {
      montandoMsg.push("\n" + configCheckboxIpt[i].value);
    }
  }
}

function copiarConfig() {
  if (verificarMensagemVazia()) {
    montarMensagem();

    let msgConfigPronta = "";
    0;
    for (let i = 0; i < montandoMsg.length; i++) {
      msgConfigPronta += montandoMsg[i];
    }
    while (montandoMsg.length > 0) {
      montandoMsg.shift();
    }

    desselecionarIptRadioPt();
    let dropdownRoteadoresContentDiv = document.getElementById(
      "dropdownRoteadoresContentDiv"
    );
    let resultadoConfigDiv = document.getElementById("resultadoConfigDiv");
    let btnDrop = document.getElementById("btnDrop");
    btnDrop.style.display = "flex";
    resultadoConfigDiv.style.display = "none";
    exibirConfig(menuRoteadorSelecionado);
    navigator.clipboard.writeText(msgConfigPronta);
    mostraImagem(msgCopiado);
  }
}

function adicionarConfigPontoAdicional() {
  if (verificarMensagemVazia()) {
    let adiocionarPtIcon = document.getElementById("adiocionarPtIcon");

    // Mudando a cor do icon
    adiocionarPtIcon.classList.toggle("adiocionarPtIcon2");
    setTimeout(() => {
      adiocionarPtIcon.classList.toggle("adiocionarPtIcon2");
    }, 800);

    // salvando as configurações selecionadas na variavel
    montarMensagem();

    //Remove as checkbox de configuração do roteador  e oculta a sua div
    removerElementosFilhos("resultadoConfigDiv");
    let dropdownRoteadoresContentDiv = document.getElementById(
      "dropdownRoteadoresContentDiv"
    );
    let resultadoConfigDiv = document.getElementById("resultadoConfigDiv");
    let btnDrop = document.getElementById("btnDrop");
    btnDrop.style.display = "flex";
    resultadoConfigDiv.style.display = "none";
    exibirConfig(menuRoteadorSelecionado);

    // Seleciona o próximo input radio dos pontos adiconais
    let pontos = document.getElementsByName("pontos");
    for (let i = 0; i < pontos.length; i++) {
      if (pontos[i].checked) {
        pontos[i].checked = false; // Desmarca o atual

        if (pontos[i + 1]) {
          // Verifica se o próximo existe
          pontos[i + 1].checked = true; // Marca o próximo
        }
        break; // Sai do loop ao encontrar o item marcado
      }
    }
  }
}

function verificarMensagemVazia() {
  let verificadorIpt = false;

  const pontos = document.getElementsByName("pontos");
  const configCheckboxIpt = document.getElementsByName("configCheckboxIpt");

  for (let i = 0; i < pontos.length; i++) {
    if (montandoMsg.length > 0) {
      verificadorIpt = true;
    }
    if (
      pontos[i].checked &&
      (configCheckboxIpt[i].checked ||
        configCheckboxIpt[i].checked != undefined)
    ) {
      verificadorIpt = true;
    }
  }

  if (verificadorIpt) {
    return true;
  } else {
    alert("Não é possível copiar. Selecione uma configuração.");
    return false;
  }
}

const configuracoesSection = document.getElementById("configuracoesSection");

window.onclick = function (event) {
  if (
    event.target.matches(".bg-img-animado") ||
    event.target.matches(".container") ||
    event.target.matches(".theme") ||
    event.target.matches(".title") ||
    event.target.matches("h2")
  ) {
    configuracoesSection.style.display = "none";
  }
};

// TRABALHANDO COM CACHE PARA ARMANEZAR INFORMAÇÕES DE AVISOS
// Manipulando a seleção de assunto para criação de novo avisa da DOM
const escolhaAssuntoDropdownButton = document.getElementById(
  "escolhaAssuntoDropdownButton"
);
const assuntoOptionDropdownMenu = document.getElementById(
  "assuntoOptionDropdownMenu"
);
const optionAssunto = document.querySelectorAll(".optionAssunto");
let assuntoEscolhido = "";

// Alternar visibilidade do dropdown ao clicar no botão
escolhaAssuntoDropdownButton.addEventListener("click", () => {
  assuntoOptionDropdownMenu.classList.toggle("active");
});

// Selecionar opção e esconder dropdown
optionAssunto.forEach((option) => {
  option.addEventListener("click", (event) => {
    escolhaAssuntoDropdownButton.textContent = event.target.textContent;
    assuntoOptionDropdownMenu.classList.remove("active");
    assuntoEscolhido = option.textContent.valueOf();
  });
});

// Fechar dropdown ao clicar fora dele
document.addEventListener("click", (event) => {
  if (
    !escolhaAssuntoDropdownButton.contains(event.target) &&
    !assuntoOptionDropdownMenu.contains(event.target)
  ) {
    assuntoOptionDropdownMenu.classList.remove("active");
  }
});

function abrirAvisos() {
  efeitoAlternarDisplay("overlay", "block", true);
  efeitoAlternarDisplay("avisosSection", "flex", true);
  recuperarAvisos();
}

function voltarTelaAvisos() {
  if (txtAreaNovaMensagemAvisos) {
    txtAreaNovaMensagemAvisos.value = ""; // Remove todo o conteúdo
  }
  assuntoEscolhido = "";
  efeitoAlternarDisplay("mainContentAvisos", "block", false);
  efeitoAlternarDisplay("navbarAvisosDoMainContent", "flex", false);
  efeitoAlternarDisplay("navBarAbaNovaMensagemAvisos", "none", false);
  efeitoAlternarDisplay("abaNovaMensagemAvisos", "none", false);

  escolhaAssuntoDropdownButton.textContent = "Escolha um assunto";
}

function adicionarNovoAviso() {
  efeitoAlternarDisplay("mainContentAvisos", "none", false);
  efeitoAlternarDisplay("navbarAvisosDoMainContent", "none", false);
  efeitoAlternarDisplay("navBarAbaNovaMensagemAvisos", "flex", false);
  efeitoAlternarDisplay("abaNovaMensagemAvisos", "flex", false);
  /*

  */
}

// CRIANDO O BANCO DE DADOS E SUAS RESPECTIVAS TABELAS

const request = indexedDB.open("MensagensDeAvisoBD", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;

  // Criando uma única store com chave primária "id"
  if (!db.objectStoreNames.contains("avisos")) {
    db.createObjectStore("avisos", { keyPath: "id" });
  }
};

request.onsuccess = function (event) {
  console.log("Banco de dados IndexedDB pronto!");
};

// INSERINDO NOVOS DADOS
//salvarAviso("assuntoteste","mensagemteste",new Date().toLocaleString("pt-BR"));

function salvarAviso() {
  const dbRequest = indexedDB.open("MensagensDeAvisoBD", 1);
  const txtAreaNovaMensagemAvisos = document.getElementById(
    "txtAreaNovaMensagemAvisos"
  );
  const novoAviso = txtAreaNovaMensagemAvisos.value;
  const dataAtual = new Date().toLocaleString("pt-BR");

  if (novoAviso === "" || assuntoEscolhido === "") {
    alert("O aviso não pode ficar vazio. Tente novamente.");
    return;
  }

  dbRequest.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction(["avisos"], "readwrite");
    const store = transaction.objectStore("avisos");

    const countRequest = store.count(); // Conta o número de registros
    countRequest.onsuccess = function () {
      const novoId = countRequest.result + 1; // Próximo ID

      // Criar o objeto de aviso com o novo ID
      const aviso = { id: novoId, assuntoEscolhido, novoAviso, dataAtual };
      store.put(aviso); // Salva o aviso com o novo ID
      voltarTelaAvisos();
      recuperarAvisos();
      assuntoEscolhido = "";

      // Criando uma animação para ilutrar que foi inserido com sucesso
      const msgCopiado = document.createElement("span");
      msgCopiado.id = "msgCopiado";
      let msgCopiadoText = document.createElement("p");
      msgCopiadoText.textContent = "Aviso inserido!";
      msgCopiado.appendChild(msgCopiadoText);
      mostraImagem(msgCopiado);

      console.log("Aviso salvo:", aviso);
    };

    countRequest.onerror = function () {
      console.error("Erro ao contar os registros.");
    };
  };

  dbRequest.onerror = function (event) {
    console.error("Erro ao abrir o banco de dados:", event.target.error);
  };
}

// Exemplo de inserção

// BUSCANDO DADOS
function recuperarAvisos() {
  removerElementosFilhos("mainContentAvisos"); // Limpa os avisos existentes na tela
  const mainContentAvisos = document.getElementById("mainContentAvisos");

  const dbRequest = indexedDB.open("MensagensDeAvisoBD", 1);

  dbRequest.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction(["avisos"], "readonly");
    const store = transaction.objectStore("avisos");

    // 🔹 Verifica a quantidade de registros antes de percorrer
    const countRequest = store.count();
    countRequest.onsuccess = function () {
      if (countRequest.result < 1) {
        const elemento = document.createElement("div");
        elemento.textContent = "Sem avisos hoje.";
        mainContentAvisos.appendChild(elemento);
        console.log("🔹 Nenhum aviso encontrado.");
        return; // Se não houver avisos, já interrompe a execução
      }

      // Aqui, vamos usar a função openCursor com a chave de ordenação correta
      const cursorRequest = store.openCursor(null, "prev"); // "prev" ordena do mais recente para o mais antigo

      cursorRequest.onsuccess = function (event) {
        const cursor = event.target.result;
        if (cursor) {
          const divContainer = document.createElement("div");
          divContainer.className = "mensagemMainContentAvisos";

          const divHeaderMsg = document.createElement("div");
          divHeaderMsg.className = "mensagemHeadMainContentAvisos";

          const divHeaderAssunto = document.createElement("div");
          divHeaderAssunto.innerText = cursor.value.assuntoEscolhido;

          const divHeaderDate = document.createElement("div");
          divHeaderDate.className = "dateDivAviso";

          const paragDate = document.createElement("p");
          // paragMsg.style.wordWrap = "break-word"
          paragDate.innerText = cursor.value.dataAtual;
          divHeaderDate.appendChild(paragDate);

          const iconDelete = document.createElement("i");
          iconDelete.ariaValueText = cursor.value.id;
          iconDelete.className = "iconMsgDeleteAviso fa-solid fa-square-xmark";
          divHeaderDate.appendChild(iconDelete);

          const divMsg = document.createElement("div");

          const paragMsg = document.createElement("p");
          //paragMsg.style.wordWrap = "break-word"
          paragMsg.innerText = cursor.value.novoAviso;

          // Monta a estrutura
          divHeaderMsg.appendChild(divHeaderAssunto);
          divHeaderMsg.appendChild(divHeaderDate);
          divContainer.appendChild(divHeaderMsg);
          divMsg.appendChild(paragMsg);
          divContainer.appendChild(divMsg);

          // Insere o novo aviso no início da lista na DOM
          mainContentAvisos.insertBefore(
            divContainer,
            mainContentAvisos.firstChild
          );

          cursor.continue(); // Move para o próximo registro
        } else {
          console.log("🔹 Fim da lista de avisos.");
        }
      };

      cursorRequest.onerror = function () {
        console.error("❌ Erro ao recuperar avisos.");
      };
    };
  };

  dbRequest.onerror = function (event) {
    console.error("❌ Erro ao abrir o banco de dados:", event.target.error);
  };
}

//

function verificarDados() {
  const dbRequest = indexedDB.open("MensagensDeAvisoBD", 1);

  dbRequest.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction(["avisos"], "readonly");
    const store = transaction.objectStore("avisos");

    const getAllRequest = store.getAll(); // Obtém todos os registros

    getAllRequest.onsuccess = function () {
      console.log("Registros salvos no IndexedDB:", getAllRequest.result);
    };

    getAllRequest.onerror = function () {
      console.error("Erro ao buscar os registros.");
    };
  };

  dbRequest.onerror = function (event) {
    console.error("Erro ao abrir o banco de dados:", event.target.error);
  };
}

// Chame essa função no console do navegador para verificar os dados
verificarDados();

// EXCLUINDO
function excluirAviso(id) {
  const dbRequest = indexedDB.open("MensagensDeAvisoBD", 1);

  dbRequest.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction(["avisos"], "readwrite");
    const store = transaction.objectStore("avisos");

    const deleteRequest = store.delete(Number(id)); // Converte ID para número antes de excluir

    deleteRequest.onsuccess = function () {
      console.log(`✅ Aviso com id ${id} excluído com sucesso.`);
      recuperarAvisos(); // Atualiza a lista após excluir
    };

    deleteRequest.onerror = function () {
      console.error(`❌ Erro ao excluir aviso com id ${id}.`);
    };

    transaction.oncomplete = function () {
      console.log("🔄 Transação de exclusão finalizada.");
    };
  };

  dbRequest.onerror = function (event) {
    console.error("❌ Erro ao abrir o banco de dados:", event.target.error);
  };
}


function excluirTodosAvisos() {
  return new Promise((resolve, reject) => {
    const dbRequest = indexedDB.open("MensagensDeAvisoBD", 1);

    dbRequest.onsuccess = function (event) {
      const db = event.target.result;
      const transaction = db.transaction(["avisos"], "readwrite");
      const store = transaction.objectStore("avisos");

      const cursorRequest = store.openCursor();

      cursorRequest.onsuccess = function (event) {
        const cursor = event.target.result;
        if (cursor) {
          store.delete(cursor.key); // Exclui cada registro
          cursor.continue(); // Continua com o próximo registro
        } else {
          console.log("✅ Todos os avisos foram excluídos.");
          resolve(); // Resolve a Promise quando todos os avisos forem excluídos
        }
      };

      cursorRequest.onerror = function () {
        console.error("❌ Erro ao excluir avisos.");
        reject("Erro ao excluir avisos."); // Rejeita a Promise em caso de erro
      };
    };

    dbRequest.onerror = function (event) {
      console.error("❌ Erro ao abrir o banco de dados:", event.target.error);
      reject("Erro ao abrir o banco de dados."); // Rejeita a Promise se não conseguir abrir o banco
    };
  });
}

const iconExcluirTodosAvisos = document.getElementById(
  "iconExcluirTodosAvisos"
);

iconExcluirTodosAvisos.addEventListener("click", async () => {
  try {
    await excluirTodosAvisos(); // Aguarda a exclusão antes de chamar recuperarAvisos
    recuperarAvisos(); // Chama recuperarAvisos após exclusão
  } catch (error) {
    console.error("❌ Erro durante a exclusão dos avisos:", error);
  }
});

const iconRefreshAvisos = document.getElementById("iconRefreshAvisos");
let rotation = 0; // Variável para armazenar a rotação atual

iconRefreshAvisos.addEventListener("click", () => {
  rotation += 360; // Adiciona mais 360° a cada clique
  iconRefreshAvisos.style.transition = "transform 0.5s ease-in-out"; // Transição suave
  iconRefreshAvisos.style.transform = `rotate(${rotation}deg)`;
  recuperarAvisos();
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("iconMsgDeleteAviso")) {
    const idAviso = event.target.getAttribute("aria-valuetext"); // Obtém o valor do atributo
    console.log("Clicado para excluir ID:", idAviso);
    excluirAviso(idAviso);
  }
});
