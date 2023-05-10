const luckMessages = [
    "A sorte sorri para aqueles que se esforçam para alcançar seus objetivos.",
    "Seja gentil e sempre terá boas coisas em sua vida.",
    "Seu futuro é brilhante. Continue trabalhando duro!",
    "Sua criatividade será recompensada em breve. Continue criando.",
    "Acredite em si mesmo e você alcançará grandes coisas.",
    "Grandes oportunidades estão a caminho. Esteja pronto para agarrá-las!",
    "A vida é um presente. Aproveite cada momento.",
    "As coisas boas virão se você perseverar.",
    "Seu sucesso é resultado de suas escolhas e esforços.",
    "A sorte está do seu lado. Seja corajoso e siga em frente!",
    "Siga seu coração e você encontrará o caminho para a felicidade.",
    "Você é mais forte do que pensa. Nunca desista!",
    "O tempo é precioso. Use-o sabiamente.",
    "As melhores coisas da vida vêm para aqueles que se esforçam.",
    "Mantenha uma mente aberta e novas oportunidades surgirão."
  ];
  
  let randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];
  const cookie = document.querySelector('#img');
  const firstScreen = document.querySelector('.home');
  const secondScreen = document.querySelector('.luck');
  const newCookie = document.querySelector('#openCookie');
  const cookieOpen = document.querySelector('.message p');
  
  const toggleScreen = () => {
    firstScreen.classList.toggle('hide')
    secondScreen.classList.toggle('hide')
  }
  
  const handleOpenCookie = () => {
    toggleScreen()
    cookieOpen.innerText = `${randomMessage}`
  }
  
  const handleOpenNewCookie = () => {
    toggleScreen()
    location.reload()
    randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];
  }
  
  const pressEnter = (e) => {
    if ( e.key == 'Enter' && firstScreen.classList.contains('hide') ) {
      handleOpenNewCookie()
    }
  }
  
  cookie.addEventListener('click', handleOpenCookie);
  newCookie.addEventListener('click', handleOpenNewCookie);
  document.addEventListener('keydown', pressEnter);