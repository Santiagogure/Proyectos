
// Info date
const dateNumbers = document.getElementById('dateNumber');
const text = document.getElementById('dateText');
const month = document.getElementById('dateMonth');
const year = document.getElementById('dateyear');

//Task Container
const tasksContainer = document.getElementById('tasksContainer')       

const setDate = () => {              // Esta funcion es para setear la fecha actual
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event => {     //Usuario añada una nueva tarea
    event.preventDefault();     // evitamos que el ** nos lleve a otra pagina
    const {value} = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task); // Hacemos que los elementos se vayan agregando al principio de la lista
    event.target.reset();  //Hacemos que cada vez que el usuario ingrese una tarea, el input se limpia
}

setDate();  

const changeTaskState = event => {
   event.target.classList.toggle('done') // Si no tiene la clase done, se la agregamos, y si la tiene se la sacamos.
}

const order = () => {      // Ordenados las tareas
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el) //Si en la lista de clases del elemento, tiene la string "done" entonces vamos a agregar el elemento
                                                                      // Si no tiene la clase done, vamos a ir al array toDo, y vamos agregar el elemtno al final del array
    })
    return [...toDo, ...done];  //Hacemos un spread, primero del toDo para que las tareas que no estan hechas vayan primero, y las realizadas despues.
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el)) //Llamamos a order, que nos devuelve el array, iteramos el array cada elemento, y lo vamos a agregar al tasksContainer
}
setDate();