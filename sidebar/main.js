const btnToggle = document.querySelector('.toggle-btn')
const sidebar = document.getElementById("sidebar")

btnToggle.addEventListener('click', function() {
    sidebar.classList.toggle("active")
})