const msgCopiado = document.getElementById("msgCopiado");
document.querySelectorAll(".title").forEach((item) => {
  item.addEventListener("click", (event) => {
    const phrase = event.target.getAttribute("data-phrase");
    navigator.clipboard
      .writeText(phrase)
      .then(() => {
        mostraImagem(msgCopiado);
      })
      .catch((err) => {
        console.error("Erro ao copiar frase: ", err);
      });
  });
});

function mostraImagem(element) {
  element.style.display = "flex";
  setTimeout(function () {
    if (element.style.display === "flex") element.style.display = "none";
  }, 3000);
}

function abrirConfiguracoes(){
  const configuracoesSection = document.getElementById('configuracoesSection')

  configuracoesSection.style.display = 'flex';
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


let msgConfig = "";
function exibirConfig(param) {
  const resultadoConfigDiv = document.getElementById("resultadoConfigDiv");
  removerElementosFilhos("resultadoConfigDiv");

  let iptValorOnt = [
    "BLINDING OPTIONS: LAN 1 ATÉ LAN 4 > HAB / SSID 1 > HAB / SSID 5 > HAB",
    "NAT: FULL CONE",
    "ROUTE: IPV4 E IPV6 PADRONIZADOS",
    "UPNP:HAB",
    "IPV6: DES",
    "CRIPTOGRAFIA: HÍBRIDA",
    "2.4 CANAL: FIXADO >> AUTO",
    "2.4G LARGURA: 20MHZ",
    "5G CANAL: FIXADO >> AUTO",
    "5G LARGURA: 40MHZ",
    "DNS: WSNET >> 8.8.8.8 / 8.8.4.4",
    "TIME: SINCRONIZADO",
    "ONT REINICIADA",
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
    "TX BEAMFORMING: HAB",
    "LDPC: HAB",
    "STBC: HAB",
    "BG PROTEÇÃO: HAB",
    "QOS: HAB",
    "UPNP:HAB",
    "IPV6: DES",
    "CRIPTOGRAFIA: HÍBRIDA",
    "2.4 CANAL: FIXADO >> AUTO",
    "2.4G LARGURA: 20MHZ",
    "5G CANAL: FIXADO >> AUTO",
    "5G LARGURA: 40MHZ",
    "DNS: WSNET >> 8.8.8.8 / 8.8.4.4",
    "TIME: SINCRONIZADO",
    "ROTEADOR E ONU REINICIADOS",
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
    "UPNP:HAB",
    "IPV6: DES",
    "CRIPTOGRAFIA: HÍBRIDA",
    "2.4 CANAL: FIXADO >> AUTO",
    "2.4G LARGURA: 20MHZ",
    "5G CANAL: FIXADO >> AUTO",
    "5G LARGURA: 40MHZ",
    "DNS: WSNET >> 8.8.8.8 / 8.8.4.4",
    "TIME: SINCRONIZADO",
    "WPS: DES",
    "LINK+: DES",
    "ROTEADOR E ONU REINICIADOS",
  ];
  let iMaxValueOutros = [
    "UPNP",
    "IPV6",
    "CRIPTOGRAFIA",
    "2.4 CANAL",
    "2.4 LARGURA",
    "5G CANAL",
    "5G LARGURA",
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
      } else {
        btnConfigOnt.ariaValueText = "ativado";
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
      } else {
        btnConfigGreatek.ariaValueText = "ativado";
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
      } else {
        btnConfigOutros.ariaValueText = "ativado";
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
      // Span
      let elementSpan = document.createElement("span");
      //elementSpan.className("configCheckboxDiv");
      elementSpan.setAttribute("class", "configCheckboxSpan");

      // Input
      let elementIpt = document.createElement("input");
      elementIpt.type = "checkbox";
      elementIpt.setAttribute("name", "configCheckboxIpt");
      elementIpt.setAttribute("id", "configCheckboxIpt" + i);
      elementIpt.value = iptValor[i];

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

function copiarConfig() {
  let montandoMsg = [];

  // Verificando a seleção dos pontos adicionais
  const pontos = document.getElementsByName("pontos");
  for (let i = 0; i < pontos.length; i++) {
    if (pontos[i].checked) {
      montandoMsg.push(pontos[i].value);
    }
  }

  // Verificando a seleção da checkbox das configurações
  const configCheckboxIpt = document.getElementsByName("configCheckboxIpt");
  for (let i = 0; i < configCheckboxIpt.length; i++) {
    if (configCheckboxIpt[i].checked) {
      montandoMsg.push("\n" + configCheckboxIpt[i].value);
    }
  }

  let msgConfigPronta = "";
 for (let i = 0; i < montandoMsg.length; i++) {
    msgConfigPronta += montandoMsg[i];
  
 }
  console.log(msgConfigPronta);
  navigator.clipboard.writeText(msgConfigPronta);
  mostraImagem(msgCopiado);

}

const configuracoesSection = document.getElementById("configuracoesSection");

window.onclick = function(event) {
  if (event.target.matches(".bg-img-animado")) {
    configuracoesSection.style.display = 'none';    
  }
}