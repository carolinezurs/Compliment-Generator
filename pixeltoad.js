
let idleTimer;
let isFloating = false;

function pixeltoadSpeak(message) {
  const bubble = document.getElementById('speech-bubble');
  if (!bubble) return;


  bubble.style.display = 'block';
  bubble.textContent = '';

  try {
    const audio = new Audio('ribbit.mp3');
    audio.play().catch(() => {});
  } catch (e) {}

  let i = 0;
  const speed = 30;

  function typeWriter() {
    if (i < message.length) {
      bubble.textContent += message.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        bubble.style.display = 'none';
      }, 3000);
    }
  }

  typeWriter();
}

function startFloating() {
  const frog = document.getElementById('pixeltoad');
  if (frog && !isFloating) {
    isFloating = true;
    frog.style.animation = 'floatAround 12s infinite linear';
  }
}

function stopFloating() {
  const frog = document.getElementById('pixeltoad');
  if (frog && isFloating) {
    isFloating = false;
    frog.style.animation = 'bounceIdle 2.5s ease-in-out infinite';
  }
}

function resetIdleTimer() {
  clearTimeout(idleTimer);
  stopFloating();

  idleTimer = setTimeout(() => {
    pixeltoadSpeak("brb, going on an adventure 🐸✨");
    startFloating();
  }, 10000); 
}

window.addEventListener("load", () => {
  const frog = document.getElementById('pixeltoad');
  const bubble = document.getElementById('speech-bubble');

  if (frog && bubble) {
    resetIdleTimer();
    pixeltoadSpeak("hi bestie... click the button and let's go!");
    
    ['mousemove', 'keydown', 'scroll'].forEach(event => {
      window.addEventListener(event, resetIdleTimer);
    });
  }
});
const frogElement = document.getElementById('pixeltoad');

if (frogElement) {
  frogElement.addEventListener('click', () => {
    frogElement.style.transform = 'scale(1.4)';
    pixeltoadSpeak("made with 💖 by the cutest devs ever @caroline, @venus, @tina, @elisa and @nyca");
    
    setTimeout(() => {
      frogElement.style.transform = 'scale(1)';
    }, 3000);
  });
}
