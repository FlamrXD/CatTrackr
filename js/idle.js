let idleTimer;
const idleTime = 30000; // 10 seconds
const overlay = document.getElementById("idle-time-overlay");
const timeEl = overlay.querySelector(".time");
const dateEl = overlay.querySelector(".date");

function showTimeOverlay() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  timeEl.textContent = timeString;
  dateEl.textContent = dateString;
  overlay.style.display = "flex";
  overlay.style.opacity = "1";
}

function hideTimeOverlay() {
  overlay.style.display = "none";
}

function resetIdleTimer() {
  clearTimeout(idleTimer);
  hideTimeOverlay();
  idleTimer = setTimeout(showTimeOverlay, idleTime);
}

// Reset timer on activity (supports touch)
["mousemove", "keydown", "scroll", "touchstart", "touchmove"].forEach(event => {
  document.addEventListener(event, resetIdleTimer, { passive: true });
});

resetIdleTimer();