function toggleAnimation(button) {
  // Adiciona ou remove a classe 'clicked' no botão
  button.classList.toggle('clicked');

  // Obtém a referência ao body, ao header e à imagem da logo
  const body = document.body;
  const header = document.querySelector('header');
  const logoImage = document.querySelector('.image');
  const buttons = document.querySelectorAll('button');
  const spans = document.querySelectorAll('span');
  const titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const githubIcon = document.querySelector('.bi-github');
  const instagramIcon = document.querySelector('.bi-instagram');
  const otherIcons = document.querySelectorAll('i:not(.bi-github):not(.bi-instagram)');
  const tituloParagraphs = document.querySelectorAll('p');

  buttons.forEach(btn => {
    btn.style.backgroundColor = button.classList.contains('clicked') ? '#800000' : '#00FF08';
  });

  // Altera a cor dos spans para vinho tinto e dos títulos para preto
  spans.forEach(span => {
    span.style.color = button.classList.contains('clicked') ? '#800000' : '#00FF08';
  });

  // Altera a cor dos títulos
  titles.forEach(title => {
    title.style.color = button.classList.contains('clicked') ? '#000000' : '#ffffff';
  });

  // Altera a cor do ícone do GitHub
  githubIcon.style.color = button.classList.contains('clicked') ? '#ffffff' : '#000000';

  // Altera a cor do ícone do Instagram
  instagramIcon.style.color = button.classList.contains('clicked') ? '#ffffff' : '#000000';

  // Altera a cor dos outros ícones
  otherIcons.forEach(icon => {
    icon.style.color = button.classList.contains('clicked') ? '#800000' : '#00FF08';
  });

  // Altera a cor dos parágrafos com a classe 'titulo'
  tituloParagraphs.forEach(paragraph => {
    paragraph.style.color = button.classList.contains('clicked') ? '#000000' : '#ffffff';
  });

  // Verifica se a classe 'clicked' está presente no botão
  if (button.classList.contains('clicked')) {
    // Se clicado, muda o tema para branco e atualiza a imagem da logo
    body.style.backgroundColor = '#ffffff'; // Branco
    header.style.backgroundColor = '#f2f2f2'; // Cinza claro
    logoImage.style.backgroundImage = 'url(images/logograndeBRA.png)'; // Nova imagem da logo
  } else {
    // Se não clicado, retorna ao tema original e à imagem original da logo
    body.style.backgroundColor = '#000000'; // Preto
    header.style.backgroundColor = '#080707'; // Cor original do cabeçalho
    logoImage.style.backgroundImage = 'url(images/logogrande.png)'; // Imagem original da logo
  }
}
