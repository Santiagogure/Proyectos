(function(d) {
    let tabs = Array.prototype.slice.apply(document.getElementsByClassName("tabs_item")); 
    let panels = Array.prototype.slice.apply(document.getElementsByClassName("panel-items"));

    //Usamos el Array.prototype.slice.apply() para convertirlo a un array y poder usar el indexOf()

    d.getElementById('tabs').addEventListener("click", e => {
        if (e.target.classList.contains('tabs_item')) {

            let i = tabs.indexOf(e.target); // A la variable i le asignamos el indice del elemento
            tabs.map(tab => tab.classList.remove('active')) //Quitamos la clase active a todos los elementos
            tabs[i].classList.add('active') //Se la damos al que seleccionemos y lo reconoce por el indice

            panels.map(panel => panel.classList.remove('active')) //Repetimos proceso 
            panels[i].classList.add('active')
        }
    })
})(document) // ?




