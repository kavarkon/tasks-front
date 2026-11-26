
console.log("🐗")
// нужно, чтобы при клике на register отправлялся пост-запрос на бекенд
// в случае ошибки показать пользователю ошибку, в случает успеха сделать редирект

addEventListener("submit", async (event) => {
  event.preventDefault()
  const registerData = Object.fromEntries(new FormData(event.target));

  console.log(registerData)
  if (!isPasswordValid(registerData)) { return console.log("invalid password confirmation") }

  const response = await fetch("https://todo.puorp.ru/api/auth/register", {
    body: JSON.stringify(registerData),
    headers: { 'Content-Type': 'application/json' },
    method: "post",
  })
  console.log(response)

  if (response.status === 201) { 
    console.log("happy path") 
    return window.location.href = "http://localhost:5173/login"
  }

  console.log("error")
})

function isPasswordValid(registerData) {
  return registerData.password === registerData.password_confirmation
}

// 1. указать правильный адрес бекенда
// 2. в случае ошибки делать фон кнопки красным
// 3. в случае успеха перенаправить на страницу логина
// window.location.href = "http://www.w3schools.com"
