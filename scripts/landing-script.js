const playRandomBtn = document.getElementById("playRandom");

playRandomBtn.addEventListener("click", () => {
    const paths = ["hangman", "ttt", "rps", "word-scramble", "wordle", "memory-game"];
    let choice = Math.floor(Math.random() * paths.length);
    const randomPageURL = paths[choice];
    window.location.href = `http://127.0.0.1:5500/pages/${randomPageURL}.html`;
});

