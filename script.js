const countdown = document.getElementById('countdown');
const birthdayMessage = document.getElementById('birthday-message');
const birthdayDate = new Date("2024-10-08T00:00:00").getTime();
let header1 = document.querySelector('.header-1');

const audio = document.querySelector('.birthdayAudio');
audio.currentTime = 33; // Set audio to start at 34 seconds but do not play yet

const updateCountdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = birthdayDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  if (timeLeft < 0) {
    clearInterval(updateCountdown);
    countdown.style.display = "none";
    birthdayMessage.classList.remove('hidden');
    header1.textContent = "Silahkan klik api lilinnya!";
    activateFlameClick(); // Activate flame click event
  }
}, 1000);

function activateFlameClick() {
  const flame = document.querySelector('.flame');
  
  flame.addEventListener('click', () => {
    header1.textContent = "Happy 21th Birthday!";
    
    // Hide the flame background (simulate flame blown out)
    flame.style.backgroundColor = 'transparent';
    
    // Play audio when flame is clicked
    audio.muted = false; // Unmute the audio
    audio.play().then(() => {
      console.log("Audio is now playing from second 34!");
    }).catch(error => {
      console.error("Error playing audio:", error);
    });

    showBirthdayMessage(); // Show the birthday message
  });
}

function showBirthdayMessage() {
    const message = "🎉 Selamat ulang tahun sayang! Semoga di umur kamu yang ke 21 ini dipenuhi dengan kebahagiaan, cinta, dan tawa. Kamu adalah orang yang luar biasa, dan aku berharap semua impianmu menjadi kenyataan di tahun yang baru ini! Love u baby <3 :) 🎂";

    const words = message.split(" ");
    const birthdayMessageContainer = document.getElementById("birthday-message");

    // Clear existing content
    birthdayMessageContainer.innerHTML = ""; // Clear previous content

    // Append the cake to the birthday message container
    const cakeHTML = `
        <div class="cake">
            <div class="plate"></div>
            <div class="layer layer-bottom"></div>
            <div class="layer layer-middle"></div>
            <div class="layer layer-top"></div>
            <div class="icing"></div>
            <div class="drip drip1"></div>
            <div class="drip drip2"></div>
            <div class="drip drip3"></div>
            <div class="candle">
                <div class="flame" style="background:none;"></div>
            </div>
        </div>
    `;
    birthdayMessageContainer.innerHTML = cakeHTML; // Add cake HTML

    // Append message words
    words.forEach((word, index) => {
        const span = document.createElement("span");
        span.classList.add("happy-birthday");
        span.textContent = word;

        // Set a delay for each word to appear
        setTimeout(() => {
            span.style.animationDelay = `${index * 0.5}s`; // Delay based on word index
            birthdayMessageContainer.appendChild(span);
        }, index * 500); // Overall delay for each word
    });
}
