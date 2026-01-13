function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a imagem
  const img = document.querySelector("#profile img")

  // se tiver a classe light, trocar a imagem
  if (html.classList.contains('light')) {
    img.setAttribute("src", "./assents/avatarli.jpeg")
  } else {
    img.setAttribute("src", "./assents/foto.jpeg")
  }
}