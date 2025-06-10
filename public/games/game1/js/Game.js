class Game {
  constructor() {
    this.score = 0;
    this.timeLeft = 90;
    this.currentLevel = 1;
    this.maxLevels = 5;
    this.isGameOver = false;
    this.draggedElement = null;

    this.sounds = {
      correct: new Audio('assets/sounds/correct.mp3'),
      wrong: new Audio('assets/sounds/wrong.mp3'),
      victory: new Audio('assets/sounds/victory.mp3'),
    };

    this.scoreElement = document.getElementById('score');
    this.timerElement = document.getElementById('timer');
    this.animalsContainer = document.getElementById('animals-container');
    this.dropZonesContainer = document.getElementById('drop-zones');
    this.gameOverModal = document.getElementById('game-over');
    this.finalScoreElement = document.getElementById('final-score');
    this.restartButton = document.getElementById('restart-button');

    this.initEvents();
  }

  initEvents() {
    this.restartButton.addEventListener('click', () => this.startGame());
  }

  startGame() {
    this.score = 0;
    this.timeLeft = 90;
    this.currentLevel = 1;
    this.isGameOver = false;
    this.updateScore();
    this.updateTimer();
    this.gameOverModal.classList.add('hidden');
    this.startTimer();
    this.loadLevel();
  }

  startTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.updateTimer();
      if (this.timeLeft <= 0) this.endGame();
    }, 1000);
  }

  updateTimer() {
    this.timerElement.textContent = this.timeLeft;
  }

  updateScore() {
    this.scoreElement.textContent = this.score;
    this.finalScoreElement.textContent = this.score;
  }

  loadLevel() {
    this.animalsContainer.innerHTML = '';
    this.dropZonesContainer.innerHTML = '';

    const animals = this.generateAnimals();
    const shuffled = this.shuffleArray([...animals]);

    animals.forEach((_, i) => {
      const dropZone = document.createElement('div');
      dropZone.className = 'drop-zone';
      dropZone.dataset.position = i;
      dropZone.innerHTML = `<div class="position-indicator">${
        i === 0 ? 'Plus petit' : i === 4 ? 'Plus grand' : ''
      }</div>`;
      this.addDropZoneListeners(dropZone);
      this.dropZonesContainer.appendChild(dropZone);
    });

    shuffled.forEach((animal) => {
      const el = document.createElement('div');
      el.className = 'animal';
      el.draggable = true;
      el.dataset.size = animal.size;
      el.innerHTML = `<img src="${animal.image}" alt="Animal" style="height: ${animal.size}px;" draggable="false" />`;
      this.addDragListeners(el);
      this.animalsContainer.appendChild(el);
    });
  }

  generateAnimals() {
    return Array.from({ length: 5 }, (_, i) => ({
      size: 50 + i * 20,
      image: 'assets/images/zebra.png',
      position: i,
    }));
  }

  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  addDragListeners(el) {
    if ('ontouchstart' in window) {
      el.addEventListener('touchstart', (e) => this.handleTouchStart(e));
      el.addEventListener('touchmove', (e) => this.handleTouchMove(e));
      el.addEventListener('touchend', (e) => this.handleTouchEnd(e));
    } else {
      el.addEventListener('dragstart', (e) => this.handleDragStart(e));
      el.addEventListener('dragend', (e) => this.handleDragEnd(e));
    }
  }

  handleTouchStart(e) {
    this.draggedElement = e.target.closest('.animal');
    this.draggedElement.classList.add('dragging');
  }

  handleTouchMove(e) {
    if (!this.draggedElement) return;
    const t = e.touches[0];
    Object.assign(this.draggedElement.style, {
      position: 'absolute',
      zIndex: 1000,
      left: `${t.pageX - 50}px`,
      top: `${t.pageY - 50}px`,
    });
  }

  handleTouchEnd(e) {
    if (!this.draggedElement) return;
    const t = e.changedTouches[0];
    const dzs = document.querySelectorAll('.drop-zone');

    for (const dz of dzs) {
      const r = dz.getBoundingClientRect();
      if (
        t.pageX >= r.left &&
        t.pageX <= r.right &&
        t.pageY >= r.top &&
        t.pageY <= r.bottom
      ) {
        this.simulateDrop(this.draggedElement, dz);
        break;
      }
    }

    Object.assign(this.draggedElement.style, {});
    this.draggedElement.classList.remove('dragging');
    this.draggedElement = null;
  }

  addDropZoneListeners(el) {
    el.addEventListener('dragover', (e) => e.preventDefault());
    el.addEventListener('dragenter', (e) => {
      e.preventDefault();
      el.classList.add('hover');
    });
    el.addEventListener('dragleave', () => el.classList.remove('hover'));
    el.addEventListener('drop', (e) => this.handleDrop(e));
  }

  handleDragStart(e) {
    const size = e.target.dataset.size;
    e.target.classList.add('dragging');
    e.dataTransfer.setData('text/plain', size);
  }

  handleDragEnd(e) {
    e.target.classList.remove('dragging');
  }

  handleDrop(e) {
    e.preventDefault();
    const dz = e.target.closest('.drop-zone');
    if (!dz) return;
    dz.classList.remove('hover');
    const size = parseInt(e.dataTransfer.getData('text/plain'));
    this.processDrop(size, dz, document.querySelector('.dragging'));
  }

  simulateDrop(animalEl, dz) {
    const size = parseInt(animalEl.dataset.size);
    this.processDrop(size, dz, animalEl);
  }

  processDrop(size, dz, animalEl) {
    const pos = parseInt(dz.dataset.position);
    const expected = 50 + pos * 20;

    if (dz.querySelector('.animal')) {
      this.sounds.wrong.play();
      dz.classList.add('incorrect');
      setTimeout(() => dz.classList.remove('incorrect'), 1000);
      return;
    }

    if (size === expected) {
      this.sounds.correct.play();
      dz.classList.add('correct');
      dz.appendChild(animalEl);
      this.score += 4;
      this.updateScore();

      if (document.querySelectorAll('.drop-zone.correct').length === 5) {
        this.currentLevel++;
        if (this.currentLevel <= this.maxLevels) {
          setTimeout(() => this.loadLevel(), 1000);
        } else {
          this.endGame();
        }
      }
    } else {
      this.sounds.wrong.play();
      dz.classList.add('incorrect');
      setTimeout(() => dz.classList.remove('incorrect'), 1000);
    }
  }

  endGame() {
    clearInterval(this.timerInterval);
    this.isGameOver = true;
    this.sounds.victory.play();
    this.gameOverModal.classList.remove('hidden');
  }
}
