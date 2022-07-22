document.addEventListener('keyup', e => {

    if (e.key === "Escape") {
        e.target.value=""
    }
  document.querySelectorAll(".articulo").forEach(deportes => {
    deportes.textContent.toLowerCase().includes(e.target.value.toLowerCase())
    ? deportes.classList.remove("filtro")
    : deportes.classList.add("filtro")
  })
    })


/*Errores mientras lo hacia:
-Tengo que usar QuerySelectorAll para poder usar el forEach. Si no no estoy iterando nada
-El toLowerCase() es para compararlo en minusculas porque si no se vuelve muy especifico.
*/
