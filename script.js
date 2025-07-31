document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  const audio = document.getElementById('bg-music');
  const terminal = document.getElementById('terminal');

  overlay.addEventListener('click', () => {
    audio.volume = 0.2;
    audio.play();
    overlay.classList.add('hidden');

    setTimeout(() => {
      overlay.style.display = 'none';
      terminal.style.display = 'block';

      setTimeout(() => {
        terminal.classList.add('visible');
      }, 50);
    }, 2000);
  });
});



