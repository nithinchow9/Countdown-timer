function updateTimer() {
  const targetDate = new Date("2024-12-31T23:59:59");
  const currentDate = new Date();

  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0");
}

function startCountDown() {
  updateTimer();
  const timerInterval = setInterval(function () {
    updateTimer();

    if (
      document.getElementById("days").innerText === "00" &&
      document.getElementById("hours").innerText === "00" &&
      document.getElementById("minutes").innerText === "00" &&
      document.getElementById("seconds").innerText === "00"
    ) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(timerInterval); // Stop the countdown
}

document
  .getElementById("startButton")
  .addEventListener("click", startCountDown);
