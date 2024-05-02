const title = document.querySelector("h1")
const description = document.querySelector("#description")
const articles = document.querySelector(".articles")

const url = "https://yanisdahmane.github.io/LaToileAvril/json/salma.json"
fetch(url)
  .then(response => response.json())
  .then(data => {
    title.innerText = data.nomCommercial;
    description.innerText = data.phraseAccroche;
    const produits = data.produits;
    const temoignages = data.temoignages;

    produits.forEach(produit => {
      console.log(produit)

      const article = document.createElement("div")
      article.classList.add("article")

      const h2 = document.createElement("h2")
      h2.innerText = produit.title
      article.appendChild(h2)

      const p = document.createElement("p")
      p.innerText = produit.description
      article.appendChild(p)

      const img = document.createElement("img")
      img.src = produit.image
      article.appendChild(img)

      articles.appendChild(article)
    })
    
    temoignages.forEach(temoignage => {
      console.log(temoignage)

      const article = document.createElement("div")
      article.classList.add("article")

      const h2 = document.createElement("h2")
      h2.innerText = temoignage.prenom
      article.appendChild(h2)
      
      const h3 = document.createElement("h3")
      h3.innerText = temoignage.typePrestation
      article.appendChild(h3)

      const p = document.createElement("p")
      p.innerText = temoignage.commentaire
      article.appendChild(p)

      articles.appendChild(article)
    })
  })

