// Select btn
// Player
const btn_rock = document.querySelector('.btn-rock')
const btn_paper = document.querySelector('.btn-paper')
const btn_scissors = document.querySelector('.btn-scissors')
// New game btn
const btn_new_game = document.querySelector('.btn-new')
// Select img to change background to white
// Player
const player_rock_img = document.querySelector('.player-rock')
const player_paper_img = document.querySelector('.player-paper')
const player_scissors_img = document.querySelector('.player-scissors')
// AI
const ai_rock_img = document.querySelector('.ai-rock')
const ai_paper_img = document.querySelector('.ai-paper')
const ai_scissors_img = document.querySelector('.ai-scissors')

const winner = document.querySelector('.winner')
// Select score 
const player_score_label = document.querySelector('.player-score')
const ai_score_label = document.querySelector('.ai-score')

let Player_score = 0
let ai_score = 0;

function win() {
  if (Player_score === 10) {
    winner.classList.remove('hidden')
    winner.textContent = `Player1 is the winner`
    newGame();
  }
  else if (ai_score === 10) {
    winner.classList.remove('hidden')
    winner.textContent = `AI is the winner`
    newGame();
  }
}

function newGame() {
  // Delect select class from all ai-btns
  ai_rock_img.classList.remove('select');
  ai_paper_img.classList.remove('select');
  ai_scissors_img.classList.remove('select');
  // Delect select class from all player-btns
  player_rock_img.classList.remove('select');
  player_paper_img.classList.remove('select');
  player_scissors_img.classList.remove('select');
  // Reset Score.
  Player_score = 0,
    player_score_label.textContent = Player_score;
  ai_score = 0,
    ai_score_label.textContent = ai_score;
}

// Btns event listenter
btn_rock.addEventListener('click', function () {
  // hide winner label if found.
  winner.classList.add('hidden')
  // Delect select class from all ai-btns
  ai_rock_img.classList.remove('select');
  ai_paper_img.classList.remove('select');
  ai_scissors_img.classList.remove('select');
  // Delect select class from all player-btns
  player_rock_img.classList.remove('select');
  player_paper_img.classList.remove('select');
  player_scissors_img.classList.remove('select');
  // Add seleck class to img.
  player_rock_img.classList.add('select')
  // Let ai choose random, Determine who win, Change the score.
  const play = Math.trunc(Math.random() * 3) + 1
  console.log(play);
  switch (play) {
    case 1: ai_rock_img.classList.add('select');
      break;
    case 2: ai_paper_img.classList.add('select');
      ai_score++;
      ai_score_label.textContent = ai_score;
      break;
    case 3: ai_scissors_img.classList.add('select');
      Player_score++;
      player_score_label.textContent = Player_score;
      break;
  }
  // End of game is any score = 10 then play new game.
  win();
})
btn_paper.addEventListener('click', function () {
  // hide winner label if found.
  winner.classList.add('hidden')
  // Delect select class from all ai-btns
  ai_rock_img.classList.remove('select');
  ai_paper_img.classList.remove('select');
  ai_scissors_img.classList.remove('select');
  // Delect select class from all player-btns
  player_rock_img.classList.remove('select');
  player_paper_img.classList.remove('select');
  player_scissors_img.classList.remove('select');
  // Add seleck class to img.
  player_paper_img.classList.add('select')
  // Let ai choose random, Determine who win, Change the score.
  const play = Math.trunc(Math.random() * 3) + 1
  console.log(play);
  switch (play) {
    case 1: ai_rock_img.classList.add('select');
      Player_score++;
      ai_score_label.textContent = ai_score,
        player_score_label.textContent = Player_score;
      break;
    case 2: ai_paper_img.classList.add('select');
      break;
    case 3: ai_scissors_img.classList.add('select');
      ai_score++;
      ai_score_label.textContent = ai_score,
        player_score_label.textContent = Player_score;
      break;
  }
  // End of game is any score = 10 then play new game.
  win();
})
btn_scissors.addEventListener('click', function () {
  // hide winner label if found.
  winner.classList.add('hidden')
  // Delect select class from all ai-btns
  ai_rock_img.classList.remove('select');
  ai_paper_img.classList.remove('select');
  ai_scissors_img.classList.remove('select');
  // Delect select class from all player-btns
  player_rock_img.classList.remove('select');
  player_paper_img.classList.remove('select');
  player_scissors_img.classList.remove('select');
  // Add seleck class to img.
  player_scissors_img.classList.add('select')
  // Let ai choose random, Determine who win, Change the score.
  const play = Math.trunc(Math.random() * 3) + 1
  console.log(play);
  switch (play) {
    case 1: ai_rock_img.classList.add('select');
      ai_score++;
      ai_score_label.textContent = ai_score,
        player_score_label.textContent = Player_score;
      break;
    case 2: ai_paper_img.classList.add('select');
      Player_score++;
      ai_score_label.textContent = ai_score,
        player_score_label.textContent = Player_score;
      break;
    case 3: ai_scissors_img.classList.add('select');
      break;
  }
  // End of game is any score = 10 then play new game.
  win();
})
btn_new_game.addEventListener('click', function () {
  newGame();
})


/**
 *   ai_rock_img.classList.remove('select');
  ai_paper_img.classList.remove('select');
  ai_scissors_img.classList.remove('select');
 */
