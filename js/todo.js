const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list')

const TODOS_KEY = 'todos'

let toDos = []

function saveToDos() {
  // toDos 배열 문자열로 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
  saveToDos()
}

function paintToDo(newTodo) {
  // newTodo에 todo object가 들어옴
  const li = document.createElement('li')
  li.id = newTodo.id // 각각의 li를 id로 구분
  const span = document.createElement('span')
  span.classList.add('todo')
  span.innerText = newTodo.text
  const button = document.createElement('button')
  button.innerText = 'X'
  button.addEventListener('click', deleteToDo)

  li.appendChild(span) // li 아래에 span 넣기
  li.appendChild(button)
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newToDo = toDoInput.value
  toDoInput.value = '' // todo 입력하고 엔터 누르면 input 안의 값 비우기

  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  }
  toDos.push(newTodoObj) // todolist 배열에 저장
  paintToDo(newTodoObj)
  saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

// 새로고침 해도 이전 todolist 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY) // string
if (savedToDos) {
  const parsedTodos = JSON.parse(savedToDos) // array

  // 이전 todo localstorage에 유지
  toDos = parsedTodos
  // 이전 todos 화면에 painting
  parsedTodos.forEach(paintToDo) // 각 요소가 object가 됨
}

// 8.0부터 보기
