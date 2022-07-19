//Fechas

const dateNumber = document.getElementById("dateNumber")
const dateMonth = document.getElementById("dateMonth")
const dateYear = document.getElementById("dateYear")
const dateText = document.getElementById("dateText")

//Container 
const tasksContainer = document.getElementById("task-container")

const setDate = () => {
    const date = new Date()
    dateNumber.textContent = date.toLocaleString('es', {day: "numeric"})
    dateMonth.textContent = date.toLocaleString('es', {month: "short"})
    dateText.textContent = date.toLocaleString('es', {weekday: "long"})
    dateYear.textContent = date.toLocaleString('es', {year: "numeric"})
}


const addNewTask = event => {
  event.preventDefault()
  const {value} = event.target.taskText
  if(!value) return
  const task = document.createElement('div')
  task.classList.add('task', 'roundBorder')
  task.addEventListener('click', changeTaskState)
  task.textContent = value
  tasksContainer.prepend(task)
  event.target.reset()
}

const changeTaskState = event => {
  event.target.classList.toggle('done')
}



const order = () => {
  const done = []
  const toDo = []
   tasksContainer.childNodes.forEach(el => {
    el.classList.contains('done') ? done.push(el) : toDo.push(el)
   })
   if (!toDo.length) {
     alert("Felicidades!!! No hay ninguna tarea por hacer")
   }
   return [...toDo, ...done]
}


const renderOrderedTasks= () => {
   order().forEach(el => tasksContainer.appendChild(el))
}



setDate()
