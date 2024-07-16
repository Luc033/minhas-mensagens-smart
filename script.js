const msgCopiado = document.getElementById('msgCopiado');
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

function mostraImagem(element){
  element.style.display = 'flex';
  setTimeout(function() {
    if(element.style.display === 'flex')
    element.style.display = 'none';
   
}, 3000);
}