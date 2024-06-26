function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if(html.classList.contains("light")){
    img.setAttribute("src", "./assets/AvatarDia.png")
    img.setAttribute("alt","Avatar Belmonte - O mais lindo!")
  } else{
    img.setAttribute("src", "./assets/SNKBelAvatar.png")
    img.setAttribute("alt", "Avatar SNKBel - Naturo com logo da SNACKCLUB no ombro")
  }

  
}
