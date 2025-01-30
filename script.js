let montandoMsg = [];
let menuRoteadorSelecionado = 0;

//const msgCopiado = document.getElementById("msgCopiado");
const msgCopiado = document.createElement('span');
msgCopiado.id = 'msgCopiado';

const msgCopiadoText = document.createElement('p');
msgCopiadoText.textContent = 'Copiado com sucesso!'

msgCopiado.appendChild(msgCopiadoText);

document.querySelectorAll(".title").forEach((item) => {
  item.addEventListener("click", (event) => {
    
    if(document.getElementById('configuracoesSection').style.display == "none"){

      
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
  const body = document.getElementsByTagName('body')[0]
  body.appendChild(element)

  element.style.display = "flex";
  setTimeout(function () {
    if (element.style.display === "flex") element.style.display = "none";
  }, 1500);
}

function abrirConfiguracoes() {
  const configuracoesSection = document.getElementById("configuracoesSection");
  configuracoesSection.style.display = "flex";
  dropdownRoteadores()
}

function dropdownRoteadores() {
  document
    .getElementById("dropdownRoteadoresContentDiv")
    .classList.toggle("show");
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

      if(iptValor[i] == "ROTEADOR E ONU REINICIADOS" && radioPt.value != "- configurações realizadas no 1º ponto:"){
        elementIpt.value = "ROTEADOR REINICIADO";
        console.log("Foi patrão: " + radioPt.value + " | Valor do ipt: " + elementIpt.value)
      }else{ 
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
    console.log(montandoMsg);
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
    console.log(montandoMsg);
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
    
        if (pontos[i + 1]) { // Verifica se o próximo existe
          pontos[i + 1].checked = true; // Marca o próximo
        } else {
          console.log('erro'); // Último item, sem próximo
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
    if(montandoMsg.length > 0){
      verificadorIpt = true;

    }
    if (pontos[i].checked &&  (configCheckboxIpt[i].checked || configCheckboxIpt[i].checked != undefined)) {
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
  if (event.target.matches(".bg-img-animado") || event.target.matches(".container") || event.target.matches(".theme") ||  event.target.matches(".title") || event.target.matches("h2") || event.target.matches("configIcon")) {
    configuracoesSection.style.display = "none";
  }
};


// TRABALHANDO COM CACHE PARA ARMANEZAR INFORMAÇÕES DE AVISOS

// Salvando um valor
localStorage.setItem('chave', 'valor armazenado');

// Recuperando um valor
const valor = localStorage.getItem('chave');
console.log("Criando: "+ localStorage.getItem('chave')); // "valor armazenado"

// Removendo um item específico
localStorage.removeItem('chave');

// Limpando todo o localStorage
localStorage.clear();
console.log("Apagando: "+valor); // "valor armazenado"
console.log("localStorage: "+ localStorage.getItem('chave')); // "valor armazenado"
