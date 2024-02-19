function toggleAnimation(button) {
  // Adiciona ou remove a classe 'clicked' no botão
  button.classList.toggle('clicked');

  // Obtém a referência ao body, ao header e à imagem da logo
  const body = document.body;
  const header = document.querySelector('header');
  const navi = document.querySelectorAll('li');
  const logoImage = document.querySelector('.image');
  const buttons = document.querySelectorAll('.btn11');
  const spans = document.querySelectorAll('span');
  const titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const logo = document.querySelector('.logo');
  const githubIcons = document.querySelectorAll('.btn-social button');
  const instagramIcons = document.querySelectorAll('.btn-social button');
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

  navi.forEach(item => {
    item.style.borderColor = button.classList.contains('clicked') ? '#800000' : '#00FF08';
  });

  // Altera a cor dos ícones do GitHub
  githubIcons.forEach(icon => {
    icon.style.color = button.classList.contains('clicked') ? '#ffffff' : '#000000';
    icon.style.backgroundColor = button.classList.contains('clicked') ? '#800000' : '#00FF08';
  });

  // Altera a cor dos ícones do Instagram
  instagramIcons.forEach(icon => {
    icon.style.color = button.classList.contains('clicked') ? '#ffffff' : '#000000';
    icon.style.backgroundColor = button.classList.contains('clicked') ? '#800000' : '#00FF08';
  });

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
    logoImage.style.backgroundImage = 'url(logograndeBRA.png)';
    logo.style.backgroundImage = 'url(logoVER.png)';

    // Nova imagem da logo
  } else {
    // Se não clicado, retorna ao tema original e à imagem original da logo
    body.style.backgroundColor = '#000000'; // Preto
    header.style.backgroundColor = '#080707'; // Cor original do cabeçalho
    logoImage.style.backgroundImage = 'url(logogrande.png)';
    logo.style.backgroundImage = 'url(logo.png)';
    // Imagem original da logo
  }
}


let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
