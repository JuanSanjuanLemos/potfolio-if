document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = document.getElementById("name").value.split(" ", 1)

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  const boxMessage = document.createElement("div");

  const message = document.createElement("p");
  message.innerHTML = `
    ${firstName},
    sua mensagem foi enviada com sucesso!`;
  boxMessage.appendChild(message);
  boxMessage.classList.add('sucess-message');

  const section = document.getElementById("contact");

  section.insertBefore(boxMessage, document.getElementById("form"));
  
  setTimeout(() => {
    boxMessage.remove();
  }, 3000);
});
