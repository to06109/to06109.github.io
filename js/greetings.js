const loginForm = document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input')
const loginButton = loginForm.querySelector('button')

// const link = document.querySelector('a')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(event) {
  // form submiit의 기본동작(새로고침포함) 실행 방지
  event.preventDefault()
  // 폼 제출하면 폼 없애기
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  // username을 h1에 넣어서 보여주기
  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`
  greeting.classList.add('greeting')
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

function handleLinkclick(event) {
  // 링크의 기본동작: 클릭시 링크 페이지로 이동. 이걸 막아보자
  event.preventDefault()
}

// event가 발생할 때 브라우저가 함수를 실행,
// 이때 추가적인 정보를 함수 파라미터에 넣어서 호출함

// link.addEventListener('click', handleLinkclick)

const savedUsername = localStorage.getItem(USERNAME_KEY)
if (savedUsername === null) {
  // Show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  // Show the greetings
  paintGreetings(savedUsername)
}
