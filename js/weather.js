const API_KEY = '0fe8d0974e55e2e9b3bc04c7b864501b'

function onGeoOk(position) {
  // getCurrentPosition가 user의 위치 object 보내줌
  // -> 위도와 경도 알 수 있음
  const lat = position.coords.latitude
  const lng = position.coords.longitude

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  //위도, 경도 가지고 우리 위치를 알려주는 API 필요 ->  openweathermap

  // 브라우저에 url로 open weather map서버에 요청
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child')
      const city = document.querySelector('#weather span:last-child')

      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
      city.innerText = data.name
    })
}

function onGeoError() {
  alert("Can't find you. No weather for you")
}

// 파라미터 2개: 모든게 잘됐을 때 실행할 함수, 에러 났을 때 실행할 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
