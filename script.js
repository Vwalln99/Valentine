var backgroundMusic = document.getElementById("backgroundMusic");

document.getElementById("startButton").addEventListener("click", function() {
    hideAllScreens();
    document.getElementById("nameScreen").classList.remove("hidden");
    document.getElementById("introvideo").classList.add("hidden");
  });
  
  document.getElementById("nameSubmit").addEventListener("click", function() {
    var playerName = document.getElementById("nameInput").value;
    hideAllScreens();
    document.getElementById("pokemonSelection").classList.remove("hidden");
    document.getElementById("pokemonSelection").getElementsByTagName("h2")[0].innerText = "Hello, " + playerName + "! Choose your Pokemon";
  });
  
  document.querySelectorAll(".pokeball").forEach(item => {
    item.addEventListener("click", function() {
      var randomNumber = Math.floor(Math.random() * 3) + 1;
      if (this.id === "pokeball" + randomNumber) {
        hideAllScreens();
        document.getElementById("resultScreen").classList.remove("hidden");
        document.getElementById("resultScreen").getElementsByTagName("img")[0].src = "pokemon.jpeg";
        document.getElementById("chosenPokemon").innerText = "Happy Valentinesday <3!";
        backgroundMusic.pause();
        playSuccessSound();
      } else {
        playErrorSound();
        alert("No Pokemon for you :( Choose again!");
        
      }
    });
  });
  
  function hideAllScreens() {
    document.getElementById("introvideo").classList.add("hidden");
    document.getElementById("startButton").classList.add("hidden");
    document.getElementById("nameScreen").classList.add("hidden");
    document.getElementById("pokemonSelection").classList.add("hidden");
    document.getElementById("resultScreen").classList.add("hidden");
  }
  function playSuccessSound() {
    var successSound = new Audio("success_sound.mp3");
    successSound.play();
  }
  
  function playErrorSound() {
    var errorSound = new Audio("error_sound.mp3");
    errorSound.play();
  }