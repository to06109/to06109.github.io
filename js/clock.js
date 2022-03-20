const clock = document.querySelector('h2#clock')

function getClock() {
  const date = new Date()
  //string을 문자 두 개로 채우기(00, 01, 02, ...)
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  clock.innerText = `${hours}:${minutes}:${seconds}`
}

// 새로고침 하자마자 한 번 실행
getClock()
setInterval(getClock, 1000)
