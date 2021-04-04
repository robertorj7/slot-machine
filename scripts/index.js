// valor disponível para aposta
const availableToBet = 500;

// itens para aposta
const items = [
  {
    id: 1,
    reward: 1000,
    name: 'Batman',
    src: './assets/img/batman.png',
  }, {
    id: 2,
    reward: 120,
    name: 'SpiderMan',
    src: './assets/img/spiderman.png',
  }, {
    id: 3,
    reward: -40,
    name: 'Deadpool',
    src: './assets/img/deadpool.png',
  }, {
    id: 4,
    reward: -5000,
    name: 'Bomb',
    src: './assets/img/bomb.png',
  },
];

const balance = document.getElementById('balance');
const buttonSpin = document.getElementById('spin-button');
const title = document.querySelector('.title');

balance.innerHTML = availableToBet;

buttonSpin.addEventListener('click', () => {
  let selectedHeroesIds = [];  
  const slotElements = document.querySelectorAll('.slot');

  slotElements.forEach((slot) => {
    slot.classList.add('rotate');
    setTimeout(() => {
      slot.classList.remove('rotate');
    }, 500);
  })
    
  for (i = 1; i < 4; i++) {
    const slot = document.getElementById(`slot-item-${i}`);
    const hero = findHero(randomNumber());

    slot.setAttribute('src', hero.src);
    slot.setAttribute('title', hero.name);
    slot.setAttribute('alt', hero.name);

    selectedHeroesIds.push(hero.id);
  }

  function randomNumber() {
    return Math.floor(Math.random() * 4 + 1);  
  }

  function findHero(id) {
    return items.find((item) => {
      return item.id === id;
    })
  }
  
  if (selectedHeroesIds[0] === selectedHeroesIds[1] &&
      selectedHeroesIds[1] === selectedHeroesIds[2]
  ) {
    const selectedId = selectedHeroesIds[0];

    const reward = items.find((item) => {
      return item.id === selectedId;
    }).reward;

    setTimeout(() => {
      balance.innerHTML = Number(balance.innerHTML) + reward;

      if (selectedId === 1 || selectedId === 2) {
        title.innerHTML = "You Win!";
        resetTitle()
      } else if (balance.innerHTML <= 0) {
          title.innerHTML = "GAME OVER!";
          buttonSpin.setAttribute('disabled', 'disabled');
        } else {
            title.innerHTML = "You Lost Money!";
            resetTitle()
          }
        }, 500)
  }
  
  function resetTitle() {
    setTimeout(() => {
      title.innerHTML = "HERO MACHINE";
    }, 1500)
  }
})