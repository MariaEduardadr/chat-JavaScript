// login elementos
const login = document.querySelector(".login")
const loginForm = login.querySelector(".login__form")
const loginIput = login.querySelector(".login__input")


// chat elements
const chat = document.querySelector(".chat")
const chatForm = chat.querySelector(".chat__form")
const chatInput = chat.querySelector(".chat__input")
const chatMessages = chat.querySelector(".chat__messages")

const colors = [
    "cadetblue",
    "darkgoldenrod",
    "cornflowerblue",
    "darkkhaki",
    "hotpink",
    "gold"
]

const user = { id: "", name: "", color:""};

let websocket;

const getRandomColor = () =>{
    const randomindex = Math.floor(Math.random() * colors.length);
    return colors[randomindex]
}

const processMessage = () => {
    alert("recebemos uma mensagem ")
}

const handleLogin = (event) => {
 event.preventDefault();
 user.id = crypto.randomUUID
 user.name = loginIput.value;
 user.color = getRandomColor();

 login.style.display = "none"
 chat.style;display = "flex"

 websocket = new WebSocket("ws://localhost:8080")
 websocket.onopen = () => websocket.send(`Usuário: ${user.nome} entrou no chat!`);

 console.log(user)

}

loginForm.addEventListener("submit", handleLogin);