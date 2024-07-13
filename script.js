document.querySelectorAll(".title").forEach((item) => {
  item.addEventListener("click", (event) => {
    const phrase = event.target.getAttribute("data-phrase");
    navigator.clipboard
      .writeText(phrase)
      .then(() => {
        alert("Frase copiada: " + phrase);
      })
      .catch((err) => {
        console.error("Erro ao copiar frase: ", err);
      });
  });
});
