const btns = document.querySelectorAll(".tab-btn ");
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content") 
/*Recordar que cuando lo hice por primera vez me decia que article y btn
no eran una funcion porque me olvide de poner en ambos casos el querySelectorAll 
*/

about.addEventListener("click", function (e) {
    const id = e.target.dataset.id // E.target es el elemento que dispara un evento, pero no necesariamente el que se usó para definirlo
  if (id) {
     btns.forEach(function (btn){
        btn.classList.remove("active") //Removemos la clase active
        e.target.classList.add("active") // Se la damos al que clickeamos
     })
     articles.forEach(function (article){
        article.classList.remove("active") //Repetimos proceso
        e.target.classList.add("active")
     })
     const element = document.getElementById(id) // Con esto hacemos que el texto se quede al cambiar de articulo
     element.classList.add("active")
    }
})

//Es super sencillo, le asignamos a id el event.target para reconocer la propiedad sobre la que interactuamos y realizamos el mismo proceso para los btns y articles. Al final tambien le damos al id y la clase active