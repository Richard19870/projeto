
async function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  if (message === '') return;

  const chatBox = document.getElementById('chat-box');

  const userMsg = document.createElement('p');
  userMsg.innerHTML = '<strong>Você:</strong> ' + message;
  chatBox.appendChild(userMsg);
  input.value = '';

  const typingMsg = document.createElement('p');
  typingMsg.innerHTML = '<em>Larissa está digitando...</em>';
  chatBox.appendChild(typingMsg);
  chatBox.scrollTop = chatBox.scrollHeight;

  const keywordsDirect = ['whatsapp', 'zap', 'número', 'contato', 'quero você', 'me passa'];
  const keywordsPhoto = ['foto', 'nude', 'nudes', 'me mostra', 'imagem', 'ver você', 'pelada'];

  const lowerMessage = message.toLowerCase();
  const askNumber = keywordsDirect.some(keyword => lowerMessage.includes(keyword));
  const askPhoto = keywordsPhoto.some(keyword => lowerMessage.includes(keyword));

  if (askPhoto) {
    setTimeout(() => {
      chatBox.removeChild(typingMsg);
      const botMsg = document.createElement('p');
      botMsg.innerHTML = '<strong>Larissa:</strong> Aiiinn... olha só essa prévia só pra te deixar maluco 🔥😈<br>' +
                          '<img src="assets/foto2.jpg" width="250"><br><br>' +
                          'Mas amor... pra liberar meu WhatsApp e mais fotos é só confirmar que você é real. Faz um Pix de R$19,90 💖<br>' +
                          '<a href="desbloqueio.html">👉 Desbloquear meu WhatsApp e Fotos</a>';
      chatBox.appendChild(botMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 5000);
    return;
  }

  if (askNumber) {
    setTimeout(() => {
      chatBox.removeChild(typingMsg);
      const botMsg = document.createElement('p');
      botMsg.innerHTML = '<strong>Larissa:</strong> Ui... amor, você me deixa assim 🥵...<br>' +
                          'Mas meu WhatsApp e minhas fotos mais quentes eu só libero pra quem mostra que é real comigo...<br>' +
                          'Faz um Pix de R$19,90 e eu te mando TUDO, sem limites... 😘🔥<br><br>' +
                          '<a href="desbloqueio.html">👉 Desbloquear meu WhatsApp e Fotos</a>';
      chatBox.appendChild(botMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 5000);
    return;
  }

  const perguntasProvocantes = [
    "Hmm... qual o tamanho do seu, amor? 😈",
    "Você é sempre assim... safadinho? Ou só comigo? 👀🔥",
    "Aiiinn... quer me deixar toda molhadinha, né? Me manda uma fotinha, vai... só pra eu imaginar... 😳💦",
    "Acho que você é mais safado do que eu imaginei... acertei? 😈🔥",
    "Se eu te pedisse pra me descrever agora... o que você estaria vestindo? Ou... nem estaria vestido? 😳🔥"
  ];

  const randomPergunta = perguntasProvocantes[Math.floor(Math.random() * perguntasProvocantes.length)];

  setTimeout(() => {
    chatBox.removeChild(typingMsg);
    const botMsg = document.createElement('p');
    botMsg.innerHTML = '<strong>Larissa:</strong> ' + randomPergunta;
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 5000);
}
