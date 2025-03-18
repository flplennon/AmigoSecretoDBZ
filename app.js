let amigos = [];

function adicionarAmigo() {
  const inputNome = document.getElementById('amigo');
  const nomes = inputNome.value.trim();

  if (nomes === "") {
    alert("Por favor, insira pelo menos um nome!");
    return;
  }

  const nomesArray = nomes.split(",")
    .map(nome => nome.trim().toUpperCase())
    .filter(nome => nome !== "");

  if (nomesArray.length === 0) {
    alert("Por favor, insira pelo menos um nome válido!");
    return;
  }

  amigos.push(...nomesArray);
  atualizarLista();
  inputNome.value = "";
}

function atualizarLista() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  amigos.forEach((nome, index) => {
    
    const item = document.createElement('li');

    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = nome;

    
    const removeButton = document.createElement('button');
    removeButton.className = 'remove-botao';
    
    removeButton.addEventListener('click', () => {
      removerAmigo(index);
    });

    

    
    item.appendChild(nameSpan);
    item.appendChild(removeButton);

    
    listaAmigos.appendChild(item);
  });
}

function removerAmigo(index) {
  amigos.splice(index, 1);
  atualizarLista();
}


function sortearAmigo() {
  if (amigos.length === 0) {
      alert("A lista de amigos está vazia. Você precisa adicionar pelo menos um nome!");	
      return;
  }
  
  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteado];
  
  document.getElementById("resultado").innerHTML = `Guerreiro Z sorteado foi: <strong>${amigoSorteado}</strong>`;
}


function reiniciarSorteio() {
  amigos = [];
  document.getElementById('amigo').value = "";
  document.getElementById('listaAmigos').innerHTML = "";
  document.getElementById('resultado').innerHTML = "";
  alert("Sorteio reiniciado! Agora você pode adicionar novos nomes.");
}

const audio = document.getElementById("musica");
const playPauseBtn = document.getElementById("playPauseBtn");

audio.volume = 0.2; 

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
      audio.play();
      playPauseIcon.src = "assets/pause-icon.png"; 
      playPauseBtn.querySelector("span").textContent = "Pausar Música";
  } else {
      audio.pause();
      playPauseIcon.src = "assets/play-icon.png"; 
      playPauseBtn.querySelector("span").textContent = "Tocar Música";
  }
});