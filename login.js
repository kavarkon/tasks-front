console.log("🐗")
// нужно, чтобы при клике на логин отправлялся пост-запрос на бекенд
// в случае ошибки показать пользователю ошибку, в случает успеха сделать редирект

addEventListener("submit", async (event) => {
  event.preventDefault()
  const loginData = Object.fromEntries(new FormData(event.target));

  console.log(loginData)

  const response = await fetch("https://todo.puorp.ru/api/auth/login", {
    body: JSON.stringify(loginData),
    headers: { 'Content-Type': 'application/json' },
    method: "post",
  })
  console.log(response)

  if (response.status === 200) { 
    console.log("happy path")
    return window.location.href = "http://localhost:5173/tasks"
  }

  console.log("error")
})

// 1. указать правильный адрес бекенда
// 2. в случае ошибки делать фон кнопки красным
// 3. в случае успеха перенаправить на страницу задач
