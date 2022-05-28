const contador = document.querySelector(".contador");
const input = document.querySelector("#input");


input.addEventListener("keyup",() =>{
  contador.innerHTML = input.value.length;
})