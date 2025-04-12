function toggleMode() {
  const body = document.body
  const img = document.querySelector("#profile img")
  body.classList.toggle("light")

  const isLight = body.classList.contains("light")

  // Troca imagem
  img.setAttribute(
    "src",
    isLight ? "assets/assets/avatar-light.png" : "assets/assets/avatar.png"
  )

  // Salva tema
  localStorage.setItem("theme", isLight ? "light" : "dark")
}

// Aplica tema salvo ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "light") {
    document.body.classList.add("light")
    document
      .querySelector("#profile img")
      .setAttribute("src", "assets/assets/avatar-light.png")
  }
})
